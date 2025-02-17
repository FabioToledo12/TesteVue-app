<script>
import TableFunc from "./TableFunc.vue";

export default {
    components: {
        TableFunc,
    },
};
</script>

<template>
    <section>
        <div>
            <h1>Listagem de Funcionarios</h1>
            <div>
                <TableFunc />
            </div>
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

        div {
            display: flex;
            justify-content: center;
            align-items: center;
            background: rgba(255, 255, 255, 0.5);
            width: 90%;
            border-radius: 10px;

            button {
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 20px;
                padding: 10px;
                border-radius: 5px;
                border-color: #E83649;
                cursor: pointer;
                background: transparent;
                color: #292929;
                font-weight: bold;
                width: 96%;

                img {
                    width: 24px;
                    height: 24px;
                }
            }

            button[data-type="add"]:hover {
                background: #276528;
                color: #fff;
                border-color: #9fffa0;
                transition: 1s;
            }

            div {
                display: flex;
                flex-direction: row;
                justify-content: center;
                align-items: center;
                width: 100%;
                background: transparent;
            }
        }
    }
}
</style>