const ProfileDisplay = ({ user }) => {
  return (
    <div
      style={{
        background: "linear-gradient(135deg, var(--bg-main) 0%, white 100%)",
        padding: "2rem",
        borderRadius: "12px",
        marginBottom: "2rem",
        border: "2px solid var(--border)"
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "2rem", marginBottom: "2rem" }}>
        <div
          style={{
            width: "100px",
            height: "100px",
            borderRadius: "50%",
            background: "linear-gradient(135deg, var(--primary) 0%, var(--primary-light) 100%)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
            fontSize: "2.5rem",
            fontWeight: "700"
          }}
        >
          {user.initials}
        </div>

        <div>
          <h3 style={{ fontSize: "1.75rem", color: "var(--primary)", marginBottom: "0.5rem" }}>
            {user.name}
          </h3>
          <p style={{ color: "var(--text-secondary)" }}>
            <strong>Patient ID:</strong> {user.patientId}
          </p>
          <p style={{ color: "var(--text-secondary)" }}>
            <strong>Blood Group:</strong> {user.bloodGroup} | <strong>Age:</strong> {user.age}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfileDisplay;