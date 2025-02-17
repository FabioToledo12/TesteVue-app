<script setup>
import { computed, onMounted, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import api from "../../services/api";

const route = useRoute();
const router = useRouter();

const form = ref({
    id: null,
    cpf: "",
    nome: "",
    email: "",
    camiseta: "",
    calcado: null,
});

const tamanhosCamiseta = ["PP", "P", "M", "G", "GG", "XG"];

const validCpf = computed(() => /^\d{3}\.\d{3}\.\d{3}-\d{2}$/.test(form.value.cpf));
const validEmail = computed(() => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.value.email));

const formValido = computed(() => {
    return validCpf.value && form.value.nome && validEmail.value && form.value.camiseta && form.value.calcado >= 34 && form.value.calcado <= 48;
});


const fetchFunctionary = async () => {
    const id = route.params.id;
    if (id) {
        try {
            const response = await api.get(`/${id}`);
            const data = response.data;
            form.value = {
                id: data.id,
                cpf: data.cpf,
                nome: data.name,
                email: data.email,
                camiseta: data.shirtSize,
                calcado: data.shoeSize
            };
        } catch (error) {
            console.error("Error fetching employee data:", error);
        }
    }

    return form.value
}

onMounted(() => {
    fetchFunctionary();
});

const submitForm = async () => {
    if (!form.value.id) {
        alert("Erro: ID do funcionário não encontrado.");
        return;
    }

    if (formValido.value) {
        try {
            await api.put(`/${form.value.id}`, {
                cpf: form.value.cpf,
                name: form.value.nome,
                email: form.value.email,
                shirtSize: form.value.camiseta,
                shoeSize: Number.parseInt(form.value.calcado),
            });

            alert("Funcionário atualizado com sucesso!");

            router.push('/');

        } catch (error) {
            console.error("Erro ao atualizar funcionário:", error.response?.data || error.message);
            alert("Erro ao atualizar funcionário.");
        }
    }
};
</script>

<template>
    <div class="container">
        <form @submit.prevent="submitForm">
            <div class="form-group">
                <div>
                    <label for="cpf">CPF:</label>
                    <span v-if="!validCpf" class="error">CPF inválido</span>
                </div>
                <input @input="formatarCPF" type="text" id="cpf" v-model="form.cpf" placeholder="Digite o CPF" />
            </div>

            <div class="form-group">
                <div>
                    <label for="nome">Nome:</label>
                    <span v-if="form.nome === ''" class="error">Nome obrigatório</span>
                </div>
                <input type="text" id="nome" v-model="form.nome" placeholder="Digite o nome" />
            </div>

            <div class="form-group">
                <div>
                    <label for="email">Email:</label>
                    <span v-if="!validEmail" class="error">Email inválido</span>
                </div>
                <input type="email" id="email" v-model="form.email" placeholder="Digite o email" />
            </div>

            <div class="form-group">
                <div>
                    <label for="camiseta">Tamanho de Camiseta:</label>
                    <span v-if="form.camiseta === ''" class="error">Selecione um tamanho</span>
                </div>
                <select id="camiseta" v-model="form.camiseta">
                    <option disabled value="">Selecione um tamanho</option>
                    <option v-for="tamanho in tamanhosCamiseta" :key="tamanho" :value="tamanho">
                        {{ tamanho }}
                    </option>
                </select>
            </div>

            <div class="form-group">
                <div>
                    <label for="calcado">Tamanho de Calçado:</label>

                    <span v-if="form.calcado < 34 || form.calcado > 48" class="error">
                        O tamanho deve ser entre 34 e 48
                    </span>
                </div>
                <input type="number" id="calcado" v-model="form.calcado" min="34" max="48" />
            </div>
            <button type="submit">Alterar</button>

        </form>
    </div>
</template>



<style scoped>
.container {
    display: flex;
    width: 800px;
    justify-content: center;
    align-items: center;
    background: #ffecec;
    border-radius: 8px;
    border: 2px solid #AE0329;
    box-shadow: 3px 3px 8px #AE0329;
}

form {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 20px;
    padding: 20px;
}

.form-group {
    div {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    label {
        font-weight: bold;
        margin-bottom: 5px;
        color: #AE0329;
    }

    input,
    select {
        width: 100%;
        padding: 8px;
        border: 1px solid #AE0329;
        border-radius: 4px;
    }
}

.error {
    color: red;
    font-size: 12px;
}

button {
    width: 100%;
    padding: 10px;
    border: none;
    border-radius: 5px;
    background: #E83649;
    color: white;
    font-size: 16px;
    cursor: pointer;
}

button:hover {
    opacity: 0.8;
    transition: 1s;
}

button:disabled {
    background: gray;
    cursor: not-allowed;
    opacity: 1;
}
</style>