export default function PerformancePage() {
  const employees = [
    { name: "Amit", role: "Developer", score: 82 },
    { name: "Neha", role: "Designer", score: 70 },
    { name: "Rahul", role: "Tester", score: 90 },
  ];

  const kpis = [
    { label: "Productivity", value: 85 },
    { label: "Quality", value: 78 },
    { label: "Attendance", value: 92 },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-2xl font-bold mb-6">Performance Management</h1>

     
      <div className="grid md:grid-cols-3 gap-4 mb-6">
        <Card title="Overall Score" value="82%" change={4} />
        <Card title="Top Performer" value="Rahul" change={6} />
        <Card title="Goals Completed" value="14 / 18" change={-2} />
      </div>

     
      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div className="bg-white p-5 rounded-xl shadow">
          <h3 className="font-semibold mb-3">Goal Progress</h3>
          <Progress label="Project Delivery" value={80} />
          <Progress label="Client Satisfaction" value={70} />
        </div>

        <div className="bg-white p-5 rounded-xl shadow">
          <h3 className="font-semibold mb-3">Manager Feedback</h3>
          <p className="text-sm text-gray-600 leading-relaxed">
            Employee performance has improved significantly this quarter.
            Teamwork and delivery speed are commendable. Focus more on
            documentation and testing quality.
          </p>
          <div className="mt-3">
            <Rating rating={4} />
          </div>
        </div>
      </div>

   
      <div className="bg-white p-5 rounded-xl shadow mb-6">
        <h3 className="font-semibold mb-4">Key Performance Indicators</h3>
        <div className="space-y-3">
          {kpis.map((kpi, i) => (
            <Progress key={i} label={kpi.label} value={kpi.value} />
          ))}
        </div>
      </div>

      
      <div className="bg-white rounded-xl shadow overflow-x-auto">
        <table className="w-full text-left">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-3">Employee</th>
              <th className="p-3">Role</th>
              <th className="p-3">Score</th>
              <th className="p-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((emp, i) => (
              <tr key={i} className="border-t">
                <td className="p-3">{emp.name}</td>
                <td className="p-3">{emp.role}</td>
                <td className="p-3 font-semibold">{emp.score}</td>
                <td className="p-3">
                  <span
                    className={`px-3 py-1 rounded-full text-sm ${
                      emp.score >= 75
                        ? "bg-green-100 text-green-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {emp.score >= 75 ? "Excellent" : "Needs Improvement"}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}



function Card({ title, value, change }) {
  return (
    <div className="bg-white p-5 rounded-xl shadow">
      <p className="text-gray-500 text-sm">{title}</p>
      <h2 className="text-2xl font-bold mt-1">{value}</h2>
      <p
        className={`text-sm mt-1 ${
          change >= 0 ? "text-green-600" : "text-red-600"
        }`}
      >
        {change >= 0 ? "▲" : "▼"} {change}%
      </p>
    </div>
  );
}

function Progress({ label, value }) {
  return (
    <div>
      <div className="flex justify-between text-sm mb-1">
        <span>{label}</span>
        <span>{value}%</span>
      </div>
      <div className="bg-gray-200 h-2 rounded-full">
        <div
          className="bg-blue-600 h-2 rounded-full"
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  );
}

function Rating({ rating }) {
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          className={`text-xl ${
            star <= rating ? "text-yellow-400" : "text-gray-300"
          }`}
        >
          ★
        </span>
      ))}
    </div>
  );
}