import React, { useEffect, useState } from "react";

const CustomModal = ({ isOpen, setIsOpen, modalHead }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [formData, setFormData] = useState({
    version: "",
    buildNumber: "",
  });

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    if (isOpen) {
      window.addEventListener("keydown", onKeyDown);
    }
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen, setIsOpen]);

  if (!isOpen) return null;

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && !file.name.endsWith(".apk")) {
      alert("Only APK files are allowed.");
      return;
    }
    setSelectedFile(file);
  };

  const handleInputChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = () => {
    console.log("File:", selectedFile);
    console.log("Form Data:", formData);

    setIsOpen(false);
  };

  return (
    <>
      <div
        className="fixed inset-0 bg-black bg-opacity-50 z-40"
        onClick={() => setIsOpen(false)}
      />

      <div className="fixed inset-0 flex items-center justify-center z-50 px-4">
        <div
          className="bg-white rounded-lg shadow-lg max-w-3xl w-full max-h-[80vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
            <h3 className="text-xl font-semibold">{modalHead}</h3>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-500 hover:text-gray-700 text-2xl font-bold leading-none"
              aria-label="Close modal"
            >
              &times;
            </button>
          </div>

          <div className="px-6 py-4">
            <div className="flex space-x-6">
              <div className="flex-1 border p-4 rounded shadow-sm">
                <h4 className="font-semibold mb-4">Upload Apk</h4>
                <input
                  type="file"
                  accept=".apk"
                  onChange={handleFileChange}
                  className="block w-full text-sm text-gray-500
    file:mr-4 file:py-2 file:px-4
    file:rounded file:border-0
    file:text-sm file:font-semibold
    file:bg-blue-50 file:text-blue-700
    hover:file:bg-blue-100"
                />

                {selectedFile && (
                  <p className="mt-2 text-sm text-green-600">
                    Selected file: {selectedFile.name}
                  </p>
                )}
              </div>

              <div className="flex-1 border p-4 rounded shadow-sm">
                <h4 className="font-semibold mb-4">App Build Details</h4>
                <label className="block mb-3">
                  <span className="text-gray-700 font-medium">Version</span>
                  <input
                    type="text"
                    name="version"
                    value={formData.version}
                    onChange={handleInputChange}
                    className="mt-1 block w-full rounded border border-gray-300 px-3 py-2
                      shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                    placeholder="Enter version"
                  />
                </label>
              </div>
            </div>

            <div className="mt-6 flex justify-end">
              <button
                onClick={handleSubmit}
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomModal;
