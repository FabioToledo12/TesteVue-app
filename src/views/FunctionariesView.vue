<script setup>
import { useRoute } from "vue-router";
import AddFunc from "../components/AddFunc/AddFunc.vue";
import EditFunc from "../components/EditFunc/EditFunc.vue";
import RemoveFunc from "../components/RemoveFunc/RemoveFunc.vue";

const route = useRoute();
const acao = route.params.acao;
</script>

<template>
  <div>
    <div v-if="acao === 'cadastrar'">
      <AddFunc />
    </div>
    <div v-else-if="acao === 'editar'">
      <EditFunc />
    </div>
    <div v-else-if="acao === 'excluir'">
      <RemoveFunc />
    </div>
  </div>
</template>

<style scoped>
div {
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
}
</style>
