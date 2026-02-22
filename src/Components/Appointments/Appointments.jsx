import { useState } from 'react';

const Appointments = () => {
    const [formData, setFormData] = useState({
        specialty: '',
        doctor: '',
        date: '',
        time: '',
        reason: '',
        reminderSMS: true,
        reminderEmail: true
    });
    const [submitted, setSubmitted] = useState(false);

    // Example data for the dynamic dropdown logic
    const doctorsBySpecialty = {
        cardiology: ["Dr. Rajesh Sharma"],
        pediatrics: ["Dr. Sunita Kumar"],
        general: ["Dr. Priya Patel"],
        orthopedics: ["Dr. Amit Singh"]
    };

    const handleBookAppointment = (e) => {
        e.preventDefault();
        setSubmitted(true);
        // Hide success message after 5 seconds
        setTimeout(() => setSubmitted(false), 5000);
    };

    return (
        <div id="appointments" className="tab-content">
        <div className="section">
            <div className="section-header">
            <h2 className="section-title">Book an Appointment</h2>
            </div>

            <form onSubmit={handleBookAppointment}>
            <div className="form-grid">
                <div className="form-group">
                <label>Select Specialty *</label>
                <select 
                    value={formData.specialty} 
                    onChange={(e) => setFormData({...formData, specialty: e.target.value, doctor: ''})}
                    required
                >
                    <option value="">Choose specialty</option>
                    <option value="cardiology">Cardiology</option>
                    <option value="pediatrics">Pediatrics</option>
                    <option value="orthopedics">Orthopedics</option>
                    <option value="general">General Medicine</option>
                </select>
                </div>

                <div className="form-group">
                <label>Select Doctor *</label>
                <select 
                    value={formData.doctor} 
                    onChange={(e) => setFormData({...formData, doctor: e.target.value})}
                    required
                    disabled={!formData.specialty}
                >
                    <option value="">Choose a doctor</option>
                    {formData.specialty && doctorsBySpecialty[formData.specialty]?.map(doc => (
                    <option key={doc} value={doc}>{doc}</option>
                    ))}
                </select>
                </div>

                <div className="form-group">
                <label>Preferred Date *</label>
                <input 
                    type="date" 
                    value={formData.date}
                    onChange={(e) => setFormData({...formData, date: e.target.value})}
                    required 
                />
                </div>

                <div className="form-group">
                <label>Preferred Time *</label>
                <select 
                    value={formData.time}
                    onChange={(e) => setFormData({...formData, time: e.target.value})}
                    required
                >
                    <option value="">Select Time</option>
                    <option value="09:00">09:00 AM</option>
                    <option value="10:00">10:00 AM</option>
                    <option value="14:00">02:00 PM</option>
                </select>
                </div>

                <div className="form-group" style={{ gridColumn: '1 / -1' }}>
                <label>Reason for Visit *</label>
                <textarea 
                    placeholder="Describe your symptoms..." 
                    value={formData.reason}
                    onChange={(e) => setFormData({...formData, reason: e.target.value})}
                    required
                />
                </div>

                <div className="form-group" style={{ gridColumn: '1 / -1', display: 'flex', gap: '2rem' }}>
                <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <input 
                    type="checkbox" 
                    checked={formData.reminderSMS} 
                    onChange={(e) => setFormData({...formData, reminderSMS: e.target.checked})}
                    /> Send SMS reminder
                </label>
                <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <input 
                    type="checkbox" 
                    checked={formData.reminderEmail}
                    onChange={(e) => setFormData({...formData, reminderEmail: e.target.checked})}
                    /> Send Email reminder
                </label>
                </div>
            </div>

            <div style={{ marginTop: '2rem' }}>
                <button type="submit" className="btn btn-primary">Book Appointment</button>
            </div>
            </form>

            {submitted && (
            <div className="success-message" style={{ marginTop: '1rem', padding: '1rem', backgroundColor: '#D1FAE5', color: '#065F46', borderRadius: '8px' }}>
                ✓ Appointment booked successfully! You will receive a confirmation shortly.
            </div>
            )}

            {/* Tables Section */}
            <AppointmentTable title="My Upcoming Appointments" type="upcoming" />
            <AppointmentTable title="Past Appointments" type="past" />
        </div>
        </div>
    );
};

// Sub-component for tables to avoid repetition
const AppointmentTable = ({ title, type }) => (
    <div style={{ marginTop: '3rem' }}>
        <h3 style={{ marginBottom: '1.5rem', color: 'var(--primary)', fontSize: '1.5rem' }}>{title}</h3>
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
            {type === 'upcoming' ? (
                <tr>
                <td><strong>Feb 12, 2026</strong><br />10:00 AM</td>
                <td>Dr. Rajesh Sharma</td>
                <td>Cardiology</td>
                <td><span className="badge badge-scheduled">Confirmed</span></td>
                <td>
                    <button className="btn btn-secondary" style={{ padding: '0.5rem 1rem', marginRight: '0.5rem' }}>Reschedule</button>
                    <button className="btn btn-danger" style={{ padding: '0.5rem 1rem' }}>Cancel</button>
                </td>
                </tr>
            ) : (
                <tr>
                <td>Feb 5, 2026</td>
                <td>Dr. Amit Singh</td>
                <td>Orthopedics</td>
                <td><span className="badge badge-completed">Completed</span></td>
                <td><button className="btn btn-primary" style={{ padding: '0.5rem 1rem' }}>View Details</button></td>
                </tr>
            )}
            </tbody>
        </table>
        </div>
    </div>
);

export default Appointments;