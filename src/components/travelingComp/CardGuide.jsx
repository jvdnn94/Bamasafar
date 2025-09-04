import React from "react";
import CardItem from "./CardItem";

function CardsGuide() {
  return (
    <div className="bg-white p-16 font-[IRANSans]">
      {/* تیتر */}
       <p className="text-[26px] text-gray-600 text-center mt-4 font-bold">
        پرتال جامع گردش و سفر
      </p>
      <h1 className="text-center text-[20px] text-gray-600">
        بهترین راهنمای ایرانگردی، جهانگردی، خرید بلیط هواپیما، راهنمای اخذ ویزا، رزرو هتل و مکان های اقامتی، مکان های گردشگری
      </h1>
     

      {/* کانتینر */}
      <div className="flex flex-col items-center max-w-[1120px] w-[90%] mx-auto ">
        <div className="relative my-12">
          <ul className="flex flex-col lg:flex-row gap-18 text-xl" dir="rtl">
            <CardItem
              src="https://cdn.hamgardi.com/Static/Img/internal/compare.png"
              title="دانستنی ها"
              text="معرفی جذابیت های ایران و جهان"
            />
            <CardItem
              src="https://cdn.hamgardi.com/Static/Img/internal/compare.png"
              title="جستجوی پیشرفته"
              text="جستجوی تمامی مقاصد سفرهای شما"
            />
            <CardItem
              src="https://cdn.hamgardi.com/Static/Img/internal/compare.png"
              title="راهنمای جامع گردش و تفریح"
              text="راهنمای سفر به شهرهای ایران و جهان"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CardsGuide;
