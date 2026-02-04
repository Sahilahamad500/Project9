"use client";

import { useState } from "react";

export default function DocumentManagement() {
  const [documents, setDocuments] = useState([
    { id: 1, name: "Resume.pdf", type: "PDF", status: "Approved" },
    { id: 2, name: "Contract.docx", type: "Word", status: "Pending" },
    { id: 3, name: "Invoice.xlsx", type: "Excel", status: "Rejected" },
  ]);

  const statusColor = (status) => {
    switch (status) {
      case "Approved":
        return "bg-green-100 text-green-700";
      case "Pending":
        return "bg-yellow-100 text-yellow-700";
      case "Rejected":
        return "bg-red-100 text-red-700";
      default:
        return "";
    }
  };

  return (
    <div className="p-6 space-y-6 bg-gray-50 min-h-screen">
     
      <h1 className="text-2xl font-semibold text-gray-800">
        Document Management
      </h1>

      
      <div className="bg-white rounded-xl shadow-md p-6">
        <h2 className="text-lg font-semibold mb-4 text-gray-600">Upload Document</h2>
        <div className="flex flex-col sm:flex-row gap-4 items-center">
          <input
            type="file"
            className="border rounded-lg px-4 py-2 w-full sm:w-auto border-gray-400 "
          />
          <input
            type="text"
            placeholder="Document Name"
            className="border rounded-lg px-4 py-2 flex-1 border-gray-400"
          />
          <button className="px-5 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
            Upload
          </button>
        </div>
      </div>


      <div className="bg-white rounded-xl shadow-md p-6">
        <h2 className="text-lg font-semibold mb-4">Documents</h2>

        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse table-auto">
            <thead>
              <tr className="bg-gray-100">
                <th className="text-left px-4 py-2">Name</th>
                <th className="text-left px-4 py-2">Type</th>
                <th className="text-left px-4 py-2">Status</th>
                <th className="text-left px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {documents.map((doc) => (
                <tr key={doc.id} className="border-b">
                  <td className="px-4 py-2">{doc.name}</td>
                  <td className="px-4 py-2">{doc.type}</td>
                  <td className="px-4 py-2">
                    <span
                      className={`px-3 py-1 rounded-full text-sm ${statusColor(
                        doc.status
                      )}`}
                    >
                      {doc.status}
                    </span>
                  </td>
                  <td className="px-4 py-2 flex gap-2">
                    <button className="px-3 py-1 rounded-lg bg-green-500 text-white hover:bg-green-600 transition text-sm">
                      View
                    </button>
                    <button className="px-3 py-1 rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition text-sm">
                      Download
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
