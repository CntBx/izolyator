import worldMap from "../assets/World-map.svg";

export default function Scale() {
  const stats = [
    {
      id: 1,
      number: "1150",
      unit: "кВ",
      desc: "максимальный класс напряжения высоковольтных вводов",
    },
    {
      id: 2,
      number: "4",
      unit: "страны",
      desc: "международное присутствие: Узбекистан, ОАЭ, Индия, Бразилия",
    },
    {
      id: 3,
      number: "3",
      unit: "направления",
      desc: "вводы, кабельная арматура, композитные изоляторы",
    },
    {
      id: 4,
      number: "5",
      unit: "компетенций",
      desc: "производство, наука, испытания, сервис, обучение",
    },
  ];

  return (
    <section className="relative flex min-h-screen w-full snap-start items-center justify-center bg-white px-6 py-20 text-[#011A34] md:h-screen md:px-16 md:py-0">
      
      {/* ФОНОВАЯ КАРТА МИРА */}
      <div
        style={{ backgroundImage: `url(${worldMap})` }}
        className="pointer-events-none absolute inset-0 z-0 bg-center bg-no-repeat"
        /* 
                pointer-events-none: клики мышкой будут проходить сквозь карту (пользователь сможет выделять текст)
                opacity-[0.04]: делаем карту едва заметной (4% видимости), чтобы она не спорила с текстом
                absolute inset-0 z-0: растягиваем на весь экран под контент
              */
      />

      {/* Текстура карты мира на фоне (опционально, если экспортируете ее из Figma как SVG) */}
      {/* <div className="absolute inset-0 bg-[url('../assets/world-map-dots.svg')] bg-center bg-no-repeat opacity-40 pointer-events-none" /> */}

      <div className="relative z-10 mx-auto w-full max-w-7xl">
        {/* Используем 12-колоночную сетку */}
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-8">
          {/* ЛЕВАЯ КОЛОНКА: Сдвинута на md:col-start-2 и занимает 5 колонок */}
          <div className="md:col-span-5 md:col-start-2">
            <span className="text-factory-blue mb-4 block text-xs font-bold tracking-widest uppercase">
              МЕЖДУНАРОДНЫЙ МАСШТАБ
            </span>
            {/* Точный размер шрифта и межстрочный интервал из Figma */}
            <h2 className="font-sans text-2xl leading-[1.15] font-black tracking-tight text-[#011A34] uppercase sm:text-3xl lg:text-[38px]">
              МАСШТАБ, ПОДТВЕРЖДЕННЫЙ <br className="hidden xl:block" />
              ПРОИЗВОДСТВОМ, <br className="hidden xl:block" />
              ТЕХНОЛОГИЯМИ И <br className="hidden xl:block" />
              ПРИСУТСТВИЕМ НА <br className="hidden xl:block" />
              КЛЮЧЕВЫХ РЫНКАХ
            </h2>

            {/* Текст описания в точности по макету Figma */}
            <p className="mt-8 max-w-sm text-sm leading-relaxed font-normal text-gray-500 md:text-base">
              Группа компаний «Изолятор» объединяет производство, науку, испытания, сервис и
              международное сотрудничество в единой инженерной системе
            </p>
          </div>

          {/* ПРАВАЯ КОЛОНКА: Сетка параметров (занимает 5 колонок, оставляя отступ справа) */}
          <div className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:col-span-5 lg:pl-4">
            {stats.map((item) => (
              <div key={item.id} className="flex flex-col justify-start">
                {/* Блок цифры: разделяем число и единицу измерения */}
                <div className="flex items-baseline gap-2 font-sans text-[#011A34]">
                  <span className="text-5xl leading-none font-light tracking-tight sm:text-6xl lg:text-[72px]">
                    {item.number}
                  </span>
                  <span className="text-xl font-medium text-[#011A34] sm:text-2xl lg:text-[24px]">
                    {item.unit}
                  </span>
                </div>

                {/* Серая разделительная линия под цифрой как в Figma */}
                <div className="mt-4 mb-4 h-px w-full bg-gray-200" />

                {/* Описание строго по макету */}
                <p className="font-sans text-xs leading-relaxed font-normal text-gray-500 md:text-sm">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Анимированная иконка "Листайте вниз" */}
      <div className="absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 md:flex">
        <div className="border-factory-blue/40 flex h-7 w-4 justify-center rounded-full border-2 p-1">
          <div className="bg-factory-blue h-1.5 w-1 animate-bounce rounded-full" />
        </div>
        <span className="text-factory-blue text-[10px] font-medium tracking-widest uppercase">
          Листайте вниз
        </span>
      </div>
    </section>
  );
}
