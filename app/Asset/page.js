// app/components/AssetManagement.js
"use client";
import { useState } from "react";
import toast from "react-hot-toast";

const AssetManagement = () => {
  const [assets, setAssets] = useState([
    { id: 1, name: "Laptop Dell XPS", type: "Laptop", assignedTo: "John Doe", status: "Active" },
    { id: 2, name: "iPhone 13", type: "Mobile", assignedTo: "Jane Smith", status: "In Repair" },
    { id: 3, name: "Projector Epson", type: "Equipment", assignedTo: "-", status: "Available" },
  ]);

  const [newAsset, setNewAsset] = useState(
    {
      name: "",
      type: "",
      assignedTo: "",
      status: "Active"
    }
  );
  const [search, setSearch] = useState("");
  const [inveled, setInveled] = useState(
    {
      name: false,
      type: false,
      assignedTo: false,
      status: false
    }
  )


  const addAsset = () => {
    const nameEmpty = !newAsset.name.trim()
    const typeEmpty = !newAsset.type.trim()
    const assignedTo = !newAsset.assignedTo.trim()
    const status = !newAsset.status.trim()

    setInveled({
      name: nameEmpty,
      type: typeEmpty,
      assignedTo: assignedTo,
      status: status,
    });


    if (!newAsset.name || !newAsset.type || !newAsset.assignedTo || !newAsset.status) {
      toast.error("Please all field is requred")
      return;
    }
    setAssets([...assets, { ...newAsset, id: Date.now() }]);
    setNewAsset({ name: "", type: "", assignedTo: "", status: "Active" });
    setInveled({ name: false, type: false, assignedTo: false, status: false, })
    setSearch("");

    toast.success("Your asset are added successfully")
  };
  const deleteAsset = (id) => setAssets(assets.filter(a => a.id !== id));


  const filteredAssets = assets.filter(a =>
    a.name.toLowerCase().includes(search.toLowerCase()) ||
    a.type.toLowerCase().includes(search.toLowerCase()) ||
    a.assignedTo.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h2 className="text-2xl font-semibold mb-4">Asset Management</h2>
      <div className="flex flex-wrap gap-4 mb-6">
        <input
          type="text"
          placeholder="Search assets..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 min-w-[200px] px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-gray-400 text-black"
        />
        <input
          type="text"
          placeholder="Asset Name"
          value={newAsset.name}
          onChange={(e) => {
            setNewAsset({ ...newAsset, name: e.target.value });
            setInveled({ ...inveled, name: false });
          }}
          className={`flex-1 min-w-[150px] px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-gray-400 text-black ${inveled.name ? "border-red-500" : "border-blue-600"
            }`}
        />

        <input
          type="text"
          placeholder="Type"
          value={newAsset.type}
          onChange={(e) => {
            setNewAsset({ ...newAsset, type: e.target.value });
            setInveled({ ...inveled, type: false });
          }}
          className={`flex-1 min-w-[150px] px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-gray-400 text-black ${inveled.type ? "border-red-500" : "border-blue-600"
            }`}
        />
        <input
          type="text"
          placeholder="Assigned To"
          value={newAsset.assignedTo}
          onChange={(e) => {
            setNewAsset({ ...newAsset, assignedTo: e.target.value });
            setInveled({ ...inveled, assignedTo: false });
          }}
          className={`flex-1 min-w-[150px] px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-gray-400 text-black ${inveled.assignedTo ? "border-red-500" : "border-blue-600"
            }`}
        />
        <select
          value={newAsset.status}
         onChange={(e) => {
            setNewAsset({ ...newAsset, assignedTo: e.target.value });
            setInveled({ ...inveled, assignedTo: false });
          }}
          className={`flex-1 min-w-[150px] px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-gray-400 text-black ${inveled.assignedTo ? "border-red-500" : "border-blue-600"
            }`}
        >
          <option>Active</option>
          <option>Available</option>
          <option>In Repair</option>
          <option>Retired</option>
        </select>
        <button
          onClick={addAsset}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Add Asset
        </button>
      </div>
      <div className="overflow-x-auto bg-white rounded-lg  shadow-md">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Name</th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Type</th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Assigned To</th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Status</th>
              <th className="px-4 py-2 text-center text-sm font-medium text-gray-700">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {filteredAssets.map(asset => (
              <tr key={asset.id}>
                <td className="px-4 py-2">{asset.name}</td>
                <td className="px-4 py-2">{asset.type}</td>
                <td className="px-4 py-2">{asset.assignedTo || "-"}</td>
                <td className="px-4 py-2">
                  <span className={`px-2 py-1 rounded text-white text-xs ${asset.status === "Active" ? "bg-green-500" :
                    asset.status === "Available" ? "bg-blue-500" :
                      asset.status === "In Repair" ? "bg-orange-500" :
                        "bg-gray-500"
                    }`}>
                    {asset.status}
                  </span>
                </td>
                <td className="px-4 py-2 text-center">
                  <button
                    onClick={() => deleteAsset(asset.id)}
                    className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
            {filteredAssets.length === 0 && (
              <tr>
                <td colSpan={5} className="px-4 py-4 text-center text-gray-500">
                  No assets found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>


    </div>
  );
};

export default AssetManagement;
