export const ReminderItem = ({ name, nextDose, isTaken, onMarkTaken }) => (
<div style={{ 
    display: 'flex', 
    justifyContent: 'space-between', 
    alignItems: 'center', 
    padding: '1rem 0',
    borderTop: '1px solid var(--border)' 
    }}>
    <div>
        <div style={{ fontWeight: 600, fontSize: '1.1rem', color: 'var(--primary)' }}>{name}</div>
        <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Next dose: {nextDose}</div>
    </div>
    {isTaken ? (
        <span className="badge badge-scheduled">Scheduled</span>
    ) : (
        <button className="btn btn-success" style={{ padding: '0.5rem 1rem' }} onClick={onMarkTaken}>
        Mark as Taken
        </button>
    )}
</div>
);