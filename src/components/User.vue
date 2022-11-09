<script setup>
import axios from "axios";
import { ref } from "vue";

const user = ref([]);
const getUser = async () => {
	const response = await axios.get("http://localhost:8080/user");
	user.value = response.data;
};
</script>

<template>
	<div v-if="user">
		<h1>{{ user }}</h1>
		<button @click="getUser">Get User</button>
	</div>
</template>
