import { useState } from "react";
import { ArrowRight } from "lucide-react";
import factoryImg from "../assets/factory.svg";

export default function CompanyGroup() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(0);

  const companies = [
    { id: "01", name: "Завод «Изолятор»", desc: "Производство высоковольтного оборудования" },
    { id: "02", name: "Научно-технический центр", desc: "Исследования и разработка" },
    { id: "03", name: "Испытательный центр", desc: "Испытания оборудования" },
    { id: "04", name: "Сервис", desc: "Монтаж, диагностика, обслуживание" },
    { id: "05", name: "Корпоративный университет", desc: "Обучение специалистов" },
  ];

  return (
    <section 
      id="company-group" 
      className="relative flex min-h-screen w-full snap-start items-center justify-center bg-white px-6 py-12 text-[#011A34] md:h-screen md:px-16 md:py-0 overflow-hidden"
    >
      <div className="relative z-10 mx-auto w-full max-w-7xl h-full flex flex-col justify-between md:pt-24 md:pb-6">
        
        {/* ВЕРХНИЙ СЧЕТЧИК СЛАЙДОВ (03 / 08) */}
        <div className="absolute top-20 right-0 font-sans text-xs font-bold tracking-widest text-gray-400">
          03 / <span className="text-gray-300">08</span>
        </div>

        {/* ОСНОВНОЙ КОНТЕНТ (Заменили items-start на items-center для баланса высоты) */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-8 items-center w-full my-auto">
          
          {/* ЛЕВАЯ КОЛОНКА: Заголовок и Фотография */}
          <div className="md:col-start-2 md:col-span-5 flex flex-col justify-between">
            <div>
              <span className="text-[11px] font-bold tracking-widest uppercase text-factory-blue block mb-2 md:mb-3">
                03 / ГРУППА
              </span>
              
              <h2 className="font-sans text-3xl font-black uppercase tracking-tight sm:text-4xl lg:text-[44px] xl:text-[54px] leading-[1.05] text-[#011A34]">
                ГРУППА <br />
                КОМПАНИЙ
              </h2>
              
              <p className="mt-3 font-sans text-xs md:text-sm font-normal leading-relaxed text-gray-400 max-w-sm">
                Производство, наука, испытания, сервис и обучение — шесть компаний, связанных в одну инженерную систему полного цикла.
              </p>
            </div>

            {/* Блок с фотографией производства — уменьшили высоту на ноутах (max-h-[160px] md:max-h-[200px]) */}
            <div className="mt-6 group relative overflow-hidden rounded-xs border border-gray-100 shadow-2xs max-w-md">
              <img 
                src={factoryImg}
                alt="Производственная площадка Завода Изолятор" 
                className="w-full h-auto max-h-40 md:max-h-47.5 2xl:max-h-65 object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="flex justify-between items-center px-1 mt-1.5 text-[9px] font-bold tracking-wider text-gray-400 uppercase">
                <span>01 — ЗАВОД «ИЗОЛЯТОР»</span>
                <span>ПРОИЗВОДСТВЕННАЯ ПЛОЩАДКА</span>
              </div>
            </div>
          </div>

          {/* ПРАВАЯ КОЛОНКА: Интерактивный список компаний */}
          <div className="lg:col-span-5 flex flex-col w-full lg:pl-4">
            <div className="text-[10px] font-bold tracking-widest text-gray-400 uppercase mb-1 pb-1 border-b border-gray-100 flex justify-between items-center">
              <span>КОМПАНИИ ГРУППЫ</span>
              <span>05</span>
            </div>

            <div className="flex flex-col">
              {companies.map((company, index) => {
                const isCurrentHovered = hoveredIndex === index;
                return (
                  <div
                    key={company.id}
                    onMouseEnter={() => setHoveredIndex(index)}
                    /* py-3 md:py-3.5 2xl:py-5 — уменьшили отступы строк на ноутбуках */
                    className="group/item flex items-center justify-between py-3 md:py-3.5 2xl:py-5 border-b border-gray-100 cursor-pointer transition-all duration-300 relative overflow-hidden"
                  >
                    <div className="flex items-baseline gap-4 md:gap-6 z-10">
                      <span className={`font-sans text-[11px] font-bold transition-colors duration-300 ${
                        isCurrentHovered ? "text-factory-blue" : "text-gray-400"
                      }`}>
                        {company.id}
                      </span>
                      
                      <div className="flex flex-col gap-0.5 max-w-60 md:max-w-70">
                        <h3 className={`font-sans text-sm md:text-base xl:text-[18px] 2xl:text-[20px] font-bold tracking-tight transition-colors duration-300 leading-tight ${
                          isCurrentHovered ? "text-factory-blue" : "text-[#011A34]"
                        }`}>
                          {company.name}
                        </h3>
                        <p className="font-sans text-[11px] md:text-xs font-light text-gray-400 leading-normal">
                          {company.desc}
                        </p>
                      </div>
                    </div>

                    <div className={`transition-all duration-300 transform ${
                      isCurrentHovered ? "text-factory-blue translate-x-1" : "text-gray-300"
                    }`}>
                      <ArrowRight size={14} strokeWidth={1.5} />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}