import React, { useState } from "react";
import FormComponent from "./FormComponent";
import "./ModalComponent.scss";
const ModalComponent = ({ onClose, isEmail, onSubmitted }: any) => {
  const [closingModal, setClosingModal] = useState(false);

  const onClosing = () => {
    setClosingModal(true);
    setTimeout(() => {
      onClose();
    }, 400);
  };

  return (
    <div className="modal">
      <div
        className={`modal-container ${
          closingModal ? "closing-animation-modal" : "holaaa"
        }`}
      >
        <div className="modal-content">
          <span className="modal-close-btn" onClick={onClosing}>
            X
          </span>
          <div className="modal-header">
            <h2>Modal Title</h2>
          </div>

          {isEmail && (
            <h3 className="success-message">Welcome disccount code!!</h3>
          )}
          {!isEmail && <FormComponent onSubmitCallback={onSubmitted} />}
        </div>
      </div>
    </div>
  );
};

export default ModalComponent;
