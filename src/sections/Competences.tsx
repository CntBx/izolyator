import { Ruler, Factory, Zap, ShieldCheck, GraduationCap } from "lucide-react";
import worldMap from "../assets/World-map.svg";

export default function Competences() {
  // Выносим шаги в массив. Иконки передаем как компоненты Lucide.
  // Это идеальная структура для будущего маппинга динамических данных.
  const steps = [
    { id: "01", name: "ПРОЕКТИРОВАНИЕ", icon: Ruler },
    { id: "02", name: "ПРОИЗВОДСТВО", icon: Factory },
    { id: "03", name: "ИСПЫТАНИЯ", icon: Zap },
    { id: "04", name: "ИСПЫТАНИЯ", icon: ShieldCheck },
    { id: "05", name: "ОБУЧЕНИЕ", icon: GraduationCap },
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

      {/* Контейнер-ограничитель */}
      <div className="relative z-10 mx-auto w-full max-w-7xl">
        {/* 12-колоночная сетка */}
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
          {/* ЛЕВАЯ КОЛОНКА: Сдвинута на md:col-start-2 и занимает 4 колонки */}
          <div className="md:col-span-4 md:col-start-2">
            <span className="text-factory-blue mb-4 block text-xs font-bold tracking-widest uppercase">
              ПОЛНЫЙ ЦИКЛ
            </span>
            <span className="-mt-3 mb-6 block text-xs font-medium tracking-normal text-gray-400">
              ЕДИНАЯ ИНЖЕНЕРНАЯ СИСТЕМА
            </span>

            <h2 className="font-sans text-3xl leading-[1.15] font-black tracking-tight text-[#011A34] uppercase sm:text-4xl lg:text-[38px]">
              КОМПЕТЕНЦИЯ <br />
              ПОЛНОГО <br />
              ЦИКЛА
            </h2>

            <p className="mt-8 max-w-xs text-sm leading-relaxed font-normal text-gray-500">
              От проектирования и производства до испытаний, технического сопровождения и обучения —
              группа компаний «Изолятор» объединяет ключевые компетенции в единую инженерную
              систему.
            </p>
          </div>

          {/* ПРАВАЯ КОЛОНКА: Горизонтальный таймлайн шагов (занимает 7 колонок) */}
          <div className="flex w-full flex-col items-center justify-between gap-8 md:flex-row md:gap-4 lg:col-span-7 lg:pl-8">
            {steps.map((step) => {
              const IconComponent = step.icon;
              return (
                <div
                  key={step.id}
                  className="group flex min-w-25 cursor-pointer flex-col items-center text-center"
                >
                  {/* Круглая плашка для иконки с плавным ховер-эффектом */}
                  <div className="group-hover:border-factory-blue/30 group-hover:bg-factory-blue/5 group-hover:text-factory-blue flex h-16 w-16 items-center justify-center rounded-full border border-gray-100 bg-gray-50 text-gray-400 shadow-xs transition-all duration-300 group-hover:scale-110">
                    <IconComponent size={24} strokeWidth={1.5} />
                  </div>

                  {/* Порядковый номер шага */}
                  <span className="group-hover:after:bg-factory-blue relative mt-6 pb-1 font-sans text-sm font-bold text-[#011A34] after:absolute after:bottom-0 after:left-1/2 after:h-0.5 after:w-4 after:-translate-x-1/2 after:bg-gray-200 after:transition-colors">
                    {step.id}
                  </span>

                  {/* Название шага капсом */}
                  <span className="mt-3 max-w-30 font-sans text-[11px] font-black tracking-wider text-gray-400 uppercase transition-colors group-hover:text-[#011A34]">
                    {step.name}
                  </span>
                </div>
              );
            })}
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
