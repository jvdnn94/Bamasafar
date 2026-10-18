import { useState } from "react";
import { AppContext } from "./AppContext";

export const AppProvider = ({ children }) => {
  const [Menustate, setMenuState] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [isRegister, setIsRegister] = useState(false);

  const MenuHandler = () => setMenuState((prev) => !prev);
  const CloseMenu = () => setMenuState(false);

  const OpenLoginModal = () => {
    setIsRegister(false);
    setShowModal(true);
    setMenuState(false);
  };

  const OpenRegisterModal = () => {
    setIsRegister(true);
    setShowModal(true);
    setMenuState(false);
  };

  const CloseModal = () => setShowModal(false);

  return (
    <AppContext.Provider
      value={{
        Menustate,
        showModal,
        isRegister,
        MenuHandler,
        CloseMenu,
        OpenLoginModal,
        OpenRegisterModal,
        CloseModal,
        OpenModal: OpenLoginModal,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};