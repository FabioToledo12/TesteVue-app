<script setup>
import { computed, ref } from "vue";

// Estado inicial do formulário
const form = ref({
    cpf: "",
    nome: "",
    email: "",
});
// Simulação do envio do formulário
const submitForm = () => {
    alert("Funcionário Excluido com sucesso!");
    console.log(form.value);
};
</script>

<template>
    <div class="container">
        <form @submit.prevent="submitForm">
            <div class="form-group">
                <div>
                    <label for="cpf">CPF:</label>
                </div>
                <input disabled type="text" id="cpf" v-model="form.cpf" placeholder="Digite o CPF" />
            </div>

            <div class="form-group">
                <div>
                    <label for="nome">Nome:</label>
                </div>
                <input disabled type="text" id="nome" v-model="form.nome" placeholder="Digite o nome" />
            </div>

            <div class="form-group">
                <div>
                    <label for="email">Email:</label>
                </div>
                <input disabled="email" id="email" v-model="form.email" placeholder="Digite o email" />
            </div>
            <button type="submit">Excluir</button>
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
    /* background: rgba(255, 255, 255, 0.5); */
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
</style>