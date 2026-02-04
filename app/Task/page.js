// app/components/TaskManagement.js
"use client";
import { useState } from "react";

const TaskManagement = () => {
    const [tasks, setTasks] = useState([
        { id: 1, title: "Design Homepage", assignedTo: "John", status: "In Progress" },
        { id: 2, title: "Fix Login Bug", assignedTo: "Jane", status: "Pending" },
        { id: 3, title: "Deploy v1.0", assignedTo: "Alex", status: "Completed" },
    ]);

    const [newTask, setNewTask] = useState({ title: "", assignedTo: "", status: "Pending" });
    const [search, setSearch] = useState("");

 
    const addTask = () => {
        if (!newTask.title || !newTask.assignedTo) return;
        setTasks([...tasks, { ...newTask, id: Date.now() }]);
        setNewTask({ title: "", assignedTo: "", status: "Pending" });
    };

   
    const deleteTask = (id) => setTasks(tasks.filter(t => t.id !== id));

   
    const filteredTasks = tasks.filter(t =>
        t.title.toLowerCase().includes(search.toLowerCase()) ||
        t.assignedTo.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="p-6 bg-gray-50 min-h-screen">
            <h2 className="text-2xl font-semibold mb-4 text-black">Task Management</h2>

            
            <div className="flex flex-wrap gap-4 mb-6">
                <input
                    type="text"
                    placeholder="Search tasks..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="flex-1 min-w-[200px] px-3 py-2 border border-gray-500 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-gray-400 text-black"
                />

                <input
                    type="text"
                    placeholder="Task Title"
                    value={newTask.title}
                    onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
                    className="flex-1 min-w-[150px] px-3 py-2 border border-gray-500 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-gray-400 text-black"
                />
                <input
                    type="text"
                    placeholder="Assigned To"
                    value={newTask.assignedTo}
                    onChange={(e) => setNewTask({ ...newTask, assignedTo: e.target.value })}
                    className="flex-1 min-w-[150px] px-3 py-2 border border-gray-500 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-gray-400 text-black"
                />
                <select
                    value={newTask.status}
                    onChange={(e) => setNewTask({ ...newTask, status: e.target.value })}
                    className="flex-1 min-w-[120px] px-3 py-2 border border-gray-500 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 text-black"
                >
                    <option>Pending</option>
                    <option>In Progress</option>
                    <option>Completed</option>
                </select>
                <button
                    onClick={addTask}
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                    Add Task
                </button>
            </div>


            <div className="overflow-x-auto bg-white rounded-lg shadow-md">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Title</th>
                            <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Assigned To</th>
                            <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Status</th>
                            <th className="px-4 py-2 text-center text-sm font-medium text-gray-700">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                        {filteredTasks.map(task => (
                            <tr key={task.id}>
                                <td className="px-4 py-2">{task.title}</td>
                                <td className="px-4 py-2">{task.assignedTo}</td>
                                <td className="px-4 py-2">
                                    <span className={`px-2 py-1 rounded text-white text-xs ${task.status === "Completed" ? "bg-green-500" :
                                            task.status === "In Progress" ? "bg-yellow-500" :
                                                "bg-gray-500"
                                        }`}>
                                        {task.status}
                                    </span>
                                </td>
                                <td className="px-4 py-2 text-center">
                                    <button
                                        onClick={() => deleteTask(task.id)}
                                        className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                        {filteredTasks.length === 0 && (
                            <tr>
                                <td colSpan={4} className="px-4 py-4 text-center text-gray-500">
                                    No tasks found.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default TaskManagement;
