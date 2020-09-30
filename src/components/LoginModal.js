import React, { useState } from "react";
import Login from './Login'
import Register from './Register'

const LoginModal = ({ handleClose, showModal, children }) => {
  const showHideClassName = showModal ? "modal display-block" : "modal display-none";
  const [ showRegisterForm, setShowRegisterForm ] = useState(false);

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        <div className="moo-2">
          { showRegisterForm ? <Register /> : <Login /> }
        </div>
        <button className="moo" onClick={() => setShowRegisterForm(!showRegisterForm)}>Register</button>
        <button onClick={() => handleClose()}>close</button>
      </section>
    </div>
  );
};

export default LoginModal;
