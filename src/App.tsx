import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import ModalComponent from "./ModalComponent";

function App() {
  const [modalSettings, setModalSettings] = useState({
    isModal: true,
    isSubmitted: false,
    isEmail: localStorage.getItem("email") || false
  });

  const closeModal = () => {
    setModalSettings(prevSettings => ({
      ...prevSettings,
      isSubmitted: false,
      isEmail: false,
      isModal: false
    }));
  };

  const onSubmitted = (data: any) => {
    localStorage.setItem("email", data.email);
    setModalSettings(prevSettings => ({
      ...prevSettings,
      isSubmitted: true,
      isEmail: true
    }));
  };

  return (
    <div className="App">
      {modalSettings.isSubmitted ||
      (modalSettings.isModal && !modalSettings.isEmail) ? (
        <ModalComponent
          onClose={closeModal}
          isEmail={modalSettings.isEmail}
          onSubmitted={onSubmitted}
        />
      ) : (
        <p>Show something</p>
      )}
    </div>
  );
}

export default App;
