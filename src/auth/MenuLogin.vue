<script>
import image from '@/assets/img/images.jpg';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

library.add(faEye, faEyeSlash);

export default {
    components: {
        FontAwesomeIcon,
    },
    data() {
        return {
            email: '',
            password: '',
            showPassword: false,
            image,
        };
    },
    methods: {
        handleLogin() {
            if (this.email === 'test@gmail.com' && this.password === 'test123') {
                this.$router.push('/home');

                this.$toast.success('Login berhasil!', {
                    position: 'top-right',
                    timeout: 3000,
                });
            } else {
                this.$toast.error('Email atau password salah!', {
                    position: 'top-right',
                    timeout: 3000,
                });
            }
        },
        togglePassword() {
            this.showPassword = !this.showPassword;
        },
    },
};
</script>

<template>
    <div class="flex justify-center items-center min-h-screen bg-gray-100">
        <div
            class="flex flex-col md:flex-row md:w-[750px] bg-pink-500 md:h-[550px] rounded-lg shadow-lg overflow-hidden">
            <div class="md:w-1/2 bg-white flex justify-center items-start md:items-center">
                <div class="w-full max-w-sm p-8">
                    <h2 class="text-2xl font-bold mb-8 text-center md:text-left">Login</h2>
                    <form @submit.prevent="handleLogin" class="space-y-4">
                        <div>
                            <label for="username" class="block text-gray-700 font-bold">Username</label>
                            <input v-model="email" type="text" id="username" placeholder="Username : test@gmail.com"
                                class="border-b-2 border-gray-300 rounded-none px-4 py-2 w-full focus:outline-none focus:border-pink-500"
                                required />
                        </div>
                        <div class="relative">
                            <label for="password" class="block text-gray-700 font-bold">Password</label>
                            <input :type="showPassword ? 'text' : 'password'" v-model="password" id="password"
                                placeholder="Password : test123"
                                class="border-b-2 border-gray-300 rounded-none px-4 py-2 w-full focus:outline-none focus:border-pink-500"
                                required />
                            <span @click="togglePassword"
                                class="absolute inset-y-0 right-0 flex items-center pr-3 pt-4 cursor-pointer">
                                <font-awesome-icon :icon="showPassword ? 'eye-slash' : 'eye'" class="text-gray-500" />
                            </span>
                        </div>
                        <button type="submit"
                            class="bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded-md focus:outline-none w-full">
                            Login
                        </button>
                    </form>
                </div>
            </div>
            <div class="hidden md:block md:w-1/2 relative">
                <div
                    class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white h-40 w-40 rounded-full">
                    <img :src="image" alt="Circle Image" class="p-4 h-full w-full object-cover rounded-full" />
                    <h1 class="flex text-white text-xl font-bold mt-2 text-center">Welcome Programmer</h1>
                </div>
            </div>
        </div>
    </div>
</template>


<style scoped></style>
