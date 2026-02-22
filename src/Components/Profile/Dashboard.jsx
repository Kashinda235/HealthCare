import Profile from "./Profile";

const StatCard = ({ icon, value, label }) => (
    <div className="stat-card">
        <div className="stat-icon">{icon}</div>
        <div className="stat-value">{value}</div>
        <div className="stat-label">{label}</div>
    </div>
);

const Dashboard = () => {
    return (
        <>
            <div className="dashboard">
                <StatCard icon="📅" value="3" label="Upcoming Appointments" />
                <StatCard icon="💊" value="5" label="Active Prescriptions" />
                <StatCard icon="📊" value="12" label="Medical Reports" />
                <StatCard icon="❤️" value="98%" label="Health Score" />
            </div>
            <Profile />
        </>
    );
}

export default Dashboard;