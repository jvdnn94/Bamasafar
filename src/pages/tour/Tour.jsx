import React from 'react'
import CustomButton from '../../components/UI/Button/Button'
import CardGuide from '../../components/travelingComp/CardGuide/'
import Cards from '../../components/cards/cards'
import '../../App.css'
import TourCard from '../../components/TourComp/TourCard'

const Tour = () => {
  return (
    <>
      <div className="h-screen w-full flex flex-col items-center justify-center text-center text-white text-2xl shadow-inset-heavy bg-cover bg-center" style={{ backgroundImage: `url(images/9.jpg)` }}>

        <div className=" backdrop-blur-md border-2 rounded-md py-12 px-6 mt-12 border-black" dir='rtl'>

          <input className="w-[400px] sm:w-[544px] md:w-[744px] py-6 pr-6 bg-white border border-[#e1e5ee] rounded-md shadow-[0_6px_20px_rgba(24,104,188,0.07)] text-[#0e0e0e] text-[17px] outline-none h-14" type="text" placeholder="جستجوی مکان، شهر، کشور و..." autoComplete="off" />
          <CustomButton buttonStyle="btn--search" buttonSize="btn--large" className='m-2 w-[70%] md:w-24'>
            جستجو
          </CustomButton>
        </div>
      </div>
      <TourCard />
      <Cards />

    </>

  )
}
export default Tour