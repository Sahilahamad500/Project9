"use client";

export default function Payroll() {
  const payrollData = [
    {
      id: 1,
      name: "Ankit Kapoor",
      role: "Frontend Developer",
      salary: 60000,
      deductions: 5000,
      netPay: 55000,
      status: "Paid",
    },
    {
      id: 2,
      name: "Amit Verma",
      role: "Backend Developer",
      salary: 55000,
      deductions: 3000,
      netPay: 52000,
      status: "Pending",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex justify-center">
      <div className="w-full max-w-5xl bg-white rounded-2xl shadow p-6 space-y-6">


        <div className="flex items-center justify-between border-b pb-4">
          <div>
            <h1 className="text-2xl font-semibold">Payroll Management</h1>
            <p className="text-sm text-gray-500">
              Monthly salary processing and payment status
            </p>
          </div>

          <select className="border rounded-lg px-3 py-2 text-sm">
            <option>February 2026</option>
            <option>January 2026</option>
            <option>December 2025</option>
          </select>
        </div>


        <div className="grid grid-cols-3 gap-4 text-sm">
          <div className="border rounded-xl p-4">
            <p className="text-gray-500">Total Payroll</p>
            <p className="text-xl font-semibold">₹ 1,15,000</p>
          </div>
          <div className="border rounded-xl p-4">
            <p className="text-gray-500">Total Deductions</p>
            <p className="text-xl font-semibold text-red-600">₹ 8,000</p>
          </div>
          <div className="border rounded-xl p-4">
            <p className="text-gray-500">Net Pay</p>
            <p className="text-xl font-semibold text-green-600">₹ 1,07,000</p>
          </div>
        </div>


        <div className="border rounded-xl overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-gray-50 text-gray-500">
              <tr>
                <th className="text-left p-3">Employee</th>
                <th className="text-left p-3">Role</th>
                <th className="text-left p-3">Salary</th>
                <th className="text-left p-3">Deductions</th>
                <th className="text-left p-3">Net Pay</th>
                <th className="text-left p-3">Status</th>
              </tr>
            </thead>

            <tbody>
              {payrollData.map((emp) => (
                <tr key={emp.id} className="border-t">
                  <td className="p-3 font-medium">{emp.name}</td>
                  <td className="p-3">{emp.role}</td>
                  <td className="p-3">₹ {emp.salary}</td>
                  <td className="p-3 text-red-600">₹ {emp.deductions}</td>
                  <td className="p-3 text-green-600 font-medium">
                    ₹ {emp.netPay}
                  </td>
                  <td className="p-3">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium
                        ${emp.status === "Paid"
                          ? "bg-green-100 text-green-700"
                          : "bg-orange-100 text-orange-700"
                        }`}
                    >
                      {emp.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        
        <div className="flex justify-end gap-3">
          <button className="px-5 py-2 border rounded-lg text-sm hover:bg-gray-50">
            Download Payslips
          </button>
          <button className="px-5 py-2 bg-black text-white rounded-lg text-sm hover:bg-gray-800">
            Process Payroll
          </button>
        </div>

      </div>
    </div>
  );
}
