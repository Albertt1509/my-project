<template>
    <div class="min-h-screen bg-gray-100 p-8">
        <!-- Privacy Settings Layout -->
        <div class="bg-white rounded-lg shadow-lg max-w-2xl mx-auto p-8">
            <h1 class="text-3xl font-semibold text-gray-800 mb-6">Privacy Settings</h1>

            <!-- Profile Visibility Section -->
            <div class="mb-6">
                <h3 class="text-xl font-semibold text-gray-800">Profile Visibility</h3>
                <form @submit.prevent="updateProfileVisibility" class="space-y-4 mt-4">
                    <div class="flex items-center">
                        <input type="checkbox" id="profileVisibility" v-model="profileVisibility" class="h-5 w-5" />
                        <span class="ml-2 text-gray-500">Make my profile visible to everyone</span>
                    </div>
                    <button type="submit" class="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700">Save
                        Changes</button>
                </form>
            </div>

            <!-- Data Sharing Preferences Section -->
            <div class="mb-6">
                <h3 class="text-xl font-semibold text-gray-800">Data Sharing Preferences</h3>
                <form @submit.prevent="updateDataSharing" class="space-y-4 mt-4">
                    <div class="flex items-center">
                        <input type="checkbox" id="dataSharing" v-model="dataSharing" class="h-5 w-5" />
                        <span class="ml-2 text-gray-500">Share my data with third parties</span>
                    </div>
                    <button type="submit" class="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700">Save
                        Preferences</button>
                </form>
            </div>

            <!-- Activity Status Visibility Section -->
            <div class="mb-6">
                <h3 class="text-xl font-semibold text-gray-800">Activity Status Visibility</h3>
                <form @submit.prevent="updateActivityStatus" class="space-y-4 mt-4">
                    <div class="flex items-center">
                        <input type="checkbox" id="activityStatus" v-model="activityStatus" class="h-5 w-5" />
                        <span class="ml-2 text-gray-500">Show my activity status to others</span>
                    </div>
                    <button type="submit"
                        class="w-full bg-yellow-600 text-white py-2 rounded-md hover:bg-yellow-700">Save Status</button>
                </form>
            </div>

            <!-- Two-Factor Authentication Section -->
            <div>
                <h3 class="text-xl font-semibold text-gray-800">Two-Factor Authentication</h3>
                <div class="flex items-center mt-4">
                    <input type="checkbox" id="twoFactorAuth" v-model="twoFactorAuth" class="h-5 w-5" />
                    <span class="ml-2 text-gray-500">Enable Two-Factor Authentication for added security</span>
                </div>
                <button @click="enableTwoFactorAuth"
                    class="w-full bg-red-600 text-white py-2 rounded-md hover:bg-red-700 mt-4">
                    Enable Two-Factor Authentication
                </button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            profileVisibility: false,
            dataSharing: false,
            activityStatus: false,
            twoFactorAuth: false,
        };
    },
    methods: {
        updateProfileVisibility() {
            // Add logic to save the profile visibility setting (e.g., API call)
            console.log('Profile visibility updated:', this.profileVisibility);
        },
        updateDataSharing() {
            // Add logic to save data sharing preferences (e.g., API call)
            console.log('Data sharing preference updated:', this.dataSharing);
        },
        updateActivityStatus() {
            // Add logic to save activity status visibility (e.g., API call)
            console.log('Activity status visibility updated:', this.activityStatus);
        },
        enableTwoFactorAuth() {
            // Add logic to enable two-factor authentication (e.g., API call)
            console.log('Two-factor authentication enabled:', this.twoFactorAuth);
        },
    },
};
</script>

<style scoped>
/* Additional styles to enhance the layout */
h1 {
    text-align: center;
}

form input,
form button {
    font-size: 1rem;
}
</style>
