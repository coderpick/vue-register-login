<script setup>

</script>

<template>
    <nav class="bg-gray-800">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <div class="flex items-center">
                <router-link to="/" class="text-2xl font-bold text-white">Vue3 Authentication</router-link>
            </div>
            <div class="">
                <ul class="font-medium flex flex-col p-4 md:p-0 mt-4  md:flex-row md:space-x-8 md:mt-0 md:border-0">               
                    <!-- <li><a href="" class="block py-2 pl-3 pr-4 text-white font-medium text-xl" aria-current="page">Dashboard</a></li>
                    <li><a href="" class="block py-2 pl-3 pr-4 text-white font-medium text-xl">Logout</a></li> -->
                    <li><router-link to="/login" class="block py-2 pl-3 pr-4 text-white hover:text-yellow-500 font-medium text-xl">Login</router-link></li>
                    <li><router-link to="/register" class="block py-2 pl-3 pr-4 text-white hover:text-yellow-500 font-medium text-xl">Register</router-link></li>
                </ul>
            </div>
        </div>
    </nav>
</template>

