<script setup>
import { onMounted, ref } from "vue";
import api from "../../services/api";

const funcionarios = ref([]);
const filteredFuncionarios = ref([]);
const searchTerm = ref("");

const fetchFunctinaries = async () => {
    try {
        const response = await api.get("/");
        funcionarios.value = response.data;
        filteredFuncionarios.value = response.data;
    } catch (error) {
        console.error("Erro ao buscar funcionários:", error);
    }
};

onMounted(fetchFunctinaries);

const deleteFunctionry = async (id) => {
    try {
        if (confirm("Tem certeza que deseja excluir este funcionário?")) {
            await api.delete(`/${id}`);
            alert("Usuário deletado com sucesso");
            await fetchFunctinaries();
        }
    } catch (error) {
        console.error("Erro ao excluir funcionário:", error);
        alert("Erro ao excluir funcionário");
    }
};

const filterFuncionarios = () => {
    const term = searchTerm.value.toLowerCase().trim();

    if (!term) {
        filteredFuncionarios.value = [...funcionarios.value];
    } else {
        filteredFuncionarios.value = funcionarios.value.filter(f =>
            String(f.cpf).toLowerCase().includes(term) ||
            String(f.name).toLowerCase().includes(term) ||
            String(f.email).toLowerCase().includes(term) ||
            String(f.shirtSize).toLowerCase().includes(term) ||
            String(f.shoeSize).toLowerCase().includes(term)
        );
    }
};
</script>

<template>
    <div class="container-search-add">

        <label for="search">
            <input type="text" id="search" v-model="searchTerm"
                placeholder="Pesquisar por cpf, nome, email, tamanho de camiseta ou tamanho de calçado">
        </label>

        <button @click="filterFuncionarios">
            <div>
                <img src="../../../src/assets/images/icon-search-transparent1.png" alt="botao de pesquisar">
                <text>Pesquisar</text>
            </div>
        </button>
        <button data-type="add" @click="$router.push('/cadastrar')">
            <div>
                <img src="../../../src/assets/images/icon-add-color.png" alt="adicionar funcionario">
                <text>Cadastrar</text>
            </div>
        </button>

    </div>

    <div>
        <table>
            <thead>
                <tr>
                    <th>CPF</th>
                    <th>Nome</th>
                    <th>Email</th>
                    <th>Tamanho de Camiseta</th>
                    <th>Tamanho de Calçado</th>
                    <th>Ações</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="f in filteredFuncionarios" :key="f.id">
                    <td>{{ f.cpf }}</td>
                    <td>{{ f.name }}</td>
                    <td>{{ f.email }}</td>
                    <td>{{ f.shirtSize }}</td>
                    <td>{{ f.shoeSize }}</td>
                    <td>
                        <div>
                            <button data-type="edit" @click="$router.push(`/editar/${f.id}`)">
                                <img src="../../../src/assets/images/icon-edit-color.png" alt="editar funcionário">
                                <text>Editar</text>
                            </button>
                            <button data-type="remove" @click="deleteFunctionry(f.id)">
                                <img src="../../../src/assets/images/icon-remove-color.png" alt="remover funcionário">
                                <text>Excluir</text>
                            </button>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>


<style scoped>
.container-search-add {
    display: flex;
    gap: 5px;
    width: 95%;
    margin-bottom: 25px;

    input {
        width: 850px;
        height: 40px;
        border-radius: 5px;
        border: none;
        padding-left: 5px;
        box-shadow: 1px 1px 4px #AE0329;
        font-size: 16px;
        padding: 15px;
    }

    button {
        background: transparent;
        border-radius: 30%;
        cursor: pointer;
        padding: 5px;
        border: 1px solid transparent;

        div {
            display: flex;
            flex-direction: column;
        }

        text {
            color: #E83649;
            font-weight: bold;
            font-size: 12px;
        }

        img {
            width: 30px;
            height: 30px;
        }
    }

    button:hover {
        opacity: 0.8;
        transition: 1s;
        background: linear-gradient(45deg,
                #efc1c1 0%,
                #f5aab2 30%,
                #c53352 60%);
        border: 1px solid #AE0329;

        text {
            color: #fff;
        }
    }
}


div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 95%;

    table {
        width: 100%;
        border-collapse: collapse;
        border: 2px solid #AE0329;
        background: #ffecec;

        th {
            border: 1px solid #AE0329;
            padding: 10px;
            background: #E83649;
            color: #fff;
            font-weight: bold;
        }

        td {
            border: 1px solid #AE0329;
            padding: 5px;
            text-align: center;

            div {
                display: flex;
                justify-content: space-evenly;
                gap: 10px;

                button {
                    display: flex;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    align-items: center;
                    padding: 7px;
                    gap: 3px;
                    border-radius: 10px;
                    border: 1px solid transparent;
                    cursor: pointer;

                    background: transparent;

                    text {
                        color: #E83649;
                        font-size: 11px;
                        font-weight: bold;
                    }

                    img {
                        width: 17px;
                        height: 17spx;
                    }
                }

                button[data-type="edit"]:hover {
                    background: #ffe345d1;
                    border: 1px solid #a89c15;
                    transition: 1s;
                }

                button[data-type="remove"]:hover {
                    background: #ff7a7ab0;
                    border-color: #E83649;
                    transition: 1s;
                }
            }
        }
    }
}
</style>