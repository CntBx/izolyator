import { useState } from "react";
import { Search, X, ArrowRight, ArrowDown } from "lucide-react";
import insulatorImg from "../assets/Insulator.svg";
// import { useGetProductsQuery } from "../store/api/productsApi";

interface CatalogProps {
  setView: (view: "landing" | "catalog") => void;
  onSelectProduct: (id: number) => void;
}

export default function Catalog({ setView, onSelectProduct }: CatalogProps) {
//   const { data: serverProducts = [], isLoading, error } = useGetProductsQuery();

  // Стейты для фильтрации и поиска (готовые заготовки для RTK Query)
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("all");
  const [selectedVoltage, setSelectedVoltage] = useState<string | null>("110 кВ");

  // Имитируем данные категорий верхних табов
  const categories = [
    { id: "all", name: "ВСЕ ИЗДЕЛИЯ", count: 15 },
    { id: "vводы", name: "ВЫСОКОВОЛЬТНЫЕ ВВОДЫ", count: 5 },
    { id: "арматура", name: "КАБЕЛЬНАЯ АРМАТУРА", count: 5 },
    { id: "изоляторы", name: "ПОЛЫЕ КОМПОЗИТНЫЕ ИЗОЛЯТОРЫ", count: 5 },
  ];

  // Имитируем чекбоксы фильтра "Класс напряжения"
  const voltageFilters = [
    { label: "до 35 кВ", count: 12 },
    { label: "110 кВ", count: 15 },
    { label: "220 кВ", count: 11 },
    { label: "330 кВ", count: 13 },
    { label: "500 кВ", count: 14 },
    { label: "750 кВ", count: 11 },
    { label: "1150 кВ", count: 12 },
  ];

  // Массив карточек продукции строго по скриншотам
  const products = [
    {
      id: 1,
      type: "ВЫСОКОВОЛЬТНЫЕ ВВОДЫ",
      title: "Ввод трансформаторный с изоляцией",
      voltage: "110 кВ",
      image: insulatorImg,
    },
    {
      id: 2,
      type: "ВЫСОКОВОЛЬТНЫЕ ВВОДЫ",
      title: "Ввод трансформаторный с изоляцией",
      voltage: "110 кВ",
      image: insulatorImg,
    },
    {
      id: 3,
      type: "ВЫСОКОВОЛЬТНЫЕ ВВОДЫ",
      title: "Ввод трансформаторный с изоляцией",
      voltage: "110 кВ",
      image: insulatorImg,
    },
    {
      id: 4,
      type: "КАБЕЛЬНАЯ АРМАТУРА",
      title: "Сухая концевая муфта",
      voltage: "110 кВ",
      image: insulatorImg,
    },
    {
      id: 5,
      type: "ПОЛЫЕ ИЗОЛЯТОРЫ",
      title: "Покрышка для трансформатора тока",
      voltage: "110 кВ",
      image: insulatorImg,
    },
  ];

//   if (isLoading) return <div className="text-center py-20 font-bold">Загрузка каталога завода...</div>;
//   if (error) return <div className="text-center py-20 text-red-500">Ошибка подключения к API</div>;

  return (
    <div className="min-h-screen bg-white pt-28 pb-16 font-sans text-[#011A34] antialiased">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-8">
        {/* ХЛЕБНЫЕ КРОШКИ */}
        <nav className="mb-6 flex gap-2 text-[10px] font-bold tracking-widest text-gray-400 uppercase">
          <span onClick={() => setView("landing")} className="cursor-pointer hover:text-[#011A34]">
            Главная
          </span>
          <span>/</span>
          <span className="text-gray-600">Продукция</span>
        </nav>

        {/* ЗАГОЛОВОК СТРАНИЦЫ */}
        <div className="mb-10 max-w-2xl">
          <h1 className="mb-6 text-5xl leading-none font-black tracking-tight uppercase sm:text-6xl lg:text-[72px]">
            Продукция
          </h1>
          <p className="text-sm leading-relaxed font-normal text-gray-500 md:text-base">
            Высоковольтные вводы, кабельная арматура и полые композитные изоляторы предприятий
            группы.
          </p>
        </div>

        {/* ВЕРХНИЕ ТАБЫ ФИЛЬТРАЦИИ КАТЕГОРИЙ */}
        <div className="mb-8 flex flex-wrap gap-2 border-b border-gray-100 pb-8">
          {categories.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`cursor-pointer rounded-md border px-4 py-2.5 text-[11px] font-black tracking-wider uppercase transition-all ${
                activeTab === tab.id
                  ? "border-[#011A34] bg-[#011A34] text-white shadow-xs"
                  : "border-gray-200 bg-white text-[#011A34] hover:bg-gray-50"
              }`}
            >
              {tab.name} <span className="ml-1 text-[9px] font-medium opacity-40">{tab.count}</span>
            </button>
          ))}
        </div>

        {/* ОСНОВНАЯ СЕТКА КАТАЛОГА (Сайдбар + Сетка товаров) */}
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12">
          {/* ================= ЛЕВАЯ КОЛОНКА: ФИЛЬТРЫ И ПОИСК ================= */}
          <aside className="flex flex-col gap-8 bg-white lg:sticky lg:top-28 lg:col-span-3">
            {/* ПОИСК ПО КАТАЛОГУ */}
            <div className="flex flex-col gap-2">
              <span className="text-[10px] font-bold tracking-widest text-gray-400 uppercase">
                Поиск по каталогу
              </span>
              <div className="relative w-full">
                <input
                  type="text"
                  placeholder="Введите название изделия..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full border-b border-gray-200 py-2.5 pr-8 text-sm transition-colors focus:border-[#011A34] focus:outline-hidden"
                />
                <Search
                  size={16}
                  className="absolute top-1/2 right-0 -translate-y-1/2 text-gray-400"
                />
              </div>
            </div>

            {/* БЛОК ФИЛЬТРОВ */}
            <div className="flex flex-col gap-6">
              <div className="flex items-baseline justify-between border-b border-gray-100 pb-2">
                <span className="text-[10px] font-bold tracking-widest text-gray-400 uppercase">
                  Фильтры
                </span>
                <button
                  onClick={() => {
                    setSelectedVoltage(null);
                    setSearchQuery("");
                  }}
                  className="text-factory-blue cursor-pointer text-[10px] font-bold hover:underline"
                >
                  Сбросить
                </button>
              </div>

              {/* ФИЛЬТР 1: Класс напряжения */}
              <div className="flex flex-col gap-3">
                <span className="text-[11px] font-bold tracking-wider text-[#011A34] uppercase">
                  Класс напряжения
                </span>
                <div className="flex flex-col gap-2.5">
                  {voltageFilters.map((filter) => (
                    <label
                      key={filter.label}
                      className="group flex cursor-pointer items-center justify-between text-xs font-medium"
                    >
                      <div className="flex items-center gap-3">
                        <input
                          type="checkbox"
                          checked={selectedVoltage === filter.label}
                          onChange={() =>
                            setSelectedVoltage(
                              selectedVoltage === filter.label ? null : filter.label,
                            )
                          }
                          className="text-factory-blue h-4 w-4 rounded border-gray-300 focus:ring-[#003F98]"
                        />
                        <span className="text-gray-700 transition-colors group-hover:text-[#011A34]">
                          {filter.label}
                        </span>
                      </div>
                      <span className="text-[11px] font-light text-gray-400">{filter.count}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>

            {/* КНОПКА ДЛЯ МОБИЛОК */}
            <button className="hover:bg-factory-blue block w-full rounded-xs bg-[#011A34] py-3 text-xs font-bold tracking-widest text-white uppercase shadow-2xs transition-colors lg:hidden">
              Показать изделия
            </button>
          </aside>

          {/* ================= ПРАВАЯ КОЛОНКА: СЕТКА КАРТОЧЕК ================= */}
          <main className="flex flex-col gap-8 lg:col-span-9">
            {/* ТЕГИ ТЕКУЩИХ АКТИВНЫХ ФИЛЬТРОВ И СОРТИРОВКА */}
            <div className="flex flex-col justify-between gap-4 rounded-md border border-gray-100 bg-[#F8F9FA] p-4 sm:flex-row sm:items-center">
              <div className="flex flex-wrap items-center gap-3 text-xs">
                <span className="font-medium text-gray-400">Найдено: 5 изделий</span>
                {selectedVoltage && (
                  <div className="border-factory-blue/10 bg-factory-blue/5 text-factory-blue flex items-center gap-1.5 rounded-xs border px-2.5 py-1 text-[11px] font-bold">
                    {selectedVoltage}
                    <X
                      size={12}
                      className="cursor-pointer hover:opacity-70"
                      onClick={() => setSelectedVoltage(null)}
                    />
                  </div>
                )}
                {searchQuery && (
                  <div className="border-factory-blue/10 bg-factory-blue/5 text-factory-blue flex items-center gap-1.5 rounded-xs border px-2.5 py-1 text-[11px] font-bold">
                    Поиск: {searchQuery}
                    <X
                      size={12}
                      className="cursor-pointer hover:opacity-70"
                      onClick={() => setSearchQuery("")}
                    />
                  </div>
                )}
              </div>

              {/* СОРТИРОВКА */}
              <div className="flex cursor-pointer items-center gap-1 text-xs font-medium text-gray-500 hover:text-[#011A34] sm:ml-auto">
                Сортировка:{" "}
                <span className="flex items-center gap-0.5 font-bold text-[#011A34]">
                  По классу напряжения <ArrowDown size={12} />
                </span>
              </div>
            </div>

            {/* СЕТКА ТОВАРОВ (Строго 3 карточки в ряд на десктопе) */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
              {products.map((product) => (
                <div
                  key={product.id}
                  onClick={() => onSelectProduct(product.id)}
                  className="group flex flex-col rounded-md border border-gray-100 bg-white p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-gray-200 hover:shadow-xl"
                >
                  {/* Контейнер картинки с серым бэкграундом как на Озоне */}
                  <div className="relative mb-4 flex h-56 w-full items-center justify-center overflow-hidden rounded-sm bg-[#F8F9FA] p-4">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="h-full w-auto object-contain drop-shadow-md transition-transform duration-500 group-hover:scale-103"
                    />
                  </div>
                  {/* Описание карточки */}
                  <div className="flex flex-1 flex-col justify-between">
                    <div>
                      <div className="mb-2 flex items-baseline justify-between text-[9px] font-bold tracking-wider text-gray-400 uppercase">
                        <span>ТИП</span>
                        <span className="text-factory-blue font-bold">{product.type}</span>
                      </div>

                      <h3 className="group-hover:text-factory-blue min-h-11 font-sans text-sm leading-snug font-bold tracking-tight text-[#011A34] uppercase transition-colors md:text-base">
                        {product.title}
                      </h3>
                    </div>

                    {/* Нижняя строка: Вольтаж и стрелочка перехода */}
                    <div className="mt-5 flex items-center justify-between border-t border-gray-100 pt-3 text-xs">
                      <span className="rounded-xs bg-gray-100 px-2.5 py-1 font-bold text-gray-700">
                        {product.voltage}
                      </span>
                      <div className="group-hover:text-factory-blue transform text-gray-300 transition-colors duration-300 group-hover:translate-x-1">
                        <ArrowRight size={14} strokeWidth={2} />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* ПАГИНАЦИЯ В САМОМ НИЗУ */}
            <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-gray-100 pt-6 sm:flex-row">
              <button className="flex cursor-pointer items-center gap-2 rounded-md border border-gray-200 px-5 py-2.5 text-xs font-bold tracking-wider text-[#011A34] uppercase transition-colors hover:bg-gray-50">
                Показать ещё <ArrowDown size={14} />
              </button>

              {/* Номера страниц */}
              <div className="flex gap-1 text-xs font-bold">
                <button className="flex h-9 w-9 items-center justify-center rounded-md bg-[#011A34] text-white">
                  1
                </button>
                <button className="flex h-9 w-9 items-center justify-center rounded-md border border-gray-200 text-[#011A34] hover:bg-gray-50">
                  2
                </button>
                <button className="flex h-9 w-9 items-center justify-center rounded-md border border-gray-200 text-[#011A34] hover:bg-gray-50">
                  3
                </button>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
