<script setup>
import FormAdd from "../AddFunc/FormAdd.vue"
</script>

<template>
    <section>
        <div>
            <h1>Cadastro de Funcionario</h1>
            <FormAdd />
        </div>
    </section>
</template>

<style scoped>
section {
    display: flex;
    justify-content: center;
    align-items: center;

    div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 10px;
        width: 100vw;
        padding: 20px;

        h1 {
            color: #E83649;
            font-size: 35px;
            -webkit-text-stroke: .8px #AE0329;
            text-shadow: 3px 3px 3px #777777;
            margin-bottom: 30px;
        }
    }
}
</style>