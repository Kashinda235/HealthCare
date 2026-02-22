const Reports = () => {
    return (
        <div id="reports" class="tab-content">
            <div class="section">
                <div class="section-header">
                    <h2 class="section-title">My Medical Reports</h2>
                    <span style="font-size: 0.9rem; color: var(--text-secondary);">Upload & View Reports</span>
                </div>

                <p style="color: var(--text-secondary); margin-bottom: 2rem;">Upload your medical reports, lab results, and scans. Our AI will automatically extract and organize the data - no typing required!</p>

                <div class="upload-area" id="uploadArea" onclick="document.getElementById('fileInput').click()">
                    <div class="upload-icon">📄</div>
                    <h3 style="margin-bottom: 0.5rem; color: var(--primary);">Upload Medical Report</h3>
                    <p style="color: var(--text-secondary);">Click to browse or drag and drop your files here</p>
                    <p style="font-size: 0.85rem; color: var(--text-secondary); margin-top: 0.5rem;">Supports: PDF, JPG, PNG (Max 10MB)</p>
                    <input type="file" id="fileInput" accept=".pdf,.jpg,.jpeg,.png" style="display: none;" onchange="handleFileUpload(event)"></input>
                </div>

                <div id="filePreviewContainer" class="hidden">
                    <div class="file-preview">
                        <div class="file-icon">📄</div>
                        <div class="file-info">
                            <div class="file-name" id="fileName">report.pdf</div>
                            <div class="file-size" id="fileSize">2.4 MB</div>
                        </div>
                        <button class="btn btn-primary" onclick="processOCR()">Process with AI OCR</button>
                    </div>
                </div>

                <div id="ocrResults" class="hidden">
                    <div class="ai-summary">
                        <div class="ai-summary-header">
                            🤖 AI-Enhanced Summary
                        </div>
                        <div style="color: var(--text-primary); line-height: 1.8;">
                            <p><strong>Report Type:</strong> Complete Blood Count (CBC)</p>
                            <p><strong>Test Date:</strong> February 7, 2026</p>
                            <p><strong>Key Findings:</strong></p>
                            <ul style="margin-left: 1.5rem; margin-top: 0.5rem;">
                                <li>Hemoglobin: 13.5 g/dL (Normal range)</li>
                                <li>White Blood Cell Count: 7,200/μL (Normal range)</li>
                                <li>Platelet Count: 245,000/μL (Normal range)</li>
                            </ul>
                            <p style="margin-top: 0.75rem; padding: 1rem; background: #D1FAE5; border-radius: 8px; color: #065F46;"><strong>✓ Conclusion:</strong> All parameters are within normal range. No immediate concerns detected. Continue regular monitoring.</p>
                        </div>
                    </div>

                    <h3 style="margin-top: 2rem; margin-bottom: 1rem; color: var(--primary);">Extracted Report Data</h3>
                    <div class="table-container">
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
                                    <td><span class="badge badge-completed">Normal</span></td>
                                </tr>
                                <tr>
                                    <td>WBC Count</td>
                                    <td>7,200/μL</td>
                                    <td>4,000 - 11,000/μL</td>
                                    <td><span class="badge badge-completed">Normal</span></td>
                                </tr>
                                <tr>
                                    <td>Platelets</td>
                                    <td>245,000/μL</td>
                                    <td>150,000 - 400,000/μL</td>
                                    <td><span class="badge badge-completed">Normal</span></td>
                                </tr>
                                <tr>
                                    <td>RBC Count</td>
                                    <td>4.8 million/μL</td>
                                    <td>4.5 - 5.5 million/μL</td>
                                    <td><span class="badge badge-completed">Normal</span></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div style="margin-top: 2rem; display: flex; gap: 1rem;">
                        <button class="btn btn-success">Save to My Records</button>
                        <button class="btn btn-secondary">Share with Doctor</button>
                        <button class="btn btn-secondary">Download Report</button>
                    </div>
                </div>

                <h3 style="margin-top: 3rem; margin-bottom: 1.5rem; color: var(--primary); font-size: 1.5rem;">My Saved Reports</h3>
                
                <div class="table-container">
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
                                <td><span class="badge badge-completed">Normal</span></td>
                                <td>
                                    <button class="btn btn-primary" style="padding: 0.5rem 1rem; margin-right: 0.5rem;">View</button>
                                    <button class="btn btn-secondary" style="padding: 0.5rem 1rem;">Download</button>
                                </td>
                            </tr>
                            <tr>
                                <td>Chest X-Ray</td>
                                <td>Jan 28, 2026</td>
                                <td>HealthCare Imaging Center</td>
                                <td><span class="badge badge-completed">Clear</span></td>
                                <td>
                                    <button class="btn btn-primary" style="padding: 0.5rem 1rem; margin-right: 0.5rem;">View</button>
                                    <button class="btn btn-secondary" style="padding: 0.5rem 1rem;">Download</button>
                                </td>
                            </tr>
                            <tr>
                                <td>Lipid Profile</td>
                                <td>Jan 15, 2026</td>
                                <td>Metro Lab</td>
                                <td><span class="badge badge-completed">Normal</span></td>
                                <td>
                                    <button class="btn btn-primary" style="padding: 0.5rem 1rem; margin-right: 0.5rem;">View</button>
                                    <button class="btn btn-secondary" style="padding: 0.5rem 1rem;">Download</button>
                                </td>
                            </tr>
                            <tr>
                                <td>ECG Report</td>
                                <td>Dec 10, 2025</td>
                                <td>Cardiac Care Center</td>
                                <td><span class="badge badge-completed">Normal Sinus Rhythm</span></td>
                                <td>
                                    <button class="btn btn-primary" style="padding: 0.5rem 1rem; margin-right: 0.5rem;">View</button>
                                    <button class="btn btn-secondary" style="padding: 0.5rem 1rem;">Download</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div style="margin-top: 2rem; padding: 1.5rem; background: linear-gradient(135deg, #EEF2FF 0%, #E0E7FF 100%); border-radius: 12px; border-left: 4px solid #6366F1;">
                    <h4 style="color: #4F46E5; margin-bottom: 0.75rem; font-size: 1.1rem;">📊 Report Trends & Insights</h4>
                    <p style="color: var(--text-primary); margin-bottom: 0.5rem;">Our AI analyzes your reports over time to identify health trends and patterns.</p>
                    <button class="btn btn-primary" style="margin-top: 1rem; padding: 0.75rem 1.5rem;">View Health Trends</button>
                </div>
            </div>
        </div>
    );
}

export default Reports;