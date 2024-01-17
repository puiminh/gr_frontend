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
                        <h3 class="py-4 text-2xl text-center text-gray-800 dark:text-white">Login</h3>
                        <div class="px-8 pt-6 pb-8 mb-4 bg-white dark:bg-gray-800 rounded">
                            <div class="mb-4">
                                <label class="block mb-2 text-sm font-bold text-gray-700 dark:text-white" for="username">
                                    Username
                                </label>
                                <input
                                    class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                    id="username"
                                    type="username"
                                    placeholder="Username"
                                    v-model="userLogin.username"
                                />
                            </div>
                            <div class="mb-4">
                                <label class="block mb-2 text-sm font-bold text-gray-700 dark:text-white" for="password">
                                    Password
                                </label>
                                <input
                                    class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 dark:text-white border border-red-500 rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                    id="password"
                                    type="password"
                                    placeholder="******************"
                                    v-model="userLogin.password"
                                />
                                <!-- <p class="text-xs italic text-red-500">Please choose a password.</p> -->
                            </div>
                            <div class="mb-6 text-center">
                                <button
                                    class="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 dark:bg-blue-700 dark:text-white dark:hover:bg-blue-900 focus:outline-none focus:shadow-outline"
                                    type="button"
                                    @click="login"
                                >
                                    Login
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
                                    to="/sign-up">
                                    Not have an account? Sign-up now!
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
    ...mapActions(useAuthStore, ['signIn']),
    async login() { 
        const result = await this.signIn(this.userLogin);
        if (result.success) {
            this.$toast.open({
                message: 'Sign-in successful!',
                type: 'success',
            })
            this.$router.push('/');
            console.log('Login successful. User:', result.user);
        } 
            else 
        {
            this.$toast.open({
                message: 'Sign-in failed!',
                type: 'error',
            })
            console.error('Login failed. Error:', result.error);
        }
    },
  },
  data () {
    return {
        userLogin: {
            username: '',
            password: '',
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