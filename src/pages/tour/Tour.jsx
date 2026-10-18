import React from "react";
import CustomButton from "../../components/UI/Button/Button";
import Cards from "../../components/cards/cards";
import TourCard from "../../components/TourComp/TourCard";
import "../../App.css";

const Tour = () => {
  const handleSearch = (e) => {
    e.preventDefault();
    // TODO: connect to search
  };

  return (
    <main>
      {/* ============ HERO ============ */}
      <section className="relative w-full min-h-[75vh] sm:min-h-[80vh] overflow-hidden">
        {/* پس‌زمینه */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url(images/9.jpg)" }}
          aria-hidden="true"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/50 to-slate-950/60" />

        {/* محتوا */}
        <div className="relative z-10 min-h-[75vh] sm:min-h-[80vh] flex flex-col items-center justify-center text-center px-4 py-16">
          <span className="inline-block mb-5 px-4 py-1.5 bg-white/15 backdrop-blur-md border border-white/20 rounded-full text-white text-xs sm:text-sm font-medium">
            مقاصد رویایی
          </span>

          <h1
            dir="rtl"
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight max-w-3xl"
          >
            تورهای ویژه و مقاصد منتخب
          </h1>

          <p
            dir="rtl"
            className="mt-4 text-white/85 text-sm sm:text-base lg:text-lg max-w-xl leading-relaxed"
          >
            بهترین تورها را با ما تجربه کنید — از کویر تا دریا
          </p>

          {/* فرم جستجو */}
          <form
            onSubmit={handleSearch}
            dir="rtl"
            className="mt-8 w-full max-w-2xl bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl p-2 flex flex-col sm:flex-row gap-2"
          >
            <input
              type="text"
              name="search"
              placeholder="جستجوی مکان، شهر، کشور و..."
              autoComplete="off"
              className="flex-1 min-w-0 px-5 py-4 bg-transparent text-gray-900 placeholder-gray-500 text-sm sm:text-base outline-none rounded-xl"
            />
            <CustomButton
              buttonStyle="btn--search"
              buttonSize="btn--large"
              className="w-full sm:w-auto sm:min-w-[120px] shrink-0"
            >
              جستجو
            </CustomButton>
          </form>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 hidden sm:flex flex-col items-center gap-2 text-white/60">
          <span className="text-[10px] tracking-widest">اسکرول</span>
          <div className="w-px h-8 bg-white/40 animate-pulse" />
        </div>
      </section>

      {/* ============ TOURS ============ */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <TourCard />
        </div>
      </section>

      {/* ============ DESTINATIONS ============ */}
      <Cards />
    </main>
  );
};

export default Tour;