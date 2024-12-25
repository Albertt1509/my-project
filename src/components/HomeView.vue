<template>
    <div class="min-h-screen bg-gray-100 flex flex-col">
        <main class="flex-grow p-6">
            <h1 class="text-2xl font-semibold mb-4">Welcome, User</h1>

            <!-- Statistics -->
            <div v-if="statistics" class="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div class="bg-white p-4 rounded shadow">
                    <h2 class="text-lg font-semibold mb-2">Statistics</h2>
                    <p>Total Users: {{ statistics.totalUsers }}</p>
                    <p>Active Sessions: {{ statistics.activeSessions }}</p>
                </div>

                <div class="bg-white p-4 rounded shadow">
                    <h2 class="text-lg font-semibold mb-2">Recent Activities</h2>
                    <ul class="list-disc pl-5">
                        <li v-for="(activity, index) in recentActivities" :key="index">
                            {{ activity }}
                        </li>
                    </ul>
                </div>

                <div class="bg-white p-4 rounded shadow">
                    <h2 class="text-lg font-semibold mb-2">Messages</h2>
                    <ul class="list-disc pl-5">
                        <li v-for="(message, index) in messages" :key="index">
                            {{ message.from }}: "{{ message.content }}"
                        </li>
                    </ul>
                </div>
            </div>
            <div v-else class="text-center mt-4">
                <p>Loading data...</p>
            </div>
            <div class="bg-white p-6 rounded-lg shadow-md mb-6 border border-gray-200 mt-8">
                <div class="flex items-center justify-between mb-4">
                    <h3 class="text-xl font-semibold text-gray-800">Overview</h3>
                    <span class="text-sm text-gray-500">Updated: Dec 20, 2024</span>
                </div>
                <p class="text-gray-700 mb-4">
                    This section provides a summary of key metrics and highlights. Below are the insights and detailed
                    data for better decision-making.
                </p>
                <!-- Statistics -->
                <div class="grid grid-cols-3 gap-4 mb-6">
                    <div class="flex items-center p-4 bg-gray-100 rounded-md">
                        <div class="bg-blue-500 p-3 rounded-full text-white mr-4">
                            <i class="fas fa-chart-line"></i>
                        </div>
                        <div>
                            <li class="list-none" v-for="(totalView, index) in totalView" :key="index">
                                {{ totalView }}
                            </li>
                            <span class="text-sm text-gray-600">Total Views</span>
                        </div>
                    </div>
                    <div class="flex items-center p-4 bg-gray-100 rounded-md">
                        <div class="bg-green-500 p-3 rounded-full text-white mr-4">
                            <i class="fas fa-user-plus"></i>
                        </div>
                        <div>
                            <li class="list-none" v-for="(users, index) in users" :key="index">
                                {{ users }}
                            </li>
                            <span class="text-sm text-gray-600">New Users</span>
                        </div>
                    </div>
                    <div class="flex items-center p-4 bg-gray-100 rounded-md">
                        <div class="bg-red-500 p-3 rounded-full text-white mr-4">
                            <i class="fas fa-dollar-sign"></i>
                        </div>
                        <div>
                            <li class="list-none" v-for="(Revenue, index) in Revenue" :key="index">
                                {{ Revenue }}
                            </li>
                            <span class="text-sm text-gray-600">Revenue</span>
                        </div>
                    </div>
                </div>
                <!-- Chart placeholder -->
                <div class="bg-gray-50 p-4 rounded-md mb-6">
                    <h4 class="text-md font-medium text-gray-700 mb-2">Performance Chart</h4>
                    <div class="w-full h-32 bg-gray-200 rounded-md flex items-center justify-center">
                        <span class="text-gray-500 text-sm">[Chart Placeholder]</span>
                    </div>
                </div>
                <!-- Call to Action -->
                <div class="flex justify-end">
                    <button class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md shadow">
                        View More Details
                    </button>
                </div>
            </div>

        </main>
    </div>
</template>

<script>
import { getFakeData } from "@/components/api/api";

export default {
    data() {
        return {
            statistics: null,
            recentActivities: null,
            messages: null,
        };
    },
    async created() {
        const data = await getFakeData();
        this.statistics = data.statistics;
        this.recentActivities = data.recentActivities;
        this.messages = data.messages;
        this.totalView = data.totalView
        this.users = data.users
        this.Revenue = data.Revenue
    },
};
</script>
