"use client";

import { useState } from "react";

export default function ExpenseManagement() {
  const [expenses, setExpenses] = useState([
    { id: 1, title: "Travel", amount: 1200, status: "Pending" },
    { id: 2, title: "Food", amount: 450, status: "Approved" },
    { id: 3, title: "Internet", amount: 999, status: "Rejected" },
  ]);

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex justify-center">
      <div className="w-full max-w-4xl bg-white rounded-2xl shadow p-6 space-y-6">

        {/* Header */}
        <div className="flex items-center justify-between border-b pb-4">
          <div>
            <h1 className="text-2xl font-semibold">Expense Management</h1>
            <p className="text-sm text-gray-500">
              Submit and track your expenses
            </p>
          </div>

          <button className="px-4 py-2 bg-black text-white rounded-lg text-sm hover:bg-gray-800">
            + Add Expense
          </button>
        </div>

        {/* Summary */}
        <div className="grid grid-cols-3 gap-4 text-sm">
          <div className="border rounded-xl p-4">
            <p className="text-gray-500">Total Expenses</p>
            <p className="text-xl font-semibold">₹ 2,649</p>
          </div>
          <div className="border rounded-xl p-4">
            <p className="text-gray-500">Approved</p>
            <p className="text-xl font-semibold text-green-600">₹ 450</p>
          </div>
          <div className="border rounded-xl p-4">
            <p className="text-gray-500">Pending</p>
            <p className="text-xl font-semibold text-orange-500">₹ 1,200</p>
          </div>
        </div>

        {/* Expense List */}
        <div className="border rounded-xl overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-gray-50 text-gray-500">
              <tr>
                <th className="text-left p-3">Title</th>
                <th className="text-left p-3">Amount</th>
                <th className="text-left p-3">Status</th>
              </tr>
            </thead>
            <tbody>
              {expenses.map((expense) => (
                <tr key={expense.id} className="border-t">
                  <td className="p-3">{expense.title}</td>
                  <td className="p-3">₹ {expense.amount}</td>
                  <td className="p-3">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium
                        ${
                          expense.status === "Approved"
                            ? "bg-green-100 text-green-700"
                            : expense.status === "Pending"
                            ? "bg-orange-100 text-orange-700"
                            : "bg-red-100 text-red-700"
                        }`}
                    >
                      {expense.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footer Action */}
        <div className="flex justify-end">
          <button className="px-5 py-2 bg-black text-white rounded-lg text-sm hover:bg-gray-800">
            Submit for Approval
          </button>
        </div>

      </div>
    </div>
  );
}
