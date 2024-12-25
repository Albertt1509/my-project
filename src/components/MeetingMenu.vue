<template>
    <div class="min-h-screen bg-gray-100 p-8">
        <!-- Meeting Schedule Section -->
        <div class="bg-white rounded-lg shadow-lg max-w-4xl mx-auto p-8">
            <h2 class="text-2xl font-semibold text-gray-800 mb-6">Meeting Schedule</h2>

            <!-- Meeting Table -->
            <table class="min-w-full bg-white border-collapse">
                <thead>
                    <tr class="border-b">
                        <th class="py-3 px-6 text-left text-sm font-semibold text-gray-700">Meeting Title</th>
                        <th class="py-3 px-6 text-left text-sm font-semibold text-gray-700">Date & Time</th>
                        <th class="py-3 px-6 text-left text-sm font-semibold text-gray-700">Participants</th>
                        <th class="py-3 px-6 text-left text-sm font-semibold text-gray-700">Descripiton</th>
                        <th class="py-3 px-6 text-left text-sm font-semibold text-gray-700">Action</th>
                    </tr>
                </thead>
                <tbody>
                    <!-- Loop through the meetings data -->
                    <tr v-for="meeting in meetings" :key="meeting.id" class="border-b">
                        <td class="py-4 px-6 text-sm text-gray-700">{{ meeting.title }}</td>
                        <td class="py-4 px-6 text-sm text-gray-700">{{ formatDate(meeting.date) }}</td>
                        <td class="py-4 px-6 text-sm text-gray-700">
                            <ul>
                                <li v-for="(participant, index) in meeting.participants" :key="index">{{ participant }}
                                </li>
                            </ul>
                        </td>
                        <td class="py-4 px-6 text-sm text-gray-700">{{ meeting.description }}</td>

                        <td class="py-4 px-6 text-sm text-gray-700">
                            <button class="text-blue-500 hover:text-blue-700" @click="openMeetingDetails(meeting.id)">
                                Meet Now
                            </button>
                        </td>

                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
import { getFakeData } from "@/components/api/api"; // Import the fake data API

export default {
    data() {
        return {
            meetings: [], // Store meetings data
        };
    },
    async created() {
        try {
            const data = await getFakeData(); // Fetch fake data
            this.meetings = data.meetings; // Assign meetings data
        } catch (error) {
            console.error("Error fetching meeting data:", error);
        }
    },
    methods: {
        // Format date from ISO string to a readable format
        formatDate(dateString) {
            const date = new Date(dateString);
            return date.toLocaleString("en-US", {
                weekday: "short",
                year: "numeric",
                month: "short",
                day: "numeric",
                hour: "2-digit",
                minute: "2-digit"
            });
        },
        openMeetingDetails(meetingId) {
            // Open the meeting URL in a new tab
            window.open(meetingId, '_blank');
        }
    }
};
</script>

<style scoped>
/* Table Styles */
table {
    width: 100%;
    border-spacing: 0;
}

th,
td {
    padding: 12px 16px;
}

th {
    background-color: #f7fafc;
}

tr:hover {
    background-color: #f1f5f9;
}

button {
    border: none;
    background: none;
    cursor: pointer;
    font-weight: 500;
}
</style>
