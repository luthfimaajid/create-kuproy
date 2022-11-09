<script setup>
import axios from "axios";
import { ref } from "vue";

const user = ref([]);
const addUser = async () => {
	const response = await axios.post("http://localhost:8080/user");
	user.value = response.data;
};
</script>

<template>
	<div>
		<button @click="addUser">Add User</button>
	</div>
</template>
