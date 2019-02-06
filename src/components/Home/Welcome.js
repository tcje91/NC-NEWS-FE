import React from "react";

const Welcome = ({ currentUser }) => {
  return (
    <div className="WelcomeMessage">
      {currentUser ? (
        <h4>Welcome back, {currentUser.name.split(" ")[0]}</h4>
      ) : (
        <h4>Welcome. Select a user from the Users page and log in for full access.</h4>
      )}
    </div>
  );
};

export default Welcome;
