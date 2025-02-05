import React, { useState } from "react";
import axios from "axios";
import "./fileupload.css";
import Loader from "./Loader";

const FileUpload = () => {
  const [file, setFile] = useState(null);
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    const validExtensions = ['.js', '.jsx', '.ts', '.tsx', '.py', '.java', '.cpp', '.c', '.cs', '.rb', '.php', '.html', '.css', '.json', '.xml'];

    const fileExtension = selectedFile.name.substring(selectedFile.name.lastIndexOf('.')).toLowerCase();
    if (!validExtensions.includes(fileExtension)) {
      alert('Invalid file type. Please upload a programming language file.');
      setFile(null);
      return;
    }

    setFile(selectedFile);
  };

  const reformatText = (text) => {
    return text
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*/g, '')
      .replace(/(?:\r\n|\r|\n)/g, '<br>') 
      .replace(/<br>\s*<strong>/g, '<br>→ <strong>')
      .replace(/<br>\s*(?!<strong>)/g, '<br>');
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
      const text = result.data.candidates[0].content.parts[0].text;
      const formattedText = reformatText(text);
      setResponse({ text: formattedText });
    } catch (error) {
      console.error("Error uploading file:", error);
      setResponse({ error: "Error uploading file." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={`file-upload-container ${response ? 'no-hover' : ''}`}>
      <h1>Code Quality Analyzer</h1>
      <form onSubmit={handleSubmit}>
        <input type="file" onChange={handleFileChange} />
        <button type="submit" disabled={loading}>
          {loading ? "Analyzing..." : "Upload File"}
        </button>
      </form>
      {loading && <Loader />}
      {response && (
        <div className="response">
          <h2>Analysis Result</h2>
          <pre dangerouslySetInnerHTML={{ __html: response.text }}></pre>
        </div>
      )}
    </div>
  );
};

export default FileUpload;