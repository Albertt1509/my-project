<template>
    <div class="bg-gray-100 ">
        <!-- Task Detail Section -->
        <div class="bg-white rounded-lg shadow-lg p-8 max-w-3xl mx-auto">
            <div class="mb-8">
                <h1 class="text-3xl font-bold text-gray-800">Task Detail</h1>
                <p class="text-gray-600">Detailed information about the task and its progress.</p>
            </div>

            <div v-if="task" class="space-y-6">
                <!-- Task Information -->
                <div class="space-y-4 bg-gray-50 p-6 rounded-lg shadow-sm">
                    <h2 class="text-2xl font-semibold text-gray-800">{{ task.task }}</h2>
                    <p class="text-gray-600">{{ task.description }}</p>
                    <div class="space-y-2">
                        <p class="text-sm text-gray-500">Due Date: <span class="font-medium">{{ task.dueDate }}</span>
                        </p>
                        <p class="text-sm text-gray-500">Priority: <span class="font-medium text-red-500">{{
                            task.priority }}</span></p>
                        <p class="text-sm text-gray-500">Category: <span class="font-medium">{{ task.category }}</span>
                        </p>
                        <p class="text-sm text-gray-500">Assignee: <span class="font-medium">{{ task.assignee }}</span>
                        </p>
                        <p class="text-sm text-gray-500">Recurring: <span class="font-medium">{{ task.isRecurring ?
                            'Yes' : 'No' }}</span></p>
                    </div>
                    <!-- Task Status -->

                </div>

                <!-- Comments Section -->
                <div class="bg-gray-50 p-6 rounded-lg shadow-sm">
                    <h3 class="text-xl font-semibold text-gray-800 mb-4">Comments:</h3>
                    <ul class="space-y-4">
                        <li v-for="(comment, index) in task.comments" :key="index" class="text-sm text-gray-600">
                            <i class="fas fa-comment-alt text-blue-500 mr-2"></i>{{ comment }}
                        </li>
                    </ul>
                </div>

                <!-- Task Actions -->
                <div class="mt-6 flex justify-between items-center">

                    <button class="bg-green-500 text-white px-6 py-3 rounded-lg shadow hover:bg-green-600 transition">
                        <i class="fas fa-check-circle mr-2"></i> Mark as Complete
                    </button>
                </div>
            </div>

            <div v-else class="text-gray-500 text-center">Loading task details...</div>
        </div>
    </div>
</template>

<script>
import { useRoute } from 'vue-router';
import { getFakeData } from "@/components/api/api";

export default {
    data() {
        return {
            task: null, // Will hold the task data
        };
    },
    computed: {
        // Method to get the dynamic task status color
        getStatusClass(status) {
            return {
                'text-red-500': status === 'overdue',
                'text-orange-500': status === 'in-progress',
                'text-green-500': status === 'completed',
                'text-blue-500': status === 'new',
            };
        }
    },
    async created() {
        const route = useRoute();
        const taskId = route.params.id; // Get the task ID from the route parameter

        try {
            const data = await getFakeData();
            const task = data.workToDo.find(task => task.id === Number(taskId)); // Find the task by ID
            this.task = task || null; // Set the task or null if not found
        } catch (error) {
            console.error("Error fetching task details:", error);
            this.task = null; // Set task to null in case of an error
        }
    },
    methods: {
        // Method to delete task (for example)
        deleteTask(taskId) {
            // Logic to delete the task from your data source (e.g., calling API or updating local data)
            console.log(`Deleting task with ID: ${taskId}`);
        }
    }
};
</script>

<style scoped>
/* Add custom styles for icons if necessary */
.fas {
    font-size: 1.2rem;
}
</style>
