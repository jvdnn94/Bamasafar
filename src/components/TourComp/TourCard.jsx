import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import CustomButton from "../../components/UI/Button/Button";

/* ---------- داده‌ها (بهتره از API بیاد) ---------- */
const TOURS = [
  {
    id: 1,
    title: "تور کیش ۲ روز و ۳ شب",
    destination: "کیش",
    image: "/images/tours/kish.jpg",
    price: 10600000,
    duration: "۲ روز و ۳ شب",
    date: "۱۱ الی ۱۴ مرداد ۱۴۰۴",
    company: "آریاسفر",
    category: "domestic",
    tags: ["domestic", "luxury"],
    rating: 4.7,
    discount: 15,
  },
  {
    id: 2,
    title: "تور مشهد ۳ روزه",
    destination: "مشهد",
    image: "/images/tours/mashhad.jpg",
    price: 20000000,
    duration: "۳ روز و ۳ شب",
    date: "۱۱ الی ۱۴ مرداد ۱۴۰۴",
    company: "عرشیاسفر",
    category: "domestic",
    tags: ["domestic"],
    rating: 4.5,
    discount: 0,
  },
  {
    id: 3,
    title: "تور استانبول ۴ روزه",
    destination: "استانبول",
    image: "/images/tours/istanbul.jpg",
    price: 32000000,
    duration: "۴ روز و ۳ شب",
    date: "۲۰ الی ۲۴ مرداد ۱۴۰۴",
    company: "ترک‌تور",
    category: "foreign",
    tags: ["foreign"],
    rating: 4.8,
    discount: 10,
  },
];

/* ---------- helper: قیمت ---------- */
const formatPrice = (n) =>
  new Intl.NumberFormat("fa-IR").format(n);

/* ---------- helper: ستاره ---------- */
const Rating = ({ value }) => (
  <span className="inline-flex items-center gap-1 text-xs text-gray-600">
    <svg className="w-3.5 h-3.5 text-amber-400" viewBox="0 0 20 20" fill="currentColor">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.367 2.447a1 1 0 00-.364 1.118l1.287 3.957c.3.922-.755 1.688-1.539 1.118l-3.367-2.447a1 1 0 00-1.176 0l-3.367 2.447c-.783.57-1.838-.196-1.539-1.118l1.287-3.957a1 1 0 00-.364-1.118L2.31 9.384c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.04-3.957z" />
    </svg>
    {value.toFixed(1)}
  </span>
);

/* ---------- کارت تور ---------- */
function TourItem({ tour }) {
  return (
    <Link
      to={`/tours/${tour.id}`}
      className="group block bg-white rounded-2xl overflow-hidden ring-1 ring-gray-200 shadow-sm hover:shadow-xl hover:ring-blue-200 hover:-translate-y-1 transition-all duration-300"
    >
      {/* تصویر */}
      <div className="relative aspect-[16/10] overflow-hidden bg-gray-100">
        <img
          src={tour.image}
          alt={tour.destination}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {tour.discount > 0 && (
          <span className="absolute top-3 right-3 px-2.5 py-1 text-xs font-bold text-white bg-rose-500 rounded-full shadow-lg">
            {tour.discount}٪ تخفیف
          </span>
        )}
        <div className="absolute bottom-3 right-3 flex items-center gap-1 px-2 py-1 bg-black/60 backdrop-blur-sm rounded-full">
          <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <span className="text-[11px] text-white font-medium">{tour.destination}</span>
        </div>
      </div>

      {/* محتوا */}
      <div className="p-4 space-y-3">
        {/* عنوان + امتیاز */}
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-base sm:text-lg font-bold text-gray-900 leading-snug line-clamp-2 group-hover:text-blue-700 transition-colors">
            {tour.title}
          </h3>
          <Rating value={tour.rating} />
        </div>

        {/* اطلاعات */}
        <div className="space-y-2 text-xs sm:text-sm text-gray-600">
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4 text-blue-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>{tour.duration}</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4 text-blue-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span>{tour.date}</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4 text-blue-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
            <span>{tour.company}</span>
          </div>
        </div>

        {/* قیمت + دکمه */}
        <div className="pt-3 border-t border-gray-100 flex items-end justify-between">
          <div>
            <span className="text-[11px] text-gray-400">شروع از</span>
            <p className="text-base sm:text-lg font-extrabold text-blue-700">
              {formatPrice(tour.price)}
              <span className="text-xs font-normal text-gray-500 mr-1">تومان</span>
            </p>
          </div>
          <span className="inline-flex items-center gap-1 text-xs font-semibold text-blue-600 group-hover:gap-2 transition-all">
            جزئیات
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </span>
        </div>
      </div>
    </Link>
  );
}

