<script setup>
import Topbar from "./components/Topbar.vue";

</script>

<template>
	<Topbar></Topbar>
	<nav class="navbar  navbar-expand-md m-0 p-0 d-flex justify-content-between">
		<a class="navbar-brand" href="/">
			<img src="/assets/logo_kuproy.svg" alt="Logo" class="" />
		</a>
		<ul class="navbar-nav d-flex align-items-center justify-content-center">
			<li class="nav-item d-flex rounded-pill py-1 px-3 bg-custom-gray-3 font-custom-gray-2">
				<router-link class="nav-link ms-1" to="/">
					<img src="/assets/home_icon_active.svg" alt="home-icon" class="" />
					Home
				</router-link>
			</li>
			<li class="nav-item ms-5 d-flex rounded-pill py-1 px-3 bg-custom-gray-3 font-custom-gray-2">
				<router-link class="nav-link ms-1" :to="{ name: 'Notes' }">
					<img src="/assets/posts_icon_active.svg" alt="home-icon" class="" />
					Notes
				</router-link>
			</li>
			<li class="nav-item ms-5 d-flex rounded-pill py-1 px-3 bg-custom-gray-3 font-custom-gray-2">
				<router-link class="nav-link ms-1"
					:to="{ name: 'create-note' }">
					<img src="/assets/create_icon_active.svg" alt="home-icon" class="" />
					Create
				</router-link>
			</li>
		</ul>
		<div className="d-flex align-items-center position-relative">
			<input type="text" placeholder="      Search..." className="form-control rounded-pill border-dark me-4"
				onMouseOver={handleMouseOverSearch} onMouseLeave={handleMouseLeaveSearch} />
			<div className="position-absolute top-100 start-10 ">
				<img src='/assets/warning_icon.svg' alt="warning_icon" className="pr-2" />
				This feature is not available now!
			</div>
			<img src='/assets/search_icon.svg' alt="Search_icon"
				className="position-absolute start-0 top-50 translate-middle-y ms-2" />
		</div>

	</nav>
	<router-view />
</template>

<style scoped></style>
