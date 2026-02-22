import { useState } from "react";
import Header from "./Components/Header"
import Dashboard from "./Components/Profile/Dashboard"
import Appointments from "./Components/Appointments/Appointments"
import HealthTracker from "./Components/Vitals/HealthTracker"
import CocoAI from "./Components/CocoAI"
import Prescription from "./Components/Prescription/Prescription"
import Reports from "./Components/Reports"


const App = () => {
    const [activeTab, setActiveTab] = useState('dashboard');
    console.log(activeTab);

    return (
        <div>
        <Header activeTab={activeTab} setActiveTab={setActiveTab}/>
        <br></br>
        {activeTab === 'dashboard' && <Dashboard />}
        {activeTab === 'appointments' && <Appointments />}
        {activeTab === 'vitals' && <HealthTracker />}
        {activeTab === 'assistant' && <CocoAI />}
        {activeTab === 'prescription' && <Prescription />}
        {activeTab === 'reports' && <Reports />}
        </div>
    )
}

export default App