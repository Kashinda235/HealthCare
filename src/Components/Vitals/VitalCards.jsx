export const VitalCard = ({ label, value, unit, status, lastUpdated, children }) => (
    <div className="vital-card">
        <div className="vital-label">{label}</div>
        <div className="vital-value">{value}</div>
        <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>{unit}</div>
        <div style={{ margin: '1rem 0', height: '60px', position: 'relative' }}>
        {children}
        </div>
        <span className={`vital-status status-${status.toLowerCase().replace(' ', '-')}`}>
        {status}
        </span>
        <div style={{ marginTop: '0.75rem', fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
        Last updated: {lastUpdated}
        </div>
    </div>
);

// Specific Visualization Components
export const BPGauge = () => (
    <svg width="100%" height="60" viewBox="0 0 200 60">
        <path d="M 20,55 A 80,80 0 0,1 180,55" fill="none" stroke="#E5E7EB" strokeWidth="8" strokeLinecap="round"/>
        <path d="M 20,55 A 80,80 0 0,1 70,20" fill="none" stroke="#10B981" strokeWidth="8" strokeLinecap="round"/>
        <path d="M 70,20 A 80,80 0 0,1 130,20" fill="none" stroke="#F59E0B" strokeWidth="8" strokeLinecap="round"/>
        <path d="M 130,20 A 80,80 0 0,1 180,55" fill="none" stroke="#EF4444" strokeWidth="8" strokeLinecap="round"/>
        <line x1="100" y1="55" x2="100" y2="15" stroke="var(--primary)" strokeWidth="3" strokeLinecap="round" style={{ transformOrigin: '100px 55px', transform: 'rotate(-30deg)' }}/>
        <circle cx="100" cy="55" r="5" fill="var(--primary)"/>
    </svg>
);

export const TempThermometer = ({ percentage = 60 }) => (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
        <div style={{ width: '20px', height: '60px', background: '#E5E7EB', borderRadius: '10px', position: 'relative' }}>
            <div style={{ 
            position: 'absolute', bottom: 0, left: 0, right: 0, 
            height: `${percentage}%`, background: 'linear-gradient(to top, #EF4444, #F59E0B, #10B981)', 
            borderRadius: '10px', transition: 'height 0.5s ease' 
            }} />
        </div>
        <div style={{ marginLeft: '1rem', fontSize: '0.7rem', color: 'var(--text-secondary)', lineHeight: '1.4' }}>
            <div>104°F</div><div>98.6°F</div><div>95°F</div>
        </div>
    </div>
);