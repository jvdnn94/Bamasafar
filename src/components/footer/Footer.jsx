import React from "react";
import CustomButton from "../UI/Button/Button";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="bg-gray-900 text-white pt-10 pb-6" dir="rtl">
      {/* خبرنامه */}
      <section className="text-center px-4">
        <p className="text-lg md:text-xl font-bold mb-2">
          به خبرنامه ما بپیوندید تا از آفرهای تورهای ایرانگردی و جهانگردی با خبر شوید
        </p>
        
        <div className="flex justify-center">
          <form className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
            <input
              className="px-4 py-2 rounded-md bg-white text-black focus:outline-none w-full sm:w-80"
              type="email"
              name="email"
              placeholder="ایمیل خود را وارد کنید"
            />
            <CustomButton buttonStyle="btn--special">عضویت</CustomButton>
          </form>
        </div>
      </section>

      {/* لینک‌ها */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-6 md:px-20">
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl mb-2 font-extrabold ">درباره ما</h1>
          <Link to="/" className="hover:text-yellow-400">موقعیت‌های شغلی</Link>
          <Link to="/" className="hover:text-yellow-400">تماس با ما</Link>
          <Link to="/" className="hover:text-yellow-400">همکاری با ما</Link>
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl mb-2 font-extrabold ">راهنما</h1>
          <Link to="/" className="hover:text-yellow-400">نقشه سایت</Link>
          <Link to="/" className="hover:text-yellow-400">سوال‌های متداول</Link>
          <Link to="/" className="hover:text-yellow-400">حریم شخصی</Link>
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl mb-2 font-extrabold ">رزرو</h1>
          <Link to="/" className="hover:text-yellow-400">رزرو هتل</Link>
          <Link to="/" className="hover:text-yellow-400">رزرو بلیط هواپیما</Link>
          <Link to="/" className="hover:text-yellow-400">رزرو بلیط قطار</Link>
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl mb-2 font-extrabold ">شبکه‌های اجتماعی</h1>
          <Link to="/" className="hover:text-yellow-400">اینستاگرام</Link>
          <Link to="/" className="hover:text-yellow-400">توییتر</Link>
          <Link to="/" className="hover:text-yellow-400">لینکدین</Link>
        </div>
      </div>

      {/* سوشیال مدیا */}
      <section className="mt-10 border-t border-gray-700 pt-6 px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex text-2xl gap-2 items-center" dir="ltr">
            <i className="fa-solid fa-plane bg-gradient-to-r from-pink-500 via-yellow-400 to-blue-500 bg-clip-text text-transparent transition-transform duration-500 hover:scale-110 hover:rotate-3"></i>
            <i className="fa-solid fa-umbrella-beach bg-gradient-to-r from-pink-500 via-yellow-400 to-blue-500 bg-clip-text text-transparent transition-transform duration-500 hover:scale-110 hover:-rotate-3"></i>
            <span className="text-xl font-bold bg-gradient-to-r from-pink-500 via-yellow-400 to-blue-500 bg-clip-text text-transparent transition-transform duration-500 hover:scale-105 hover:skew-x-2 cursor-default">
              BAMASAFAR
            </span>
          </div>

          <small className="text-gray-400">Travel © 2020</small>

          <div className="flex gap-4 text-lg">
            <Link to="/" target="_blank" aria-label="Facebook" className="hover:text-blue-500">
              <i className="fab fa-facebook-f"></i>
            </Link>
            <Link to="/" target="_blank" aria-label="Instagram" className="hover:text-pink-500">
              <i className="fab fa-instagram"></i>
            </Link>
            <Link to="/" target="_blank" aria-label="Twitter" className="hover:text-sky-400">
              <i className="fab fa-twitter"></i>
            </Link>
            <Link to="/" target="_blank" aria-label="Linkedin" className="hover:text-blue-700">
              <i className="fab fa-linkedin"></i>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
