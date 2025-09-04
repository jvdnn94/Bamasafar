import React from 'react';
import CustomButton from '../UI/Button/Button';
import { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import { Link } from "react-router-dom";


function CustomLogIn() {
    const {showModal,CloseModal,isRegister,setIsRegister } = useContext(AppContext)
    return (
        <>
          {/* مودال ورود/ثبت نام */}
            {showModal && (
                <>
                    {/* اوورلی مودال */}
                    <div className="fixed inset-0 bg-black/50 z-50" onClick={CloseModal}></div>

                    {/* پنجره مودال */}
                    <div className="fixed inset-0 flex items-center justify-center z-1000 px-4">
                        <div className="bg-blue-200/30 backdrop-blur-md rounded-lg shadow-lg w-full max-w-md p-6 relative">
                            {/* دکمه بستن */}
                            <button
                                className="absolute top-2 right-2 text-red-900 hover:text-gray-700 text-3xl"
                                onClick={CloseModal}
                                
                            >
                                &times;
                            </button>

                            {!isRegister ? (
                                <>
                                    {/* فرم ورود */}
                                    <h2 className="text-2xl font-bold mb-4 text-center">ورود</h2>
                                    <form className="flex flex-col gap-4">
                                        <input
                                            type="text"
                                            placeholder="نام کاربری یا ایمیل"
                                            className="border bg-amber-50 border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                        />
                                        <input
                                            type="password"
                                            placeholder="رمز عبور"
                                            className="border bg-amber-50 border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                        />


                                        <CustomButton buttonSize="btn--large" buttonStyle="btn--tour" >
                                            ورود

                                        </CustomButton>
                                    </form>
                                    <p className="mt-4 text-center text-sm">
                                        ثبت نام نکرده‌اید؟{" "}
                                        <span
                                            className="text-orange-900 cursor-pointer hover:underline"
                                            onClick={() => setIsRegister(true)}
                                        >
                                            ثبت نام
                                        </span>
                                    </p>
                                </>
                            ) : (
                                <>
                                    {/* فرم ثبت‌نام */}
                                    <h2 className="text-2xl font-bold mb-4 text-center">ثبت نام</h2>
                                    <form className="flex flex-col gap-4 ">
                                        <input
                                            type="text"
                                            placeholder="نام"
                                            className="border bg-amber-50 border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-400"
                                        />
                                        <input
                                            type="text"
                                            placeholder="نام خانوادگی"
                                            className="border bg-amber-50 border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-400"
                                        />
                                        <input
                                            type="text"
                                            placeholder="شماره همراه"
                                            className="border bg-amber-50 border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-400"
                                        />
                                        <input
                                            type="email"
                                            placeholder="ایمیل"
                                            className="border bg-amber-50 border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-400"
                                        />
                                        <input
                                            type="password"
                                            placeholder="رمز عبور"
                                            className="border bg-amber-50 border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-400"
                                        />
                                        <CustomButton buttonSize="btn--large" buttonStyle="btn--search--place" >
                                            ثبت نام

                                        </CustomButton>
                                    </form>
                                    <p className="mt-4 text-center text-sm">
                                        قبلاً ثبت نام کرده‌اید؟{" "}
                                        <span
                                            className="text-orange-900 cursor-pointer hover:underline"
                                            onClick={() => setIsRegister(false)}
                                        >
                                            ورود
                                        </span>
                                    </p>
                                </>
                            )}
                        </div>
                    </div>
                </>
            )}

        </>
    )
}

export default CustomLogIn
