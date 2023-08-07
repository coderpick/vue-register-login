<script setup>
const logo = "https://upload.wikimedia.org/wikipedia/commons/f/f1/Vue.png";
</script>

<template>
 
    <div class="min-h-screen  flex flex-col justify-center sm:py-12">
        <div class="p-10 xs:p-0 mx-auto w-full md:w-10/12 lg:w-2/6">
            <div class="flex justify-center mb-5 ">
                <img :src="logo" class="w-1/6" alt="">
            </div>
            <div class="w-full rounded-md shadow-md mx-auto bg-white">

                <form>
                    <div class="py-10 px-7">                       
                        <div class="mb-6">
                            <label for="email" class="block mb-2 text-sm font-medium text-gray-900">Email </label>
                            <input type="email" id="email"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-yellow-500 focus:border-yellow-500 block w-full p-2.5"
                                placeholder="" required>
                        </div>
                        <div class="mb-6">
                            <label for="password" class="block mb-2 text-sm font-medium text-gray-900">Password</label>
                            <input type="password" id="password"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-yellow-500 focus:border-yellow-500 block w-full p-2.5"
                                placeholder="" required>
                        </div>                       
                        <button type="submit"
                            class="text-white bg-indigo-600 hover:bg-indigo-700 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-lg w-full px-5 py-2.5 text-center ">Login</button>
                    </div>
                </form>

            </div>
        </div>
    </div>
</template>
