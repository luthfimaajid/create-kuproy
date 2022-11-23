<script setup>
import axios from "axios";
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const title = ref("");
const location = ref("");
const description = ref("");
const error = ref(undefined);
const createPost = async () => {
	try {
		await axios.post("http://localhost:3000/api/post/", {
			title: title.value,
			location: location.value,
			description: description.value,
		});
		router.push({ name: "Posts" });
	} catch (err) {
		error.value = err;
	}
};
</script>

<template>
	<div v-if="error" class="alert alert-danger" role="alert">
		{{ error }}
	</div>

	<div class="mb-3">
		<label for="title" class="form-label">Title</label>
		<input
			type="text"
			id="title"
			class="form-control"
			v-model="title"
			placeholder="Title"
		/>

		<label for="location" class="form-label">Location</label>
		<input
			type="text"
			id="location"
			class="form-control"
			v-model="location"
			placeholder="Location"
		/>
		<label for="description" class="form-label">Description</label>
		<textarea
			class="form-control"
			id="description"
			v-model="description"
			rows="3"
		></textarea>

		<button type="submit" class="btn btn-primary" @click="createPost">
			Create
		</button>
	</div>
</template>
