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
	<div class="md:container md:mx-auto">
			<div class="flex items-center justify-center" v-for="item in note" :key="item.id">
				<div class="flex justify-center items-center ">
					<div class="mr-6 ml-6 mt-10 p-6 bg-white rounded-lg shadow-md">
						<h2 class="max-h-56 text-xl font-quicksand mb-4 font-semibold">{{ item.title }}</h2>
						<p class="text-13 font-montserrat font-light">{{ item.location }}</p>
						<p class="font-montserrat font-regular text-black leading-relaxed w-96 break-words">
							{{ item.description }}
						</p>
						<ul class="flex items-center mt-6 justify-center">
							<li class="rounded-40 bg-custom-green-1 hover:drop-shadow-xl items-center w-28">
								<router-link href="#" class="font-quicksand font-medium text-white pr-4 pl-4 py-0.5 px-0.5 flex items-center "
								:to="{ name: 'edit-note', params: { id: item.id } }">
									<img src="/assets/edit_icon.svg" class="pr-3 w-7 h-7"/>
									Edit
								</router-link>

								
							</li>
							<li class="ml-6 rounded-40 bg-custom-red-1 hover:drop-shadow-xl items-center w-28">
								<a href="#" class="font-quicksand font-medium text-white pr-4 pl-4 py-0.5 px-0.5 flex items-center "
								 @click="deleteNote(item.id)">
									<img src="/assets/trash_icon.svg" class="pr-3 w-7 h-7"/>
									Delete
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
	</div>
</template>
