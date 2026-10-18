import CardItem from "./cardsItems";

const destinations = [
  {
    id: 1,
    src: "images/9.jpg",
    text: "دیدن آبشار ناشناخته در دل جنگل‌های آمازون",
    label: "ماجراجویانه",
    path: "/destinations/amazon",
  },
  {
    id: 2,
    src: "images/8.jpg",
    text: "کویری زیبا در قلب ایران",
    label: "ماجراجویانه",
    path: "/destinations/iran-desert",
  },
  {
    id: 3,
    src: "images/6.jpg",
    text: "تجربه‌ای متفاوت از گردش در یک شهر",
    label: "شهری",
    path: "/destinations/city-tour",
  },
  {
    id: 4,
    src: "images/2.jpg",
    text: "سفری خاطره‌انگیز در جزایر کارائیب",
    label: "لوکس",
    path: "/destinations/caribbean",
  },
  {
    id: 5,
    src: "images/1.jpg",
    text: "آرامشی عمیق در رشته‌کوه‌های آلپ",
    label: "لوکس",
    path: "/destinations/alps",
  },
  {
    id: 6,
    src: "images/3.jpg",
    text: "کشف تاریخ در دل کوچه‌های قدیمی",
    label: "فرهنگی",
    path: "/destinations/historic",
  },
];

function Cards() {
  return (
    <section className="bg-gradient-to-b from-blue-50 to-white py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* عنوان بخش */}
        <div className="text-center mb-12 sm:mb-16" dir="rtl">
          <span className="text-xs sm:text-sm font-semibold text-blue-600 tracking-wider">
            انتخاب مسافران
          </span>
          <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900">
            مقاصد برتر
          </h2>
          <p className="mt-3 text-gray-500 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            محبوب‌ترین مقاصد سفر از نگاه مسافران ما
          </p>
        </div>

        {/* گرید کارت‌ها */}
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 lg:gap-8">
          {destinations.map((item) => (
            <li key={item.id}>
              <CardItem
                src={item.src}
                text={item.text}
                label={item.label}
                path={item.path}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Cards;