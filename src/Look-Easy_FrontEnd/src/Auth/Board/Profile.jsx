import React from "react";
import AuthService from "../../services/auth.service";


const Profile = () => {
  const currentUser = AuthService.getCurrentUser();

  return (
    <div className="container">
      <header className="jumbotron">
        <h3>
          <strong>{currentUser.username}</strong> Profile
        </h3>
      </header>
      <p>
        <strong>Nombre:</strong> {currentUser.username}
      </p>
      <p>
        <strong>Apellido:</strong> {currentUser.lastname}
      </p>
      <p>
        <strong>Email:</strong> {currentUser.email}
      </p>
    </div>
  );
};

export default Profile;
