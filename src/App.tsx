import { useState, type UIEvent } from "react";
import Header from "./components/layout/Header";
import Competences from "./sections/Competences";
import Hero from "./sections/Hero";
import Scale from "./sections/Scale";
import Products from "./sections/Products";
import CompanyGroup from "./sections/CompanyGroup";
import Details from "./sections/Details";

function App() {
  const [activePageIndex, setActivePageIndex] = useState(0);
  const [isMobileWhiteHeader, setIsMobileWhiteHeader] = useState(false);

  const handleScroll = (e: UIEvent<HTMLDivElement>) => {
    const scrollTop = e.currentTarget.scrollTop;
    const screenHeight = e.currentTarget.clientHeight;

    // 1. ЛОГИКА ДЛЯ ДЕСКТОПА (Карусель)
    if (window.innerWidth >= 768) {
      const currentIndex = Math.round(scrollTop / screenHeight);
      if (currentIndex !== activePageIndex) {
        setActivePageIndex(currentIndex);
      }
    }
    // 2. УНИВЕРСАЛЬНАЯ ЛОГИКА ДЛЯ МОБИЛЬНЫХ (Обычный скролл)
    else {
      // Ищем элемент Hero, чтобы узнать его реальную текущую высоту на телефоне
      const heroElement = document.getElementById("hero");
      if (heroElement) {
        const heroHeight = heroElement.clientHeight;
        // Если прокрутили ниже, чем высота Hero минус небольшой запас под шапку (70px)
        if (scrollTop > heroHeight - 70) {
          setIsMobileWhiteHeader(true);
        } else {
          setIsMobileWhiteHeader(false);
        }
      }
    }
  };

  return (
    /* 
      Внимание: на мобильных устройствах скроллится не весь body, а этот div контейнер.
      Поэтому добавляем класс "h-screen overflow-y-scroll" для ВСЕХ разрешений, 
      чтобы событие onScroll стабильно работало и на телефонах!

      overflow-y-scroll: включаем вертикальную прокрутку
      h-screen: контейнер строго на высоту экрана
      snap-y: привязка скролла по вертикали
      snap-mandatory: жесткое прилипание (нельзя остановиться между слайдами)
      scroll-smooth: плавный переход, когда будем делать клики в меню
    */
    <div
      onScroll={handleScroll}
      className="no-scrollbar h-screen overflow-y-scroll scroll-smooth bg-white md:snap-y md:snap-mandatory"
    >
      <Header activePageIndex={activePageIndex} isMobileWhiteHeader={isMobileWhiteHeader} />

      <div id="hero">
        <Hero />
      </div>
      <div id="scale">
        <Scale />
      </div>
      <div id="company-group">
        <CompanyGroup />
      </div>
      <div id="products">
        <Products />
      </div>
      <div id="details">
        <Details />
      </div>
      <div id="competences">
        <Competences />
      </div>
    </div>
  );
}

export default App;