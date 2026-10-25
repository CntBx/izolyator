import { Phone } from "lucide-react";
import star_izo from "../../assets/Star-izo.svg";
import star_izo_dark from "../../assets/Star-izo-dark.svg";

interface HeaderProps {
  activePageIndex: number;
  isMobileWhiteHeader: boolean;
  view: "landing" | "catalog" | "product";
  setView: (view: "landing" | "catalog" | "product") => void; // Тип для функции изменения стейта
}

export default function Header({ activePageIndex, view, setView }: HeaderProps) {
  // Массив индексов ТЁМНЫХ страниц (сейчас это только второй слайд — Масштаб)
  const darkPages = [1, 4];

  // Флаг: активна ли сейчас какая-либо тёмная страница
  const isDarkPageActive = darkPages.includes(activePageIndex);

  const scrollToSection = (id: string) => {
    // Если пользователь находится в каталоге, а нажимает на кнопку лендинга (например, "О группе")
    // мы сначала возвращаем его на лендинг, а затем плавно скроллим к разделу
    if (view !== "landing") {
      setView("landing");
      // Небольшой таймаут, чтобы React успел отрендерить лендинг перед скроллом
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      /* 
        Убрали старый isHeroActive! 
        Если мы на странице 1 (Масштаб) — включается прозрачный фон и белый текст.
        Если мы на странице 0 (Главная) или любых других светлых — включается белый полупрозрачный фон и темно-синий текст завода.
      */
      className={`fixed top-0 left-0 z-50 w-full border-b transition-all duration-500 ease-in-out ${
        isDarkPageActive
          ? "border-white/10 bg-transparent text-white"
          : "border-gray-100/80 bg-white/80 text-[#011A34] shadow-xs backdrop-blur-xs"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between p-4 md:px-8">
        {/* ЛОГОТИП */}
        <div
          className="flex cursor-pointer items-center gap-3 text-xl font-black tracking-wider"
          onClick={() => {
            setView("landing");
            scrollToSection("hero");
          }}
        >
          {/* На тёмной странице — БЕЛАЯ звезда, на светлой (включая Главную) — ТЁМНАЯ звезда */}
          <img
            src={isDarkPageActive ? star_izo : star_izo_dark}
            className="h-10 w-10 object-contain"
            alt="Логотип Изолятор"
          />
          <p className="leading-none">
            <span className="text-[11px] font-medium tracking-normal text-gray-400">
              Группа компаний
            </span>{" "}
            <br />
            <span className="text-[22px] font-black tracking-wide uppercase">ИЗОЛЯТОР</span>
          </p>
        </div>

        {/* НАВИГАЦИЯ */}
        <nav className="hidden space-x-8 text-[18px] font-medium md:flex">
          <button
            onClick={() => {
              setView("landing");
              scrollToSection("hero");
            }}
            /* Подсветка активных пунктов теперь учитывает тему страницы */
            className={`cursor-pointer ${activePageIndex === 0 ? "text-factory-blue font-bold" : "text-gray-400"}`}
          >
            Главная
          </button>
          <button
            onClick={() => scrollToSection("scale")}
            className={`cursor-pointer transition-colors hover:opacity-70 ${
              activePageIndex === 1
                ? "font-bold text-white" // На темной странице активный пункт горит белым
                : isDarkPageActive
                  ? "text-white/60"
                  : "text-gray-400"
            }`}
          >
            Масштаб
          </button>
          <button
            onClick={() => scrollToSection("company-group")}
            className={`cursor-pointer transition-colors hover:opacity-70 ${
              activePageIndex === 2
                ? "text-factory-blue font-bold"
                : isDarkPageActive
                  ? "text-white/60"
                  : "text-gray-400"
            }`}
          >
            Группа компаний
          </button>
          <button
            onClick={() => scrollToSection("products")}
            // onClick={() => setView("catalog")}
            className={`cursor-pointer transition-colors hover:opacity-70 ${
              activePageIndex === 3
                ? "text-factory-blue font-bold"
                : isDarkPageActive
                  ? "text-white/60"
                  : "text-gray-400"
            }`}
          >
            Продукция
          </button>
          <button
            onClick={() => scrollToSection("details")}
            className={`cursor-pointer transition-colors hover:opacity-70 ${
              activePageIndex === 4
                ? "text-factory-blue font-bold"
                : isDarkPageActive
                  ? "text-white/60"
                  : "text-gray-400"
            }`}
          >
            Детали
          </button>
          <button
            onClick={() => scrollToSection("competences")}
            className={`cursor-pointer transition-colors hover:opacity-70 ${
              activePageIndex === 5
                ? "text-factory-blue font-bold"
                : isDarkPageActive
                  ? "text-white/60"
                  : "text-gray-400"
            }`}
          >
            Компетенции
          </button>
        </nav>

        {/* ТЕЛЕФОН И СВЯЗЬ */}
        <div className="hidden items-center text-[18px] font-medium md:flex md:gap-3">
          <Phone size={18} className={isDarkPageActive ? "text-white" : "text-factory-blue"} />
          <span>+7 (495) 727 33 11</span>
        </div>
      </div>
    </header>
  );
}
