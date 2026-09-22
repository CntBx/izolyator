import { useState } from "react";
import product_1 from "../assets/Product_1.svg";
import product_2 from "../assets/Product_2.svg";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Products() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Имитируем массив данных от бэкендера (FastAPI)
  const products = [
    {
      id: "01",
      title: "ВЫСОКОВОЛЬТНЫЕ ВВОДЫ",
      desc: "Надежные соединения магистральных шин с силовым оборудованием и высоковольтной линией.",
      // Тестовый 3D-рендер ввода. Замените на свою картинку из Figma, когда вырежете
      image: product_1,
    },
    {
      id: "02",
      title: "КАБЕЛЬНАЯ АРМАТУРА",
      desc: "Концевые и соединительные муфты для надежного распределения энергии в кабельных сетях.",
      image: product_2,
    },
    {
      id: "03",
      title: "КОМПОЗИТНЫЕ ИЗОЛЯТОРЫ",
      desc: "Полимерные изоляторы повышенной прочности для работы в любых климатических условиях.",
      image: product_1,
    },
  ];

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % products.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + products.length) % products.length);
  };

  const activeProduct = products[activeIndex];
  const nextProduct = products[(activeIndex + 1) % products.length];

  return (
    <section className="relative flex min-h-screen w-full snap-start items-center justify-center bg-white px-6 py-20 text-[#011A34] md:h-screen md:px-16 md:py-0">
      <div className="relative z-10 mx-auto w-full max-w-7xl">
        {/* Главная 12-колоночная сетка */}
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
          {/* 1. ЛЕВАЯ КОЛОНКА: Главный заголовок секции (занимает 4 колонки из 12) */}
          <div className="lg:col-span-4 lg:col-start-2 xl:pr-6">
            <span className="text-factory-blue mb-4 block text-xs font-bold tracking-widest uppercase">
              ПРОДУКЦИЯ
            </span>
            <h2 className="font-sans text-2xl leading-[1.15] font-black tracking-tight text-[#011A34] uppercase sm:text-3xl lg:text-[34px] xl:text-[28px]">
              ВЫСОКОТЕХНОЛОГИЧНАЯ <br />
              ПРОДУКЦИЯ ДЛЯ <br />
              ЭНЕРГЕТИКИ
            </h2>
            <p className="mt-8 max-w-70 text-xs leading-relaxed font-normal text-gray-400 md:text-sm">
              Группа компаний «Изолятор» производит высоковольтное оборудование для передачи и
              распределения электроэнергии.
            </p>
          </div>

          {/* 2. ЦЕНТРАЛЬНАЯ КОЛОНКА: Информационный блок слайда + Левая стрелка (3 колонки из 12) */}
          <div className="relative flex items-start gap-4 lg:col-span-3">
            {/* Левая стрелочка (находится строго ПЕРЕД текстом слайда) */}
            <button
              onClick={handlePrev}
              /*  transition-all duration-300 — плавный ховер-эффект */
              className="hover:border-factory-blue hover:text-factory-blue mt-28 flex h-10 w-10 shrink-0 cursor-pointer items-center justify-center rounded-full border border-gray-200 bg-white text-gray-400 shadow-2xs transition-all duration-300 select-none hover:shadow-md active:scale-95"
            >
              <ChevronLeft size={16} strokeWidth={1.5} />
            </button>

            {/* Контент текущего товара */}
            <div className="flex flex-col justify-center pt-2">
              {/* Порядковый номер слайда с подчеркиванием как в Figma */}
              <span className="text-factory-blue after:bg-factory-blue relative w-fit pb-1 font-sans text-sm font-bold after:absolute after:bottom-0 after:left-0 after:h-[1.5px] after:w-4">
                {activeProduct.id}
              </span>

              <h3 className="mt-4 min-h-14 font-sans text-lg leading-snug font-black tracking-tight text-[#011A34] uppercase sm:text-xl xl:text-[22px]">
                {activeProduct.title}
              </h3>

              <p className="mt-2 min-h-18 font-sans text-xs leading-relaxed font-light text-gray-400 xl:text-sm">
                {activeProduct.desc}
              </p>

              <button className="bg-factory-blue hover:bg-factory-blue/80 hover:shadow-factory-blue/20 mt-6 flex cursor-pointer items-center justify-center gap-3 self-start rounded-lg px-5 py-3 text-xs font-semibold text-white transition-all duration-300 hover:shadow-lg">
                Подробнее
                <span className="text-sm">→</span>
              </button>
            </div>
          </div>

          {/* 3. ПРАВАЯ КОЛОНКА: Графика + Правая стрелка за рисунком (4 колонки из 12) */}
          <div className="relative flex h-105 w-full items-center overflow-visible lg:col-span-4 2xl:h-120">
            {/* Основной активный изолятор */}
            <div className="relative z-10 flex h-full items-center justify-center">
              <img
                src={activeProduct.image}
                alt={activeProduct.title}
                className="h-95 object-contain drop-shadow-xl transition-all duration-500 2xl:h-182.75"
              />
            </div>

            {/* Блеклый второй изолятор на заднем плане */}
            {/* Добавили 2xl:left-[80%], чтобы на больших мониторах картинка уезжала правее и не слипалась с основной */}
            <div className="pointer-events-none absolute left-[65%] 2xl:left-[80%] z-0 flex h-full items-center justify-center blur-[0.5px] transition-all duration-500 select-none">
              <img
                src={nextProduct.image}
                alt={nextProduct.title}
                className="h-65 object-contain 2xl:h-117"
              />
            </div>

            {/* Правая стрелочка (находится строго в самом крайнем правом углу, ЗА вторым рисунком) */}
            <button
              onClick={handleNext}
              className="hover:border-factory-blue hover:text-factory-blue absolute right-0 2xl:-right-20 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-gray-200 bg-white text-gray-400 shadow-2xs transition-all duration-300 select-none hover:shadow-md active:scale-95"
            >
              <ChevronRight size={16} strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </div>

      {/* Анимированная мышка */}
      <div className="absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 md:flex">
        <div className="flex h-7 w-4 justify-center rounded-full border-2 border-gray-300 p-1">
          <div className="h-1.5 w-1 animate-bounce rounded-full bg-gray-400" />
        </div>
        <span className="text-[10px] font-medium tracking-widest text-gray-400 uppercase">
          Листайте вниз
        </span>
      </div>
    </section>
  );
}
