import React, { useContext } from "react";
import CustomButton from "../UI/Button/Button";
import Sitecontainer from "../Container/Sitecontainer";
import { Link } from "react-router-dom";
import { AppContext } from "../../context/AppContext";
import { NavLink } from "react-router-dom";

function DeskNav() {
    const { Menustate, CloseMenu, OpenModal, MenuHandler } = useContext(AppContext);

    return (
        <nav className="navbar fixed top-0 w-full h-16 z-50 border-b-2 border-black backdrop-blur-md" dir="rtl">
            <Sitecontainer>
                <div className="flex items-center justify-between mt-2">

                    {/* لوگو موبایل */}
                    <div className="flex text-2xl gap-1 md:hidden items-center" dir="ltr">
                        <i className="fa-solid fa-plane bg-gradient-to-r from-pink-500 via-yellow-400 to-blue-500 bg-clip-text text-transparent transform transition-transform duration-500 hover:scale-110 hover:rotate-6"></i>
                        <i className="fa-solid fa-umbrella-beach bg-gradient-to-r from-pink-500 via-yellow-400 to-blue-500 bg-clip-text text-transparent transform transition-transform duration-500 hover:scale-110 hover:-rotate-6"></i>
                        <span className="text-xl mt-6 font-extrabold bg-gradient-to-r from-pink-500 via-yellow-400 to-blue-500 bg-clip-text text-transparent transform transition-transform duration-500 hover:scale-110 hover:skew-x-3 cursor-default">
                            BAMASAFAR
                        </span>
                    </div>

                    {/* منوی دسکتاپ */}
                    <ul className="hidden md:flex items-center gap-6 text-xl font-semibold text-gray-950" dir="rtl">
                        <li className="flex items-center gap-1" dir="ltr">
                            <i className="fa-solid fa-plane bg-gradient-to-r from-pink-500 via-yellow-400 to-blue-500 bg-clip-text text-transparent transform transition-transform duration-500 hover:scale-110 hover:rotate-6"></i>
                            <i className="fa-solid fa-umbrella-beach bg-gradient-to-r from-pink-500 via-yellow-400 to-blue-500 bg-clip-text text-transparent transform transition-transform duration-500 hover:scale-110 hover:-rotate-6"></i>
                            <span className="text-xl font-bold bg-gradient-to-r from-pink-500 via-yellow-400 to-blue-500 bg-clip-text text-transparent transform transition-transform duration-500 hover:scale-105 hover:skew-x-3 cursor-default">
                                BAMASAFAR
                            </span>
                        </li>

                        <li>
                            <NavLink
                                to="/"
                                className={({ isActive }) =>
                                    `transition-all duration-300 px-2 py-1 font-semibold ${isActive ? 'text-lime-500' : 'text-gray-800'
                                    } hover:text-lime-500`
                                }
                            >
                                خانه
                            </NavLink>
                        </li>

                        <li className="relative group">
                            <NavLink
                                to="/traveling"
                                className={({ isActive }) =>
                                    `transition-all duration-300 px-2 py-1 font-semibold ${isActive ? 'text-lime-500' : 'text-gray-800'
                                    } hover:text-lime-500`
                                }
                            >
                                گردشگری
                            </NavLink>

                        </li>

                        <li className="relative group">
                            <NavLink
                                to="/tours"
                                className={({ isActive }) =>
                                    `transition-all duration-300 px-2 py-1 font-semibold ${isActive ? 'text-lime-500' : 'text-gray-800'
                                    } hover:text-lime-500`
                                }
                            >
                                تورها
                            </NavLink>
                        </li>

                    </ul>

                    {/* آیکون همبرگر موبایل */}
                    <div className="flex md:hidden mx-2 text-3xl cursor-pointer" onClick={MenuHandler}>
                        <i className={Menustate ? "fas fa-times" : "fas fa-bars"}></i>
                    </div>

                    {/* دکمه ورود دسکتاپ */}
                    <div className="hidden md:flex mx-2">
                        <CustomButton
                            onClick={OpenModal}
                            buttonSize="btn--medium"
                            buttonStyle="btn--special"
                            className="btn2"
                        >
                            ورود / ثبت نام
                        </CustomButton>
                    </div>

                </div>
            </Sitecontainer>
        </nav>
    );
}

export default DeskNav;
