export default function AttendancePage() {
  return (
    <div className="space-y-6">
     
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Attendance</h1>
          <p className="text-gray-500 mt-1">
            Track employee attendance and working hours
          </p>
        </div>

        <button className="px-4 py-2 bg-blue-500 text-white rounded-md text-sm hover:bg-blue-600 transition">
          Mark Attendance
        </button>
      </div>

    
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {[
          { title: "Present Today", value: "42" },
          { title: "Absent", value: "5" },
          { title: "On Leave", value: "3" },
          { title: "Late Check-ins", value: "2" },
        ].map((item, i) => (
          <div
            key={i}
            className="bg-white rounded-lg border p-4 shadow-sm"
          >
            <p className="text-sm text-gray-500">{item.title}</p>
            <h2 className="text-2xl font-semibold text-gray-900 mt-1">
              {item.value}
            </h2>
          </div>
        ))}
      </div>

    
      <div className="bg-white rounded-lg border shadow-sm">
        <div className="p-4 border-b">
          <h2 className="text-lg font-semibold text-gray-800">
            Today’s Attendance
          </h2>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-100 text-gray-600">
              <tr>
                <th className="px-4 py-3 text-left">Employee</th>
                <th className="px-4 py-3 text-left">Check In</th>
                <th className="px-4 py-3 text-left">Check Out</th>
                <th className="px-4 py-3 text-left">Status</th>
              </tr>
            </thead>

            <tbody className="divide-y">
              {[
                { name: "Rahul Sharma", in: "09:10 AM", out: "06:05 PM", status: "Present" },
                { name: "Anjali Verma", in: "09:45 AM", out: "-", status: "Late" },
                { name: "Amit Singh", in: "-", out: "-", status: "Absent" },
                { name: "Neha Gupta", in: "09:05 AM", out: "06:00 PM", status: "Present" },
              ].map((row, i) => (
                <tr key={i} className="hover:bg-gray-50">
                  <td className="px-4 py-3 font-medium text-gray-800">
                    {row.name}
                  </td>
                  <td className="px-4 py-3">{row.in}</td>
                  <td className="px-4 py-3">{row.out}</td>
                  <td className="px-4 py-3">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium
                        ${
                          row.status === "Present"
                            ? "bg-green-100 text-green-700"
                            : row.status === "Late"
                            ? "bg-yellow-100 text-yellow-700"
                            : "bg-red-100 text-red-700"
                        }`}
                    >
                      {row.status}
                    </span>
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
