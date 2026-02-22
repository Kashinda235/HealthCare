const Appointments = () => {
    return (
        <div id="appointments" className="tab-content">
            <div className="section">
                <div className="section-header">
                    <h2 className="section-title">Book an Appointment</h2>
                </div>
                <form id="appointmentForm">
                    <div className="form-grid">
                        <div className="form-group">
                            <label for="appointmentSpecialty">Select Specialty *</label>
                            <select id="appointmentSpecialty" required onchange="updateDoctorList()">
                                <option value="">Choose specialty</option>
                                <option value="cardiology">Cardiology</option>
                                <option value="pediatrics">Pediatrics</option>
                                <option value="orthopedics">Orthopedics</option>
                                <option value="neurology">Neurology</option>
                                <option value="dermatology">Dermatology</option>
                                <option value="general">General Medicine</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label for="appointmentDoctor">Select Doctor *</label>
                            <select id="appointmentDoctor" required>
                                <option value="">Choose a doctor</option>
                                <option value="dr-sharma">Dr. Rajesh Sharma</option>
                                <option value="dr-patel">Dr. Priya Patel</option>
                                <option value="dr-singh">Dr. Amit Singh</option>
                                <option value="dr-kumar">Dr. Sunita Kumar</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label for="appointmentDate">Preferred Date *</label>
                            <input type="date" id="appointmentDate" required> </input>
                        </div>
                        <div className="form-group">
                            <label for="appointmentTime">Preferred Time *</label>
                            <select id="appointmentTime" required>
                                <option value="">Select Time</option>
                                <option value="09:00">09:00 AM</option>
                                <option value="10:00">10:00 AM</option>
                                <option value="11:00">11:00 AM</option>
                                <option value="14:00">02:00 PM</option>
                                <option value="15:00">03:00 PM</option>
                                <option value="16:00">04:00 PM</option>
                            </select>
                        </div>
                        <div className="form-group" style="grid-column: 1 / -1;">
                            <label for="appointmentReason">Reason for Visit *</label>
                            <textarea id="appointmentReason" placeholder="Please describe your symptoms or reason for consultation..." required></textarea>
                        </div>
                        <div className="form-group" style="grid-column: 1 / -1;">
                            <label>
                                <input type="checkbox" id="reminderSMS" checked> Send me SMS reminder</input>
                            </label>
                            <label style="margin-left: 2rem;">
                                <input type="checkbox" id="reminderEmail" checked> Send me email reminder</input>
                            </label>
                        </div>
                    </div>
                    <div style="margin-top: 2rem;">
                        <button type="submit" className="btn btn-primary">Book Appointment</button>
                    </div>
                </form>
                <div id="appointmentSuccess" className="success-message hidden">
                    ✓ Appointment booked successfully! You will receive a confirmation shortly.
                </div>

                <h3 style="margin-top: 3rem; margin-bottom: 1.5rem; color: var(--primary); font-size: 1.5rem;">My Upcoming Appointments</h3>
                <div className="table-container">
                    <table>
                        <thead>
                            <tr>
                                <th>Date & Time</th>
                                <th>Doctor</th>
                                <th>Specialty</th>
                                <th>Status</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>Feb 12, 2026</strong><br></br>10:00 AM</td>
                                <td>Dr. Rajesh Sharma</td>
                                <td>Cardiology</td>
                                <td><span className="badge badge-scheduled">Confirmed</span></td>
                                <td>
                                    <button className="btn btn-secondary" style="padding: 0.5rem 1rem; margin-right: 0.5rem;">Reschedule</button>
                                    <button className="btn btn-danger" style="padding: 0.5rem 1rem;">Cancel</button>
                                </td>
                            </tr>
                            <tr>
                                <td><strong>Feb 18, 2026</strong><br></br>02:00 PM</td>
                                <td>Dr. Priya Patel</td>
                                <td>General Medicine</td>
                                <td><span className="badge badge-scheduled">Confirmed</span></td>
                                <td>
                                    <button className="btn btn-secondary" style="padding: 0.5rem 1rem; margin-right: 0.5rem;">Reschedule</button>
                                    <button className="btn btn-danger" style="padding: 0.5rem 1rem;">Cancel</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <h3 style="margin-top: 3rem; margin-bottom: 1.5rem; color: var(--primary); font-size: 1.5rem;">Past Appointments</h3>
                <div className="table-container">
                    <table>
                        <thead>
                            <tr>
                                <th>Date</th>
                                <th>Doctor</th>
                                <th>Specialty</th>
                                <th>Status</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Feb 5, 2026</td>
                                <td>Dr. Amit Singh</td>
                                <td>Orthopedics</td>
                                <td><span className="badge badge-completed">Completed</span></td>
                                <td><button className="btn btn-primary" style="padding: 0.5rem 1rem;">View Details</button></td>
                            </tr>
                            <tr>
                                <td>Jan 28, 2026</td>
                                <td>Dr. Sunita Kumar</td>
                                <td>Neurology</td>
                                <td><span className="badge badge-completed">Completed</span></td>
                                <td><button className="btn btn-primary" style="padding: 0.5rem 1rem;">View Details</button></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Appointments;