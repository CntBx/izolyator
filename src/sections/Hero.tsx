import { ArrowRight } from "lucide-react";
import insulatorImg from "../assets/Insulator.svg";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen w-full snap-start items-center overflow-hidden bg-[#F8F9FA] px-6 pt-20 pb-0 text-[#011A34] md:h-screen md:px-16"
    >
      {/* ОГРОМНЫЙ ГОД НА ЗАДНЕМ ПЛАНЕ */}
      <div className="absolute top-[45%] left-[20%] z-0 -translate-y-1/2 font-sans text-[18vw] leading-none font-black text-gray-200/40 select-none">
        1896
      </div>

      <div className="relative z-10 mx-auto flex h-full w-full max-w-7xl flex-col justify-between md:pt-24 md:pb-6">
        {/* ГЛАВНАЯ СЕТКА */}
        <div className="grid h-full w-full grid-cols-1 items-stretch gap-4 md:grid-cols-12">
          {/* ЛЕВАЯ ЧАСТЬ: Единый гибкий контейнер для текста, кнопок и новостей */}
          {/* h-full + justify-between идеально распределят элементы по высоте вашего ноутбука */}
          <div className="z-10 flex h-full flex-col justify-between pb-6 md:col-span-6 md:col-start-2 md:pb-0">
            {/* Верхний блок: Тема и Заголовки */}
            <div className="md:mt-4">
              <span className="text-factory-blue mb-2 block text-[11px] font-bold tracking-widest uppercase md:mb-3">
                01 / ВЫСОКОВОЛЬТНОЕ ОБОРУДОВАНИЕ
              </span>

              <h1 className="font-sans text-4xl leading-[1.05] font-black tracking-tight text-[#011A34] uppercase sm:text-5xl lg:text-[52px] xl:text-[68px]">
                ЭНЕРГИЯ <br />
                НАДЕЖНЫХ <br />
                РЕШЕНИЙ
              </h1>

              <p className="mt-3 max-w-sm font-sans text-xs leading-relaxed font-normal text-gray-400 md:text-sm">
                Разработка, производство и сервис высоковольтного изоляционного оборудования для
                энергетики.
              </p>
            </div>

            {/* Средний блок: Кнопки действий (теперь они подстраиваются под свободное место) */}
            <div className="my-6 flex flex-col gap-3 sm:flex-row md:my-0">
              <button className="flex cursor-pointer items-center justify-center gap-3 rounded-md bg-factory-blue px-6 py-2.5 text-xs font-bold tracking-wider text-white uppercase transition-colors hover:bg-factory-blue/90">
                Продукция <ArrowRight size={14} />
              </button>

              <button className="flex cursor-pointer items-center justify-center gap-3 rounded-md border border-[#011A34] bg-transparent px-6 py-2.5 text-xs font-bold tracking-wider text-[#011A34] uppercase transition-colors hover:bg-gray-100">
                О группе <ArrowRight size={14} />
              </button>
            </div>

            {/* Нижний блок: Плашка новостей */}
            <div className="w-full border-t border-gray-200 pt-4 md:mb-2 md:max-w-[90%]">
              {/* Заменили grid на flex с автоматическим переносом flex-wrap */}
              <div className="flex flex-col justify-between gap-x-6 gap-y-2 text-[11px] sm:flex-row sm:items-center">
                <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
                  {/* Ключевое слово "СОБЫТИЕ" */}
                  <span className="shrink-0 font-bold tracking-widest text-factory-blue uppercase">
                    Событие
                  </span>

                  {/* Название события */}
                  <span className="shrink-0 font-black tracking-wide text-[#011A34] uppercase">
                    Электрические сети россии 2026
                  </span>

                  {/* Дата и город */}
                  <span className="font-medium text-gray-400">01–03 декабря 2026 / Москва</span>
                </div>

                {/* Кнопка "Подробнее" теперь всегда будет в одной строке на десктопе */}
                <button className="flex cursor-pointer items-center gap-1 font-bold tracking-wider whitespace-nowrap text-factory-blue uppercase hover:underline sm:ml-auto">
                  Подробнее →
                </button>
              </div>
            </div>
          </div>

          {/* ПРАВАЯ ЧАСТЬ: Картинка ввода (Полностью независима абсолютно в правом углу) */}
          <div className="relative flex h-100 w-full items-end justify-center overflow-visible md:absolute md:right-0 md:bottom-0 md:col-span-5 md:h-[82vh] md:w-[40%]">
            <img
              src={insulatorImg}
              alt="Высоковольтный ввод"
              className="pointer-events-none h-full max-h-87.5 w-auto object-contain object-bottom drop-shadow-2xl select-none md:max-h-[70vh] 2xl:max-h-[76vh]"
            />

            {/* Текст-указатель (приподнят над плашкой новостей) */}
            <div className="absolute right-0 bottom-24 z-20 text-right font-sans">
              <div className="text-2xl font-black tracking-tight text-[#011A34] md:text-3xl">
                20–1150 <span className="text-xs font-bold">кВ</span>
              </div>
              <div className="mt-0.5 max-w-35 text-[9px] tracking-wider text-gray-400 uppercase">
                Класс напряжения высоковольтных вводов
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}




