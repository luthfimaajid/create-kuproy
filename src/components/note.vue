<script setup>
import axios from "axios";
import { ref } from "vue";

// API consumtion from /api/note endpoint
const note = ref([]);
const getNote = async () => {
	const response = await axios.get("http://localhost:8080/api/note");
	note.value = response.data.map(data => {
		return {
			id: data._id || data.id,
			title: data.title,
			location: data.location,
			description: data.description
		}
	});
};
getNote();

const deleteNote = async (id) => {
	const response = await axios.delete(`http://localhost:8080/api/note/${id}`);
	getNote();
};

</script>

<template>
	<div class="container">
		<div class="row">
			<div class="col my-2 col-4" v-for="item in note" :key="item.id">
				<div class="card">
					<div class="card-body">
						<h5 class="card-title">{{ item.title }}</h5>
						<h6 class="card-subtitle mb-2 text-muted">{{ item.location }}</h6>
						<p class="card-text">
							{{ item.description }}
						</p>
						<a href="#" class="card-link text-danger" @click="deleteNote(item.id)">Delete</a>
						<router-link href="#" class="card-link text-green"
							:to="{ name: 'edit-note', params: { id: item.id } }">Edit</router-link>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
