import React from "react";
import "../styles/ProfileAvatar.css";
import profileImage from "../assets/profile.jpeg";

export const ProfileAvatar = () => {
  return (
    <div className="profile-avatar-wrapper">
      <div className="avatar-container">
        <img src={profileImage} alt="Profile Avatar" className="profile-image" />
      </div>
    </div>
  );
};
export default ProfileAvatar;
