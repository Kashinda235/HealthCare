import { VitalCard, BPGauge, TempThermometer } from './VitalCards';
import { HeartRateTrend } from './TrendCharts';
import { VitalsForm } from './VitalForm';

const HealthTracker = () => {
  return (
    <div id="vitals" className="tab-content">
      <div className="section">
        <div className="section-header">
          <h2 className="section-title">My Health Tracker</h2>
          <span className="badge badge-active">● Real-time Monitoring</span>
        </div>

        <div className="vitals-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
          <VitalCard label="Heart Rate" value="72" unit="BPM" status="Normal" lastUpdated="2 mins ago">
             {/* Mini SVG code here */}
          </VitalCard>
          
          <VitalCard label="Blood Pressure" value="120/80" unit="mmHg" status="Normal" lastUpdated="5 mins ago">
            <BPGauge />
          </VitalCard>

          <VitalCard label="Temperature" value="98.6" unit="°F" status="Normal" lastUpdated="1 hour ago">
            <TempThermometer percentage={65} />
          </VitalCard>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '2rem', marginTop: '3rem' }}>
          <HeartRateTrend />
          {/* Add BloodPressureTrend similarly */}
        </div>

        <VitalsForm />
      </div>
    </div>
  );
};

export default HealthTracker;