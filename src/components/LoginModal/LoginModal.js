import React, { useState } from "react";
import LoginForm from '../../components/LoginForm/LoginForm'
import RegisterForm from '../../components/RegisterForm/RegisterForm'
import "./LoginModal.css";

const LoginModal = ({ handleClose, showModal, children }) => {
  const showHideClassName = showModal ? "modal display-block" : "modal display-none";
  const [ showRegisterForm, setShowRegisterForm ] = useState(false);

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        <div className="moo-2">
          { showRegisterForm ? <RegisterForm /> : <LoginForm /> }
        </div>
        <button className="moo" onClick={() => setShowRegisterForm(!showRegisterForm)}>{ showRegisterForm ? "Login": "Register" }</button>
        <button onClick={() => handleClose()}>close</button>
      </section>
    </div>
  );
};

export default LoginModal;
