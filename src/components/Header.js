import React from 'react'
import NavBar from './NavBar';
import PageTitle from './PageTitle';
import UserInfo from './UserInfo';

const Header = () => {
  return (
    <div className="mainHeader">
      <NavBar />
      <PageTitle />
      <UserInfo />
    </div>
  )
}

export default Header
