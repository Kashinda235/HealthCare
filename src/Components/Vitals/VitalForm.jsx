import { useState } from 'react';

export const VitalsForm = () => {
    const [formData, setFormData] = useState({
        type: 'heartrate',
        value: '',
        date: new Date().toISOString().slice(0, 16),
        notes: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Logging Reading:", formData);
        // Add your logic to update the dashboard here
    };

    return (
        <div style={{ marginTop: '3rem' }}>
        <h3 style={{ marginBottom: '1.5rem', color: 'var(--primary)', fontSize: '1.5rem' }}>Log New Reading</h3>
        <form onSubmit={handleSubmit}>
            <div className="form-grid">
            <div className="form-group">
                <label>Select Vital Sign</label>
                <select value={formData.type} onChange={e => setFormData({...formData, type: e.target.value})}>
                <option value="heartrate">Heart Rate</option>
                <option value="bp">Blood Pressure</option>
                <option value="temp">Temperature</option>
                <option value="oxygen">Oxygen Saturation</option>
                <option value="weight">Weight</option>
                <option value="glucose">Blood Glucose</option>
                </select>
            </div>
            <div className="form-group">
                <label>Value</label>
                <input 
                type="text" 
                placeholder="Enter reading" 
                value={formData.value}
                onChange={e => setFormData({...formData, value: e.target.value})}
                />
            </div>
            <div className="form-group">
                <label>Date & Time</label>
                <input 
                type="datetime-local" 
                value={formData.date}
                onChange={e => setFormData({...formData, date: e.target.value})}
                />
            </div>
            </div>
            <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem' }}>
            <button type="submit" className="btn btn-primary">Log Reading</button>
            <button type="button" className="btn btn-secondary">View History</button>
            </div>
        </form>
        </div>
    );
};