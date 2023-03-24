<script setup>
import Topbar from "./components/Topbar.vue";

</script>


<template>
	<topbar/>
	<nav class="flex items-center justify-between">
		<div class="flex items-center">
    	<img src="/assets/logo_kuproy.svg" alt="Logo" class="h-12  mr-10" />
				<ul class="flex">
					<li class="bg-custom-gray-3 text-custom-gray-2 hover:bg-custom-orange-1">
						<router-link class="font-quicksand font-medium  hover:text-white pr-4 pl-4 py-0.5 px-0.5 flex items-center " to="/">
							<img src="/assets/home_icon_active.svg"
							alt="home-icon"
							class="pr-3"/>
							Home 
						</router-link>
					</li>
					<li class="bg-custom-gray-3 text-custom-gray-2 hover:bg-custom-orange-1">
						<router-link class="font-quicksand font-medium  hover:text-white pr-4 pl-4 py-0.5 px-0.5 flex items-center " 
						:to="{name: 'Notes'}">
							<img src="/assets/posts_icon_active.svg"
							alt="home-icon"
							class="pr-3"/>
							Notes 
						</router-link>
					</li>
					<li class="bg-custom-gray-3 text-custom-gray-2 hover:bg-custom-orange-1">
						<router-link class="font-quicksand font-medium  hover:text-white pr-4 pl-4 py-0.5 px-0.5 flex items-center " 
						:to="{name: 'create-note'}">
							<img src="/assets/create_icon_active.svg"
							alt="home-icon"
							class="pr-3"/>
							Create 
						</router-link>
					</li>
				</ul>
				<!-- <form class="d-flex" role="search">
					<input
						class="form-control me-2"
						type="search"
						placeholder="Search"
						aria-label="Search"
					/>
					<button class="btn btn-outline-success" type="submit">Search</button>
				</form> -->
		</div>
	</nav>
	<router-view />
</template>

<style scoped></style>
