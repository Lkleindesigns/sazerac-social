import React, { useState } from "react";
import Login from './Login'
import { FaAlignRight } from 'react-icons/fa';
import { logoutUser } from '../actions/userHelpers'
import { useAuthDataContext } from '../actions/AuthDataProvider'

const Navbar = () => {
  const [toggle, setToggle] = useState(0);
  const { current_user, logged_in, onLogout } = useAuthDataContext();

  const handleLogout = () => {
    logoutUser()
    onLogout()
  }

  if(!logged_in) {
    return <Login />
  }

  const li = [
    {
      link: "/",
      text:"Home"
    },
    {
      link: "/about/",
      text:"About"
    },
    {
      link: "/contact/",
      text:"Contact"
    }
  ];

  return (
    <>
      <div className="navBar">
        <button onClick={() => setToggle(!toggle)}>
          <FaAlignRight />
        </button>

        <button onClick={handleLogout}>
          Logout
        </button>

        <button onClick={handleLogout}>Logout</button>
        <span>Hello {current_user.first_name} {current_user.last_name} </span>

        <ul className={toggle ? "links show-nav" : "links"}>
          {
            li.map((objLink, i) => {
              return ( <li key={i}><a href={objLink.link}>{objLink.text}</a></li> )
            })
          }
        </ul>
      </div>
    </>
  );
}

export default Navbar
