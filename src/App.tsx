import { useEffect, useRef, useState, type UIEvent } from "react";
import Header from "./components/layout/Header";
import Competences from "./sections/Competences";
import Hero from "./sections/Hero";
import Scale from "./sections/Scale";
import Products from "./sections/Products";
import CompanyGroup from "./sections/CompanyGroup";
import Details from "./sections/Details";
import Catalog from "./pages/Catalog";
import ProductDetail from "./pages/ProductDetail";

function App() {
  const [activePageIndex, setActivePageIndex] = useState(0);
  const [isMobileWhiteHeader, setIsMobileWhiteHeader] = useState(false);

  const [view, setView] = useState<"landing" | "catalog" | "product">("landing"); // Стейт навигации: "landing" (весь наш лендинг) или "catalog" (страница списка товаров)
  const [selectedProductId, setSelectedProductId] = useState<number | null>(null); // стейт для ID продукта

  const containerRef = useRef<HTMLDivElement>(null);

  // 3. ХУК СБРОСА СКРОЛЛА: Срабатывает каждый раз, когда меняется страница (view)
  useEffect(() => {
    if (containerRef.current) {
      // Мгновенно переносим скролл в самый верх (координата 0)
      containerRef.current.scrollTop = 0;
    }
  }, [view, selectedProductId]); // Следим и за сменой страниц, и за выбором конкретного товара

  const handleScroll = (e: UIEvent<HTMLDivElement>) => {
    if (view !== "landing") return; // Отключаем математику карусели, если мы в каталоге

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
      ref={containerRef}
      onScroll={handleScroll}
      className={`no-scrollbar h-screen overflow-y-scroll scroll-smooth bg-white ${
        view === "landing" ? "md:snap-y md:snap-mandatory" : ""
      }`}
    >
      {/* Передаем функцию setView в Хедер, чтобы ссылки верхнего меню могли переключать экраны */}
      <Header
        activePageIndex={activePageIndex}
        isMobileWhiteHeader={isMobileWhiteHeader}
        setView={setView}
        view={view}
      />

      {/* Тройной рендеринг в зависимости от стейта view */}
      {view === "landing" ? (
        <>
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
            <Products setView={setView} />
          </div>
          <div id="details">
            <Details />
          </div>
          <div id="competences">
            <Competences />
          </div>
        </>
      ) : view === "catalog" ? (
        /* Внутри каталога ловим клики по карточкам, сохраняем ID и открываем детали */
        <Catalog
          setView={setView}
          onSelectProduct={(id) => {
            setSelectedProductId(id);
            setView("product");
          }}
        />
      ) : (
        /* Отрендерит страницу ввода-конструктора */
        <ProductDetail setView={setView} productId={selectedProductId} />
      )}
    </div>
  );
}

export default App;
