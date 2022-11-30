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
	<div class="grid grid-cols-4 gap-4">
		<div class="flex justify-center" v-for="item in geosite" :key="item._id">
			<div class="block rounded-lg shadow-lg bg-white max-w-sm text-center">
				<div class="py-3 px-6 border-b border-gray-300">Featured</div>
				<div class="p-6">
					<h5 class="text-gray-900 text-xl font-medium mb-2">
						{{ item.name }}
					</h5>
					<p class="text-gray-700 text-base mb-4">
						{{ item.description }}
					</p>
					<button
						type="button"
						class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
					>
						Button
					</button>
				</div>
				<div class="py-3 px-6 border-t border-gray-300 text-gray-600">
					{{ item.location }}
				</div>
			</div>
		</div>
	</div>
</template>
