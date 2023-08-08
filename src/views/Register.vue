<script setup>
    import { reactive } from 'vue';
    const logo = "https://upload.wikimedia.org/wikipedia/commons/f/f1/Vue.png";

    const data  = reactive({
        name: '',
        email: '',
        email: '',
        password: '',
        confirm_password: '',
    });
    function register(params) {
        
    }

</script>

<template>
  <div class="min-h-screen  flex flex-col justify-center sm:py-12">
            <div class="p-10 xs:p-0 mx-auto w-full md:w-10/12 lg:w-2/6">
                   {{ data }}
                <div class="flex justify-center mb-5 ">
                    <img :src="logo" class="w-1/6" alt="">
                </div>
                <div class="w-full rounded-md shadow-md mx-auto bg-white">                 

                    <form>
                        <div class="py-5 px-7">
                            <div class="mb-6">
                                <label for="name" class="block mb-2 text-sm font-medium text-gray-900">Name</label>
                                <input type="text" id="name" v-model="data.name"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:placeholder-gray-400 "
                                    placeholder="" required>
                            </div>
                            <div class="mb-6">
                                <label for="email" class="block mb-2 text-sm font-medium text-gray-900">Email
                                    address</label>
                                <input type="email" id="email" v-model="data.email"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:placeholder-gray-400 "
                                    placeholder="" required>
                            </div>
                            <div class="mb-6">
                                <label for="password" class="block mb-2 text-sm font-medium text-gray-900">Password</label>
                                <input type="password" id="password" v-model="data.password"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:placeholder-gray-400 "
                                    placeholder="" required>
                            </div>
                            <div class="mb-6">
                                <label for="confirm_password" class="block mb-2 text-sm font-medium text-gray-900">Confirm
                                    password</label>
                                <input type="password" id="confirm_password" v-model="data.confirm_password"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:placeholder-gray-400 "
                                    placeholder="" required>
                            </div>
                            <div class="flex items-start mb-6">
                                <div class="flex items-center h-5">
                                    <input id="remember" type="checkbox" value=""
                                        class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                                        required>
                                </div>
                                <label for="remember" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">I agree
                                    with the <a href="#" class="text-blue-600 hover:underline dark:text-blue-500">terms and
                                        conditions</a>.</label>
                            </div>
                            <button type="submit"
                                class="text-white bg-indigo-600 hover:bg-indigo-700 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-lg w-full px-5 py-2.5 text-center ">Register</button>
                        </div>
                    </form>

                </div>
            </div>
        </div>
</template>
