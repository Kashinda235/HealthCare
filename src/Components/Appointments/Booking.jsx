import { useState } from "react";

const AppointmentBooking = ({ onBook }) => {
    const [doctor, setDoctor] = useState("");
    const [date, setDate] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

    const newAppointment = {
        id: Date.now(),
        doctor,
        date,
        status: "scheduled"
    };

    onBook(newAppointment);
    setDoctor("");
    setDate("");
    };

    return (
        <div style={{ marginBottom: "2rem" }}>
            <h3 className="section-title">Book New Appointment</h3>

            <form onSubmit={handleSubmit} className="form-grid">
                <div class="form-group">
                    <label for="appointmentSpecialty">Select Specialty *</label>
                    <select id="appointmentSpecialty" required onchange="updateDoctorList()">
                        <option value="">Choose specialty</option>
                        <option value="cardiology">Cardiology</option>
                        <option value="pediatrics">Pediatrics</option>
                        <option value="orthopedics">Orthopedics</option>
                        <option value="neurology">Neurology</option>
                        <option value="dermatology">Dermatology</option>
                        <option value="general">General Medicine</option>
                    </select>
                </div>
            <input
                type="text"
                placeholder="Doctor Name"
                value={doctor}
                onChange={(e) => setDoctor(e.target.value)}
                required
            />

            <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
            />

            <button type="submit" className="btn btn-primary">
                Book
            </button>
            </form>
        </div>
    );
};

export default AppointmentBooking;