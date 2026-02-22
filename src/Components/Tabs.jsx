const NavTab = () => {
    return (
        <div className="tabs">
            <button className="tab active" onclick="switchTab('profile')">My Profile</button>
            <button className="tab" onclick="switchTab('appointments')">Book Appointment</button>
            <button className="tab" onclick="switchTab('vitals')">Health Tracker</button>
            <button className="tab" onclick="switchTab('assistant')">Talk to Coco</button>
            <button className="tab" onclick="switchTab('prescriptions')">Prescriptions</button>
            <button className="tab" onclick="switchTab('reports')">My Reports</button>
        </div>
    );
}

export default NavTab;