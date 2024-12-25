export const getFakeData = async () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const users = ["John Doe", "Jane Doe", "Alice Smith", "Bob Johnson", "Charlie Brown", "David White", "Eva Green", "Frank Black", "Grace Blue", "Hannah Pink"];

            const workToDo = Array.from({ length: 15 }, (_, i) => {
                return {
                    id: i + 1,
                    task: `Task ${i + 1}`,
                    description: `Task description for task ${i + 1} and action for task ${i + 1}.`,
                    dueDate: `2024-12-${String(i + 1).padStart(2, '0')}`,
                    status: i % 4 === 0 ? "completed" : i % 3 === 0 ? "in-progress" : "new",
                    priority: i % 2 === 0 ? "high" : "medium",
                    category: ["Work", "Personal", "Shopping", "Others"][i % 4],
                    isRecurring: Math.random() > 0.7,
                    createdAt: "2024-12-10",
                    updatedAt: `2024-12-${String(i + 1).padStart(2, '0')}`,
                    assignee: users[i % users.length],
                    comments: [`Comment for task ${i + 1}`, `Additional note for task ${i + 1}`],
                };
            });

            // Fake meeting data
            const meetings = Array.from({ length: 5 }, (_, i) => {
                return {
                    id: 'https://meet.google.com/xgr-dyde-srk',
                    title: `Meeting ${i + 1}`,
                    date: `2024-12-${String(i + 15).padStart(2, '0')}T${(9 + i)}:00`,
                    description: `Description for meeting ${i + 1}. Discuss important topics for this session.`,
                    participants: users.slice(i, i + 3),
                };
            });

            resolve({
                profileMenu: {
                    username: "John Doe",
                    avatar: `https://avatars.dicebear.com/api/initials/${"JohnDoe"}.svg`,
                    jobTitle: "Software Developer",
                    email: "johndoe@example.com",
                    phone: "+628975344343",
                    location: "surabaya, Indonesia",
                    socialLinks: {
                        facebook: "https://facebook.com/johndoe",
                        twitter: "https://twitter.com/johndoe",
                        linkedin: "https://linkedin.com/in/johndoe",
                    },
                    settings: [
                        { id: 1, label: "Profile Settings", icon: "fas fa-user" },
                        { id: 2, label: "Account Settings", icon: "fas fa-cogs" },
                        { id: 3, label: "Privacy Settings", icon: "fas fa-shield-alt" },
                    ],
                },
                statistics: {
                    totalUsers: users.length,
                    activeSessions: 567,
                    totalTasks: workToDo.length,
                    completedTasks: workToDo.filter(task => task.status === "completed").length,
                    overdueTasks: workToDo.filter(task => task.status === "overdue").length,
                    inProgressTasks: workToDo.filter(task => task.status === "in-progress").length,
                },
                recentActivities: [
                    "User A logged in",
                    "User B uploaded a file",
                    "User C updated profile",
                ],
                messages: [
                    { from: "Admin", content: "System update scheduled." },
                    { from: "John", content: "Meeting at 3 PM." },
                    { from: "HR", content: "Policy update." },
                ],
                totalView: ['1,245'],
                users: ['10'],
                Revenue: ['$12,800'],
                workToDo,
                meetings,
            });
        }, 1000);
    });
};
