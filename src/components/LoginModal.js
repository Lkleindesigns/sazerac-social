import React, { useState } from "react";
import Login from './Login'

const LoginModal = ({ handleClose, showModal, children }) => {
  const showHideClassName = showModal ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        {children}
        <button onClick={() => handleClose()}>close</button>
      </section>
    </div>
  );
};

export default LoginModal;
