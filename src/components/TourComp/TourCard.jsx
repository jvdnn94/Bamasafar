import React, { useState } from "react";
import CustomButton from "../../components/UI/Button/Button";

function TourCard() {
  const [activeTab, setActiveTab] = useState("all");

  const tabs = [
    { id: "all", label: "تمامی تورها" },
    { id: "foreign", label: "تورهای خارجی" },
    { id: "domestic", label: "تورهای داخلی" },
    { id: "adventure", label: "تور ماجراجویانه" },
    { id: "luxury", label: "تور لوکس" },
    { id: "lastMinute", label: "تور لحظه آخری" },
    { id: "nature", label: "تور طبیعت‌گردی" },
  ];

  return (
    <div className="bg-lime-500 text-gray-950 min-h-screen pb-20 font-sans"dir="rtl">
      <h1 className="text-center text-3xl font-extrabold py-6 mb-8">تور</h1>

      {/* تب‌ها */}
      <div className="flex flex-col items-center max-w-5xl w-11/12 mx-auto">
        <ul className="flex flex-wrap justify-center w-full gap-2">
          {tabs.map((tab) => (
            <li
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 text-white text-center rounded cursor-pointer transition
                ${activeTab === tab.id
                  ? "bg-black/30 shadow-inner"
                  : "bg-transparent hover:bg-black/20"
                }`}
            >
              {tab.label}
            </li>
          ))}
        </ul>
      </div>

      {/* محتوا */}
      <div className="mt-10 w-full px-4 md:px-8">
        <div className="bg-white shadow-md rounded-md overflow-hidden">
          <header className="bg-gray-100 px-4 py-3 flex justify-between items-center border-b border-gray-200">
            <span className="text-gray-950 text-lg">تور</span>
            <div className="flex items-center gap-2">
              <span className="text-gray-950">مرتب شده بر اساس</span>
              <select className="border rounded-full px-3 py-1 text-sm focus:outline-none">
                <option value="newest">جدیدترین</option>
                <option value="cheapest">ارزان‌ترین</option>
                <option value="viewCount">پربازدیدترین</option>
              </select>
            </div>
          </header>

          <div className="p-6 text-center">
            <ul className="space-y-4" dir="rtl">
              <li className="border rounded-md shadow-sm p-4 hover:border-blue-500 hover:shadow-md transition">
                <a
                  href="#"
                  className="flex justify-between items-center text-gray-950 text-sm md:text-base"
                >
                  <span className="text-blue-600">تور کیش ۲ روز و ۳ شب</span>
                  <p>از ۱۰.۶۰۰.۰۰۰</p>
                  <p>2روز و 3 شب    </p>
                  <p>11مرداد 1404 الی 14 مرداد 1404 </p>
                  <p>شرکت خدمات  آریاسفر</p>
                </a>
              </li>

              <li className="border rounded-md shadow-sm p-4 hover:border-blue-500 hover:shadow-md transition">
                <a
                  href="#"
                  className="flex justify-between items-center text-gray-700 text-sm md:text-base"
                >
                  <span className="text-blue-600">تور مشهد ۳ روزه</span>
                  <p>از ۲۰.۰۰۰.۰۰۰</p>
                 <p>3روز و 3 شب    </p>
                  <p>11مرداد 1404 الی 14 مرداد 1404  </p>
                  <p>شرکت خدمات  عرشیاسفر</p>
                </a>
              </li>
            </ul>

            <div className="mt-6">
              <CustomButton buttonStyle="btn--tour" buttonSize="btn--large">
                تورهای بیشتر
              </CustomButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TourCard;
