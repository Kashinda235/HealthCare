import { useState } from "react";
import AppointmentBooking from "./Booking";
import UpcomingAppointments from "./Upcoming";
import PastAppointments from "./Past";

const Appointments = () => {
    const [appointments, setAppointments] = useState([
        {
            id: 1,
            doctor: "Dr. Sharma",
            date: "2026-03-10",
            status: "scheduled"
        },
        {
            id: 2,
            doctor: "Dr. Mehta",
            date: "2024-01-15",
            status: "completed"
        }
    ]);

    const today = new Date();

    const upcoming = appointments.filter(
        (appt) => new Date(appt.date) >= today
    );

    const past = appointments.filter(
        (appt) => new Date(appt.date) < today
    );

    const handleBooking = (newAppointment) => {
        setAppointments([...appointments, newAppointment]);
    };

    return (
        <div className="section">
            {/* <h2 className="section-title">Appointments</h2> */}

            <AppointmentBooking onBook={handleBooking} />

            <UpcomingAppointments appointments={upcoming} />

            <PastAppointments appointments={past} />
        </div>
    );
};

export default Appointments;