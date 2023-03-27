<script setup>
import axios from "axios";
import { ref } from "vue";
import { useRouter } from "vue-router";

const title = ref("");
const location = ref("");
const description = ref("");

const router = useRouter();

const id = router.currentRoute.value.params.id;

const getNote = async (id) => {
	const response = await axios.get("http://localhost:8080/api/note/" + id);
	title.value = response.data.title;
	location.value = response.data.location;
	description.value = response.data.description;
};
getNote(id);

const editNote = async (id) => {
	if (title.value == "" || location.value == "" || description.value == "") {
		alert("Please fill all the fields");
		return;
	}
	const response = await axios.patch("http://localhost:8080/api/note/" + id, {
		title: title.value,
		location: location.value,
		description: description.value,
	});
	router.replace({ path: "/notes" });
};
</script>

<template>
	<div class="container mt-5 max-w-w1">
		<div class="bg-white-100 rounded-3 shadow p-6 m-5">
			<div class="w-full">
				<div class="form-group ms-5 me-5 pt-5">
					<label for="title" class="font-quicksand fw-medium fs-5">Title</label>
					<input type="text"
						class="form-control font-montserrat fw-normal fs-6"
						id="title" v-model="title" maxLength="10" placeholder="Input title here..." required="true" />
					<p class="form-text text-muted ml-1 mt-0">Maximal Character : 10</p>
				</div>
				<div class="form-group ms-5 me-5 pt-2">
					<label for="Location" class="font-quicksand fw-medium fs-5">Location</label>
					<input type="text"
						class="form-control font-montserrat fw-normal fs-6"
						id="location" v-model="location" maxLength="25" placeholder="Bandung, Jawa Barat" required="true" />
					<p class="form-text text-muted ml-1 mt-0">Maximal Character : 25</p>
				</div>
				<div class="form-group ms-5 me-5 pt-2 pb-4">
					<label class="font-quicksand fw-medium fs-5" for="description">Description</label>
					<textarea
						class="form-control font-montserrat fw-normal fs-6"
						id="description" v-model="description" placeholder="Describe here..." maxLength="40" rows="4"
						required="true"></textarea>
					<p class="form-text font-montserrat fw-normal fs-6">Maximal Character : 40</p>
				</div>
				<div class="d-flex justify-content-end">
					<button type="submit"
						class="bg-success text-white rounded-pill d-flex align-items-center justify-content-center me-5 px-4 ml-auto mb-3"
						@click="editNote(id)">Update</button>
				</div>
			</div>
		</div>
	</div>
</template>
