const Prescription = () => {
    return (
        <div id="prescriptions" class="tab-content">
            <div class="section">
                <div class="section-header">
                    <h2 class="section-title">My Prescriptions</h2>
                </div>

                <p style="color: var(--text-secondary); margin-bottom: 2rem;">View and manage all your current and past prescriptions. Set reminders for medication schedules.</p>

                <h3 style="margin-bottom: 1.5rem; color: var(--primary); font-size: 1.5rem;">Active Prescriptions</h3>
                
                <div class="prescription-card">
                    <div class="prescription-header">
                        <div>
                            <div class="medication-name">💊 Amoxicillin 500mg</div>
                            <div class="dosage">Take 1 capsule twice daily with food</div>
                        </div>
                        <span class="badge badge-active">Active</span>
                    </div>
                    <div style="color: var(--text-secondary); font-size: 0.9rem; margin-top: 1rem; line-height: 1.8;">
                        <div><strong>Prescribed by:</strong> Dr. Rajesh Sharma (Cardiology)</div>
                        <div><strong>Start Date:</strong> Feb 5, 2026 | <strong>End Date:</strong> Feb 12, 2026</div>
                        <div><strong>Duration:</strong> 7 days (4 days remaining)</div>
                        <div style="margin-top: 0.75rem;"><strong>Special Instructions:</strong> Complete the full course even if symptoms improve. Take with meals to reduce stomach upset.</div>
                    </div>
                    <div style="margin-top: 1.25rem; display: flex; gap: 1rem;">
                        <button class="btn btn-secondary" style="padding: 0.5rem 1rem;">Set Reminder</button>
                        <button class="btn btn-primary" style="padding: 0.5rem 1rem;">Refill Request</button>
                    </div>
                </div>

                <div class="prescription-card">
                    <div class="prescription-header">
                        <div>
                            <div class="medication-name">💊 Losartan 50mg</div>
                            <div class="dosage">Take 1 tablet once daily in the morning</div>
                        </div>
                        <span class="badge badge-active">Active</span>
                    </div>
                    <div style="color: var(--text-secondary); font-size: 0.9rem; margin-top: 1rem; line-height: 1.8;">
                        <div><strong>Prescribed by:</strong> Dr. Rajesh Sharma (Cardiology)</div>
                        <div><strong>Start Date:</strong> Jan 10, 2026 | <strong>End Date:</strong> Ongoing</div>
                        <div><strong>Duration:</strong> Long-term management</div>
                        <div style="margin-top: 0.75rem;"><strong>Special Instructions:</strong> For blood pressure management. Take at the same time each day. Monitor blood pressure regularly.</div>
                    </div>
                    <div style="margin-top: 1.25rem; display: flex; gap: 1rem;">
                        <button class="btn btn-secondary" style="padding: 0.5rem 1rem;">Set Reminder</button>
                        <button class="btn btn-primary" style="padding: 0.5rem 1rem;">Refill Request</button>
                    </div>
                </div>

                <div class="prescription-card">
                    <div class="prescription-header">
                        <div>
                            <div class="medication-name">💊 Paracetamol 650mg</div>
                            <div class="dosage">Take 1 tablet as needed for pain or fever</div>
                        </div>
                        <span class="badge badge-active">Active</span>
                    </div>
                    <div style="color: var(--text-secondary); font-size: 0.9rem; margin-top: 1rem; line-height: 1.8;">
                        <div><strong>Prescribed by:</strong> Dr. Priya Patel (General Medicine)</div>
                        <div><strong>Start Date:</strong> Feb 6, 2026 | <strong>End Date:</strong> As needed</div>
                        <div><strong>Maximum Dosage:</strong> Do not exceed 4 tablets in 24 hours</div>
                        <div style="margin-top: 0.75rem;"><strong>Special Instructions:</strong> Can be taken with or without food. Space doses at least 4 hours apart.</div>
                    </div>
                    <div style="margin-top: 1.25rem; display: flex; gap: 1rem;">
                        <button class="btn btn-secondary" style="padding: 0.5rem 1rem;">Log Dose</button>
                        <button class="btn btn-primary" style="padding: 0.5rem 1rem;">Refill Request</button>
                    </div>
                </div>

                <h3 style="margin-top: 3rem; margin-bottom: 1.5rem; color: var(--primary); font-size: 1.5rem;">Medication Reminders</h3>
                <div style="background: linear-gradient(135deg, var(--bg-main) 0%, white 100%); padding: 2rem; border-radius: 12px; border: 2px solid var(--border);">
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem;">
                        <div>
                            <div style="font-weight: 600; font-size: 1.1rem; color: var(--primary);">Amoxicillin 500mg</div>
                            <div style="color: var(--text-secondary); font-size: 0.9rem;">Next dose: Today at 8:00 PM</div>
                        </div>
                        <button class="btn btn-success" style="padding: 0.5rem 1rem;">Mark as Taken</button>
                    </div>
                    <div style="display: flex; justify-content: space-between; align-items: center; padding-top: 1rem; border-top: 1px solid var(--border);">
                        <div>
                            <div style="font-weight: 600; font-size: 1.1rem; color: var(--primary);">Losartan 50mg</div>
                            <div style="color: var(--text-secondary); font-size: 0.9rem;">Next dose: Tomorrow at 8:00 AM</div>
                        </div>
                        <span class="badge badge-scheduled">Scheduled</span>
                    </div>
                </div>

                <h3 style="margin-top: 3rem; margin-bottom: 1.5rem; color: var(--primary); font-size: 1.5rem;">Past Prescriptions</h3>
                <div class="table-container">
                    <table>
                        <thead>
                            <tr>
                                <th>Medication</th>
                                <th>Doctor</th>
                                <th>Duration</th>
                                <th>Completed On</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Ibuprofen 400mg</td>
                                <td>Dr. Amit Singh</td>
                                <td>5 days</td>
                                <td>Jan 30, 2026</td>
                                <td><button class="btn btn-primary" style="padding: 0.5rem 1rem;">View Details</button></td>
                            </tr>
                            <tr>
                                <td>Azithromycin 500mg</td>
                                <td>Dr. Priya Patel</td>
                                <td>3 days</td>
                                <td>Dec 20, 2025</td>
                                <td><button class="btn btn-primary" style="padding: 0.5rem 1rem;">View Details</button></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Prescription;