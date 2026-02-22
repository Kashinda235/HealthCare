export const PrescriptionCard = ({ medication, children }) => (
<div className="prescription-card">
    <div className="prescription-header">
        <div>
        <div className="medication-name">💊 {medication.name}</div>
        <div className="dosage">{medication.dosage}</div>
        </div>
        <span className="badge badge-active">Active</span>
    </div>

    <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginTop: '1rem', lineHeight: '1.8' }}>
        <div><strong>Prescribed by:</strong> {medication.doctor}</div>
        <div><strong>Start Date:</strong> {medication.dates.start} | <strong>End Date:</strong> {medication.dates.end}</div>
        <div><strong>Duration:</strong> {medication.duration}</div>
        <div style={{ marginTop: '0.75rem' }}>
        <strong>Special Instructions:</strong> {medication.instructions}
        </div>
    </div>

    <div style={{ marginTop: '1.25rem', display: 'flex', gap: '1rem' }}>
        {children}
    </div>
</div>
);