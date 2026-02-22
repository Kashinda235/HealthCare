const Dashboard = () => {
    return (
        <div className="dashboard">
            <div className="stat-card">
                <div className="stat-icon">📅</div>
                <div className="stat-value">3</div>
                <div className="stat-label">Upcoming Appointments</div>
            </div>
            <div className="stat-card">
                <div className="stat-icon">💊</div>
                <div className="stat-value">5</div>
                <div className="stat-label">Active Prescriptions</div>
            </div>
            <div className="stat-card">
                <div className="stat-icon">📊</div>
                <div className="stat-value">12</div>
                <div className="stat-label">Medical Reports</div>
            </div>
            <div className="stat-card">
                <div className="stat-icon">❤️</div>
                <div className="stat-value">98%</div>
                <div className="stat-label">Health Score</div>
            </div>
        </div>
    );
}

export default Dashboard;