<template lang="">
        <div class="h-full container">
            <!-- Container -->
            <div class="mx-auto">
                <div class="flex justify-center px-6 py-12">
                    <!-- Row -->
                    <div class="w-full xl:w-3/4 lg:w-11/12 flex">
                        <!-- Col -->
                        <div class="left-col w-full h-auto bg-gray-400 dark:bg-gray-800 hidden lg:block lg:w-5/12 bg-cover rounded-l-lg"></div>
                        <!-- Col -->
                        <div class="w-full lg:w-7/12 bg-white dark:bg-gray-700 p-5 rounded-lg lg:rounded-l-none">
                            <h3 class="py-4 text-2xl text-center text-gray-800 dark:text-white">Create an Account!</h3>
                            <div class="px-8 pt-6 pb-8 mb-4 bg-white dark:bg-gray-800 rounded">
                                <div class="mb-4 md:flex md:justify-between">
                                    <div class="mb-4 md:mr-2 md:mb-0">
                                        <label class="block mb-2 text-sm font-bold text-gray-700 dark:text-white" for="firstName">
                                            First Name
                                        </label>
                                        <input
                                            class="w-full px-3 py-2 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                            id="firstName"
                                            type="text"
                                            placeholder="First Name"
                                            v-model="userRegister.first_name"
                                        />
                                    </div>
                                    <div class="md:ml-2">
                                        <label class="block mb-2 text-sm font-bold text-gray-700 dark:text-white" for="lastName">
                                            Last Name
                                        </label>
                                        <input
                                            class="w-full px-3 py-2 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                            id="lastName"
                                            type="text"
                                            placeholder="Last Name"
                                            v-model="userRegister.last_name"
                                        />
                                    </div>
                                </div>
                                <div class="mb-4">
                                    <label class="block mb-2 text-sm font-bold text-gray-700 dark:text-white" for="email">
                                        Username
                                    </label>
                                    <input
                                        class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                        id="username"
                                        type="username"
                                        placeholder="Username"
                                        v-model="userRegister.username"
                                    />
                                </div>
                                <div class="mb-4">
                                    <label class="block mb-2 text-sm font-bold text-gray-700 dark:text-white" for="email">
                                        Email
                                    </label>
                                    <input
                                        class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                        id="email"
                                        type="email"
                                        placeholder="Email"
                                        v-model="userRegister.email"
                                    />
                                </div>
                                <div class="mb-4 md:flex md:justify-between">
                                    <div class="mb-4 md:mr-2 md:mb-0">
                                        <label class="block mb-2 text-sm font-bold text-gray-700 dark:text-white" for="password">
                                            Password
                                        </label>
                                        <input
                                            class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 dark:text-white border border-red-500 rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                            id="password"
                                            type="password"
                                            placeholder="******************"
                                            v-model="userRegister.password"
                                        />
                                        <!-- <p class="text-xs italic text-red-500">Please choose a password.</p> -->
                                    </div>
                                    <div class="md:ml-2">
                                        <label class="block mb-2 text-sm font-bold text-gray-700 dark:text-white" for="c_password">
                                            Confirm Password
                                        </label>
                                        <input
                                            class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                            id="c_password"
                                            type="password"
                                            placeholder="******************"
                                        />
                                    </div>
                                </div>
                                <div class="mb-6 text-center">
                                    <button
                                        class="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 dark:bg-blue-700 dark:text-white dark:hover:bg-blue-900 focus:outline-none focus:shadow-outline"
                                        type="button"
                                        @click="signupMethod"
                                    >
                                        Register Account
                                    </button>
                                </div>
                                <hr class="mb-6 border-t" />
                                <div class="text-center">
                                    <!-- <a class="inline-block text-sm text-blue-500 dark:text-blue-500 align-baseline hover:text-blue-800"
                                        href="#">
                                        Forgot Password?
                                    </a> -->
                                </div>
                                <div class="text-center">
                                    <router-link class="inline-block text-sm text-blue-500 dark:text-blue-500 align-baseline hover:text-blue-800"
                                        to="/sign-in">
                                        Already have an account? Login!
                                    </router-link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</template>
<script>

import { useAuthStore } from '@/stores/auth';
import { mapActions } from 'pinia';
export default {
    methods: {
        ...mapActions(useAuthStore, ['signUp']),
        async signupMethod() { 
            const result = await this.signUp(this.userRegister);
            if (result.success) {
                this.$toast.open({
                    message: 'Sign-up successful!',
                    type: 'success',
                })
                this.$router.push('/');
                console.log('Sign-up successful. User:', result.user);
            } 
                else 
            {
                this.$toast.open({
                    message: 'Sign-up failed!',
                    type: 'error',
                })
                console.error('Sign-up failed. Error:', result.error);
            }
        },
    },
    data () {
        return {
            userRegister: {
                username: '',
                password: '',
                first_name: '',
                last_name: '',
                email: '',
                avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHcM04W6diLQBzw4Y4pXDhPgovRf7l1cBF0Q&usqp=CAU'
            }
        }
    },
}
</script>
<style scoped>
.container {
    background-image: url('/images/cookingbackground3.jpg');
    background-repeat: no-repeat;
    background-size: cover;
}

.left-col {
    background-image: url('/images/cookingbackground5.jpg');
    background-repeat: no-repeat;
    background-size: cover;
}

input {
    border-width: 1px;
    border-style: solid;
    border-color: rgba(181, 184, 187, 0.5);
}
    
</style>