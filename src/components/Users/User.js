import React from 'react'

const User = ({ user }) => {
  const { name, username } = user;
  return (
    <div className="UserCard">
      <h3>{username}</h3>
      <p>{name}</p>
    </div>
  )
}

export default User
