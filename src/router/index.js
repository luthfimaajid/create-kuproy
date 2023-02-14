import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Notes from "../views/Notes.vue";
import CreateNote from "../views/CreateNote.vue";
import EditNote from "../views/EditNote.vue";

const routes = [
	{
		path: "/",
		name: "Home",
		component: Home,
	},
	{
		path: "/notes",
		name: "Notes",
		component: Notes,
	},
	{
		path: "/create-note",
		name: "create-note",
		component: CreateNote,
	},
	{
		path: "/edit-note/:id",
		name: "edit-note",
		component: EditNote,
	}
];

let router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
