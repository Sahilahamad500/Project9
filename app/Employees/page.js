"use client";

import { useState } from "react";
export default function EmployeeDirectory() {
  const [selectedEmp, setSelectedEmp] = useState(null);
  const [search, setSearch] = useState("");

  const handleShow = (emp) => {
    setSelectedEmp(emp);
  };

  const employees = [
    {
      id: 1,
      name: "Sahil Rana",
      role: "Frontend Developer",
      email: "sahil@company.com",
      avatar: "SR",
    },

    {
      id: 2,
      name: "Ankit Sharma",
      role: "Backend Developer",
      email: "ankit@company.com",
      avatar: "AS",
    },
    {
      id: 3,
      name: "Priya Verma",
      role: "UI/UX Designer",
      email: "priya@company.com",
      avatar: "PV",
    },
    {
      id: 4,
      name: "Sahil Rana",
      role: "Frontend Developer",
      email: "sahil@company.com",
      avatar: "SR",
    },
    {
      id: 5,
      name: "Ankit Sharma",
      role: "Backend Developer",
      email: "ankit@company.com",
      avatar: "AS",
    },
    {
      id: 6,
      name: "Priya Verma",
      role: "UI/UX Designer",
      email: "priya@company.com",
      avatar: "PV",
    },
  ];

 const filteredEmployees = employees.filter(emp => (
    emp.name.toLowerCase().includes(search.toLowerCase())
  ));

  return (
    <div className="p-6">

      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
        <h1 className="text-2xl font-semibold text-gray-800">
          Employee Directory
        </h1>

        <input
          type="text"
          placeholder="Search employee..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full sm:w-64 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

      </div>
      {selectedEmp && (
        <div className="mb-6 p-5 bg-blue-50 border rounded-xl">
          <h2 className="text-xl font-semibold mb-2">Employee Detail</h2>
          <p><b>Name:</b> {selectedEmp.name}</p>
          <p><b>Role:</b> {selectedEmp.role}</p>
          <p><b>Email:</b> {selectedEmp.email}</p>

          <button
            onClick={() => setSelectedEmp(null)}
            className="mt-3 px-3 py-1 bg-red-500 text-white rounded"
          >
            Close
          </button>
        </div>
      )}


      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
       {filteredEmployees.map((emp) => (
          <div
            key={emp.id}
            className="bg-white rounded-xl shadow-md hover:shadow-lg transition p-5"
          >

            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-full bg-blue-500 text-white flex items-center justify-center font-semibold text-lg">
                {emp.avatar}
              </div>

              <div>
                <h2 className="text-lg font-semibold text-gray-800">
                  {emp.name}
                </h2>
                <p className="text-sm text-gray-500">{emp.role}</p>
              </div>
            </div>


            <div className="text-sm text-gray-600">
              <p>Email:</p>
              <p className="font-medium text-gray-800">{emp.email}</p>
            </div>


            <div className="mt-4 flex gap-2"> 
              <button
                onClick={() => handleShow(emp)}
                className="flex-1 px-3 py-2 text-sm rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition">
                View
              </button>
              <button className="flex-1 px-3 py-2 text-sm rounded-lg border hover:bg-gray-100 transition">
                Message
              </button>
            </div>
          </div>

        ))}
      </div>
    </div>
  );
}