// --- СТАРЫЙ ВАРИАНТ ---

// import heroBg from "../assets/hero-bg.png";
// export default function Hero() {
//   return (
//     <section
//       style={{ backgroundImage: `url(${heroBg})` }}
//       /* Добавили md:pt-24 (отступ сверху под высоту шапки), чтобы текст никогда не залез под нее */
//       className="bg-factory-dark-blue relative flex min-h-screen w-full snap-start items-center bg-cover bg-center px-6 pt-24 pb-20 text-white md:h-screen md:px-12 md:pt-28 md:pb-0"
//     >
//       {/* Темный оверлей */}
//       <div className="absolute inset-0 bg-linear-to-r from-[#001A34]/95 via-[#001A34]/60 to-transparent" />

//       {/* Основной контент */}
//       <div className="relative z-10 mx-auto w-full max-w-7xl">
//         {/* Создаем сетку из 12 виртуальных колонок на десктопе */}
//         <div className="grid grid-cols-1 items-center md:grid-cols-12">
//           {/*
//       md:col-start-3 — на десктопе сдвигаем весь этот блок вправо, пропуская первые 2 колонки.
//       md:col-span-7 — блок растягивается аккурат на 7 колонок, оставляя место под картинку справа.
//       max-w-2xl — сохраняем ограничение по ширине для красоты строк текста.
//     */}
//           <div className="max-w-2xl md:col-span-7 md:col-start-2 lg:max-w-3xl 2xl:flex 2xl:flex-col 2xl:gap-10">
//             {/* Маленький надзаголовок */}
//             <span className="mb-4 block text-sm leading-relaxed font-medium tracking-widest text-gray-400 uppercase md:mb-6 md:text-[19px]">
//               Российское производство <br /> высоковольтного оборудования
//             </span>

//             {/* Главный заголовок с адаптивным размером шрифта */}
//             <h1 className="font-sans text-3xl font-extrabold tracking-normal uppercase sm:text-4xl md:text-4xl lg:text-[48px] xl:text-[48px]">
//               Энергия будущего. <br /> основа надежных решений
//             </h1>

//             {/* Подзаголовок-описание */}
//             <p className="mt-6 max-w-md font-sans text-[16px] leading-relaxed font-light text-gray-300 md:max-w-lg md:text-[24px]">
//               Высоковольтные вводы 10-1150 кВ, кабельная арматура 110-500 кВ и полные композитные
//               изоляторы
//             </p>

//             {/* Блок с кнопками */}
//             <div className="mt-10 flex flex-col gap-4 sm:flex-row">
//               <button className="flex cursor-pointer items-center justify-center gap-3 rounded-lg bg-factory-blue px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-factory-blue/80 hover:shadow-lg hover:shadow-[#003F98]/20">
//                 Смотреть продукцию
//                 <span className="text-base">→</span>
//               </button>

//               <button className="flex cursor-pointer items-center justify-center gap-3 rounded-lg border border-white/30 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-xs transition-all duration-300 hover:border-white/60 hover:bg-white/10">
//                 О группе компаний
//                 <span className="text-base">→</span>
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Анимированная иконка "Листайте вниз" */}
//       <div className="absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 md:flex">
//         <div className="flex h-7 w-4 justify-center rounded-full border-2 border-white/40 p-1">
//           <div className="h-1.5 w-1 animate-bounce rounded-full bg-white" />
//         </div>
//         <span className="text-[10px] font-medium tracking-widest text-white/50 uppercase">
//           Листайте вниз
//         </span>
//       </div>
//     </section>
//   );
// }
