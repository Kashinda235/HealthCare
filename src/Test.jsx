import Header from "./Components/Header";
import { useState } from "react";
import { Dashboard, Profile, Appointments, HealthTracker, CocoAI, Prescription, Reports } from "./Elements/elements";

const TestApp = () => {
    const [activeTab, setActiveTab] = useState('dashboard');
    return (
        <div>
            <Header activeTab={activeTab} setActiveTab={setActiveTab}/>
            <br></br>
            {activeTab === 'dashboard' && <Dashboard />}
            {activeTab === 'profile' && <Profile />}
            {activeTab === 'appointments' && <Appointments />}
            {activeTab === 'vitals' && <HealthTracker />}
            {activeTab === 'assistant' && <CocoAI />}
            {activeTab === 'prescription' && <Prescription />}
            {activeTab === 'reports' && <Reports />}
        </div>
    )
}   

export default TestApp;