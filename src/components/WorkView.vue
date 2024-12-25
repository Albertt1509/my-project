<template>
    <div class="bg-gray-100 min-h-screen p-6">
        <!-- Task List Section -->
        <div class="bg-white rounded-lg shadow p-6">
            <div class="mb-6 flex justify-between items-center">
                <div>
                    <h1 class="text-2xl font-bold text-gray-800">Task List</h1>
                    <p class="text-gray-600">Manage your tasks effectively.</p>
                </div>
                <!-- Filter Dropdown -->
                <div>
                    <select v-model="selectedFilter"
                        class="form-select block w-full p-2 text-gray-700 border-gray-300 rounded-lg">
                        <option value="">All</option>
                        <option value="overdue">Overdue</option>
                        <option value="new">New</option>
                        <option value="completed">Completed</option>
                        <option value="in-progress">In Progress</option>
                    </select>
                </div>
            </div>
            <ul class="divide-y divide-gray-200">
                <li v-for="task in filteredTasks" :key="task.id" class="flex items-center justify-between py-4">
                    <!-- Task Info -->
                    <div class="flex items-center space-x-4">
                        <input type="checkbox" class="form-checkbox h-5 w-5 text-green-500"
                            :checked="task.status === 'completed'" disabled />
                        <div>
                            <!-- Add router-link to navigate to task detail page -->
                            <router-link :to="'/work/' + task.id" class="text-gray-800 font-medium hover:underline">
                                {{ task.task }}
                            </router-link>
                            <p class="text-sm text-gray-500">{{ task.description }}</p>
                        </div>
                    </div>

                    <!-- Task Actions -->
                    <div class="flex items-center space-x-4">
                        <span :class="{
                            'text-red-500': task.status === 'overdue',
                            'text-orange-500': task.status === 'in-progress',
                            'text-green-500': task.status === 'new',
                        }" class="text-sm font-semibold capitalize">
                            {{ task.status }}
                        </span>
                        <span class="text-sm text-gray-500">{{ task.dueDate }}</span>
                        <button class="text-gray-400 hover:text-gray-600">
                            <i class="fas fa-trash"></i>
                        </button>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import { getFakeData } from "@/components/api/api";

export default {
    data() {
        return {
            tasks: [],
            selectedFilter: "",
        };
    },
    computed: {
        filteredTasks() {
            if (this.selectedFilter === "") {
                return this.tasks; // Tampilkan semua jika tidak ada filter
            }
            return this.tasks.filter((task) => task.status === this.selectedFilter);
        },
    },
    async created() {
        const data = await getFakeData();
        this.tasks = data.workToDo || [];
    },
};
</script>
