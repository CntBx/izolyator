import { Phone } from "lucide-react";
import star_izo from "../../assets/Star-izo.svg";

interface HeaderProps {
  activePageIndex: number;
}

export default function Header({ activePageIndex }: HeaderProps) {
  // Если индекс 0 — мы на Hero (тема темная, текст белый)
  const isHeroActive = activePageIndex === 0;

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full transition-colors duration-500 ease-in-out ${
        isHeroActive
          ? "bg-transparent text-white"
          : "border-b border-gray-100 bg-white/80 text-[#011A34] shadow-xs backdrop-blur-xs"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between p-4 md:px-8">
        <div
          className="flex cursor-pointer items-center gap-3 text-xl font-black tracking-wider"
          onClick={() => scrollToSection("hero")}
        >
          <img src={star_izo} className="h-10 w-10 object-contain" />
          {/* Добавили leading-none, чтобы строки текста не наезжали друг на друга */}
          <p className="leading-none">
            <span className="text-[11px] font-medium tracking-normal text-gray-400">
              Группа компаний
            </span>{" "}
            <br />
            <span className="text-[22px] font-black tracking-wide uppercase">ИЗОЛЯТОР</span>
          </p>
        </div>

        <nav className="hidden space-x-8 text-[18px] font-medium md:flex">
          <button
            onClick={() => scrollToSection("hero")}
            className={`cursor-pointer transition-colors hover:opacity-70 ${
              activePageIndex === 0
                ? isHeroActive
                  ? "border-b-2 border-white font-bold text-white"
                  : "text-factory-blue font-bold"
                : ""
            }`}
          >
            Главная
          </button>
          <button
            onClick={() => scrollToSection("scale")}
            className={`cursor-pointer transition-colors hover:opacity-70 ${activePageIndex === 1 ? "font-bold text-[#011A34]" : ""}`}
          >
            Масштаб
          </button>
          <button
            onClick={() => scrollToSection("competences")}
            className={`cursor-pointer transition-colors hover:opacity-70 ${activePageIndex === 2 ? "font-bold text-[#011A34]" : ""}`}
          >
            Компетенции
          </button>
        </nav>

        <div className="hidden items-center md:flex md:gap-4.5">
          {/* <button 
          // className={`cursor-pointer rounded-lg px-4 py-2 text-sm font-medium transition-all duration-350 ${
          //   isHeroActive
          //     ? "text-factory-dark-blue hover:bg-factory-blue bg-white hover:text-white"
          //     : "bg-factory-blue hover:bg-factory-navy text-white"
          // }`}
          >
          </button> */}
          <Phone size={20} /> <span className="text-[18px]">+7 (495) 727 33 11</span>
        </div>
      </div>
    </header>
  );
}
