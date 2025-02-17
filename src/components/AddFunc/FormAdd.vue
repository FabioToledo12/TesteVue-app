<script setup>
import { ref } from "vue";
import api from "../../services/api";

import { useRouter } from "vue-router";
import { z } from "zod";

const router = useRouter();

const formSchema = z.object({
    cpf: z.string().regex(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/, "CPF inválido"),
    nome: z.string().min(1, "Nome obrigatório"),
    email: z.string().email("Email inválido"),
    camiseta: z.enum(["PP", "P", "M", "G", "GG", "XG"], {
        errorMap: () => ({ message: "Tamanho de camiseta inválido" }),
    }),
    calcado: z.number().min(34, "O tamanho deve ser no mínimo 34").max(48, "O tamanho deve ser no máximo 48"),
});

const errors = ref({
    cpf: null,
    nome: null,
    email: null,
    camiseta: null,
    calcado: null,
});


const form = ref({
    cpf: "",
    nome: "",
    email: "",
    camiseta: "",
    calcado: "",
});

const tamanhosCamiseta = ["PP", "P", "M", "G", "GG", "XG"];

const validateForm = () => {
    const result = formSchema.safeParse(form.value);
    if (!result.success) {
        errors.value = {
            cpf: null,
            nome: null,
            email: null,
            camiseta: null,
            calcado: null,
        };
        for (const err of result.error.errors) {
            errors.value[err.path[0]] = err.message;
        }
        return false;
    }
    return true;
};

const submitForm = async () => {
    if (!validateForm()) {
        return;
    }

    try {
        await api.post("/", {
            cpf: form.value.cpf,
            name: form.value.nome,
            email: form.value.email,
            shirtSize: form.value.camiseta,
            shoeSize: Number.parseInt(form.value.calcado)
        });
        alert("Funcionário cadastrado com sucesso!");

        form.value = {
            cpf: "",
            nome: "",
            email: "",
            camiseta: "",
            calcado: null,
        };

        errors.value = { cpf: null, nome: null, email: null, camiseta: null, calcado: null };
        router.push('/');

    } catch (error) {
        console.error("Erro ao cadastrar funcionário:", error.response?.data || error.message);
        alert("Erro ao cadastrar funcionário. Verifique os dados e tente novamente.");
    }
};
</script>

<template>
    <div class="container">
        <form @submit.prevent="submitForm">
            <div class="form-group">
                <div>
                    <label for="cpf">CPF:</label>
                    <span v-if="errors.cpf" class="error">{{ errors.cpf }}</span>
                </div>
                <input type="text" id="cpf" v-model="form.cpf" placeholder="Digite o CPF" />
            </div>

            <div class="form-group">
                <div>
                    <label for="nome">Nome:</label>
                    <span v-if="errors.nome" class="error">{{ errors.nome }}</span>
                </div>
                <input type="text" id="nome" v-model="form.nome" placeholder="Digite o nome" />
            </div>

            <div class="form-group">
                <div>
                    <label for="email">Email:</label>
                    <span v-if="errors.email" class="error">{{ errors.email }}</span>
                </div>
                <input type="email" id="email" v-model="form.email" placeholder="Digite o email" />
            </div>

            <div class="form-group">
                <div>
                    <label for="camiseta">Tamanho de Camiseta:</label>
                    <span v-if="errors.camiseta" class="error">{{ errors.camiseta }}</span>
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
                    <span v-if="errors.calcado" class="error">{{ errors.calcado }}</span>
                </div>
                <input type="number" id="calcado" v-model="form.calcado" min="34" max="48" />
            </div>
            <button type="submit">Cadastrar</button>
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