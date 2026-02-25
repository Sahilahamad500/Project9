"use client";

import { useState, useEffect } from "react";
import toast from "react-hot-toast";

export default function TicketManagement() {

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

  const [tickets, setTickets] = useState([]);
  const [newTicket, setNewTicket] = useState({
    title: "",
    type: "",
    priority: "",
    status: "",
    description: "",
  });

  const fetchTickets = async () => {
    try {
      const res = await fetch("/api/ticket");
      const data = await res.json();
      setTickets(data);
    } catch (err) {
      toast.error("failed to fetch tickets");
    }
  }

  useEffect(() => {
    fetchTickets();
  }, [])

  const [invalid, setIsInvalid] = useState({
    title: false,
    type: false,
    priority: false,
    status: false,
    description: false
  })

  const handleSubmit = async () => {
    const titleEmpty = !newTicket.title.trim();
    const typeEmpty = !newTicket.type.trim();
    const priorityEmpty = !newTicket.priority.trim();
    const statusEmpty = !newTicket.status.trim();
    const descriptionEmpty = !newTicket.description.trim();

    setIsInvalid({
      title: titleEmpty,
      type: typeEmpty,
      priority: priorityEmpty,
      status: statusEmpty,
      description: descriptionEmpty,
    });

    if (titleEmpty || typeEmpty || priorityEmpty || statusEmpty || descriptionEmpty) {
      toast.error("All fields are required");
      return;
    }

    try {
      const res = await fetch("/api/ticket", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newTicket),
      });

      if (!res.ok) {
        throw new Error("API failed");
      }

      toast.success("Ticket added successfully");

      await fetchTickets();

      setNewTicket({
        title: "",
        type: "",
        priority: "",
        status: "",
        description: "",
      });

      setIsInvalid({
        title: false,
        type: false,
        priority: false,
        status: false,
        description: false,
      });

    } catch (err) {
      toast.error("Something went wrong");
    }
  };

  const deleteTicket = (id) => {
    setTickets(tickets.filter((t) => t.id !== id));
  };

  return (
    <div className="p-6 space-y-6 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-semibold text-gray-800">Ticket Management</h1>

      <div className="bg-white rounded-xl shadow-md p-6">
        <h2 className="text-lg font-semibold mb-4">Create New Ticket</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input
            type="text"
            value={newTicket.title}
            onChange={(e) => {
              setNewTicket({ ...newTicket, title: e.target.value })
              setIsInvalid({ ...invalid, title: false, })
            }}
            className={`border rounded-lg px-4 py-2 w-full ${invalid.title ? "border-red-500" : "border-gray-300"} `}
            placeholder="Ticket Title"
          />
          <select
            value={newTicket.type}
            onChange={(e) => {
              setNewTicket({ ...newTicket, type: e.target.value })
              setIsInvalid({ ...invalid, type: false, })
            }}
            className={`border  rounded-lg px-4 py-2 w-full ${invalid.type ? "border-red-500" : "border-gray-300"} `}
          >
            <option value="">Type</option>
            <option>Bug</option>
            <option>Request</option>
            <option>Task</option>
          </select>

          <select
            value={newTicket.priority}
            onChange={(e) => {
              setNewTicket({ ...newTicket, priority: e.target.value })
              setIsInvalid({ ...invalid, priority: false, })
            }}
            className={`border  rounded-lg px-4 py-2 w-full ${invalid.priority ? "border-red-500" : "border-gray-300"} `}
          >
            <option value="">Priority</option>
            <option>High</option>
            <option>Medium</option>
            <option>Low</option>
          </select>

          <select
            value={newTicket.status}
            onChange={(e) => {
              setNewTicket({ ...newTicket, status: e.target.value })
              setIsInvalid({ ...invalid, status: false, })
            }}
            className={`border  rounded-lg px-4 py-2 w-full  ${invalid.status ? "border-red-500" : "border-gray-300"} `}
          >
            <option value="">Status</option>
            <option>Open</option>
            <option>In Progress</option>
            <option>Closed</option>
          </select>
        </div>

        <textarea
          value={newTicket.description}
          onChange={(e) => {
            setNewTicket({ ...newTicket, description: e.target.value })
            setIsInvalid({ ...invalid, description: false, })
          }}
          placeholder="Description..."
          className={`border  rounded-lg px-4 py-2 w-full mt-4 ${invalid.description ? "border-red-500" : "border-gray-300"} `}
        />

        <button
          onClick={handleSubmit}
          className="mt-4 px-5 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
        >
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
                    <button
                      onClick={() => alert(ticket.description)}
                      className="px-3 py-1 rounded-lg bg-green-500 text-white hover:bg-green-600 transition text-sm"
                    >
                      View
                    </button>
                    <button
                      onClick={() => deleteTicket(ticket.id)}
                      className="px-3 py-1 rounded-lg bg-red-500 text-white hover:bg-red-600 transition text-sm"
                    >
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
