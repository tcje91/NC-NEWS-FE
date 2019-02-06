import React from "react";
import { Link } from "@reach/router";

const UserLoggedIn = ({ user, logOut }) => {
  return (
    <div className="LoggedIn">
      <div className="right grid1x2">
        <div>
          <p>{user.name}</p>
          <p>{user.username}</p>
          <Link className="SpaceCapsTitle" to="">PROFILE</Link>
        </div>
        <img className="imgMini" src="/default-user.png" alt="userImg" />
      </div>
      <button className="JustifyRight" onClick={logOut}>Log out</button>
    </div>
  );
};

export default UserLoggedIn;
