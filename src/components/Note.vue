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
		<div class="row justify-content-center">
			<div class="col md-6" v-for="item in note" :key="item.id">
				<div class="card shadow border-0 mt-5">
					<div class="card-body">
						<h5 class="card-title font-quicksand fw-semibold text-xl">{{ item.title }}</h5>
						<h6 class="card-text font-montserrat fw-normal text-13">{{ item.location }}</h6>
						<p class="card-text font-montserrat fw-medium">
							{{ item.description }}
						</p>
            <div class="d-flex justify-content-center">
							<a href="#" class="btn btn-dangertext-white bg-danger rounded-pill d-flex align-items-center justify-content-center px-3" @click="deleteNote(item.id)">
                <img src="/assets/trash_icon.svg" alt="Delete_icon" class="icon me-2" />
								Delete
							</a>
							<router-link href="#" class="btn btn-success bg-success text-white rounded-pill d-flex align-items-center justify-content-center me-3 px-4"
								:to="{ name: 'edit-note', params: { id: item.id } }">
                  <img src="/assets/edit_icon.svg" alt="Edit_icon" class="icon me-2" />
								Edit
							</router-link>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
