const HealthTracker = () => {
    return (
        <div id="vitals" class="tab-content">
            <div class="section">
                <div class="section-header">
                    <h2 class="section-title">My Health Tracker</h2>
                    <span class="badge badge-active">● Real-time Monitoring</span>
                </div>
                
                <p style="color: var(--text-secondary); margin-bottom: 2rem;">Track your vital signs and health metrics in real-time. Connect your wearable devices or manually log your readings.</p>

                <div class="vitals-grid">
                    <div class="vital-card">
                        <div class="vital-label">Heart Rate</div>
                        <div class="vital-value" id="heartRate">72</div>
                        <div style="font-size: 0.85rem; color: var(--text-secondary);">BPM</div>
                        
                        {/* <!-- Heart Rate Graph --> */}
                        <div style="margin-top: 1rem; height: 60px; position: relative; overflow: hidden;">
                            <svg width="100%" height="60" style="display: block;">
                                <defs>
                                    <linearGradient id="heartGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                                        <stop offset="0%" style="stop-color:#EF4444;stop-opacity:0.3" />
                                        <stop offset="100%" style="stop-color:#EF4444;stop-opacity:0" />
                                    </linearGradient>
                                </defs>
                                <path id="heartPath" fill="url(#heartGradient)" stroke="#EF4444" stroke-width="2" />
                            </svg>
                        </div>
                        
                        <span class="vital-status status-normal">Normal</span>
                        <div style="margin-top: 0.75rem; font-size: 0.8rem; color: var(--text-secondary);">Last updated: 2 mins ago</div>
                    </div>
                    
                    <div class="vital-card">
                        <div class="vital-label">Blood Pressure</div>
                        <div class="vital-value" id="bloodPressure" style="font-size: 1.5rem;">120/80</div>
                        <div style="font-size: 0.85rem; color: var(--text-secondary);">mmHg</div>
                        
                        {/* <!-- BP Gauge --> */}
                        <div style="margin-top: 1rem; position: relative; height: 60px;">
                            <svg width="100%" height="60" viewBox="0 0 200 60">
                                {/* <!-- Background arc --> */}
                                <path d="M 20,55 A 80,80 0 0,1 180,55" fill="none" stroke="#E5E7EB" stroke-width="8" stroke-linecap="round"/>
                                {/* <!-- Colored sections --> */}
                                <path d="M 20,55 A 80,80 0 0,1 70,20" fill="none" stroke="#10B981" stroke-width="8" stroke-linecap="round"/>
                                <path d="M 70,20 A 80,80 0 0,1 130,20" fill="none" stroke="#F59E0B" stroke-width="8" stroke-linecap="round"/>
                                <path d="M 130,20 A 80,80 0 0,1 180,55" fill="none" stroke="#EF4444" stroke-width="8" stroke-linecap="round"/>
                                {/* <!-- Indicator needle --> */}
                                <line id="bpNeedle" x1="100" y1="55" x2="100" y2="15" stroke="var(--primary)" stroke-width="3" stroke-linecap="round" style="transform-origin: 100px 55px; transform: rotate(-30deg);"/>
                                <circle cx="100" cy="55" r="5" fill="var(--primary)"/>
                            </svg>
                        </div>
                        
                        <span class="vital-status status-normal">Normal</span>
                        <div style="margin-top: 0.75rem; font-size: 0.8rem; color: var(--text-secondary);">Last updated: 5 mins ago</div>
                    </div>
                    
                    <div class="vital-card">
                        <div class="vital-label">Temperature</div>
                        <div class="vital-value" id="temperature">98.6</div>
                        <div style="font-size: 0.85rem; color: var(--text-secondary);">°F</div>
                        
                        {/* <!-- Temperature Thermometer --> */}
                        <div style="margin-top: 1rem; position: relative; height: 60px; display: flex; align-items: center; justify-content: center;">
                            <div style="width: 20px; height: 100%; background: linear-gradient(to bottom, #E5E7EB 0%, #E5E7EB 30%, var(--danger) 30%, var(--danger) 100%); border-radius: 10px; position: relative;">
                                <div id="tempFill" style="position: absolute; bottom: 0; left: 0; right: 0; height: 60%; background: linear-gradient(to top, #EF4444, #F59E0B, #10B981); border-radius: 10px; transition: height 0.5s ease;"></div>
                            </div>
                            <div style="margin-left: 1rem; font-size: 0.75rem; color: var(--text-secondary);">
                                <div>104°F</div>
                                <div style="margin-top: 1rem;">98.6°F</div>
                                <div style="margin-top: 1rem;">95°F</div>
                            </div>
                        </div>
                        
                        <span class="vital-status status-normal">Normal</span>
                        <div style="margin-top: 0.75rem; font-size: 0.8rem; color: var(--text-secondary);">Last updated: 1 hour ago</div>
                    </div>
                    
                    <div class="vital-card">
                        <div class="vital-label">Oxygen Saturation</div>
                        <div class="vital-value" id="oxygenSat">98</div>
                        <div style="font-size: 0.85rem; color: var(--text-secondary);">%</div>
                        
                        {/* <!-- Circular Progress --> */}
                        <div style="margin-top: 1rem; position: relative; height: 60px; display: flex; align-items: center; justify-content: center;">
                            <svg width="60" height="60" style="transform: rotate(-90deg);">
                                <circle cx="30" cy="30" r="25" fill="none" stroke="#E5E7EB" stroke-width="6"/>
                                <circle id="o2Circle" cx="30" cy="30" r="25" fill="none" stroke="#10B981" stroke-width="6" 
                                    stroke-dasharray="157" stroke-dashoffset="15.7" stroke-linecap="round"
                                    style="transition: stroke-dashoffset 0.5s ease;"/>
                            </svg>
                        </div>
                        
                        <span class="vital-status status-normal">Normal</span>
                        <div style="margin-top: 0.75rem; font-size: 0.8rem; color: var(--text-secondary);">Last updated: 3 mins ago</div>
                    </div>
                    
                    <div class="vital-card">
                        <div class="vital-label">Weight</div>
                        <div class="vital-value" id="weight">75.5</div>
                        <div style="font-size: 0.85rem; color: var(--text-secondary);">kg</div>
                        
                        {/* <!-- Weight Trend --> */}
                        <div style="margin-top: 1rem; height: 60px; position: relative;">
                            <svg width="100%" height="60">
                                <defs>
                                    <linearGradient id="weightGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                                        <stop offset="0%" style="stop-color:#6366F1;stop-opacity:0.3" />
                                        <stop offset="100%" style="stop-color:#6366F1;stop-opacity:0" />
                                    </linearGradient>
                                </defs>
                                {/* <!-- Trend line --> */}
                                <polyline id="weightLine" fill="none" stroke="#6366F1" stroke-width="2" 
                                    points="0,40 30,35 60,38 90,32 120,30 150,28 180,25" style="stroke-linecap: round;"/>
                                {/* <!-- Fill area --> */}
                                <polygon fill="url(#weightGradient)" 
                                    points="0,60 0,40 30,35 60,38 90,32 120,30 150,28 180,25 180,60"/>
                                {/* <!-- Data points --> */}
                                <circle cx="0" cy="40" r="2" fill="#6366F1"/>
                                <circle cx="30" cy="35" r="2" fill="#6366F1"/>
                                <circle cx="60" cy="38" r="2" fill="#6366F1"/>
                                <circle cx="90" cy="32" r="2" fill="#6366F1"/>
                                <circle cx="120" cy="30" r="2" fill="#6366F1"/>
                                <circle cx="150" cy="28" r="2" fill="#6366F1"/>
                                <circle cx="180" cy="25" r="3" fill="#6366F1"/>
                            </svg>
                        </div>
                        
                        <span class="vital-status status-normal">On Track</span>
                        <div style="margin-top: 0.75rem; font-size: 0.8rem; color: var(--text-secondary);">Last updated: Today</div>
                    </div>
                    
                    <div class="vital-card">
                        <div class="vital-label">Blood Glucose</div>
                        <div class="vital-value" id="glucose">95</div>
                        <div style="font-size: 0.85rem; color: var(--text-secondary);">mg/dL</div>
                        
                        {/* <!-- Glucose Bar Chart --> */}
                        <div style="margin-top: 1rem; height: 60px; display: flex; align-items: flex-end; justify-content: space-around; gap: 0.25rem;">
                            <div style="flex: 1; background: linear-gradient(to top, #10B981, #34D399); height: 70%; border-radius: 4px 4px 0 0; opacity: 0.3;"></div>
                            <div style="flex: 1; background: linear-gradient(to top, #10B981, #34D399); height: 55%; border-radius: 4px 4px 0 0; opacity: 0.4;"></div>
                            <div style="flex: 1; background: linear-gradient(to top, #10B981, #34D399); height: 65%; border-radius: 4px 4px 0 0; opacity: 0.5;"></div>
                            <div style="flex: 1; background: linear-gradient(to top, #10B981, #34D399); height: 50%; border-radius: 4px 4px 0 0; opacity: 0.6;"></div>
                            <div style="flex: 1; background: linear-gradient(to top, #10B981, #34D399); height: 60%; border-radius: 4px 4px 0 0; opacity: 0.7;"></div>
                            <div style="flex: 1; background: linear-gradient(to top, #10B981, #34D399); height: 75%; border-radius: 4px 4px 0 0; opacity: 0.9;"></div>
                            <div id="glucoseBar" style="flex: 1; background: linear-gradient(to top, #10B981, #34D399); height: 80%; border-radius: 4px 4px 0 0; box-shadow: 0 0 10px rgba(16, 185, 129, 0.5);"></div>
                        </div>
                        
                        <span class="vital-status status-normal">Normal</span>
                        <div style="margin-top: 0.75rem; font-size: 0.8rem; color: var(--text-secondary);">Last updated: 30 mins ago</div>
                    </div>
                </div>

                {/* <!-- Detailed Charts Section --> */}
                <h3 style="margin-top: 3rem; margin-bottom: 1.5rem; color: var(--primary); font-size: 1.5rem;">7-Day Trends</h3>
                
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(400px, 1fr)); gap: 2rem; margin-bottom: 3rem;">
                    {/* <!-- Heart Rate Trend --> */}
                    <div style="background: white; padding: 2rem; border-radius: 16px; box-shadow: var(--shadow-md);">
                        <h4 style="color: var(--primary); margin-bottom: 1rem; font-size: 1.1rem;">❤️ Heart Rate Trend</h4>
                        <svg width="100%" height="200" id="heartTrendChart">
                            <defs>
                                <linearGradient id="heartTrendGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                                    <stop offset="0%" style="stop-color:#EF4444;stop-opacity:0.2" />
                                    <stop offset="100%" style="stop-color:#EF4444;stop-opacity:0" />
                                </linearGradient>
                            </defs>
                            {/* <!-- Grid lines --> */}
                            <line x1="0" y1="40" x2="100%" y2="40" stroke="#E5E7EB" stroke-width="1" stroke-dasharray="5,5"/>
                            <line x1="0" y1="80" x2="100%" y2="80" stroke="#E5E7EB" stroke-width="1" stroke-dasharray="5,5"/>
                            <line x1="0" y1="120" x2="100%" y2="120" stroke="#E5E7EB" stroke-width="1" stroke-dasharray="5,5"/>
                            <line x1="0" y1="160" x2="100%" y2="160" stroke="#E5E7EB" stroke-width="1" stroke-dasharray="5,5"/>
                            {/* <!-- Data line --> */}
                            <polyline fill="url(#heartTrendGradient)" stroke="#EF4444" stroke-width="3" 
                                points="0,200 0,120 50,110 100,125 150,105 200,115 250,100 300,108 350,95 350,200" 
                                style="stroke-linecap: round; stroke-linejoin: round;"/>
                            <polyline fill="none" stroke="#EF4444" stroke-width="3" 
                                points="0,120 50,110 100,125 150,105 200,115 250,100 300,108 350,95" 
                                style="stroke-linecap: round; stroke-linejoin: round;"/>
                            {/* <!-- Data points --> */}
                            <circle cx="0" cy="120" r="4" fill="#EF4444"/>
                            <circle cx="50" cy="110" r="4" fill="#EF4444"/>
                            <circle cx="100" cy="125" r="4" fill="#EF4444"/>
                            <circle cx="150" cy="105" r="4" fill="#EF4444"/>
                            <circle cx="200" cy="115" r="4" fill="#EF4444"/>
                            <circle cx="250" cy="100" r="4" fill="#EF4444"/>
                            <circle cx="300" cy="108" r="4" fill="#EF4444"/>
                            <circle cx="350" cy="95" r="5" fill="#EF4444" stroke="white" stroke-width="2"/>
                        </svg>
                        <div style="display: flex; justify-content: space-between; margin-top: 0.5rem; font-size: 0.75rem; color: var(--text-secondary);">
                            <span>Mon</span>
                            <span>Tue</span>
                            <span>Wed</span>
                            <span>Thu</span>
                            <span>Fri</span>
                            <span>Sat</span>
                            <span>Sun</span>
                        </div>
                    </div>

                    {/* <!-- Blood Pressure Trend --> */}
                    <div style="background: white; padding: 2rem; border-radius: 16px; box-shadow: var(--shadow-md);">
                        <h4 style="color: var(--primary); margin-bottom: 1rem; font-size: 1.1rem;">🩺 Blood Pressure Trend</h4>
                        <svg width="100%" height="200">
                            <defs>
                                <linearGradient id="bpSysGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                                    <stop offset="0%" style="stop-color:#6366F1;stop-opacity:0.2" />
                                    <stop offset="100%" style="stop-color:#6366F1;stop-opacity:0" />
                                </linearGradient>
                                <linearGradient id="bpDiaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                                    <stop offset="0%" style="stop-color:#8B5CF6;stop-opacity:0.2" />
                                    <stop offset="100%" style="stop-color:#8B5CF6;stop-opacity:0" />
                                </linearGradient>
                            </defs>
                            {/* <!-- Grid --> */}
                            <line x1="0" y1="50" x2="100%" y2="50" stroke="#E5E7EB" stroke-width="1" stroke-dasharray="5,5"/>
                            <line x1="0" y1="100" x2="100%" y2="100" stroke="#E5E7EB" stroke-width="1" stroke-dasharray="5,5"/>
                            <line x1="0" y1="150" x2="100%" y2="150" stroke="#E5E7EB" stroke-width="1" stroke-dasharray="5,5"/>
                            {/* <!-- Systolic (top number) --> */}
                            <polyline fill="url(#bpSysGradient)" stroke="#6366F1" stroke-width="2" 
                                points="0,200 0,80 50,75 100,85 150,70 200,78 250,72 300,75 350,70 350,200"/>
                            <polyline fill="none" stroke="#6366F1" stroke-width="2" 
                                points="0,80 50,75 100,85 150,70 200,78 250,72 300,75 350,70"/>
                            {/* <!-- Diastolic (bottom number) --> */}
                            <polyline fill="url(#bpDiaGradient)" stroke="#8B5CF6" stroke-width="2" 
                                points="0,200 0,130 50,128 100,135 150,125 200,130 250,127 300,129 350,125 350,200"/>
                            <polyline fill="none" stroke="#8B5CF6" stroke-width="2" 
                                points="0,130 50,128 100,135 150,125 200,130 250,127 300,129 350,125"/>
                        </svg>
                        <div style="display: flex; justify-content: space-between; margin-top: 0.5rem; font-size: 0.75rem; color: var(--text-secondary);">
                            <span>Mon</span>
                            <span>Tue</span>
                            <span>Wed</span>
                            <span>Thu</span>
                            <span>Fri</span>
                            <span>Sat</span>
                            <span>Sun</span>
                        </div>
                        <div style="display: flex; gap: 2rem; margin-top: 1rem; font-size: 0.85rem;">
                            <div style="display: flex; align-items: center; gap: 0.5rem;">
                                <div style="width: 16px; height: 3px; background: #6366F1; border-radius: 2px;"></div>
                                <span>Systolic</span>
                            </div>
                            <div style="display: flex; align-items: center; gap: 0.5rem;">
                                <div style="width: 16px; height: 3px; background: #8B5CF6; border-radius: 2px;"></div>
                                <span>Diastolic</span>
                            </div>
                        </div>
                    </div>
                </div>

                <h3 style="margin-bottom: 1.5rem; color: var(--primary); font-size: 1.5rem;">Log New Reading</h3>
                <form id="vitalsForm">
                    <div class="form-grid">
                        <div class="form-group">
                            <label for="vitalType">Select Vital Sign</label>
                            <select id="vitalType">
                                <option value="heartrate">Heart Rate</option>
                                <option value="bp">Blood Pressure</option>
                                <option value="temp">Temperature</option>
                                <option value="oxygen">Oxygen Saturation</option>
                                <option value="weight">Weight</option>
                                <option value="glucose">Blood Glucose</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label for="vitalValue">Value</label>
                            <input type="text" id="vitalValue" placeholder="Enter reading"></input>
                        </div>
                        <div class="form-group">
                            <label for="vitalDate">Date & Time</label>
                            <input type="datetime-local" id="vitalDate"></input>
                        </div>
                        <div class="form-group">
                            <label for="vitalNotes">Notes (Optional)</label>
                            <input type="text" id="vitalNotes" placeholder="Any observations..."></input>
                        </div>
                    </div>
                    <div style="margin-top: 2rem; display: flex; gap: 1rem;">
                        <button type="submit" class="btn btn-primary">Log Reading</button>
                        <button type="button" class="btn btn-secondary" onclick="viewVitalsHistory()">View History</button>
                    </div>
                </form>
                <div id="vitalsSuccess" class="success-message hidden">
                    ✓ Health reading logged successfully!
                </div>
            </div>
        </div>
    );
}

export default HealthTracker;