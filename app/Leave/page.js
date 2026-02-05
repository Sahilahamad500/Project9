"use client";

import { useState } from "react";

export default function LeaveManagement() {
  const [requests, setRequests] = useState([
    {
      id: 1,
      type: "Sick Leave",
      from: "2026-02-10",
      to: "2026-02-12",
      status: "Approved",
    },
    {
      id: 2,
      type: "Casual Leave",
      from: "2026-02-20",
      to: "2026-02-21",
      status: "Pending",
    },
  ]);

  const summary = {
    total: 24,
    used: 10,
    remaining: 14,
    pending: requests.filter((r) => r.status === "Pending").length,
  };

  const statusStyle = (status) => {
    switch (status) {
      case "Approved":
        return "bg-green-100 text-green-700";
      case "Pending":
        return "bg-yellow-100 text-yellow-700";
      case "Rejected":
        return "bg-red-100 text-red-700";
    }
  };

  return (
    <div className="p-6 space-y-6 bg-gray-50 min-h-screen">
     
      <h1 className="text-2xl font-semibold text-gray-800">
        Leave Management
      </h1>

    
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {[
          { label: "Total Leaves", value: summary.total, color: "bg-blue-500" },
          { label: "Used", value: summary.used, color: "bg-red-500" },
          {
            label: "Remaining",
            value: summary.remaining,
            color: "bg-green-500",
          },
          {
            label: "Pending",
            value: summary.pending,
            color: "bg-yellow-500",
          },
        ].map((item) => (
          <div
            key={item.label}
            className="bg-white rounded-xl shadow-md p-4"
          >
            <p className="text-sm text-gray-500">{item.label}</p>
            <p className="text-2xl font-semibold text-gray-800">
              {item.value}
            </p>
            <div className={`h-1 w-full mt-3 rounded ${item.color}`} />
          </div>
        ))}
      </div>

     
      <div className="bg-white rounded-xl shadow-md p-6">
        <h2 className="text-lg font-semibold mb-4">Apply Leave</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input type="date" className="border rounded-lg px-4 py-2" />
          <input type="date" className="border rounded-lg px-4 py-2" />

          <select className="border rounded-lg px-4 py-2">
            <option>Leave Type</option>
            <option>Sick Leave</option>
            <option>Casual Leave</option>
            <option>Earned Leave</option>
          </select>

          <select className="border rounded-lg px-4 py-2">
            <option>Day Type</option>
            <option>Full Day</option>
            <option>Half Day</option>
          </select>
        </div>

        <textarea
          placeholder="Reason for leave..."
          className="w-full border rounded-lg px-4 py-2 mt-4"
        />

        <button className="mt-4 px-5 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
          Submit Leave
        </button>
      </div>

    
      <div className="bg-white rounded-xl shadow-md p-6">
        <h2 className="text-lg font-semibold mb-4">Leave Requests</h2>

        <div className="space-y-3">
          {requests.map((req) => (
            <div
              key={req.id}
              className="flex items-center justify-between border rounded-lg p-4"
            >
              <div>
                <p className="font-medium">{req.type}</p>
                <p className="text-sm text-gray-500">
                  {req.from} → {req.to}
                </p>
              </div>

              <span
                className={`px-3 py-1 text-sm rounded-full ${statusStyle(
                  req.status
                )}`}
              >
                {req.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
