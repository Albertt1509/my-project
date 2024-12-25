<template>
    <div class="min-h-screen bg-gray-100 p-8">
        <!-- Profile Settings Container -->
        <div class="bg-white rounded-lg shadow-lg p-8 max-w-3xl mx-auto">
            <h1 class="text-3xl font-bold text-gray-800 mb-8">Profile Settings</h1>

            <!-- Profile Information Section -->
            <div v-if="profileMenu" class="space-y-6">
                <h2 class="text-2xl font-semibold text-gray-800">Profile Information</h2>

                <!-- Profile Header -->
                <div class="flex items-center mb-6">
                    <img :src="profileMenu.avatar" alt="Avatar" class="w-20 h-20 rounded-full mr-6">
                    <div>
                        <h3 class="text-xl font-bold text-gray-900">{{ profileMenu.username }}</h3>
                        <p class="text-gray-600">{{ profileMenu.jobTitle }}</p>
                    </div>
                </div>

                <form @submit.prevent="saveProfile">
                    <!-- Full Name -->
                    <div class="flex flex-col mb-4">
                        <label for="name" class="text-gray-600">Full Name</label>
                        <input id="name" v-model="profileMenu.username" type="text"
                            class="mt-2 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500" />
                    </div>

                    <!-- Email -->
                    <div class="flex flex-col mb-4">
                        <label for="email" class="text-gray-600">Email</label>
                        <input id="email" v-model="profileMenu.email" type="email"
                            class="mt-2 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500" />
                    </div>

                    <!-- Phone -->
                    <div class="flex flex-col mb-4">
                        <label for="phone" class="text-gray-600">Phone</label>
                        <input id="phone" v-model="profileMenu.phone" type="text"
                            class="mt-2 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500" />
                    </div>

                    <!-- Location -->
                    <div class="flex flex-col mb-4">
                        <label for="location" class="text-gray-600">Location</label>
                        <input id="location" v-model="profileMenu.location" type="text"
                            class="mt-2 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500" />
                    </div>

                    <div class="flex justify-end">
                        <button type="submit"
                            class="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition">
                            Save Changes
                        </button>
                    </div>
                </form>
            </div>

        </div>
    </div>
</template>

<script>
import { getFakeData } from "@/components/api/api"; // Import the fake data API

export default {
    data() {
        return {
            profileMenu: null, // Will hold profile menu data from the API
        };
    },
    async created() {
        try {
            const data = await getFakeData(); // Fetch data from API
            this.profileMenu = data.profileMenu; // Store the profileMenu data from the API
        } catch (error) {
            console.error("Error fetching profile data:", error);
        }
    },
    methods: {
        saveProfile() {
            console.log("Profile saved", this.profileMenu);
            // Logic to save profile data (e.g., call an API to update the profile)
        },
    },
};
</script>

<style scoped>
/* Add custom styles if necessary */
</style>
