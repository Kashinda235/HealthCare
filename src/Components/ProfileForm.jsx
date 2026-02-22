import { useState } from "react";

const ProfileForm = ({ user, onSave }) => {
  const [formData, setFormData] = useState(user);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <>
      <h3 style={{ marginBottom: "1.5rem", color: "var(--primary)" }}>
        Update Profile Information
      </h3>

      <form onSubmit={handleSubmit}>
        <div className="form-grid">
          <div className="form-group">
            <label htmlFor="firstName">First Name</label>
            <input name="firstName" value={formData.firstName} onChange={handleChange} />
          </div>

          <div className="form-group">
            <label htmlFor="lastName">Last Name</label>
            <input name="lastName" value={formData.lastName} onChange={handleChange} />
          </div>

          <div className="form-group">
            <label htmlFor="phone">Phone</label>
            <input name="phone" value={formData.phone} onChange={handleChange} />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input name="email" value={formData.email} onChange={handleChange} />
          </div>
        </div>

        <div style={{ marginTop: "2rem" }}>
          <button type="submit" className="btn btn-primary">
            Save Changes
          </button>
        </div>
      </form>
    </>
  );
};

export default ProfileForm;