/* ---------- Empty state ---------- */
function EmptyState({ onReset }) {
  return (
    <div className="text-center py-16 bg-white rounded-2xl ring-1 ring-gray-100">
      <div className="mx-auto w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center mb-4">
        <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </div>
      <h3 className="text-lg font-bold text-gray-900 mb-1">توری پیدا نشد</h3>
      <p className="text-sm text-gray-500 mb-5">
        فیلتر دیگه‌ای رو امتحان کن یا همه تورها رو ببین.
      </p>
      <button
        onClick={onReset}
        className="px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-xl transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
      >
        نمایش همه تورها
      </button>
    </div>
  );
}

/* ---------- TourCard ---------- */
function TourCard() {
  const [activeTab, setActiveTab] = useState("all");
  const [sortBy, setSortBy] = useState("newest");

  const tabs = [
    { id: "all", label: "تمامی تورها" },
    { id: "foreign", label: "خارجی" },
    { id: "domestic", label: "داخلی" },
    { id: "adventure", label: "ماجراجویانه" },
    { id: "luxury", label: "لوکس" },
    { id: "lastMinute", label: "لحظه آخری" },
    { id: "nature", label: "طبیعت‌گردی" },
  ];

  const filteredTours = useMemo(() => {
    let list = TOURS;
    if (activeTab !== "all") {
      list = list.filter(
        (t) => t.category === activeTab || t.tags?.includes(activeTab)
      );
    }
    if (sortBy === "cheapest") {
      list = [...list].sort((a, b) => a.price - b.price);
    } else if (sortBy === "viewCount") {
      list = [...list].sort((a, b) => b.rating - a.rating);
    }
    return list;
  }, [activeTab, sortBy]);

  return (
    <div dir="rtl" className="bg-gradient-to-b from-blue-50 via-white to-white pb-16">
      {/* ============ HEADER ============ */}
      <div className="text-center pt-4 pb-8">
        <span className="text-xs sm:text-sm font-semibold text-blue-600 tracking-wider">
          همه تورها
        </span>
        <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900">
          تورهای موجود
        </h2>
        <p className="mt-3 text-gray-500 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
          بهترین تورها را با شرایط و قیمت مناسب انتخاب کنید
        </p>
      </div>

      {/* ============ TABS ============ */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="overflow-x-auto scrollbar-hide pb-2 -mx-4 px-4">
          <ul className="inline-flex items-center gap-1.5 sm:gap-2 min-w-full sm:min-w-0 sm:justify-center bg-white rounded-2xl ring-1 ring-gray-200 p-1.5 shadow-sm">
            {tabs.map((tab) => {
              const active = activeTab === tab.id;
              return (
                <li key={tab.id}>
                  <button
                    onClick={() => setActiveTab(tab.id)}
                    aria-pressed={active}
                    className={`whitespace-nowrap px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium rounded-xl transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 ${
                      active
                        ? "bg-gradient-to-l from-blue-500 to-blue-700 text-white shadow-md shadow-blue-500/30"
                        : "text-gray-600 hover:text-blue-700 hover:bg-blue-50"
                    }`}
                  >
                    {tab.label}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      {/* ============ TOOLBAR ============ */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-6">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <span className="font-medium text-gray-900">{filteredTours.length}</span>
            <span>تور یافت شد</span>
          </div>

          <div className="flex items-center gap-2">
            <label htmlFor="sort" className="text-xs sm:text-sm text-gray-600">
              مرتب‌سازی:
            </label>
            <select
              id="sort"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-3 py-2 text-xs sm:text-sm bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
            >
              <option value="newest">جدیدترین</option>
              <option value="cheapest">ارزان‌ترین</option>
              <option value="viewCount">محبوب‌ترین</option>
            </select>
          </div>
        </div>

        {/* ============ LIST ============ */}
        {filteredTours.length === 0 ? (
          <EmptyState onReset={() => setActiveTab("all")} />
        ) : (
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {filteredTours.map((tour) => (
              <li key={tour.id}>
                <TourItem tour={tour} />
              </li>
            ))}
          </ul>
        )}

        {/* ============ MORE BUTTON ============ */}
        {filteredTours.length > 0 && (
          <div className="mt-10 text-center">
            <CustomButton buttonStyle="btn--tour" buttonSize="btn--large">
              مشاهده تورهای بیشتر
            </CustomButton>
          </div>
        )}
      </div>
    </div>
  );
}

export default TourCard;