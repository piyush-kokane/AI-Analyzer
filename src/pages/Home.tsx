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

    toast.success(`Email sent to ${email}`);
  };

  return (
    <div className="page-container">
      <div className="header">
        <div>
          <span className="material-symbols-outlined">neurology</span>
          <h1>AI</h1>
          <h2>Analyzer</h2>
          <span className="material-symbols-outlined">star_shine</span>
        </div>
        <p>Csv Document Processing Engine</p>
      </div>

      <div className="card">
        <div className="section">
          <label>UPLOAD FILE</label>

          <div className="upload-box">
            <input
              type="file"
              id="fileUpload"
              onChange={(e) => setFile(e.target.files?.[0] || null)}
              hidden
            />
            <label htmlFor="fileUpload" className="upload-label">
              Drop your file here or <span>browse</span>
              <div className="file-types">PDF, DOCX, TXT, CSV</div>
            </label>
          </div>
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

        <div className="footer">
          ● Analytics will be sent to your email
        </div>
      </div>
    </div>
  );
};

export default AnalyzerPage;