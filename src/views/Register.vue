<script setup>
import { reactive } from 'vue';
import validateInput from "../validation/validateInput";
const logo = "https://upload.wikimedia.org/wikipedia/commons/f/f1/Vue.png";

const data = reactive({
    name: '',
    email: '',
    password: '',
    confirm_password: '',
    inputErrors: {},
    users: [],
});

function registerUser() {


    let user = {
        name: data.name,
        email: data.email,
        password: data.password,
        confirm_password: data.confirm_password,
    }

   
    const { isInvalid, errors } = validateInput(user);
    if (isInvalid) {
        data.inputErrors = errors;
    } else {
        this.errors = {};
        // store user in local storage
        // if (localStorage.users) {
        //     let lsUsers = localStorage.users;
        //     data.users = JSON.parse(JSON.stringify(lsUsers));
        // }

        data.users.push(user);
        localStorage.setItem("users", JSON.stringify(data.users));
        data.name = "";
        data.email = "";
        data.password = "";
        data.confirm_password = "";
    }

}

console.log(data);

</script>

<template>
    <div class="min-h-screen  flex flex-col justify-center sm:py-12">
        <div class="p-10 xs:p-0 mx-auto w-full md:w-10/12 lg:w-2/6">
            {{  data }}
            <div class="flex justify-center mb-5 ">
                <img :src="logo" class="w-1/6" alt="">
            </div>
            <div class="w-full rounded-md shadow-md mx-auto bg-white">

                <form @submit.prevent="registerUser()">
                    <div class="py-5 px-7">
                        <div class="mb-6">
                            <label for="name" class="block mb-2 text-sm font-medium text-gray-900">Name</label>
                            <input type="text" id="name" v-model="data.name"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:placeholder-gray-400 "
                                placeholder="">
                            <div class="text-red-500 block">
                                {{ data.inputErrors.name }}
                            </div>
                        </div>
                        <div class="mb-6">
                            <label for="email" class="block mb-2 text-sm font-medium text-gray-900">Email
                                address</label>
                            <input type="email" id="email" v-model="data.email"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:placeholder-gray-400 "
                                placeholder="">
                            <div class="text-red-500 block">
                                {{ data.inputErrors.email }}
                            </div>
                        </div>
                        <div class="mb-6">
                            <label for="password" class="block mb-2 text-sm font-medium text-gray-900">Password</label>
                            <input type="password" id="password" v-model="data.password"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:placeholder-gray-400 "
                                placeholder="">
                            <div class="text-red-500 block">
                                {{ data.inputErrors.password }}
                            </div>
                        </div>
                        <div class="mb-6">
                            <label for="confirm_password" class="block mb-2 text-sm font-medium text-gray-900">Confirm
                                password</label>
                            <input type="password" id="confirm_password" v-model="data.confirm_password"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:placeholder-gray-400 "
                                placeholder="">
                            <div class="text-red-500 block">
                                {{ data.inputErrors.confirm_password }}
                            </div>
                        </div>

                        <button type="submit"
                            class="text-white bg-indigo-600 hover:bg-indigo-700 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-lg w-full px-5 py-2.5 text-center ">Register</button>
                    </div>
                </form>

            </div>
        </div>
    </div>
</template>
