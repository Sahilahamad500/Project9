"use client";


import toast from "react-hot-toast";

export default function Offboarding() {
  const checklist = [
    "Company assets returned",
    "Knowledge transfer completed",
    "System access revoked",
    "Exit interview completed",
  ];


  function handleClick () {
    toast.success("Task Added Successfully");
  }


  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-3xl bg-white rounded-2xl shadow p-6 space-y-6">


        <div className="border-b pb-4">
          <h1 className="text-2xl font-semibold">Employee Offboarding</h1>
          <p className="text-sm text-gray-500">
            Please complete all steps before final submission
          </p>
        </div>


        <div className="rounded-xl border p-4 grid grid-cols-2 gap-4 text-sm">
          <p><span className="text-gray-500">Name:</span> Aman Rana</p>
          <p><span className="text-gray-500">Role:</span> Frontend Developer</p>
          <p><span className="text-gray-500">Employee ID:</span> EMP-102</p>
          <p><span className="text-gray-500">Last Working Day:</span> 20 Feb 2026</p>
        </div>


        <div className="rounded-xl border p-4">
          <h2 className="font-medium mb-3">Offboarding Checklist</h2>
          <div className="space-y-2 text-sm">
            {checklist.map((item, i) => (
              <label key={i} className="flex items-center gap-2">
                <input type="checkbox" className="accent-black" />
                {item}
              </label>
            ))}
          </div>
        </div>


        <div className="rounded-xl border p-4">
          <h2 className="font-medium mb-2">Exit Reason</h2>
          <select className="w-full border rounded-lg px-3 py-2 text-sm">
            <option>Better Opportunity</option>
            <option>Personal Reasons</option>
            <option>Relocation</option>
            <option>Other</option>
          </select>
        </div>


        <div className="rounded-xl border p-4">
          <h2 className="font-medium mb-3">Assets Returned</h2>
          <div className="flex gap-6 text-sm">
            <label className="flex items-center gap-2">
              <input type="checkbox" /> Laptop
            </label>
            <label className="flex items-center gap-2">
              <input type="checkbox" /> ID Card
            </label>
            <label className="flex items-center gap-2">
              <input type="checkbox" /> Access Card
            </label>
          </div>
        </div>


        <div className="bg-gray-50 rounded-xl p-4 flex items-center justify-between">
          <p className="text-sm text-gray-600">
            All steps completed? Finalize offboarding.
          </p>
          <button
            onClick={handleClick}
            className="px-5 py-2 bg-black text-white rounded-lg text-sm hover:bg-gray-800">
            Finalize
          </button>
        </div>

      </div>
    </div>
  );
}
