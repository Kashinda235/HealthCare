const Profile = () => {
    return (
        <div id="profile" class="tab-content active">
            <div class="section">
                <div class="section-header">
                    <h2 class="section-title">My Health Profile</h2>
                </div>
                
                {/* <!-- Patient Info Display --> */}
                <div style="background: linear-gradient(135deg, var(--bg-main) 0%, white 100%); padding: 2rem; border-radius: 12px; margin-bottom: 2rem; border: 2px solid var(--border);">
                    <div style="display: flex; align-items: center; gap: 2rem; margin-bottom: 2rem;">
                        <div style="width: 100px; height: 100px; border-radius: 50%; background: linear-gradient(135deg, var(--primary) 0%, var(--primary-light) 100%); display: flex; align-items: center; justify-content: center; color: white; font-size: 2.5rem; font-weight: 700;">RV</div>
                        <div>
                            <h3 style="font-size: 1.75rem; color: var(--primary); margin-bottom: 0.5rem;">Rahul Verma</h3>
                            <p style="color: var(--text-secondary); margin-bottom: 0.25rem;"><strong>Patient ID:</strong> PAT-2024-0234</p>
                            <p style="color: var(--text-secondary);"><strong>Blood Group:</strong> O+ | <strong>Age:</strong> 32 years</p>
                        </div>
                    </div>
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1.5rem;">
                        <div>
                            <div style="color: var(--text-secondary); font-size: 0.9rem; margin-bottom: 0.25rem;">Email</div>
                            <div style="font-weight: 600;">rahul.verma@email.com</div>
                        </div>
                        <div>
                            <div style="color: var(--text-secondary); font-size: 0.9rem; margin-bottom: 0.25rem;">Phone</div>
                            <div style="font-weight: 600;">+91 98765 43210</div>
                        </div>
                        <div>
                            <div style="color: var(--text-secondary); font-size: 0.9rem; margin-bottom: 0.25rem;">Date of Birth</div>
                            <div style="font-weight: 600;">January 15, 1992</div>
                        </div>
                        <div>
                            <div style="color: var(--text-secondary); font-size: 0.9rem; margin-bottom: 0.25rem;">Gender</div>
                            <div style="font-weight: 600;">Male</div>
                        </div>
                    </div>
                </div>

                {/* <!-- Edit Profile Form --> */}
                <h3 style="margin-bottom: 1.5rem; color: var(--primary); font-size: 1.5rem;">Update Profile Information</h3>
                <form id="profileForm">
                    <div class="form-grid">
                        <div class="form-group">
                            <label for="firstName">First Name</label>
                            <input type="text" id="firstName" value="Rahul"></input>
                        </div>
                        <div class="form-group">
                            <label for="lastName">Last Name</label>
                            <input type="text" id="lastName" value="Verma"></input>
                        </div>
                        <div class="form-group">
                            <label for="phone">Phone Number</label>
                            <input type="tel" id="phone" value="+91 98765 43210"></input>
                        </div>
                        <div class="form-group">
                            <label for="email">Email Address</label>
                            <input type="email" id="email" value="rahul.verma@email.com"></input>
                        </div>
                        <div class="form-group">
                            <label for="emergencyContact">Emergency Contact</label>
                            <input type="tel" id="emergencyContact" placeholder="Emergency contact number"></input>
                        </div>
                        <div class="form-group">
                            <label for="emergencyName">Emergency Contact Name</label>
                            <input type="text" id="emergencyName" placeholder="Contact person name"></input>
                        </div>
                        <div class="form-group" style="grid-column: 1 / -1;">
                            <label for="address">Address</label>
                            <textarea id="address">123 MG Road, Kanpur, Uttar Pradesh, 208001</textarea>
                        </div>
                        <div class="form-group" style="grid-column: 1 / -1;">
                            <label for="allergies">Known Allergies</label>
                            <textarea id="allergies" placeholder="List any known allergies...">Penicillin, Pollen</textarea>
                        </div>
                        <div class="form-group" style="grid-column: 1 / -1;">
                            <label for="conditions">Pre-existing Conditions</label>
                            <textarea id="conditions" placeholder="List any pre-existing medical conditions...">Hypertension (controlled with medication)</textarea>
                        </div>
                    </div>
                    <div style="margin-top: 2rem; display: flex; gap: 1rem;">
                        <button type="submit" class="btn btn-primary">Save Changes</button>
                        <button type="reset" class="btn btn-secondary">Cancel</button>
                    </div>
                </form>
                <div id="profileSuccess" class="success-message hidden">
                    ✓ Profile updated successfully!
                </div>
            </div>
        </div>
    );
}

export default Profile;