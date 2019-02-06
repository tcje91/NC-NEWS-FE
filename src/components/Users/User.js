import React from 'react'

const User = ({ user }) => {
  const { name, username } = user;
  return (
    <div className="UserCard">
    <img className="UserImgSml" src="/default-user.png" alt={username+"Pic"}/>
      <h3>{username}</h3>
      <p>{name}</p>
    </div>
  )
}

export default User
