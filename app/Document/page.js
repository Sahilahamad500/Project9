"use client";

import { useState, useEffect, useRef } from "react";
import toast from "react-hot-toast";

const fileToBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
  });


export default function DocumentManagement() {
  const [documents, setDocuments] = useState([]);
  const [file, setFile] = useState(null);
  const [docName, setDocName] = useState("");
  const [selectedEmp, setSelectedEmp] = useState(null);
  const [preview, setPreview] = useState(null);

  const fileInputRef = useRef(null);


  useEffect(() => {
    const savedDocs = localStorage.getItem("documents");
    if (savedDocs) {
      setDocuments(JSON.parse(savedDocs));
    }
  }, []);


  async function handleUpload() {
    if (!file || !docName) {
      toast.error("Please select file and enter document name");
      return;
    } else {

      const base64 = await fileToBase64(file);

      const newDoc = {
        id: Date.now(),
        name: docName,
        type: file.type,
        status: "Pending",
        fileData: base64,
      };

      const updatedDocs = [...documents, newDoc];
      setDocuments(updatedDocs);

      localStorage.setItem("documents", JSON.stringify(updatedDocs));

      toast.success("Document saved locally");

      setFile(null);
      setDocName("");
      setPreview(null);
    }
    if (fileInputRef.current) fileInputRef.current.value = "";
  }


  const deleteDocument = (id) => {
    const updatedDocs = documents.filter(doc => doc.id !== id);
    setDocuments(updatedDocs);
    localStorage.setItem("documents", JSON.stringify(updatedDocs));
    toast.success("Document deleted");
  };

  const handleShow = (emp) => {
    setSelectedEmp(emp);
  };


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
            ref={fileInputRef}
            type="file"
            onChange={(e) => {
              const selectedFile = e.target.files[0];
              setFile(selectedFile);

              if (selectedFile && selectedFile.type.startsWith("image/")) {
                setPreview(URL.createObjectURL(selectedFile));
              } else {
                setPreview(null);
              }
            }}
            className="border rounded-lg px-4 py-2 w-full sm:w-auto border-gray-400"
          />
          <input
            type="text"
            value={docName}
            placeholder="Document Name"
            onChange={(e) => setDocName(e.target.value)}
            className="border rounded-lg px-4 py-2 flex-1 border-gray-400"
          />
          <button
            onClick={handleUpload}
            className="px-5 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
            Upload    
          </button>
        </div>
        {preview && (
          <div className="mt-4">
            <p className="text-sm text-gray-500 mb-1">Preview:</p>
            <img
              src={preview}
              alt="Preview"
              className="w-24 h-24 object-cover rounded-lg border"
            />
          </div>
        )}
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
                    <button
                      onClick={() => handleShow(doc)}
                      className="px-3 py-1 rounded-lg bg-green-500 text-white text-sm"
                    >
                      View
                    </button>
                    <button
                      onClick={() => {
                        const a = document.createElement("a");
                        a.href = doc.fileData;
                        a.download = doc.name;
                        a.click();
                      }}
                      className="px-3 py-1 rounded-lg bg-blue-500 text-white text-sm"
                    >
                      Download
                    </button>
                    {/* <a
                      href={doc.fileUrl}
                      download
                      className="px-3 py-1 rounded-lg bg-blue-500 text-white text-sm"
                    >
                      Download
                    </a> */}
                    <button
                      onClick={() => deleteDocument(doc.id)}
                      className="px-3 py-1 rounded-lg bg-red-500 text-white hover:bg-red-600 transition text-sm">
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {selectedEmp && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="bg-white w-[90%] max-w-md rounded-xl p-6 relative shadow-lg">

            <h2 className="text-xl font-semibold mb-2">Document Detail</h2>

            <p><b>Name:</b> {selectedEmp.name}</p>
            <p><b>Type:</b> {selectedEmp.type}</p>
            <p><b>Status:</b> {selectedEmp.status}</p>

            {selectedEmp.type.startsWith("image/") && (
              <div className="mt-4">
                <p className="text-sm text-gray-500 mb-1">Preview:</p>
                <img
                  src={selectedEmp.fileData}
                  alt={selectedEmp.name}
                  className="w-full h-48 object-cover rounded-lg border"
                />
              </div>
            )}

            <button
              onClick={() => setSelectedEmp(null)}
              className="mt-5 w-full py-2 bg-red-500 text-white rounded-lg"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
