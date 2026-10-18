import { useContext, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import CustomButton from "../UI/Button/Button";
import { AppContext } from "../../context/AppContext";

/* ---------- Icons (فقط برای هدر و تماس) ---------- */
const IconX = (p) => (
  <svg {...p} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
);
const IconPhone = (p) => (
  <svg {...p} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
);
const IconMail = (p) => (
  <svg {...p} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

const NAV_ITEMS = [
  { to: "/", label: "خانه" },
  { to: "/traveling", label: "گردشگری" },
  { to: "/tours", label: "تورها" },
];

function HumComp() {
  const { Menustate, CloseMenu, OpenModal } = useContext(AppContext);
  const location = useLocation();

  useEffect(() => {
    if (Menustate) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [Menustate]);

  useEffect(() => {
    if (!Menustate) return;
    const onEsc = (e) => e.key === "Escape" && CloseMenu();
    window.addEventListener("keydown", onEsc);
    return () => window.removeEventListener("keydown", onEsc);
  }, [Menustate, CloseMenu]);

  return (
    <>
      {/* Overlay */}
      <div
        onClick={CloseMenu}
        aria-hidden={!Menustate}
        className={`fixed inset-0 z-40 lg:hidden bg-slate-950/50 backdrop-blur-md transition-all duration-300
          ${Menustate ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
      />

      {/* Drawer */}
      <aside
        role="dialog"
        aria-modal="true"
        aria-label="منوی اصلی"
        className={`fixed top-0 right-0 h-full w-[85%] max-w-sm z-[1000] lg:hidden
          flex flex-col overflow-hidden
          bg-slate-900/70 backdrop-blur-2xl backdrop-saturate-150
          border-l border-white/10
          shadow-[0_25px_60px_-15px_rgba(2,6,23,0.7)]
          transform transition-transform duration-300 ease-out
          ${Menustate ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* هاله‌های نور خنثی */}
        <div className="pointer-events-none absolute -top-24 -right-24 w-72 h-72 bg-white/10 rounded-full blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -left-24 w-72 h-72 bg-white/5 rounded-full blur-3xl" />

        {/* هدر: لوگو + بستن */}
        <div className="relative z-10 px-5 py-4 border-b border-white/10 shrink-0">
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-2 min-w-0" dir="ltr">
              <div className="flex items-center text-xl leading-none shrink-0">
                <i className="fa-solid fa-plane bg-gradient-to-r from-pink-500 via-yellow-400 to-blue-500 bg-clip-text text-transparent" />
                <i className="fa-solid fa-umbrella-beach bg-gradient-to-r from-pink-500 via-yellow-400 to-blue-500 bg-clip-text text-transparent" />
              </div>
              <span className="text-sm font-extrabold tracking-wider bg-gradient-to-r from-pink-500 via-yellow-400 to-blue-500 bg-clip-text text-transparent whitespace-nowrap">
                BAMASAFAR
              </span>
            </div>

            <button
              onClick={CloseMenu}
              aria-label="بستن منو"
              className="p-2 rounded-xl text-white/70 hover:text-white hover:bg-white/10
                         ring-1 ring-white/10 hover:ring-white/20 shrink-0
                         transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
            >
              <IconX className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* بدنه: لینک‌ها */}
        <div className="relative z-10 flex-1 overflow-y-auto px-3 py-4" dir="rtl">
          <ul className="space-y-1.5">
            {NAV_ITEMS.map((item, idx) => {
              const active =
                item.to === "/" ? location.pathname === "/" : location.pathname.startsWith(item.to);
              return (
                <li
                  key={item.to}
                  style={{
                    animation: Menustate
                      ? `slideIn 0.4s cubic-bezier(0.16, 1, 0.3, 1) ${idx * 70 + 80}ms both`
                      : "none",
                  }}
                >
                  <Link
                    to={item.to}
                    onClick={CloseMenu}
                    className={`group flex items-center justify-between gap-3 px-4 py-3 rounded-xl text-sm font-semibold
                      transition-all duration-200
                      ${active
                        ? "bg-white/15 text-white ring-1 ring-white/25 shadow-lg shadow-black/20"
                        : "text-white/70 hover:text-white hover:bg-white/[0.06] ring-1 ring-transparent hover:ring-white/10"
                      }`}
                  >
                    <span>{item.label}</span>
                    {active && (
                      <span className="w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.9)]" />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* جداکننده */}
          <div className="my-5 h-px bg-gradient-to-l from-transparent via-white/15 to-transparent" />

          {/* اطلاعات تماس */}
          <div
            style={{
              animation: Menustate
                ? `slideIn 0.4s cubic-bezier(0.16, 1, 0.3, 1) 320ms both`
                : "none",
            }}
          >
            <p className="px-2 mb-2 text-[10px] font-bold text-white/40 uppercase tracking-widest">
              ارتباط با ما
            </p>
            <div className="space-y-1">
              <a
                href="tel:02112345678"
                className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-white/70
                           hover:text-white hover:bg-white/[0.06] transition-colors"
              >
                <IconPhone className="w-4 h-4 text-white/40 shrink-0" />
                <span dir="ltr" className="tabular-nums">۰۲۱-۱۲۳۴-۵۶۷۸</span>
              </a>
              <a
                href="mailto:info@bamasafer.ir"
                className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-white/70
                           hover:text-white hover:bg-white/[0.06] transition-colors"
              >
                <IconMail className="w-4 h-4 text-white/40 shrink-0" />
                <span dir="ltr">info@bamasafer.ir</span>
              </a>
            </div>
          </div>
        </div>

        {/* CTA پایین */}
        <div
          className="relative z-10 p-4 border-t border-white/10 bg-white/[0.03] shrink-0 space-y-2"
          style={{
            animation: Menustate
              ? `slideIn 0.4s cubic-bezier(0.16, 1, 0.3, 1) 380ms both`
              : "none",
          }}
        >
          <CustomButton
            onClick={OpenModal}
            buttonSize="btn--medium"
            buttonStyle="btn--special"
            className="w-full"
          >
            ورود و ثبت‌نام
          </CustomButton>
          <p className="text-[10px] text-center text-white/40 leading-relaxed">
            با ورود، قوانین و شرایط استفاده را می‌پذیرید
          </p>
        </div>
      </aside>

      <style>{`
        @keyframes slideIn {
          from { opacity: 0; transform: translateX(28px) scale(0.98); }
          to   { opacity: 1; transform: translateX(0) scale(1); }
        }
        @media (prefers-reduced-motion: reduce) {
          @keyframes slideIn {
            from { opacity: 0; }
            to   { opacity: 1; }
          }
        }
      `}</style>
    </>
  );
}

export default HumComp;