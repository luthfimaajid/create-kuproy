import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import GeoArea from "../views/GeoArea.vue";

const routes = [
	{
		path: "/",
		name: "Home",
		component: Home,
	},
	{
		path: "/geoarea",
		name: "GeoArea",
		component: GeoArea,
	},
];

let router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
