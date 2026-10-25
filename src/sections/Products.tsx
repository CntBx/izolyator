import { useState } from "react";
import { ArrowRight, ArrowDown } from "lucide-react";
import product_1 from "../assets/Product_1.svg";
import product_2 from "../assets/Product_2.svg";

interface ProductsProps {
  setView: (view: "landing" | "catalog") => void;
}

export default function Products({ setView }: ProductsProps) {
  const [activeIdx, setActiveIdx] = useState(0);

  // Полная база данных по продукции в точности по макету
  const catalog = [
    {
      id: "01",
      title: "Высоковольтные вводы",
      mainTitle: "КОМПЛЕКСНЫЕ РЕШЕНИЯ ДЛЯ ЭНЕРГЕТИКИ",
      desc: "Вводы с изоляцией и полимерной покрышкой для силовых трансформаторов, реакторов и выключателей.",
      image: product_1,
      specs: [
        { label: "НАПРЯЖЕНИЕ", value: "20–1150 кВ" },
        { label: "ПРИМЕНЕНИЕ", value: "Трансформаторы, реакторы, выключатели" },
        { label: "ИЗОЛЯЦИЯ", value: "полимерная покрышка" },
      ],
    },
    {
      id: "02",
      title: "Кабельная арматура",
      mainTitle: "НАДЕЖНОСТЬ КАБЕЛЬНЫХ СЕТЕЙ",
      desc: "Концевые и соединительные муфты, транспозиции экранов для кабельных линий высокого напряжения.",
      image: product_2, // Временно та же заглушка
      specs: [
        { label: "НАПРЯЖЕНИЕ", value: "110–500 кВ" },
        { label: "ПРИМЕНЕНИЕ", value: "Подземные кабельные трассы, подстанции" },
        { label: "ИЗОЛЯЦИЯ", value: "сшитый полиэтилен / XLPE" },
      ],
    },
    {
      id: "03",
      title: "Полые композитные изоляторы",
      mainTitle: "СОВРЕМЕННЫЕ ПОЛИМЕРНЫЕ РЕШЕНИЯ",
      desc: "Высокопрочные стеклопластиковые трубы с силиконовым оребрением для аппаратов наружной установки.",
      image: product_2,
      specs: [
        { label: "НАПРЯЖЕНИЕ", value: "35–1150 кВ" },
        { label: "ПРИМЕНЕНИЕ", value: "Трансформаторы тока, измерительные приборы" },
        { label: "ИЗОЛЯЦИЯ", value: "силиконовое оребрение" },
      ],
    },
  ];

  const current = catalog[activeIdx];

  return (
    <section
      id="products"
      className="relative flex min-h-screen w-full snap-start items-center justify-center overflow-hidden bg-[#F8F9FA] px-6 py-12 text-[#011A34] md:h-screen md:px-16 md:py-0"
    >
      <div className="relative z-10 mx-auto flex h-full w-full max-w-7xl flex-col justify-between md:pt-24 md:pb-6">
        {/* ВЕРХНИЙ СЧЕТЧИК СЛАЙДОВ (04 / 08) */}
        <div className="absolute top-20 right-0 font-sans text-xs font-bold tracking-widest text-gray-400">
          04 / <span className="text-gray-300">08</span>
        </div>

        {/* ГЛАВНАЯ 12-КОЛОНОЧНАЯ СЕТКА */}
        <div className="my-auto grid w-full grid-cols-1 items-center gap-8 lg:grid-cols-12">
          {/* 1. ЛЕВАЯ КОЛОНКА: Заголовок + Вертикальное меню табов (4 колонки из 12) */}
          <div className="flex h-auto flex-col justify-between py-2 md:col-span-4 md:col-start-2">
            <div>
              <span className="text-factory-blue mb-2 block text-[11px] font-bold tracking-widest uppercase md:mb-3">
                04 / ПРОДУКЦИЯ
              </span>
              <h2 className="max-w-sm font-sans text-2xl leading-[1.05] font-black tracking-tight text-[#011A34] uppercase sm:text-3xl lg:text-[38px] xl:text-[44px]">
                {current.mainTitle}
              </h2>
            </div>

            {/* ТАБЫ-ПЕРЕКЛЮЧАТЕЛИ ( py-3.5 на ноутах под высоту 768px) */}
            <div className="mt-8 flex flex-col gap-1 border-l border-gray-200/60 pl-0 md:mt-16">
              {catalog.map((item, index) => {
                const isActive = activeIdx === index;
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveIdx(index)}
                    /* -ml-[1.5px] накладывает синюю линию активного таба ровно поверх серой оси */
                    className={`-ml-px flex cursor-pointer items-baseline gap-4 border-l-2 py-3 pl-4 text-left transition-all duration-300 ${
                      isActive
                        ? "border-factory-blue font-bold text-[#011A34]"
                        : "border-transparent font-medium text-gray-400 hover:text-[#011A34]"
                    }`}
                  >
                    <span className="text-[10px] font-bold tracking-wider">{item.id}</span>
                    <span className="text-sm tracking-tight md:text-base">{item.title}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* 2. ЦЕНТРАЛЬНАЯ КОЛОНКА: Картинка изолятора + Огромная цифра на бэке (4 колонки из 12) */}
          <div className="relative flex h-95 items-center justify-center overflow-visible md:h-130 lg:col-span-4 2xl:h-155">
            {/* ОГРОМНЫЙ НОМЕР НА ЗАДНЕМ ПЛАНЕ */}
            <div className="absolute inset-0 z-0 flex items-center justify-center font-sans text-[20vw] leading-none font-black tracking-tighter text-gray-200/50 select-none md:text-[24rem]">
              {current.id}
            </div>

            {/* Картинка самого изолятора */}
            <img
              src={current.image}
              alt={current.title}
              className="relative z-10 h-full max-h-85 w-auto scale-100 transform object-contain drop-shadow-2xl transition-all duration-500 md:max-h-115 2xl:max-h-145"
            />
          </div>

          {/* 3. ПРАВАЯ КОЛОНКА: Описание категории + Таблица параметров + Кнопки (4 колонки из 12) */}
          <div className="flex w-full flex-col justify-center lg:col-span-3 lg:pl-4">
            {/* Заголовок категории и мини-счетчик */}
            <div className="mb-4 flex items-baseline justify-between border-b border-gray-200/80 pb-2">
              <span className="text-[10px] font-bold tracking-widest text-gray-400 uppercase">
                {current.id} / 03
              </span>
            </div>

            <h3 className="font-sans text-xl leading-tight font-black tracking-tight text-[#011A34] uppercase">
              {current.title}
            </h3>

            <p className="mt-3 font-sans text-xs leading-relaxed font-normal text-gray-500 md:text-sm">
              {current.desc}
            </p>

            {/* ТЕХНИЧЕСКАЯ ТАБЛИЦА ХАРАКТЕРИСТИК */}
            <div className="mt-6 flex flex-col gap-3 border-t border-b border-gray-200/60 py-4 font-sans text-xs">
              {current.specs.map((spec) => (
                <div key={spec.label} className="grid grid-cols-3 items-baseline gap-2">
                  <span className="col-span-1 text-[9px] font-bold tracking-wider text-gray-400 uppercase">
                    {spec.label}
                  </span>
                  <span className="col-span-2 text-right leading-tight font-medium text-gray-900 sm:text-left">
                    {spec.value}
                  </span>
                </div>
              ))}
            </div>

            {/* КНОПКИ ДЕЙСТВИЯ (Компактный размер py-3 под экран ноутбука) */}
            <div className="mt-6 flex w-full flex-col gap-2">
              <button
                onClick={() => setView("catalog")}
                className="flex cursor-pointer items-center justify-between rounded-md bg-[#011A34] px-5 py-3 text-[10px] font-bold tracking-widest text-white uppercase transition-colors hover:bg-factory-blue"
              >
                <span>Подробнее</span>
                <ArrowRight size={14} />
              </button>

              <button className="flex cursor-pointer items-center justify-between rounded-md border border-gray-200 bg-white px-5 py-3 text-[10px] font-bold tracking-widest text-[#011A34] uppercase transition-colors hover:bg-gray-50">
                <span>Скачать каталог</span>
                <ArrowDown size={14} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// --- СТАРЫЙ ВАРИАНТ ---
// import { useState } from "react";
// import product_1 from "../assets/Product_1.svg";
// import product_2 from "../assets/Product_2.svg";
// import { ChevronLeft, ChevronRight } from "lucide-react";

// export default function Products() {
//   const [activeIndex, setActiveIndex] = useState(0);

//   // Имитируем массив данных от бэкендера (FastAPI)
//   const products = [
//     {
//       id: "01",
//       title: "ВЫСОКОВОЛЬТНЫЕ ВВОДЫ",
//       desc: "Надежные соединения магистральных шин с силовым оборудованием и высоковольтной линией.",
//       // Тестовый 3D-рендер ввода. Замените на свою картинку из Figma, когда вырежете
//       image: product_1,
//     },
//     {
//       id: "02",
//       title: "КАБЕЛЬНАЯ АРМАТУРА",
//       desc: "Концевые и соединительные муфты для надежного распределения энергии в кабельных сетях.",
//       image: product_2,
//     },
//     {
//       id: "03",
//       title: "КОМПОЗИТНЫЕ ИЗОЛЯТОРЫ",
//       desc: "Полимерные изоляторы повышенной прочности для работы в любых климатических условиях.",
//       image: product_1,
//     },
//   ];

//   const handleNext = () => {
//     setActiveIndex((prev) => (prev + 1) % products.length);
//   };

//   const handlePrev = () => {
//     setActiveIndex((prev) => (prev - 1 + products.length) % products.length);
//   };

//   const activeProduct = products[activeIndex];
//   const nextProduct = products[(activeIndex + 1) % products.length];

//   return (
//     <section className="relative flex min-h-screen w-full snap-start items-center justify-center bg-white px-6 py-20 text-[#011A34] md:h-screen md:px-16 md:py-0">
//       <div className="relative z-10 mx-auto w-full max-w-7xl">
//         {/* Главная 12-колоночная сетка */}
//         <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
//           {/* 1. ЛЕВАЯ КОЛОНКА: Главный заголовок секции (занимает 4 колонки из 12) */}
//           <div className="lg:col-span-4 lg:col-start-2 xl:pr-6">
//             <span className="text-factory-blue mb-4 block text-xs font-bold tracking-widest uppercase">
//               ПРОДУКЦИЯ
//             </span>
//             <h2 className="font-sans text-2xl leading-[1.15] font-black tracking-tight text-[#011A34] uppercase sm:text-3xl lg:text-[34px] xl:text-[28px]">
//               ВЫСОКОТЕХНОЛОГИЧНАЯ <br />
//               ПРОДУКЦИЯ ДЛЯ <br />
//               ЭНЕРГЕТИКИ
//             </h2>
//             <p className="mt-8 max-w-70 text-xs leading-relaxed font-normal text-gray-400 md:text-sm">
//               Группа компаний «Изолятор» производит высоковольтное оборудование для передачи и
//               распределения электроэнергии.
//             </p>
//           </div>

//           {/* 2. ЦЕНТРАЛЬНАЯ КОЛОНКА: Информационный блок слайда + Левая стрелка (3 колонки из 12) */}
//           <div className="relative flex items-start gap-4 lg:col-span-3">
//             {/* Левая стрелочка (находится строго ПЕРЕД текстом слайда) */}
//             <button
//               onClick={handlePrev}
//               /*  transition-all duration-300 — плавный ховер-эффект */
//               className="hover:border-factory-blue hover:text-factory-blue mt-28 flex h-10 w-10 shrink-0 cursor-pointer items-center justify-center rounded-full border border-gray-200 bg-white text-gray-400 shadow-2xs transition-all duration-300 select-none hover:shadow-md active:scale-95"
//             >
//               <ChevronLeft size={16} strokeWidth={1.5} />
//             </button>

//             {/* Контент текущего товара */}
//             <div className="flex flex-col justify-center pt-2">
//               {/* Порядковый номер слайда с подчеркиванием как в Figma */}
//               <span className="text-factory-blue after:bg-factory-blue relative w-fit pb-1 font-sans text-sm font-bold after:absolute after:bottom-0 after:left-0 after:h-[1.5px] after:w-4">
//                 {activeProduct.id}
//               </span>

//               <h3 className="mt-4 min-h-14 font-sans text-lg leading-snug font-black tracking-tight text-[#011A34] uppercase sm:text-xl xl:text-[22px]">
//                 {activeProduct.title}
//               </h3>

//               <p className="mt-2 min-h-18 font-sans text-xs leading-relaxed font-light text-gray-400 xl:text-sm">
//                 {activeProduct.desc}
//               </p>

//               <button className="bg-factory-blue hover:bg-factory-blue/80 hover:shadow-factory-blue/20 mt-6 flex cursor-pointer items-center justify-center gap-3 self-start rounded-lg px-5 py-3 text-xs font-semibold text-white transition-all duration-300 hover:shadow-lg">
//                 Подробнее
//                 <span className="text-sm">→</span>
//               </button>
//             </div>
//           </div>

//           {/* 3. ПРАВАЯ КОЛОНКА: Графика + Правая стрелка за рисунком (4 колонки из 12) */}
//           <div className="relative flex h-105 w-full items-center overflow-visible lg:col-span-4 2xl:h-120">
//             {/* Основной активный изолятор */}
//             <div className="relative z-10 flex h-full items-center justify-center">
//               <img
//                 src={activeProduct.image}
//                 alt={activeProduct.title}
//                 className="h-95 object-contain drop-shadow-xl transition-all duration-500 2xl:h-182.75"
//               />
//             </div>

//             {/* Блеклый второй изолятор на заднем плане */}
//             {/* Добавили 2xl:left-[80%], чтобы на больших мониторах картинка уезжала правее и не слипалась с основной */}
//             <div className="pointer-events-none absolute left-[65%] 2xl:left-[80%] z-0 flex h-full items-center justify-center blur-[0.5px] transition-all duration-500 select-none">
//               <img
//                 src={nextProduct.image}
//                 alt={nextProduct.title}
//                 className="h-65 object-contain 2xl:h-117"
//               />
//             </div>

//             {/* Правая стрелочка (находится строго в самом крайнем правом углу, ЗА вторым рисунком) */}
//             <button
//               onClick={handleNext}
//               className="hover:border-factory-blue hover:text-factory-blue absolute right-0 2xl:-right-20 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-gray-200 bg-white text-gray-400 shadow-2xs transition-all duration-300 select-none hover:shadow-md active:scale-95"
//             >
//               <ChevronRight size={16} strokeWidth={1.5} />
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Анимированная мышка */}
//       <div className="absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 md:flex">
//         <div className="flex h-7 w-4 justify-center rounded-full border-2 border-gray-300 p-1">
//           <div className="h-1.5 w-1 animate-bounce rounded-full bg-gray-400" />
//         </div>
//         <span className="text-[10px] font-medium tracking-widest text-gray-400 uppercase">
//           Листайте вниз
//         </span>
//       </div>
//     </section>
//   );
// }
