"use client";

import { useState } from "react";
import { House } from "@deemlol/next-icons";



export default function LeaveManagement() {
  const [selectedLeave, setSelectedLeave] = useState(null);

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

  const [newLeave, setnewLeave] = useState({
    from: "",
    to: "",
    type: "",
    day: "",
    reason: "",
  });

  function handleSubmit() {
    if (!newLeave.from || !newLeave.to || !newLeave.type || !newLeave.day) return;

    setRequests([
      ...requests,
      {
        id: Date.now(),
        type: newLeave.type,
        from: newLeave.from,
        to: newLeave.to,
        status: "Pending",
        reason: newLeave.reason,
      },
    ]);

    setnewLeave({
      from: "",
      to: "",
      type: "",
      day: "",
      reason: "",
    });
  }

  function showApplication() {
    alert("hello")
  }

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
          <input
            type="date"
            value={newLeave.from}
            onChange={(e) => setnewLeave({ ...newLeave, from: e.target.value })}
            className="border rounded-lg px-4 py-2"
          />

          <input
            type="date"
            value={newLeave.to}
            onChange={(e) => setnewLeave({ ...newLeave, to: e.target.value })}
            className="border rounded-lg px-4 py-2"
          />

          <select
            value={newLeave.type}
            onChange={(e) => setnewLeave({ ...newLeave, type: e.target.value })}
            className="border rounded-lg px-4 py-2"
          >
            <option value="">Leave Type</option>
            <option>Sick Leave</option>
            <option>Casual Leave</option>
            <option>Earned Leave</option>
          </select>

          <select
            value={newLeave.day}
            onChange={(e) => setnewLeave({ ...newLeave, day: e.target.value })}
            className="border rounded-lg px-4 py-2"
          >
            <option value="">Day Type</option>
            <option>Full Day</option>
            <option>Half Day</option>
          </select>
        </div>

        <textarea
          value={newLeave.reason}
          onChange={(e) => setnewLeave({ ...newLeave, reason: e.target.value })}
          placeholder="Reason for leave..."
          className="w-full border rounded-lg px-4 py-2 mt-4"
        />

        <button
          onClick={handleSubmit}
          className="mt-4 px-5 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
          Submit Leave
        </button>
      </div>

      {selectedLeave && (
        <div className="bg-blue-50 border rounded-xl p-5">
          <h3 className="text-lg font-semibold mb-2">
            Leave Application Detail
          </h3>

          <p><b>Type:</b> {selectedLeave.type}</p>
          <p><b>From:</b> {selectedLeave.from}</p>
          <p><b>To:</b> {selectedLeave.to}</p>
          <p><b>Status:</b> {selectedLeave.status}</p>
          <p><b>reason:</b> {selectedLeave.reason}</p>


          <button
            onClick={() => setSelectedLeave(null)}
            className="mt-3 px-3 py-1 bg-red-500 text-white rounded"
          >
            Close
          </button>
        </div>
      )}

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
                onClick={() => setSelectedLeave(req)}
                className="cursor-pointer"
              >
                <House size={14} className="text-blue-500" />
              </span>

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
