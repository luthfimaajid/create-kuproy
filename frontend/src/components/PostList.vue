<script setup>
import axios from "axios";
import { ref } from "vue";

const posts = ref([]);

const getPost = async () => {
	const response = await axios.get("http://localhost:3000/api/post/");
	posts.value = response.data;
};

getPost();

const deletePost = async (id) => {
	await axios.delete(`http://localhost:3000/api/post/${id}`);
	getPost();
};
</script>

<template>
	<div
		v-if="posts.length === 0"
		class="alert alert-info container no-post text-center"
		role="alert"
	>
		No Post Found
		<router-link
			:to="{ name: 'CreatePost' }"
			class="btn btn-primary d-flex justify-content-center"
		>
			Create Post</router-link
		>
	</div>
	<div class="container">
		<div class="row">
			<div class="col my-2 col-4" v-for="item in posts" :key="item._id">
				<div class="card">
					<div class="card-body">
						<h5 class="card-title">{{ item.title }}</h5>
						<h6 class="card-subtitle mb-2 text-muted">{{ item.location }}</h6>
						<p class="card-text">
							{{ item.description }}
						</p>
						<a class="card-link text-danger" @click="deletePost(item._id)">
							Delete</a
						>
						<router-link
							class="card-link text-warning"
							:to="{ name: 'UpdatePost', params: { id: item._id } }"
						>
							Edit</router-link
						>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped>
.no-post {
	width: 20%;
}
</style>
