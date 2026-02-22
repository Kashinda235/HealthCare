const PastAppointments = ({ appointments }) => {
  return (
    <div>
      <h3 style={{
        margiTop: "3rem", 
        margiBottom: "1.5rem", 
        color: "var(--primary)",
        fonSize: "1.5rem"
        }} >Past Appointments</h3>

      {appointments.length === 0 ? (
        <p>No past appointments</p>
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

export default PastAppointments;