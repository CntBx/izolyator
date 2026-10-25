import Insulator_bigImg from "../assets/Insulator_big.svg";

export default function Details() {
  const pointers = [
    {
      id: "01",
      top: "14%",
      title: "Многоуровневый контроль качества",
      desc: "Контроль на каждом этапе — от сырья до приемо-сдаточных испытаний."
    },
    {
      id: "02",
      top: "30%",
      title: "Композитные материалы",
      desc: "Полимерная покрышка из кремнийорганической резины."
    },
    {
      id: "03",
      top: "49%",
      title: "Высокопрочная изоляция",
      desc: "Остов с RIP-изоляцией: бумага, пропитанная эпоксидным компаундом."
    },
    {
      id: "04",
      top: "69%",
      title: "Герметичные соединения",
      desc: "Фланцевые узлы и уплотнения, рассчитанные на весь срок службы."
    }
  ];

  return (
    <section 
      id="details" 
      className="relative flex min-h-screen w-full snap-start items-center justify-center bg-[#010A15] px-6 pt-20 pb-0 text-white md:h-screen md:px-16 overflow-hidden"
    >
      
      {/* Счетчик страниц сверху */}
      <div className="absolute top-24 right-6 md:right-16 font-sans text-xs font-bold tracking-widest text-gray-500/80 z-20">
        05 / <span className="text-gray-600">08</span>
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl h-full flex flex-col justify-between md:pt-24">
        
        {/* ГЛАВНАЯ СЕТКА (items-stretch позволяет колонкам гнуться независимо) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch w-full my-auto">
          
          {/* ЛЕВАЯ ЧАСТЬ: Текст (Flex-контейнер с justify-between держит заголовок вверху, а плашку внизу) */}
          <div className="md:col-start-2 md:col-span-5 flex flex-col justify-between h-full pb-12 md:pb-6 z-10">
            
            {/* Текстовый контент */}
            <div className="md:mt-4">
              <span className="text-[11px] font-bold tracking-widest uppercase text-factory-blue block mb-3">
                05 / ДЕТАЛИ
              </span>
              <h2 className="font-sans text-4xl font-black uppercase tracking-tight sm:text-5xl lg:text-[48px] xl:text-[56px] leading-[1.05] text-white">
                НАДЕЖНОСТЬ <br />
                В КАЖДОЙ <br />
                ДЕТАЛИ
              </h2>
              <p className="mt-4 font-sans text-xs md:text-sm font-normal leading-relaxed text-gray-400 max-w-xs">
                Каждый узел ввода проектируется, производится и испытывается внутри группы.
              </p>
            </div>

            {/* НИЖНЯЯ ПЛАШКА: Теперь она живет ВНУТРИ левой колонки и ограничена ее шириной */}
            <div className="w-full border-t border-white/10 pt-4 mt-8 md:mt-0 flex justify-between items-center text-[10px] font-bold tracking-widest text-gray-500 uppercase">
              <span>Высоковольтный ввод</span>
              <div className="flex gap-2">
                <span className="text-white">01</span> / <span>04</span>
              </div>
            </div>

          </div>

          {/* ПРАВАЯ ЧАСТЬ: Изолятор + Сетка линий (Занимает 6 колонок) */}
          {/* max-h-[50vh] гарантирует, что на ноуте графика ужмется и не выдавит нижнюю плашку */}
          <div className="md:col-span-6 flex items-center justify-start relative h-105 md:h-full max-h-[50vh] md:max-h-[66vh] 2xl:max-h-[75vh] w-full pl-6 lg:pl-12">
            
            <img 
              src={Insulator_bigImg}
              alt="Конструкция ввода" 
              className="h-full w-auto object-contain drop-shadow-[0_0_35px_rgba(0,82,204,0.15)] select-none pointer-events-none ml-6 lg:ml-12"
            />

            {/* ВЫНОСНЫЕ ЛИНИИ И ТЕКСТ */}
            <div className="absolute inset-0 w-full h-full pointer-events-none">
              {pointers.map((pointer) => (
                <div 
                  key={pointer.id}
                  style={{ top: pointer.top }}
                  className="absolute left-[38%] sm:left-[42%] lg:left-[46%] xl:left-[44%] 2xl:left-[42%] flex items-center w-55 md:w-65 xl:w-75 pointer-events-auto group cursor-pointer"
                >
                  <div className="h-px w-6 md:w-10 xl:w-14 bg-white/20 group-hover:bg-factory-blue transition-colors duration-300" />
                  <div className="h-1 w-1 rounded-full bg-white/40 group-hover:bg-factory-blue transition-colors -ml-0.5" />

                  <div className="flex flex-col pl-3">
                    <div className="flex items-baseline gap-1.5">
                      <span className="font-sans text-[9px] font-bold text-factory-blue">
                        {pointer.id}
                      </span>
                      <h3 className="font-sans text-[11px] md:text-xs font-bold tracking-tight text-white group-hover:text-factory-blue transition-colors leading-tight uppercase">
                        {pointer.title}
                      </h3>
                    </div>
                    <p className="mt-0.5 font-sans text-[9px] md:text-[11px] font-light leading-normal text-gray-400 max-w-45 md:max-w-55">
                      {pointer.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}