import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Posts from "../views/Posts.vue";
import CreatePost from "../views/CreatePost.vue";
import UpdatePost from "../views/UpdatePost.vue";

const routes = [
	{
		path: "/",
		name: "Home",
		component: Home,
	},
	{
		path: "/posts",
		name: "Posts",
		component: Posts,
	},
	{
		path: "/create-post",
		name: "CreatePost",
		component: CreatePost,
	},
	{
		path: "/update-post/:id",
		name: "UpdatePost",
		component: UpdatePost,
	},
];

let router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
