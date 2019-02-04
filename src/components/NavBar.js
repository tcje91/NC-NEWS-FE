import React from "react";
import { Link } from "@reach/router";

const NavBar = () => {
  return (
    <div className="NavBar">
      <Link className="NavItem" to="/">HOME</Link>
      <Link className="NavItem" to="/articles">ARTICLES</Link>
      <Link className="NavItem" to="/users">USERS</Link>
    </div>
  );
};

export default NavBar;
