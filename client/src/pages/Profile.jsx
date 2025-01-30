import { useAuth } from "../store/auth";
import { FaUserCircle } from "react-icons/fa";

export const Profile = () => {
  const { user } = useAuth(); // Assume `user` contains user details
  const { username, email, phone } = user || {};

  return (
    <div className="profile-container">
      <FaUserCircle className="profile-icon" />
      <h1 className="profile-title">User Profile</h1>
      <div className="profile-card">
        <p><strong>Name:</strong> {username}</p>
        <p><strong>Email:</strong> {email}</p>
        <p><strong>Phone:</strong> {phone}</p>
      </div>
    </div>
  );
};
