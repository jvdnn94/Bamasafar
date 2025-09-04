import React from "react";
import CardItem from "./cardsItems";

function Cards() {
  return (
    <div className="bg-blue-200 p-8 border-t-2">
      <h1 className="text-center text-2xl font-bold text-gray-800 mb-12">
        مقاصد برتر
      </h1>

      <div className="max-w-[1120px] w-[90%] mx-auto">
     
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <CardItem
            src="images/9.jpg"
            text="دیدن آبشار ناشناخته در دل جنگل های آمازون"
            label=" ماجراجویانه"
            path="/dervices"
          />
          <CardItem
            src="images/8.jpg"
            text="کویری زیبا در قلب ایران"
            label="ماجراجویانه "
            path="/dervices"
          />
          <CardItem
            src="images/6.jpg"
            text="تجربه ای متفاوت از گردش در یک شهر"
            label="ماجراجویانه"
            path="/dervices"
          />
          <CardItem
            src="images/2.jpg"
            text="سفری خاطره انگیز در جزایر کارائیب"
            label="لوکس"
            path="/dervices"
          />
          <CardItem
            src="images/1.jpg"
            text="آرامشی عمیق در رشته کوه های آلپ"
            label="لوکس"
            path="/dervices"
          />
          <CardItem
            src="images/6.jpg"
            text="تجربه ای متفاوت از گردش در یک شهر"
            label="لوکس"
            path="/dervices"
          />

این یک وبسایت آزمایشی در حوزه توریسم  و تهیه بلیط هواپیما است که بوسیله ری اکت  و پکیج ویت  ساخته شده و استایل ها هم بصورت کامل با تیلویند ایجاد شده اند(البته این سایت در مراحل اولیه است و به ای پی آی متصل نیست و فاقد دیتا می باشد که بزودی نسخه کامل ارائه می گردد)، در ضمن سایت کاملا ریسپانسیو بوده و با تمامی نماشگر ها و ابزار ها سازگار است.
        
        
        </ul>
      </div>
    </div>
  );
}

export default Cards;
