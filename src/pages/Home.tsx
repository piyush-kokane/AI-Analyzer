import { useState } from "react";
import toast from "react-hot-toast";
import "./Home.css";

const AnalyzerPage = () => {
  const [email, setEmail] = useState("");
  const [file, setFile] = useState<File | null>(null);

  const handleSubmit = () => {
    if (!email) {
      toast.error("Please enter email");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email");
      return;
    }

    if (!file) {
      toast.error("Please upload a file");
      return;
    }

    toast.success(`Email sent to ${email}`);
  };

  const handleRemoveFile = (e: React.MouseEvent) => {
    e.stopPropagation(); // prevent triggering upload dialog
    setFile(null);
  };

  return (
    <div className="page-container">
      <div className="header">
        <div>
          <span className="material-symbols-outlined">neurology</span>
          <h1>AI</h1>
          <h2>DeliTime</h2>
          <span className="material-symbols-outlined">star_shine</span>
        </div>
        <p>Predicts delivery time fast and smart.</p>
      </div>

      <div className="card">
        <div className="section">
          <label>UPLOAD FILE</label>

          {file ? (
            <div className="file-preview">
              <span className="material-symbols-outlined">description</span>
              <div className="file-info">
                <p>{file.name}</p>
                <span>{(file.size / 1024).toFixed(1)} KB</span>
              </div>
              <button className="remove-btn" onClick={handleRemoveFile}>
                ×
              </button>
            </div>
          ) : (
            <div
              className="upload-box"
              onClick={() => document.getElementById("fileUpload")?.click()}
            >
              <input
                type="file"
                id="fileUpload"
                onChange={(e) => {
                  const selectedFile = e.target.files?.[0] || null;
                  if (selectedFile) {
                    // Check file extension
                    const isCSV = selectedFile.name.toLowerCase().endsWith(".csv");
                    // Optional: check MIME type
                    // const isCSV = selectedFile.type === "text/csv";

                    if (!isCSV) {
                      toast.error("Only CSV files are allowed!");
                      setFile(null);
                      e.target.value = ""; // reset the input
                      return;
                    }

                    setFile(selectedFile);
                  } else {
                    setFile(null);
                  }
                }}
                hidden
              />
                <label htmlFor="fileUpload" className="upload-label">
                  <span className="material-symbols-outlined">upload</span>
                  <p>
                    Drop your file here or <span>browse</span>
                  </p>
                  <div className="file-types"> CSV file only</div>
                </label>
            </div>
          )}


          
        </div>

        <div className="section">
          <label>EMAIL ADDRESS</label>
          <input
            type="email"
            placeholder="xyz@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="email-input"
          />
        </div>

        <button className="run-btn" onClick={handleSubmit}>
          RUN ANALYSIS
        </button>

        <div className="footer">● Analytics will be sent to your email</div>
      </div>
    </div>
  );
};

export default AnalyzerPage;