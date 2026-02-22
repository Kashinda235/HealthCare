import { PrescriptionCard } from './PrescriptionCard';
import { ReminderItem } from './ReminderItem';

const Prescription = () => {
  return (
    <div id="prescriptions" className="tab-content">
      <div className="section">
        <div className="section-header">
          <h2 className="section-title">My Prescriptions</h2>
        </div>

        <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>
          View and manage all your current and past prescriptions.
        </p>

        <h3 style={{ marginBottom: '1.5rem', color: 'var(--primary)', fontSize: '1.5rem' }}>
          Active Prescriptions
        </h3>
        
        {/* Prescription 1 */}
        <PrescriptionCard medication={{
          name: "Amoxicillin 500mg",
          dosage: "Take 1 capsule twice daily with food",
          doctor: "Dr. Rajesh Sharma (Cardiology)",
          dates: { start: "Feb 5, 2026", end: "Feb 12, 2026" },
          duration: "7 days (4 days remaining)",
          instructions: "Complete the full course even if symptoms improve."
        }}>
          <button className="btn btn-secondary" style={{ padding: '0.5rem 1rem' }}>Set Reminder</button>
          <button className="btn btn-primary" style={{ padding: '0.5rem 1rem' }}>Refill Request</button>
        </PrescriptionCard>

        {/* Prescription 2 (Different Buttons) */}
        <PrescriptionCard medication={{
          name: "Paracetamol 650mg",
          dosage: "Take 1 tablet as needed",
          doctor: "Dr. Priya Patel",
          dates: { start: "Feb 6, 2026", end: "As needed" },
          duration: "As needed",
          instructions: "Do not exceed 4 tablets in 24 hours."
        }}>
          <button className="btn btn-secondary" style={{ padding: '0.5rem 1rem' }}>Log Dose</button>
          <button className="btn btn-primary" style={{ padding: '0.5rem 1rem' }}>Refill Request</button>
        </PrescriptionCard>

        {/* Reminders Section */}
        <h3 style={{ marginTop: '3rem', marginBottom: '1.5rem', color: 'var(--primary)', fontSize: '1.5rem' }}>
          Medication Reminders
        </h3>
        <div style={{ background: 'linear-gradient(135deg, var(--bg-main) 0%, white 100%)', padding: '1rem 2rem', borderRadius: '12px', border: '2px solid var(--border)' }}>
          <ReminderItem name="Amoxicillin 500mg" nextDose="Today at 8:00 PM" isTaken={false} />
          <ReminderItem name="Losartan 50mg" nextDose="Tomorrow at 8:00 AM" isTaken={true} />
        </div>

        {/* Table Section */}
        <h3 style={{ marginTop: '3rem', marginBottom: '1.5rem', color: 'var(--primary)', fontSize: '1.5rem' }}>
          Past Prescriptions
        </h3>
        <div className="table-container">
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
              <PastPrescriptionRow 
                name="Ibuprofen 400mg" 
                doctor="Dr. Amit Singh" 
                duration="5 days" 
                date="Jan 30, 2026" 
              />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

// Helper component for the table
const PastPrescriptionRow = ({ name, doctor, duration, date }) => (
  <tr>
    <td>{name}</td>
    <td>{doctor}</td>
    <td>{duration}</td>
    <td>{date}</td>
    <td><button className="btn btn-primary" style={{ padding: '0.5rem 1rem' }}>View Details</button></td>
  </tr>
);

export default Prescription;