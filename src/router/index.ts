import { createRouter, createWebHistory } from "vue-router";

import Functionaries from "../views/FunctionariesView.vue";
import Home from "../views/HomeView.vue";

const routes = [
	// Define a Home na rota "/
	{ path: "/", component: Home },
	{ path: "/:acao/:id?", component: Functionaries },
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
