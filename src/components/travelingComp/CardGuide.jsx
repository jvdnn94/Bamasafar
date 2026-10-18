import React from "react";

/* ---------- آیکون‌ها ---------- */
const IconCompass = () => (
  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="9" strokeWidth={2} />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
      d="M15.5 8.5l-2 5-5 2 2-5 5-2z" />
  </svg>
);

const IconSearch = () => (
  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <circle cx="11" cy="11" r="7" strokeWidth={2} />
    <path strokeLinecap="round" strokeWidth={2} d="M21 21l-4.3-4.3" />
  </svg>
);

const IconBook = () => (
  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
      d="M4 5a2 2 0 012-2h13v18H6a2 2 0 01-2-2V5z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
      d="M8 7h8M8 11h6" />
  </svg>
);

const FEATURES = [
  {
    id: 1,
    icon: <IconCompass />,
    title: "دانستنی‌ها",
    text: "معرفی جذابیت‌های ایران و جهان",
    color: "from-blue-500 to-blue-700",
  },
  {
    id: 2,
    icon: <IconSearch />,
    title: "جستجوی پیشرفته",
    text: "جستجوی تمامی مقاصد سفرهای شما",
    color: "from-cyan-500 to-blue-600",
  },
  {
    id: 3,
    icon: <IconBook />,
    title: "راهنمای جامع",
    text: "راهنمای سفر به شهرهای ایران و جهان",
    color: "from-indigo-500 to-blue-700",
  },
];

function CardsGuide() {
  return (
    <section className="bg-gradient-to-b from-blue-50 via-white to-white py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* عنوان */}
        <div className="text-center mb-12 sm:mb-16" dir="rtl">
          <span className="text-xs sm:text-sm font-semibold text-blue-600 tracking-wider">
            چرا ما؟
          </span>
          <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900">
            همراه مطمئن سفر شما
          </h2>
          <p className="mt-3 text-gray-500 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            هر چیزی که برای یک سفر بی‌دغدغه لازم دارید، در یک جا
          </p>
        </div>

        {/* کارت‌ها */}
        <ul
          dir="rtl"
          className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 lg:gap-8"
        >
          {FEATURES.map((f) => (
            <li key={f.id}>
              <div className="group h-full bg-white rounded-2xl p-6 sm:p-8 ring-1 ring-gray-200 shadow-sm hover:shadow-xl hover:ring-blue-200 hover:-translate-y-1 transition-all duration-300 flex flex-col items-start text-right">
                {/* آیکون */}
                <div
                  className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${f.color} flex items-center justify-center text-white shadow-lg shadow-blue-500/30 group-hover:scale-110 transition-transform duration-300`}
                >
                  {f.icon}
                </div>

                <h3 className="mt-5 text-lg sm:text-xl font-bold text-gray-900 group-hover:text-blue-700 transition-colors">
                  {f.title}
                </h3>

                <p className="mt-2 text-sm sm:text-base text-gray-600 leading-relaxed">
                  {f.text}
                </p>

                <span className="mt-5 inline-flex items-center gap-1 text-xs sm:text-sm font-semibold text-blue-600 group-hover:gap-2 transition-all">
                  بیشتر بدانید
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default CardsGuide;