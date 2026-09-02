export default function Scale() {
  const stats = [
    { 
      id: 1, 
      number: "1150", 
      unit: "кВ", 
      desc: "максимальный класс напряжения высоковольтных вводов" 
    },
    { 
      id: 2, 
      number: "4", 
      unit: "страны", 
      desc: "международное присутствие: Узбекистан, ОАЭ, Индия, Бразилия" 
    },
    { 
      id: 3, 
      number: "3", 
      unit: "направления", 
      desc: "вводы, кабельная арматура, композитные изоляторы" 
    },
    { 
      id: 4, 
      number: "5", 
      unit: "компетенций", 
      desc: "производство, наука, испытания, сервис, обучение" 
    },
  ];

  return (
    <section className="relative flex min-h-screen w-full snap-start items-center justify-center bg-white px-6 py-20 text-[#011A34] md:h-screen md:px-16 md:py-0">
      
      {/* Текстура карты мира на фоне (опционально, если экспортируете ее из Figma как SVG) */}
      {/* <div className="absolute inset-0 bg-[url('../assets/world-map-dots.svg')] bg-center bg-no-repeat opacity-40 pointer-events-none" /> */}

      <div className="relative z-10 mx-auto w-full max-w-7xl">
        
        {/* Используем 12-колоночную сетку */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8 items-start">
          
          {/* ЛЕВАЯ КОЛОНКА: Сдвинута на md:col-start-2 и занимает 5 колонок */}
          <div className="md:col-start-2 md:col-span-5">
            <span className="text-xs font-bold tracking-widest uppercase text-factory-blue block mb-4">
              МЕЖДУНАРОДНЫЙ МАСШТАБ
            </span>
            {/* Точный размер шрифта и межстрочный интервал из Figma */}
            <h2 className="font-sans text-2xl font-black uppercase tracking-tight sm:text-3xl lg:text-[38px] leading-[1.15] text-[#011A34]">
              МАСШТАБ, ПОДТВЕРЖДЕННЫЙ <br className="hidden xl:block" />
              ПРОИЗВОДСТВОМ, <br className="hidden xl:block" />
              ТЕХНОЛОГИЯМИ И <br className="hidden xl:block" />
              ПРИСУТСТВИЕМ НА <br className="hidden xl:block" />
              КЛЮЧЕВЫХ РЫНКАХ
            </h2>
            
            {/* Текст описания в точности по макету Figma */}
            <p className="mt-8 text-sm md:text-base font-normal text-gray-500 leading-relaxed max-w-sm">
              Группа компаний «Изолятор» объединяет производство, науку, испытания, сервис и международное сотрудничество в единой инженерной системе
            </p>
          </div>

          {/* ПРАВАЯ КОЛОНКА: Сетка параметров (занимает 5 колонок, оставляя отступ справа) */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-16 lg:pl-4">
            {stats.map((item) => (
              <div key={item.id} className="flex flex-col justify-start">
                
                {/* Блок цифры: разделяем число и единицу измерения */}
                <div className="font-sans text-[#011A34] flex items-baseline gap-2">
                  <span className="text-5xl font-light tracking-tight sm:text-6xl lg:text-[72px] leading-none">
                    {item.number}
                  </span>
                  <span className="text-xl font-medium text-[#011A34] sm:text-2xl lg:text-[24px]">
                    {item.unit}
                  </span>
                </div>
                
                {/* Серая разделительная линия под цифрой как в Figma */}
                <div className="mt-4 mb-4 h-px w-full bg-gray-200" />

                {/* Описание строго по макету */}
                <p className="font-sans text-xs md:text-sm font-normal leading-relaxed text-gray-500">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>

       {/* Анимированная иконка "Листайте вниз" */}
      <div className="absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 md:flex">
        <div className="flex h-7 w-4 justify-center rounded-full border-2 border-factory-blue/40 p-1">
          <div className="h-1.5 w-1 animate-bounce rounded-full bg-factory-blue" />
        </div>
        <span className="text-[10px] font-medium tracking-widest text-factory-blue uppercase">
          Листайте вниз
        </span>
      </div>
    </section>
  );
}