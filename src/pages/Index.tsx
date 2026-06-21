const Block = ({
  label,
  className = '',
  height = 'h-10',
}: {
  label: string;
  className?: string;
  height?: string;
}) => (
  <div
    className={`border-2 border-gray-400 bg-gray-200 flex items-center justify-center text-center text-gray-600 text-xs font-mono px-2 ${height} ${className}`}
  >
    {label}
  </div>
);

const Divider = () => <div className="border-t-2 border-dashed border-gray-400 my-1" />;

export default function Index() {
  return (
    <div className="min-h-screen bg-white font-mono text-gray-700">
      <div className="max-w-[1100px] mx-auto py-8 px-6 space-y-2">

        <div className="text-center text-gray-400 text-xs mb-4 tracking-widest uppercase">
          Вайрфрейм — Главная страница / Культурный комплекс «Корабел»
        </div>

        {/* 1. Панель доступности */}
        <Block label="Панель доступности: [Версия для слабовидящих]   [🔍 Поиск]" height="h-9" className="bg-gray-300" />

        {/* 2. Шапка */}
        <div className="border-2 border-gray-400 bg-gray-100 p-3 space-y-2">
          <div className="text-[10px] text-gray-400 uppercase tracking-widest mb-1">Шапка (Header)</div>
          <div className="grid grid-cols-[auto_1fr_auto] gap-3 items-center">
            <div className="border-2 border-gray-400 bg-gray-200 w-44 h-20 flex items-center justify-center text-xs text-center text-gray-600 px-2">
              Логотип + название<br />«Корабел»<br />(герб + текст)
            </div>
            <div className="border-2 border-dashed border-gray-400 bg-gray-50 h-20 flex items-center justify-center text-xs text-gray-400">
              Фотобаннер здания
            </div>
            <div className="border-2 border-gray-400 bg-gray-200 w-36 h-20 flex items-center justify-center text-center text-xs text-gray-600 px-2">
              Юбилейный блок<br /><span className="text-3xl font-bold text-gray-400">100</span><br />лет
            </div>
          </div>
        </div>

        {/* 3. Навигация */}
        <div className="border-2 border-gray-500 bg-gray-400 h-10 flex items-center px-3 gap-1 flex-wrap">
          {['ГЛАВНАЯ', 'О НАС ▾', 'СТРУКТУРА ▾', 'КОЛЛЕКТИВЫ ▾', 'ТВОРЧЕСКИЕ ПРОЕКТЫ', 'МУЛЬТИМЕДИА', 'КОНТАКТЫ ▾'].map((item) => (
            <span key={item} className="text-[11px] text-white border border-white/40 px-3 py-1 whitespace-nowrap">
              {item}
            </span>
          ))}
        </div>

        <Divider />

        {/* 4. Три колонки */}
        <div className="grid grid-cols-[180px_1fr_180px] gap-3 items-start">

          {/* Левая колонка */}
          <div className="space-y-2">
            <div className="text-[10px] text-gray-400 uppercase tracking-widest text-center">Левая колонка</div>
            <Block label="Баннер: Пушкинская карта" height="h-16" />
            <Block label="Баннер: Рабочая группа СВО" height="h-12" />
            <Block label="Афиша мероприятия (фото + дата + название)" height="h-32" />
            <Block label="Баннер: Касса 24" height="h-12" />
            <Block label="Баннер: Соц. поддержка" height="h-16" />
          </div>

          {/* Центр */}
          <div className="space-y-2">
            <div className="text-[10px] text-gray-400 uppercase tracking-widest text-center">Центральный контент</div>

            <div className="border-2 border-gray-400 bg-gray-100 h-8 flex items-center px-3 gap-2 text-xs text-gray-500">
              <span>Соц. сети: [ВК] [ОК] [Viber] [WhatsApp]</span>
              <span className="ml-auto border border-gray-400 px-2 py-0.5 text-[10px]">Просмотров: 42 191</span>
            </div>

            <Block label="Заголовок страницы: «Режим работы»" height="h-12" className="bg-gray-50 text-sm font-bold text-gray-700" />

            <Block label="Подзаголовок: Административно-управленческого персонала ГБУК КК «КОРАБЕЛ»" height="h-12" className="bg-gray-50" />

            {/* Таблица часов */}
            <div className="border-2 border-gray-400 bg-gray-100">
              <div className="grid grid-cols-2 border-b-2 border-gray-400">
                <div className="border-r-2 border-gray-400 p-2 text-xs font-bold bg-gray-200">Дни недели</div>
                <div className="p-2 text-xs font-bold bg-gray-200">Часы работы</div>
              </div>
              <div className="grid grid-cols-2">
                <div className="border-r-2 border-gray-400 p-2 text-xs">Понедельник — Пятница</div>
                <div className="p-2 text-xs">09:00 — 18:00</div>
              </div>
            </div>

            <Block label="Текст: Расписание занятий — в разделе «Творческие коллективы»" height="h-10" className="bg-gray-50" />
            <Block label="Адрес: 299001, г. Севастополь, ул. Рабочая, 2" height="h-10" className="bg-gray-50" />
            <Block label="Заголовок раздела: «Телефоны»" height="h-10" className="bg-gray-50 font-bold" />

            {/* Таблица телефонов */}
            <div className="border-2 border-gray-400 bg-gray-100">
              {[
                ['Директор', '+7 (8692) 49-29-80'],
                ['Заместитель директора', '+7 (8692) 49-29-98'],
                ['Отдел культурно-массовых мероприятий и зрелищ', '+7 (8692) 49-29-81'],
                ['Художественный отдел и отдел по работе со структурными подразделениями', '+7 (8692) 49-29-69'],
                ['Бухгалтерия', '+7 (8692) 49-29-79'],
              ].map(([role, phone], i) => (
                <div key={i} className="grid grid-cols-2 border-b border-gray-300 last:border-b-0">
                  <div className="border-r border-gray-300 p-2 text-[11px]">{role}</div>
                  <div className="p-2 text-[11px] font-mono">{phone}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Правая колонка */}
          <div className="space-y-2">
            <div className="text-[10px] text-gray-400 uppercase tracking-widest text-center">Правая колонка</div>
            <Block label="Баннер: Приложение MAX" height="h-28" />
            <Block label="Баннер: Финансовая грамотность" height="h-20" />
            <Block label="Баннер: Пожароопасный сезон" height="h-16" />
            <Block label="Баннер: Нац. центр «Россия»" height="h-20" />
          </div>
        </div>

        <Divider />

        {/* 5. Подвал */}
        <Block
          label="Подвал (Footer): © 2026 ГБУК КК «Корабел» · Адрес · Политика конфиденциальности"
          height="h-12"
          className="bg-gray-300"
        />

        {/* 6. Cookie */}
        <div className="border-2 border-dashed border-gray-400 bg-gray-100 p-3 flex items-center justify-between gap-4">
          <span className="text-xs text-gray-500">Cookie-уведомление: всплывающий блок внизу экрана (position: fixed)</span>
          <span className="border-2 border-gray-400 bg-gray-200 px-4 py-1 text-xs">[Принять]</span>
        </div>

        {/* Легенда */}
        <div className="mt-8 border-t-2 border-dashed border-gray-300 pt-4 grid grid-cols-2 md:grid-cols-4 gap-3">
          <div className="text-[10px] text-gray-400 space-y-1">
            <div className="flex items-center gap-2"><span className="w-4 h-4 border-2 border-gray-400 bg-gray-300 inline-block" /> Навигация / шапка</div>
            <div className="flex items-center gap-2"><span className="w-4 h-4 border-2 border-gray-400 bg-gray-200 inline-block" /> Блок / баннер</div>
          </div>
          <div className="text-[10px] text-gray-400 space-y-1">
            <div className="flex items-center gap-2"><span className="w-4 h-4 border-2 border-gray-400 bg-gray-100 inline-block" /> Текст / таблица</div>
            <div className="flex items-center gap-2"><span className="w-4 h-4 border-2 border-dashed border-gray-400 bg-gray-50 inline-block" /> Медиа / изображение</div>
          </div>
          <div className="text-[10px] text-gray-400 col-span-2">
            Сетка: 3 колонки — [180px | 1fr | 180px]<br />
            Макс. ширина контейнера: 1100px · Центрирование по горизонтали
          </div>
        </div>

      </div>
    </div>
  );
}
