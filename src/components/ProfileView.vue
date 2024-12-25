<template>
    <div class="min-h-screen bg-gray-100 p-8">
        <!-- Profile Menu Section -->
        <div class="bg-white rounded-lg shadow-lg max-w-lg mx-auto p-8">
            <!-- Profile Info -->
            <div class="flex items-center space-x-4">
                <img :src="profile.avatar" alt="Profile Avatar"
                    class="w-16 h-16 rounded-full border-2 border-gray-200" />
                <div>
                    <h2 class="text-2xl font-semibold text-gray-800">{{ profile.username }}</h2>
                    <p class="text-gray-500">{{ profile.jobTitle }}</p>
                    <p class="text-gray-500">{{ profile.email }}</p>
                    <p class="text-gray-500">{{ profile.phone }}</p>
                    <p class="text-gray-500">{{ profile.location }}</p>
                </div>
            </div>

            <!-- Social Links -->
            <div class="mt-4 flex space-x-4">
                <a v-if="profile.socialLinks.facebook" :href="profile.socialLinks.facebook" target="_blank"
                    class="text-blue-600 hover:text-blue-800">
                    <i class="fab fa-facebook"></i> Facebook
                </a>
                <a v-if="profile.socialLinks.twitter" :href="profile.socialLinks.twitter" target="_blank"
                    class="text-blue-400 hover:text-blue-600">
                    <i class="fab fa-twitter"></i> Twitter
                </a>
                <a v-if="profile.socialLinks.linkedin" :href="profile.socialLinks.linkedin" target="_blank"
                    class="text-blue-700 hover:text-blue-900">
                    <i class="fab fa-linkedin"></i> LinkedIn
                </a>
            </div>

            <!-- Settings Section -->
            <div class="mt-6">
                <h3 class="text-xl font-semibold text-gray-800">Settings</h3>
                <ul class="space-y-4 mt-2">
                    <li v-for="setting in profile.settings" :key="setting.id"
                        class="flex items-center space-x-3 text-gray-700 hover:text-gray-900 cursor-pointer"
                        @click="goToProfileSettings(setting.label)">
                        <i :class="setting.icon" class="text-lg"></i>
                        <span>{{ setting.label }}</span>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import { getFakeData } from "@/components/api/api";

export default {
    data() {
        return {
            profile: null,
        };
    },
    async created() {
        try {
            const data = await getFakeData();
            this.profile = data.profileMenu;
        } catch (error) {
            console.error("Error fetching profile data:", error);
        }
    },
    methods: {
        goToProfileSettings(label) {
            if (label === 'Profile Settings') {
                this.$router.push({ name: 'ProfileSetting' });
            }
            if (label === 'Account Settings') {
                this.$router.push({ name: 'AccountSetting' });
            }
            if (label === 'Privacy Settings') {
                this.$router.push({ name: 'PrivacySetting' });
            }
        }
    },
};
</script>

<style scoped>
/* Add custom styles if necessary */
.fas {
    font-size: 1.2rem;
}

.fab {
    font-size: 1.2rem;
}
</style>
