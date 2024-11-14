import React from "react";
import "./modal.css";

function Modal({ closeModel }) {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button onClick={() => closeModel(false)}>X</button>
        </div>
        <div className="title">
          <h1>hi</h1>
        </div>
        <div className="body">
          <p>bi</p>
        </div>
        <div className="footer" />
      </div>
    </div>
  );
}

export default Modal;
