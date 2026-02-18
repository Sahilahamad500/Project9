export default function PerformanceOverview() {
  return (
    <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow p-8 mt-10">
      

      <div className="mb-6">
        <h2 className="text-2xl font-semibold">Performance Overview</h2>
        <p className="text-gray-500">Employee quarterly summary</p>
      </div>

    
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div>
          <p className="text-sm text-gray-500">Employee Name</p>
          <p className="font-medium">Rahul Sharma</p>
        </div>
        <div>
          <p className="text-sm text-gray-500">Role</p>
          <p className="font-medium">Frontend Developer</p>
        </div>
        <div>
          <p className="text-sm text-gray-500">Review Period</p>
          <p className="font-medium">Q1 2026</p>
        </div>
      </div>

    
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-gray-50 p-4 rounded-lg text-center">
          <p className="text-sm text-gray-500">Overall</p>
          <p className="text-2xl font-bold text-green-600">4.5</p>
        </div>
        <div className="bg-gray-50 p-4 rounded-lg text-center">
          <p className="text-sm text-gray-500">Quality</p>
          <p className="text-2xl font-bold">4.7</p>
        </div>
        <div className="bg-gray-50 p-4 rounded-lg text-center">
          <p className="text-sm text-gray-500">Delivery</p>
          <p className="text-2xl font-bold">4.4</p>
        </div>
        <div className="bg-gray-50 p-4 rounded-lg text-center">
          <p className="text-sm text-gray-500">Teamwork</p>
          <p className="text-2xl font-bold">4.6</p>
        </div>
      </div>

   
      <div className="mb-8">
        <h3 className="font-semibold mb-4">Goals Progress</h3>

        <div className="mb-4">
          <div className="flex justify-between text-sm mb-1">
            <span>UI Revamp Project</span>
            <span>80%</span>
          </div>
          <div className="w-full bg-gray-200 h-2 rounded-full">
            <div className="bg-blue-600 h-2 rounded-full w-[80%]" />
          </div>
        </div>

        <div className="mb-4">
          <div className="flex justify-between text-sm mb-1">
            <span>Performance Optimization</span>
            <span>65%</span>
          </div>
          <div className="w-full bg-gray-200 h-2 rounded-full">
            <div className="bg-purple-600 h-2 rounded-full w-[65%]" />
          </div>
        </div>
      </div>

     
      <div className="mb-8">
        <h3 className="font-semibold mb-2">Manager Feedback</h3>
        <p className="text-gray-600 bg-gray-50 p-4 rounded-lg">
          Consistently delivers high-quality work and takes ownership of tasks.
          Strong collaboration with the team.
        </p>
      </div>

     
      <div className="flex gap-4">
        <button className="px-6 py-2 rounded bg-blue-600 text-white hover:bg-blue-700">
          View Full Report
        </button>
        <button className="px-6 py-2 rounded border border-gray-300 hover:bg-gray-50">
          Add Feedback
        </button>
      </div>

    </div>
  );
}