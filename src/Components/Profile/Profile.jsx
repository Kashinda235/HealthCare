import { useState } from "react";
import ProfileDisplay from "./ProfileDisplay";
import ProfileForm from "./ProfileForm";

const Profile = () => {
    const [isEditing, setIsEditing] = useState(false);

    const [user, setUser] = useState({
        initials: "RV",
        name: "Rahul Verma",
        patientId: "PAT-2024-0234",
        bloodGroup: "O+",
        age: 32,
        firstName: "Rahul",
        lastName: "Verma",
        phone: "+91 98765 43210",
        email: "rahul.verma@email.com"
    });

    const handleSave = (updatedData) => {
        setUser({
            ...user,
            ...updatedData,
            name: `${updatedData.firstName} ${updatedData.lastName}`,
            initials:
            updatedData.firstName[0] + updatedData.lastName[0]
        });
    };

    return (
        <div className="section">
            <div className="section-header">
            <h2 className="section-title">My Health Profile</h2>
            <button
                className="btn btn-primary"
                onClick={() => setIsEditing(!isEditing)}
            >
                {isEditing ? "Cancel" : "Edit Profile"}
            </button>
            </div>

            {isEditing ? <ProfileForm user={user} onSave={handleSave} /> : <ProfileDisplay user={user} />}
        </div>
    );
};

export default Profile;