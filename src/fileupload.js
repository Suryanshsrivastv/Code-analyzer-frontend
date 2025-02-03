import React, { useState } from "react";
import axios from "axios";

const FileUpload = () => {
  const [file, setFile] = useState(null);
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);

    setLoading(true);
    try {
      // Replace with your backend URL
      const result = await axios.post("https://backend-web-service-for-analysis-of.onrender.com/api/files/upload", formData, {
        headers: {
        },
      });
      setResponse(result.data);
    } catch (error) {
      console.error("Error uploading file:", error);
      setResponse({ error: "Error uploading file." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="file-upload-container">
      <h1>Code Quality Analyzer</h1>
      <form onSubmit={handleSubmit}>
        <input type="file" onChange={handleFileChange} />
        <button type="submit" disabled={loading}>
          {loading ? "Uploading..." : "Upload File"}
        </button>
      </form>
      {response && (
        <div className="response">
          <h2>Analysis Result</h2>
          <pre>{JSON.stringify(response, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default FileUpload;