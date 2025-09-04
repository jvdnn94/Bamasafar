import React from 'react'
import CustomButton from '../UI/Button/Button';
import  { useContext } from "react";
import Sitecontainer from "../Container/Sitecontainer";
import { Link } from "react-router-dom";
import { AppContext } from "../../context/AppContext";


function HumComp() {
    const {Menustate,CloseMenu,OpenModal}=useContext(AppContext)
    return (
        <>
            {/* اوورلی منوی موبایل */ }
            {
        Menustate && (
            <div className="fixed inset-0 bg-black/50 z-40" onClick={CloseMenu}></div>
        )
    }

    {/* منوی موبایل کشویی */ }
    <div
        className={`fixed rounded-bl-xl top-0 right-0 h-2/3 w-2/3 bg-blue-200/30 backdrop-blur-md shadow-2xl z-1000 transform transition-transform duration-300 ease-in-out 
          ${Menustate ? "translate-x-0" : "translate-x-full"}`}
    >
        <div className="p-5 flex flex-col gap-6 text-lg text-center">
            <Link to="/" onClick={CloseMenu} className="hover:text-blue-500">خانه</Link>
            <Link to="/traveling" onClick={CloseMenu} className="hover:text-blue-500">گردشگری</Link>
            <Link to="/tours" onClick={CloseMenu} className="hover:text-blue-500">تورها</Link>
            <CustomButton onClick={OpenModal} buttonSize="btn--medium" buttonStyle="btn--special" >
                ورود و ثبت نام

            </CustomButton>
        </div>
    </div>
        </>
  )
}

export default HumComp
