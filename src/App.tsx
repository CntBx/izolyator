import { useState, type UIEvent} from "react";
import Header from "./components/layout/Header";
import Competences from "./sections/Competences";
import Hero from "./sections/Hero";
import Scale from "./sections/Scale";

function App() {
  const [activePageIndex, setActivePageIndex] = useState(0);

  const handleScroll = (e: UIEvent<HTMLDivElement>) => {
    // Работает только на десктопе, где включен h-screen слайдер
    if (window.innerWidth >= 768) {
      const scrollTop = e.currentTarget.scrollTop;
      const screenHeight = e.currentTarget.clientHeight;

      // Вычисляем индекс текущего слайда (округляем к ближайшему)
      const currentIndex = Math.round(scrollTop / screenHeight);

      if (currentIndex !== activePageIndex) {
        setActivePageIndex(currentIndex);
      }
    }
  };

  return (
    /* 
      overflow-y-scroll: включаем вертикальную прокрутку
      h-screen: контейнер строго на высоту экрана
      snap-y: привязка скролла по вертикали
      snap-mandatory: жесткое прилипание (нельзя остановиться между слайдами)
      scroll-smooth: плавный переход, когда будем делать клики в меню
    */
    <div
      onScroll={handleScroll}
      className="no-scrollbar scroll-smooth bg-white md:h-screen md:snap-y md:snap-mandatory md:overflow-y-scroll"
    >
      <Header activePageIndex={activePageIndex} />

      <div id="hero">
        <Hero />
      </div>
      <div id="scale">
        <Scale />
      </div>
      <div id="competences">
        <Competences />
      </div>
    </div>
  );
}

export default App;
