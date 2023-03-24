<script setup>

</script>

<template>
    <div class="mr-6 ml-6 mt-10 w-1/2 p-6 bg-white rounded-lg shadow-md">
        <h2 class="text-xl font-quicksand mb-4 font-semibold">Lorem Ipsum</h2>
        <p class="text-13 font-montserrat font-light ">Bandung, Jawa Barat</p>
        <p class="font-montserrat font-regular text-black leading-relaxed">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
        pharetra lacinia sem eu porttitor. Fusce sed dapibus nulla.
        </p>
        <ul class="flex items-center mt-6 justify-center">
          <li class="rounded-40 bg-custom-green-1 items-center w-28">   
            <a href="/update" class="font-quicksand font-medium text-white pr-4 pl-4 py-0.5 px-0.5 flex items-center "> 
            <img src="/assets/edit_icon.svg" alt="Edit_icon" class="pr-3 w-7 h-7" /> 
                Edit  
            </a>
          </li>
          <li class="ml-6 rounded-40 bg-custom-red-1 items-center w-28">   
            <a href="/posts" class="font-quicksand font-medium text-white pr-4 pl-4 py-0.5 px-0.5 flex items-center "> 
            <img src="/assets/trash_icon.svg" alt="Trash_icon" class="pr-3 w-7 h-7 " /> 
                Delete
            </a>
          </li>
        </ul>
    </div>

	
</template>

<style scoped>

</style>