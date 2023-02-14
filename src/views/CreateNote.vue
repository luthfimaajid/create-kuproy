<script setup>
import axios from "axios";
import { ref } from "vue";
import { useRouter } from "vue-router";

const title = ref("");
const location = ref("");
const description = ref("");

const router = useRouter();

const createNote = async () => {
	if (title.value == "" || location.value == "" || description.value == "") {
		alert("Please fill all the fields");
		return;
	}
	const response = await axios.post("http://localhost:8080/api/note", {
		title: title.value,
		location: location.value,
		description: description.value,
	});
	router.replace({path : "/notes"});
};

</script>

<template>
	<h1>Create Note</h1>
	<div class="container d-flex justify-content-center align-items-center">
		<div class="row g-3">
			<div class="col-md-6">
				<label for="title" class="form-label">Title</label>
				<input type="text" class="form-control" id="title" v-model="title" placeholder="Enter Title" />
			</div>
			<div class="col-md-6">
				<label for="Location" class="form-label">Location</label>
				<input type="text" class="form-control" id="location" v-model="location" placeholder="Enter location" />
			</div>
			<div class="col-12">
				<label for="description">Description</label>
				<textarea class="form-control" id="description" v-model="description" placeholder="Enter bio"></textarea>
			</div>
			<div class="col-12">
				<button type="submit" class="btn btn-primary" @click="createNote">Create</button>
			</div>
		</div>
	</div>
</template>
