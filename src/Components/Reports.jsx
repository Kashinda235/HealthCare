import { useState } from 'react';
import { FileUpload } from './FileUpload';

const Reports = () => {
    const [file, setFile] = useState(null);
    const [isProcessing, setIsProcessing] = useState(false);
    const [showResults, setShowResults] = useState(false);

    const handleFileSelect = (selectedFile) => {
        setFile(selectedFile);
        setShowResults(false); // Reset if they upload a new one
    };

    const processOCR = () => {
        setIsProcessing(true);
        // Simulating AI Processing Time
        setTimeout(() => {
        setIsProcessing(false);
        setShowResults(true);
        }, 2000);
  };

    return (
        <div id="reports" className="tab-content">
        <div className="section">
            <div className="section-header">
            <h2 className="section-title">My Medical Reports</h2>
            <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Upload & View Reports</span>
            </div>

            <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>
            Upload your medical reports, lab results, and scans. Our AI will automatically extract and organize the data - no typing required!
            </p>

            {!showResults && <FileUpload onFileSelect={handleFileSelect} />}

            {/* File Preview Container */}
            {file && !showResults && (
            <div className="file-preview-container">
                <div className="file-preview">
                <div className="file-icon">📄</div>
                <div className="file-info">
                    <div className="file-name">{file.name}</div>
                    <div className="file-size">{(file.size / (1024 * 1024)).toFixed(2)} MB</div>
                </div>
                <button 
                    className="btn btn-primary" 
                    onClick={processOCR}
                    disabled={isProcessing}
                >
                    {isProcessing ? "Processing..." : "Process with AI OCR"}
                </button>
                </div>
            </div>
            )}

            {/* OCR Results Section */}
            {showResults && (
            <div className="ocr-results-animation">
                <div className="ai-summary">
                <div className="ai-summary-header">🤖 AI-Enhanced Summary</div>
                <div style={{ color: 'var(--text-primary)', lineHeight: '1.8' }}>
                    <p><strong>Report Type:</strong> Complete Blood Count (CBC)</p>
                    <p><strong>Test Date:</strong> February 7, 2026</p>
                    <p><strong>Key Findings:</strong></p>
                    <ul style={{ marginLeft: '1.5rem', marginTop: '0.5rem' }}>
                    <li>Hemoglobin: 13.5 g/dL (Normal range)</li>
                    <li>White Blood Cell Count: 7,200/μL (Normal range)</li>
                    <li>Platelet Count: 245,000/μL (Normal range)</li>
                    </ul>
                    <p style={{ marginTop: '0.75rem', padding: '1rem', background: '#D1FAE5', borderRadius: '8px', color: '#065F46' }}>
                    <strong>✓ Conclusion:</strong> All parameters are within normal range. No immediate concerns detected.
                    </p>
                </div>
                </div>

                <h3 style={{ marginTop: '2rem', marginBottom: '1rem', color: 'var(--primary)' }}>Extracted Report Data</h3>
                <ReportTable />

                <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem' }}>
                <button className="btn btn-success" onClick={() => alert('Saved!')}>Save to My Records</button>
                <button className="btn btn-secondary" onClick={() => setFile(null) || setShowResults(false)}>Upload Another</button>
                </div>
            </div>
            )}

            <SavedReportsSection />
            
            {/* Trend Insights Card */}
            <div style={{ marginTop: '3rem', padding: '1.5rem', background: 'linear-gradient(135deg, #EEF2FF 0%, #E0E7FF 100%)', borderRadius: '12px', borderLeft: '4px solid #6366F1' }}>
            <h4 style={{ color: '#4F46E5', marginBottom: '0.75rem', fontSize: '1.1rem' }}>📊 Report Trends & Insights</h4>
            <p style={{ color: 'var(--text-primary)', marginBottom: '0.5rem' }}>Our AI analyzes your reports over time to identify health trends and patterns.</p>
            <button className="btn btn-primary" style={{ marginTop: '1rem', padding: '0.75rem 1.5rem' }}>View Health Trends</button>
            </div>
        </div>
        </div>
    );
};

// Extracted for readability
const ReportTable = () => (
    <div className="table-container">
        <table>
        <thead>
            <tr>
            <th>Parameter</th>
            <th>Your Value</th>
            <th>Reference Range</th>
            <th>Status</th>
            </tr>
        </thead>
        <tbody>
            <tr>
            <td>Hemoglobin</td>
            <td>13.5 g/dL</td>
            <td>12.0 - 16.0 g/dL</td>
            <td><span className="badge badge-completed">Normal</span></td>
            </tr>
            <tr>
            <td>WBC Count</td>
            <td>7,200/μL</td>
            <td>4,000 - 11,000/μL</td>
            <td><span className="badge badge-completed">Normal</span></td>
            </tr>
        </tbody>
        </table>
    </div>
);

const SavedReportsSection = () => (
    <div style={{ marginTop: '4rem' }}>
        <h3 style={{ marginBottom: '1.5rem', color: 'var(--primary)', fontSize: '1.5rem' }}>My Saved Reports</h3>
        <div className="table-container">
        <table>
            <thead>
            <tr>
                <th>Report Type</th>
                <th>Date</th>
                <th>Facility</th>
                <th>Status</th>
                <th>Actions</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>Complete Blood Count (CBC)</td>
                <td>Feb 7, 2026</td>
                <td>City Diagnostics Lab</td>
                <td><span className="badge badge-completed">Normal</span></td>
                <td>
                <button className="btn btn-primary" style={{ padding: '0.5rem 1rem', marginRight: '0.5rem' }}>View</button>
                <button className="btn btn-secondary" style={{ padding: '0.5rem 1rem' }}>Download</button>
                </td>
            </tr>
            </tbody>
        </table>
        </div>
    </div>
);

export default Reports;