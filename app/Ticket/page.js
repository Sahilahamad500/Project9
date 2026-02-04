"use client";

import { useState } from "react";

export default function TicketManagement() {
  const [tickets, setTickets] = useState([
    {
      id: 1,
      title: "Cannot login to system",
      type: "Bug",
      priority: "High",
      status: "Open",
    },
    {
      id: 2,
      title: "Request new software",
      type: "Request",
      priority: "Medium",
      status: "In Progress",
    },
    {
      id: 3,
      title: "Update profile info",
      type: "Task",
      priority: "Low",
      status: "Closed",
    },
  ]);

  const statusColor = (status) => {
    switch (status) {
      case "Open":
        return "bg-red-100 text-red-700";
      case "In Progress":
        return "bg-yellow-100 text-yellow-700";
      case "Closed":
        return "bg-green-100 text-green-700";
      default:
        return "";
    }
  };

  const priorityColor = (priority) => {
    switch (priority) {
      case "High":
        return "bg-red-200 text-red-800";
      case "Medium":
        return "bg-yellow-200 text-yellow-800";
      case "Low":
        return "bg-green-200 text-green-800";
      default:
        return "";
    }
  };

  return (
    <div className="p-6 space-y-6 bg-gray-50 min-h-screen">
     
      <h1 className="text-2xl font-semibold text-gray-800">
        Ticket Management
      </h1>

     
      <div className="bg-white rounded-xl shadow-md p-6">
        <h2 className="text-lg font-semibold mb-4">Create New Ticket</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Ticket Title"
            className="border border-gray-300 rounded-lg px-4 py-2 w-full"
          />
          <select className="border border-gray-300 rounded-lg px-4 py-2 w-full">
            <option>Type</option>
            <option>Bug</option>
            <option>Request</option>
            <option>Task</option>
          </select>
          <select className="border border-gray-300 rounded-lg px-4 py-2 w-full">
            <option>Priority</option>
            <option>High</option>
            <option>Medium</option>
            <option>Low</option>
          </select>
          <select className="border border-gray-300 rounded-lg px-4 py-2 w-full">
            <option>Status</option>
            <option>Open</option>
            <option>In Progress</option>
            <option>Closed</option>
          </select>
        </div>
        <textarea
          placeholder="Description..."
          className="w-full border border-gray-300 rounded-lg px-4 py-2 mt-4"
        />
        <button className="mt-4 px-5 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
          Create Ticket
        </button>
      </div>

     
      <div className="bg-white rounded-xl shadow-md p-6">
        <h2 className="text-lg font-semibold mb-4">Tickets</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse table-auto">
            <thead>
              <tr className="bg-gray-100">
                <th className="px-4 py-2 text-left">Title</th>
                <th className="px-4 py-2 text-left">Type</th>
                <th className="px-4 py-2 text-left">Priority</th>
                <th className="px-4 py-2 text-left">Status</th>
                <th className="px-4 py-2 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {tickets.map((ticket) => (
                <tr key={ticket.id} className="border-b">
                  <td className="px-4 py-2">{ticket.title}</td>
                  <td className="px-4 py-2">{ticket.type}</td>
                  <td className="px-4 py-2">
                    <span
                      className={`px-2 py-1 rounded-full text-sm ${priorityColor(
                        ticket.priority
                      )}`}
                    >
                      {ticket.priority}
                    </span>
                  </td>
                  <td className="px-4 py-2">
                    <span
                      className={`px-2 py-1 rounded-full text-sm ${statusColor(
                        ticket.status
                      )}`}
                    >
                      {ticket.status}
                    </span>
                  </td>
                  <td className="px-4 py-2 flex gap-2">
                    <button className="px-3 py-1 rounded-lg bg-green-500 text-white hover:bg-green-600 transition text-sm">
                      View
                    </button>
                    <button className="px-3 py-1 rounded-lg bg-red-500 text-white hover:bg-red-600 transition text-sm">
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
