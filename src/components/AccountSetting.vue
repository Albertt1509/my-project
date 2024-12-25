<template>
    <div class="min-h-screen bg-gray-100 p-8">
        <!-- Account Settings Layout -->
        <div class="bg-white rounded-lg shadow-lg max-w-2xl mx-auto p-8">
            <h1 class="text-3xl font-semibold text-gray-800 mb-6">Account Settings</h1>

            <!-- Change Email Section -->
            <div class="mb-6">
                <h3 class="text-xl font-semibold text-gray-800">Change Email</h3>
                <form @submit.prevent="changeEmail" class="space-y-4 mt-4">
                    <div>
                        <label for="email" class="block text-gray-700">New Email</label>
                        <input type="email" id="email" v-model="email" placeholder="Enter new email"
                            class="w-full px-4 py-2 border border-gray-300 rounded-md" required />
                    </div>
                    <button type="submit" class="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700">Update
                        Email</button>
                </form>
            </div>

            <!-- Change Password Section -->
            <div class="mb-6">
                <h3 class="text-xl font-semibold text-gray-800">Change Password</h3>
                <form @submit.prevent="changePassword" class="space-y-4 mt-4">
                    <div>
                        <label for="currentPassword" class="block text-gray-700">Current Password</label>
                        <input type="password" id="currentPassword" v-model="currentPassword"
                            placeholder="Enter current password"
                            class="w-full px-4 py-2 border border-gray-300 rounded-md" required />
                    </div>
                    <div>
                        <label for="newPassword" class="block text-gray-700">New Password</label>
                        <input type="password" id="newPassword" v-model="newPassword" placeholder="Enter new password"
                            class="w-full px-4 py-2 border border-gray-300 rounded-md" required />
                    </div>
                    <button type="submit" class="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700">Update
                        Password</button>
                </form>
            </div>

            <!-- Notification Preferences Section -->
            <div class="mb-6">
                <h3 class="text-xl font-semibold text-gray-800">Notification Preferences</h3>
                <form @submit.prevent="updateNotifications" class="space-y-4 mt-4">
                    <div>
                        <label for="emailNotifications" class="block text-gray-700">Email Notifications</label>
                        <input type="checkbox" id="emailNotifications" v-model="emailNotifications" class="h-5 w-5" />
                        <span class="ml-2 text-gray-500">Receive email notifications</span>
                    </div>
                    <div>
                        <label for="smsNotifications" class="block text-gray-700">SMS Notifications</label>
                        <input type="checkbox" id="smsNotifications" v-model="smsNotifications" class="h-5 w-5" />
                        <span class="ml-2 text-gray-500">Receive SMS notifications</span>
                    </div>
                    <button type="submit" class="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700">Save
                        Preferences</button>
                </form>
            </div>

            <!-- Delete Account Section -->
            <div>
                <h3 class="text-xl font-semibold text-gray-800">Delete Account</h3>
                <p class="text-gray-500 mt-2">If you want to permanently delete your account, click the button below.
                    This action is irreversible.</p>
                <button @click="deleteAccount"
                    class="w-full bg-red-600 text-white py-2 rounded-md hover:bg-red-700 mt-4">
                    Delete Account
                </button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            email: '',
            currentPassword: '',
            newPassword: '',
            emailNotifications: false,
            smsNotifications: false,
        };
    },
    methods: {
        changeEmail() {
            // Add logic to update email (e.g., API call)
            console.log('Email updated to:', this.email);
        },
        changePassword() {
            // Add logic to update password (e.g., API call)
            console.log('Password changed to:', this.newPassword);
        },
        updateNotifications() {
            // Add logic to save notification preferences (e.g., API call)
            console.log('Notification Preferences:', {
                emailNotifications: this.emailNotifications,
                smsNotifications: this.smsNotifications,
            });
        },
        deleteAccount() {
            // Logic to delete the account (e.g., API call)
            console.log('Account deleted');
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
