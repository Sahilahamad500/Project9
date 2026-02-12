'use client';
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-10">

      <div className="w-24 h-24 bg-pink-500 rounded-full flex items-center justify-center text-white font-bold text-4xl mb-8 shadow-lg">
        SA
      </div>

      <p className="text-gray-600 text-lg mb-2">Welcome To CollectivWork Sahil Ahamad</p>

      <h1 className="text-2xl font-bold text-blue-600 text-center mb-4 max-w-4xl">
        Empowering Your Operations All in One Place
      </h1>

      <p className="text-gray-700 text-lg text-center max-w-3xl mb-8">
        Simplify workflows and boost efficiency with our powerful CRM, HRMS, PMS, and ATS. Choose the tools that best suit your needs.
      </p>


      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl w-full">

        <Link href="/home">
          <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl p-8 cursor-pointer">
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">HRMS</h2>
          </div>
        </Link>


        <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl  p-8">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">PMS</h2>
        </div>


        <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl p-8">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">ATS</h2>
        </div>


        <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl p-8">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">CRM</h2>
        </div>
      </div>
    </div>
  );
}