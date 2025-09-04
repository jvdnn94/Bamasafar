import React, { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
     const [Menustate, setMenuState] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [isRegister, setIsRegister] = useState(false);

   const MenuHandler = () => setMenuState(!Menustate);
    const CloseMenu = () => setMenuState(false);
    const OpenModal = () => {
        setShowModal(true);
        setMenuState(false); 
        setIsRegister(false)
    };
    const CloseModal = () => setShowModal(false);

  return (
    <AppContext.Provider value={{ Menustate, setMenuState,showModal, setShowModal,isRegister, setIsRegister,MenuHandler,CloseMenu
        ,OpenModal,CloseModal
    }}>
      {children}
    </AppContext.Provider>
  );
};