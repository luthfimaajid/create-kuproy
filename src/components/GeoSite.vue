<script setup>
import axios from "axios";
import { ref } from "vue";

const geosite = ref([
	{
		_id: "GS001",
		site_category: "Geologi",
		name: "Ciemas",
		description:
			"Ciemas adalah sebuah situs geologi yang terletak di kota Bandung",
		location: "Kec. Ciemas, Kabupaten Sukabumi, Jawa Barat",
		created_at: Date.now() + 1,
		updated_at: Date.now() + 1,
	},
	{
		_id: "GS002",
		site_category: "Geologi",
		name: "Ciemas",
		description:
			"Ciemas adalah sebuah situs geologi yang terletak di kota Bandung",
		location: "Kec. Ciemas, Kabupaten Sukabumi, Jawa Barat",
		created_at: Date.now() + 2,
		updated_at: Date.now() + 1,
	},
	{
		_id: "GS002",
		site_category: "Geologi",
		name: "Ciemas",
		description:
			"Ciemas adalah sebuah situs geologi yang terletak di kota Bandung",
		location: "Kec. Ciemas, Kabupaten Sukabumi, Jawa Barat",
		created_at: Date.now() + 2,
		updated_at: Date.now() + 1,
	},

	{
		_id: "GS002",
		site_category: "Geologi",
		name: "Ciemas",
		description:
			"Ciemas adalah sebuah situs geologi yang terletak di kota Bandung",
		location: "Kec. Ciemas, Kabupaten Sukabumi, Jawa Barat",
		created_at: Date.now() + 2,
		updated_at: Date.now() + 1,
	},
]);
</script>

<template>
	<div class="d-grid container">
		<div class="row row-cols-4" v-for="item in geosite" :key="item._id">
			<div class="card" style="width: 18rem">
				<div class="card-body">
					<h5 class="card-title">{{ item.name }}</h5>
					<h6 class="card-subtitle mb-2 text-muted">{{ item.location }}</h6>
					<p class="card-text">
						{{ item.description }}
					</p>
					<a href="#" class="card-link">Card link</a>
					<a href="#" class="card-link">Another link</a>
				</div>
			</div>
		</div>
	</div>
</template>
