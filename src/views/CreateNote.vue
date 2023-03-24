<script setup>
import axios from "axios";
import { ref } from "vue";
import { useRouter } from "vue-router";
import Topbar from "../components/Topbar.vue";

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
	router.replace({ path: "/notes" });
};

</script>

<template>
	<div class="flex items-center justify-center mt-10">
		<div class="bg-white rounded-lg shadow-md p-6 max-w-w1 w-full">
			<div class="w-full">
				<div class="mb-6">
					<label for="title" class="font-quicksand block font-semibold text-black mb-2">Title</label>
					<input type="text"
						class="rounded-lg text-sm font-montserrat block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 mb-1 leading-tight focus:outline-none"
						id="title" v-model="title" maxLength="10" placeholder="Input title here..." required="true" />
					<p className="text-gray-500 text-sm ml-1 mt-0">Maximal Character : 10</p>
				</div>
				<div class="mb-6">
					<label for="Location" class="font-quicksand block font-semibold text-black mb-2">Location</label>
					<input type="text"
						class="rounded-lg text-sm font-montserrat block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 mb-1 leading-tight focus:outline-none"
						id="location" v-model="location" maxLength="25" placeholder="Bandung, Jawa Barat" required="true" />
					<p className="text-gray-500 text-sm ml-1 mt-0">Maximal Character : 25</p>
				</div>
				<div class="mb-6">
					<label class="font-quicksand block font-semibold text-black mb-2" for="description">Description</label>
					<textarea
						class="rounded-lg text-sm font-montserrat block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 mb-1 leading-tight focus:outline-none"
						id="description" v-model="description" placeholder="Describe here..." maxLength="40" rows="4"
						required="true"></textarea>
					<p class="text-gray-500 text-sm ml-1 mt-0">Maximal Character : 40</p>
				</div>
				<div class="flex items-center justify-end">
					<button type="submit"
						class="font-quicksand bg-custom-green-1 hover:drop-shadow-xl text-white font-bold py-1 px-7 rounded-40 focus:outline-none focus:shadow-outline"
						@click="createNote">Create</button>
				</div>
			</div>
		</div>
	</div>
</template>
