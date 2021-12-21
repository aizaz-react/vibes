import React from "react";
import "./notification.css";
import user from "../../assets/images/user.png";
const Notification = () => {
  return (
    <div className="notification-main-container">
      <div className="notification-container">
        <img src={user} alt="notification" />
      </div>
    </div>
  );
};

export default Notification;
