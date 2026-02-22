const NavTab = ( {tabName, label, isActive, onSwitch} ) => {
    return (
        <li>
            <a href="#" onClick={(event) => {
                event.preventDefault();
                onSwitch(tabName);
            }} className={isActive ? "active" : ""}>{label}</a>
        </li>
    );
}

const Header = ( {activeTab, setActiveTab} ) => {
    const switchTo = (name) => {
        setActiveTab(name);
    }
    return (
        <header>
        <nav>
            <div className="logo">NityaNadi</div>
            <ul className="nav-links">
                <NavTab tabName='dashboard' label="My Dashboard" isActive={activeTab === 'dashboard'} onSwitch={switchTo} />
                <NavTab tabName='appointments' label="My Appointments" isActive={activeTab === 'appointments'} onSwitch={switchTo}/>
                <NavTab tabName='vitals' label="Health Tracker" isActive={activeTab === 'vitals'} onSwitch={switchTo}/>
                <NavTab tabName='reports' label="My Reports" isActive={activeTab === 'reports'} onSwitch={switchTo}/>
                <NavTab tabName='assistant' label="Talk to Coco" isActive={activeTab === 'assistant'} onSwitch={switchTo}/>
            </ul>
        </nav>
    </header>
    );
}

export default Header;