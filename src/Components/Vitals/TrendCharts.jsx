const ChartWrapper = ({ title, icon, children }) => (
    <div style={{ background: 'white', padding: '2rem', borderRadius: '16px', boxShadow: 'var(--shadow-md)' }}>
        <h4 style={{ color: 'var(--primary)', marginBottom: '1.5rem', fontSize: '1.1rem' }}>
        {icon} {title}
        </h4>
        {children}
        <div style={{ display: 'flex', justifyCoontent: 'space-between', marginTop: '0.5rem', fontSize: '0.75rem', color: 'var(--text-secondary)' }}>
        {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map(day => <span key={day} style={{flex: 1, textAlign: 'center'}}>{day}</span>)}
        </div>
    </div>
);

export const HeartRateTrend = () => (
    <ChartWrapper title="Heart Rate Trend" icon="❤️">
        <svg width="100%" height="200">
        <defs>
            <linearGradient id="heartTrendGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#EF4444', stopOpacity: 0.2 }} />
            <stop offset="100%" style={{ stopColor: '#EF4444', stopOpacity: 0 }} />
            </linearGradient>
        </defs>
        <polyline fill="url(#heartTrendGradient)" stroke="#EF4444" strokeWidth="3" points="0,200 0,120 50,110 100,125 150,105 200,115 250,100 300,108 350,95 350,200" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="350" cy="95" r="5" fill="#EF4444" stroke="white" strokeWidth="2" />
        </svg>
    </ChartWrapper>
);