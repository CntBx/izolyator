import { useState } from "react";
import { ArrowRight } from "lucide-react";
import insulatorImg from "../assets/Insulator.svg";
import prod from "../assets/Product_1.svg";

interface ProductDetailProps {
  setView: (view: "landing" | "catalog" | "product") => void;
  productId: number | null;
}

export default function ProductDetail({ setView, 
    // productId 
}: ProductDetailProps) {
  const [activeTab, setActiveTab] = useState("description");
  const [activeImgIdx, setActiveImgIdx] = useState(0);

  // Имитируем базу изображений для галереи слева
  const images = [insulatorImg, prod, insulatorImg];

  // Спецификации для таблицы параметров
  const specs = [
    { label: "КЛАСС НАПРЯЖЕНИЯ", value: "110 кВ" },
    { label: "ТИП КАБЕЛЯ", value: "RIP-изоляция" },
    { label: "СЕЧЕНИЕ ЖИЛЫ", value: "50 мм²" },
    { label: "УСТАНОВКА", value: "Наружная" },
  ];

  // Преимущества в правой колонке вкладки Описание
  const advantages = [
    {
      id: "01",
      title: "Электрическая прочность и надежность",
      desc: "Многослойная изоляция с обкладками.",
    },
    {
      id: "02",
      title: "Герметичность",
      desc: "Качественные и продуманные компоненты исключают утечки масла.",
    },
    {
      id: "03",
      title: "Термическая стойкость",
      desc: "Изоляция рассчитана на длительные токовые перегрузки и нагрев.",
    },
  ];

  return (
    <div className="min-h-screen bg-white pt-28 pb-16 font-sans text-[#011A34] antialiased">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-8">
        {/* ХЛЕБНЫЕ КРОШКИ */}
        <nav className="mb-8 flex flex-wrap gap-2 text-[10px] font-bold tracking-widest text-gray-400 uppercase">
          <span className="cursor-pointer hover:text-[#011A34]" onClick={() => setView("landing")}>
            Главная
          </span>
          <span>/</span>
          <span className="cursor-pointer hover:text-[#011A34]" onClick={() => setView("catalog")}>
            Продукция
          </span>
          {/* <span>/</span> */}
          {/* <span className="cursor-pointer hover:text-[#011A34]">Высоковольтные вводы</span> */}
          <span>/</span>
          <span className="text-gray-600">Ввод трансформаторный с изоляцией</span>
        </nav>

        {/* ================= ВЕРХНИЙ БЛОК: ГАЛЕРЕЯ + ОСНОВНАЯ ИНФА ================= */}
        <div className="mb-16 grid grid-cols-1 items-start gap-8 lg:grid-cols-12 lg:gap-12">
          {/* Слева: Вертикальный блок миниатюр (1 колонка) */}
          <div className="hidden flex-col gap-3 sm:flex lg:col-span-1">
            {images.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setActiveImgIdx(idx)}
                className={`flex h-20 w-full cursor-pointer items-center justify-center rounded-xs border bg-[#F8F9FA] p-2 transition-all ${
                  activeImgIdx === idx
                    ? "border-factory-blue shadow-xs"
                    : "border-gray-100 hover:border-gray-300"
                }`}
              >
                <img src={img} alt="Миниатюра" className="h-full object-contain" />
              </button>
            ))}
            <div className="flex h-20 w-full items-center justify-center rounded-xs border border-gray-100 bg-[#F8F9FA] text-[10px] font-bold text-gray-400">
              3D
            </div>
          </div>

          {/* Центр: Большой 3D рендер ввода (5 колонок) */}
          <div className="relative grid grid-cols-1 items-center justify-center rounded-sm bg-[#F8F9FA] p-8  lg:col-span-5">
            <img
              src={images[activeImgIdx]}
              alt="Высоковольтный ввод"
              className="w-auto object-contain drop-shadow-xl"
            />
          </div>

          {/* Справа: Главные характеристики и действия (6 колонок) */}
          <div className="flex h-full flex-col justify-center lg:col-span-6 lg:pl-6">
            <span className="mb-2 text-[10px] font-bold tracking-widest text-factory-blue uppercase">
              тип
            </span>
            <h1 className="mb-6 text-3xl leading-[1.1] font-black tracking-tight text-[#011A34] uppercase sm:text-4xl lg:text-[44px]">
              Ввод трансформаторный <br /> с изоляцией
            </h1>

            <p className="mb-8 max-w-xl text-sm leading-relaxed font-normal text-gray-500">
              Трансформаторный ввод с надежной изоляцией для безопасного подключения оборудования.
              Обеспечивает герметичность и электрическую прочность в сетях высокого напряжения.
            </p>

            {/* СЕТКА ХАРАКТЕРИСТИК (2х2) */}
            <div className="mb-8 grid max-w-xl grid-cols-2 gap-x-8 gap-y-6 border-t border-b border-gray-100 py-6">
              {specs.map((spec) => (
                <div key={spec.label} className="flex flex-col gap-1">
                  <span className="text-[9px] font-bold tracking-wider text-gray-400 uppercase">
                    {spec.label}
                  </span>
                  <span className="text-lg font-black text-[#011A34]">{spec.value}</span>
                </div>
              ))}
            </div>

            {/* КНОПКА ЗАПРОСА КП */}
            <button className="flex max-w-md cursor-pointer items-center justify-between rounded-md bg-factory-blue px-6 py-4 text-xs font-bold tracking-widest text-white uppercase transition-all duration-300 hover:bg-[#011A34] hover:shadow-lg hover:shadow-[#003F98]/20">
              <span>Запросить коммерческое предложение</span>
              <ArrowRight size={14} />
            </button>
          </div>
        </div>

        {/* ================= СРЕДНИЙ БЛОК: ТАБЫ ОПИСАНИЯ ================= */}
        <div className="mb-16 border-t border-gray-100 pt-10">
          {/* Переключатели вкладок */}
          <div className="mb-8 flex gap-4 border-b border-gray-100 pb-3 text-xs font-bold tracking-wider uppercase">
            <button
              onClick={() => setActiveTab("description")}
              className={`cursor-pointer border-b-2 px-4 pb-3 transition-all ${
                activeTab === "description"
                  ? "border-[#011A34] text-[#011A34]"
                  : "border-transparent text-gray-400 hover:text-[#011A34]"
              }`}
            >
              Описание
            </button>
            <button
              onClick={() => setActiveTab("specs")}
              className={`cursor-pointer border-b-2 px-4 pb-3 transition-all ${
                activeTab === "specs"
                  ? "border-[#011A34] text-[#011A34]"
                  : "border-transparent text-gray-400 hover:text-[#011A34]"
              }`}
            >
              Характеристики
            </button>
            <button
              onClick={() => setActiveTab("doc")}
              className={`cursor-pointer border-b-2 px-4 pb-3 transition-all ${
                activeTab === "doc"
                  ? "border-[#011A34] text-[#011A34]"
                  : "border-transparent text-gray-400 hover:text-[#011A34]"
              }`}
            >
              Документация
            </button>
          </div>

          {/* Содержимое вкладки Описание */}
          {activeTab === "description" && (
            <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12">
              {/* Левый блок текстов (7 колонок) */}
              <div className="flex flex-col gap-6 pr-6 text-sm leading-relaxed font-normal text-gray-600 lg:col-span-7">
                <p>
                  Трансформаторный ввод с изоляцией — это конструктивный узел, который обеспечивает
                  электрическое соединение токоведущих частей трансформатора (обмоток) с внешней
                  сетью при одновременном надежном отделении токоведущих элементов от заземлённого
                  бака. Его ключевая задача — пропустить ток высокого потенциала сквозь стенку бака
                  без пробоя и утечек, сохранив герметичность и электрическую прочность узла.
                </p>
                <p>
                  Конструктивно трансформаторный ввод — это многослойная система: в центре находится
                  токопроводящая жила (медная или алюминиевая труба либо набор жил), вокруг нее —
                  изоляционный остов (чаще всего RIP-изоляция либо бумажно-масляная изоляция) с
                  уравнительными (конденсаторными) обкладками, которые выравнивают электрическое
                  поле и предотвращают локальные перенапряжения.
                </p>
              </div>

              {/* Правый блок преимуществ (5 колонок) */}
              <div className="flex flex-col border-t border-gray-100 lg:col-span-5">
                {advantages.map((adv) => (
                  <div
                    key={adv.id}
                    className="grid grid-cols-12 items-start gap-4 border-b border-gray-100 py-5"
                  >
                    <span className="text-factory-blue col-span-2 text-[11px] font-bold tracking-wider">
                      {adv.id}
                    </span>
                    <div className="col-span-10 flex flex-col gap-1">
                      <h4 className="text-sm font-bold tracking-tight text-[#011A34] uppercase">
                        {adv.title}
                      </h4>
                      <p className="text-xs leading-normal font-light text-gray-400">{adv.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* ================= НИЖНИЙ БЛОК: ПОХОЖИЕ ИЗДЕЛИЯ ================= */}
        <div className="border-t border-gray-100 pt-16">
          <div className="mb-10 flex items-end justify-between">
            <div>
              <span className="text-factory-blue mb-2 block text-[10px] font-bold tracking-widest uppercase">
                высоковольтные вводы
              </span>
              <h2 className="text-3xl leading-none font-black tracking-tight text-[#011A34] uppercase sm:text-4xl lg:text-[48px]">
                Похожие изделия
              </h2>
            </div>
            <button
              onClick={() => setView("catalog")}
              className="hover:text-factory-blue hover:border-factory-blue flex cursor-pointer items-center gap-2 border-b-2 border-transparent pb-1 text-xs font-bold tracking-wider text-[#011A34] uppercase transition-colors"
            >
              <span>Весь каталог</span>
              <ArrowRight size={14} />
            </button>
          </div>

          {/* Ряд карточек похожих изделий (Строго 3 штуки в ряд) */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
            {[1, 2, 3].map((id) => (
              <div
                key={id}
                className="group flex cursor-pointer flex-col rounded-md border border-gray-100 bg-white p-5 transition-all duration-300 hover:border-gray-200 hover:shadow-xl"
              >
                {/* Контейнер картинки с серым бэкграундом */}
                <div className="mb-4 flex h-52 w-full items-center justify-center overflow-hidden rounded-sm bg-[#F8F9FA] p-4">
                  <img
                    src={insulatorImg}
                    alt="Похожий ввод"
                    className="h-full w-auto object-contain drop-shadow-xs transition-transform duration-500 group-hover:scale-103"
                  />
                </div>

                <div className="mb-2 flex items-baseline justify-between text-[9px] font-bold tracking-wider text-gray-400 uppercase">
                  <span>ТИП</span>
                  <span className="font-bold text-factory-blue">ВЫСОКОВОЛЬТНЫЕ ВВОДЫ</span>
                </div>

                <h3 className="mb-4 font-sans text-sm leading-snug font-bold text-[#011A34] uppercase transition-colors group-hover:text-factory-blue md:text-base">
                  Ввод трансформаторный с изоляцией
                </h3>

                <div className="mt-auto flex items-center justify-between border-t border-gray-100 pt-3 text-xs">
                  <span className="rounded-xs bg-gray-100 px-2.5 py-1 font-bold text-gray-700">
                    110 кВ
                  </span>
                  <div className="transform text-gray-300 transition-colors duration-300 group-hover:translate-x-1 group-hover:text-factory-blue">
                    <ArrowRight size={14} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
