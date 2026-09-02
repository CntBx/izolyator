import heroBg from "../assets/hero-bg.png";

export default function Hero() {
  return (
    <section
      style={{ backgroundImage: `url(${heroBg})` }}
      /* Добавили md:pt-24 (отступ сверху под высоту шапки), чтобы текст никогда не залез под нее */
      className="bg-factory-dark-blue relative flex min-h-screen w-full snap-start items-center bg-cover bg-center px-6 pt-24 pb-20 text-white md:h-screen md:px-12 md:pt-28 md:pb-0"
    >
      {/* Темный оверлей */}
      <div className="absolute inset-0 bg-linear-to-r from-[#001A34]/95 via-[#001A34]/60 to-transparent" />

      {/* Основной контент */}
      <div className="relative z-10 mx-auto w-full max-w-7xl">
        {/* Создаем сетку из 12 виртуальных колонок на десктопе */}
        <div className="grid grid-cols-1 items-center md:grid-cols-12">
          {/* 
      md:col-start-3 — на десктопе сдвигаем весь этот блок вправо, пропуская первые 2 колонки.
      md:col-span-7 — блок растягивается аккурат на 7 колонок, оставляя место под картинку справа.
      max-w-2xl — сохраняем ограничение по ширине для красоты строк текста.
    */}
          <div className="max-w-2xl md:col-span-7 md:col-start-2 lg:max-w-3xl">
            {/* Маленький надзаголовок */}
            <span className="mb-4 block text-sm leading-relaxed font-medium tracking-widest text-gray-400 uppercase md:mb-6 md:text-[16px]">
              Российское производство <br /> высоковольтного оборудования
            </span>

            {/* Главный заголовок с адаптивным размером шрифта */}
            <h1 className="font-sans text-3xl leading-tight font-black tracking-tight uppercase sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl">
              Энергия будущего. <br /> основа надежных решений
            </h1>

            {/* Подзаголовок-описание */}
            <p className="mt-6 max-w-md font-sans text-sm leading-relaxed font-light text-gray-300 md:max-w-lg md:text-base">
              Высоковольтные вводы 10-1150 кВ, кабельная арматура 110-500 кВ и полные композитные
              изоляторы
            </p>

            {/* Блок с кнопками */}
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <button className="flex cursor-pointer items-center justify-center gap-3 rounded-lg bg-factory-blue px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-factory-blue/80 hover:shadow-lg hover:shadow-[#003F98]/20">
                Смотреть продукцию
                <span className="text-base">→</span>
              </button>

              <button className="flex cursor-pointer items-center justify-center gap-3 rounded-lg border border-white/30 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-xs transition-all duration-300 hover:border-white/60 hover:bg-white/10">
                О группе компаний
                <span className="text-base">→</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Анимированная иконка "Листайте вниз" */}
      <div className="absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 md:flex">
        <div className="flex h-7 w-4 justify-center rounded-full border-2 border-white/40 p-1">
          <div className="h-1.5 w-1 animate-bounce rounded-full bg-white" />
        </div>
        <span className="text-[10px] font-medium tracking-widest text-white/50 uppercase">
          Листайте вниз
        </span>
      </div>
    </section>
  );
}
