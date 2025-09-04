import React from 'react'


import CustomButton from '../UI/Button/Button'
const HeroSection=()=> {
    return (
        <div className="h-screen w-full flex flex-col items-center justify-center text-center shadow-inset-heavy">  
            <video src="/videos/1.mp4" className='object-cover w-full h-full fixed -z-10' autoPlay muted loop />
           
            <div className=" backdrop-blur-md border-2 border-black rounded-md py-12 px-6 mt-12" dir='rtl'>
               
                <input className="w-[400px] sm:w-[544px] md:w-[744px] py-6 pr-6 bg-white border border-[#e1e5ee] rounded-md shadow-[0_6px_20px_rgba(24,104,188,0.07)] text-[#0e0e0e] text-[17px] outline-none h-14" type="text" placeholder="جستجوی مکان، شهر، کشور و..." autoComplete="off" />
                <CustomButton  buttonStyle="btn--search" buttonSize="btn--large" className='m-2 w-[70%] md:w-24'>
                   جستجو
                </CustomButton>
            </div>
        </div>
    )
}
export default HeroSection
