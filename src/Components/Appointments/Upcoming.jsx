const UpcomingAppointments = ({ appointments }) => {
  return (
    <div style={{ marginBottom: "2rem" }}>
      <h3 style={{
        margiTop: "3rem", 
        margiBottom: "1.5rem", 
        color: "var(--primary)",
        fonSize: "1.5rem"
        }} > Upcoming Appointments </h3>

      {appointments.length === 0 ? (
        <p>No upcoming appointments</p>
      ) : (
        <ul>
          {appointments.map((appt) => (
            <li key={appt.id}>
              {appt.doctor} — {appt.date}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default UpcomingAppointments;