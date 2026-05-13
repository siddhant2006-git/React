import React, { useContext } from "react";
import Usercontext from "../context/Usercontext";

function Profile() {
  const { user } = useContext(Usercontext);

  if (!user) {
    return <div>Please login first</div>;
  }

  return (
    <div>
      <h2>Profile</h2>
      <p>Username: {user.username}</p>
      <p>Password: {user.password}</p>
    </div>
  );
}

export default Profile;