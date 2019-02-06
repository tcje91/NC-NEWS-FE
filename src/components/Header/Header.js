import React from "react";
import NavBar from "./NavBar";
import PageTitle from "./PageTitle";
import UserLogin from "./UserLogin";
import "./Header.css";
import UserLoggedIn from "./UserLoggedIn";

const Header = ({ setUser, currentUser, logOut }) => {
  return (
    <div className="mainHeader">
      <NavBar />
      <PageTitle />
      {currentUser ?<UserLoggedIn user={currentUser} logOut={logOut}/> : <UserLogin setUser={setUser} />}
    </div>
  );
};

export default Header;
