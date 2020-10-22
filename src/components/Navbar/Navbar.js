import React, { useState } from "react";
import LoginModal from '../LoginModal/LoginModal'
import { FaAlignRight } from 'react-icons/fa';
import { logoutUser } from '../../actions/userHelpers'
import { useAuthDataContext } from '../../actions/AuthDataProvider'
import "./Navbar.css";

const Navbar = () => {
  const [ toggle, setToggle ] = useState(0);
  const [ showModal, setShowModal ] = useState(false);
  const { current_user, logged_in, onLogout } = useAuthDataContext();

  const handleLogout = () => {
    loginModalHide()
    logoutUser()
    onLogout()
  }

  function loginModalShow() {
    setShowModal(true)
  }

  function loginModalHide() {
    setShowModal(false)
  }

  const li = [
    {
      link: "/",
      text:"Home"
    },
    {
      link: "/articles",
      text:"Articles"
    }
  ];

  return (
    <>
      <div className="navBar">
        {
          logged_in ?
            <>
              <button onClick={handleLogout}>Logout</button>
              <span>{current_user.first_name} {current_user.last_name}</span>
            </>
          :
            <>
              <LoginModal handleClose={() => loginModalHide()} showModal={showModal}>
                <p>Modal</p>
                <p>Data</p>
              </LoginModal>
              <button type="button" onClick={() => loginModalShow()}>
                Login/Signup
              </button>
            </>
        }

        <button className="nav-collapse-toggle" onClick={() => setToggle(!toggle)}>
          <FaAlignRight />
        </button>

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
