const Block = ({
  label,
  className = '',
  height = 'h-10',
  children,
}: {
  label?: string;
  className?: string;
  height?: string;
  children?: React.ReactNode;
}) => (
  <div
    className={`border-2 border-gray-400 bg-gray-200 flex items-center justify-center text-center text-gray-600 text-xs font-mono px-2 ${height} ${className}`}
  >
    {children ?? label}
  </div>
);

const SectionTitle = ({ label }: { label: string }) => (
  <div className="text-[10px] text-gray-400 uppercase tracking-widest text-center mb-1">{label}</div>
);

const Divider = () => <div className="border-t-2 border-dashed border-gray-300 my-1" />;

const LinkItem = ({ text }: { text: string }) => (
  <div className="border border-gray-300 bg-gray-50 px-3 py-1.5 text-[11px] text-gray-500 font-mono flex items-center gap-2">
    <span className="w-1.5 h-1.5 rounded-full bg-gray-400 flex-shrink-0" />
    {text}
  </div>
);

const GroupTitle = ({ label }: { label: string }) => (
  <div className="border border-dashed border-gray-400 bg-gray-100 px-3 py-1 text-[11px] font-bold text-gray-500 font-mono italic">
    ▶ {label}
  </div>
);

export default function Index() {
  return (
    <div className="min-h-screen bg-white font-mono text-gray-700">
      <div className="max-w-[1100px] mx-auto py-8 px-6 space-y-2">

        <div className="text-center text-gray-400 text-xs mb-4 tracking-widest uppercase">
          Вайрфрейм — Страница «Творческие проекты» / Культурный комплекс «Корабел»
        </div>

        {/* 1. Панель доступности */}
        <Block height="h-9" className="bg-gray-300">
          <span>Панель доступности: [Версия для слабовидящих]</span>
          <span className="ml-auto">[🔍 Поиск]</span>
        </Block>

        {/* 2. Шапка */}
        <div className="border-2 border-gray-400 bg-gray-100 p-3 space-y-2">
          <SectionTitle label="Шапка (Header)" />
          <div className="grid grid-cols-[auto_1fr_auto] gap-3 items-center">
            <div className="border-2 border-gray-400 bg-gray-200 w-44 h-20 flex flex-col items-center justify-center text-xs text-center text-gray-600 px-2">
              <div className="font-bold">Логотип + название</div>
              <div>«Корабел»</div>
              <div className="text-[10px] text-gray-400">(герб + текст)</div>
            </div>
            <div className="border-2 border-dashed border-gray-400 bg-gray-50 h-20 flex items-center justify-center text-xs text-gray-400">
              Фотобаннер здания (изображение)
            </div>
            <div className="border-2 border-gray-400 bg-gray-200 w-36 h-20 flex flex-col items-center justify-center text-center text-xs text-gray-600 px-2">
              Юбилейный блок
              <span className="text-3xl font-bold text-gray-400 leading-none">100</span>
              лет
            </div>
          </div>
        </div>

        {/* 3. Навигация */}
        <div className="border-2 border-gray-500 bg-gray-400 h-10 flex items-center px-3 gap-1 flex-wrap">
          {['ГЛАВНАЯ ▾', 'О НАС ▾', 'СТРУКТУРА ▾', 'КОЛЛЕКТИВЫ ▾', 'ТВОРЧЕСКИЕ ПРОЕКТЫ', 'МУЛЬТИМЕДИА', 'КОНТАКТЫ ▾'].map((item) => (
            <span
              key={item}
              className={`text-[11px] px-3 py-1 whitespace-nowrap border ${item === 'ТВОРЧЕСКИЕ ПРОЕКТЫ' ? 'bg-white text-gray-700 border-white font-bold' : 'text-white border-white/40'}`}
            >
              {item}
            </span>
          ))}
        </div>

        <Divider />

        {/* 4. Три колонки */}
        <div className="grid grid-cols-[180px_1fr_180px] gap-3 items-start">

          {/* Левая колонка */}
          <div className="space-y-2">
            <SectionTitle label="Левая колонка" />
            <Block label="Баннер: Пушкинская карта" height="h-16" />
            <Block label="Баннер: Рабочая группа СВО" height="h-12" />
            <Block label="Афиша мероприятия (фото + дата + название события)" height="h-40" />
            <Block label="Баннер: Касса 24" height="h-12" />
            <Block label="Баннер: Меры соц. поддержки" height="h-16" />
          </div>

          {/* Центр */}
          <div className="space-y-2">
            <SectionTitle label="Центральный контент" />

            {/* Соц. кнопки + счётчик */}
            <div className="border-2 border-gray-400 bg-gray-100 h-8 flex items-center px-3 gap-2 text-xs text-gray-500">
              <span>Соц. сети: [ВК] [ОК] [Viber] [WhatsApp]</span>
              <span className="ml-auto border border-gray-400 px-2 py-0.5 text-[10px]">Просмотров: 11 482</span>
            </div>

            {/* Группа 1 */}
            <GroupTitle label="Конкурсы и фестивали" />
            <div className="space-y-1 pl-2">
              <LinkItem text="Всероссийский конкурс-фестиваль народной музыки и танца «Самородки»" />
              <LinkItem text="Творческий проект «Таланты Севастополя»" />
              <LinkItem text="Региональный вокальный детско-юношеский конкурс «Голос Победы»" />
              <LinkItem text="Вокальный конкурс дуэтов «Две звезды»" />
              <LinkItem text="Региональный смотр-конкурс народного творчества пожилых людей «Когда душа поёт»" />
            </div>

            {/* Группа 2 */}
            <GroupTitle label="Творческие проекты" />
            <div className="space-y-1 pl-2">
              <LinkItem text="Ретро-проект «Эхо забытых мелодий»" />
              <LinkItem text="#ЛЕТНИЙ СЕВАСТОПОЛЬ_2022 «Творческие мили»" />
              <LinkItem text="#ЛЕТНИЙ СЕВАСТОПОЛЬ_2022 «Звёзды Каламиты»" />
              <LinkItem text="Музыкально-драматический проект «Герои Севастополя»" />
              <LinkItem text="Творческий проект «Пушкинский бал»" />
              <LinkItem text="Творческий проект «Сокровища музыкальной культуры»" />
              <LinkItem text="Арт-проект «Хрустальные сезоны Севастополя»" />
            </div>

            {/* Группа 3 */}
            <GroupTitle label="Для детей и молодёжи" />
            <div className="space-y-1 pl-2">
              <LinkItem text="Интерактивный познавательный проект «Школа весёлых наук»" />
              <LinkItem text="Интерактивный патриотический проект «Дети за мир на земле»" />
              <LinkItem text="Творческий проект «Страна Чудес и Талантов»" />
              <LinkItem text="Патриотический проект — [ссылка]" />
              <LinkItem text="Детский проект — [ссылка]" />
            </div>

            {/* Группа 4 */}
            <GroupTitle label="Медиапроекты" />
            <div className="space-y-1 pl-2">
              <LinkItem text="Медиапроект — [ссылка]" />
              <LinkItem text="Медиапроект — [ссылка]" />
            </div>
          </div>

          {/* Правая колонка */}
          <div className="space-y-2">
            <SectionTitle label="Правая колонка" />
            <Block label="Баннер: Приложение MAX" height="h-28" />
            <Block label="Баннер: Финансовая грамотность" height="h-20" />
            <Block label="Баннер: Пожароопасный сезон" height="h-14" />
            <Block label="Баннер: Нац. центр «Россия»" height="h-24" />
          </div>
        </div>

        <Divider />

        {/* 5. Подвал */}
        <Block
          label="Подвал (Footer): © ГБУК КК «Корабел» · Адрес · Политика конфиденциальности"
          height="h-12"
          className="bg-gray-300"
        />

        {/* 6. Cookie */}
        <div className="border-2 border-dashed border-gray-400 bg-gray-100 p-3 flex items-center justify-between gap-4">
          <span className="text-xs text-gray-500">Cookie-уведомление: всплывающий блок (position: fixed, bottom)</span>
          <span className="border-2 border-gray-400 bg-gray-200 px-4 py-1 text-xs flex-shrink-0">[Принять]</span>
        </div>

        {/* Легенда */}
        <div className="mt-8 border-t-2 border-dashed border-gray-300 pt-4 grid grid-cols-2 md:grid-cols-4 gap-3">
          <div className="text-[10px] text-gray-400 space-y-1">
            <div className="flex items-center gap-2"><span className="w-4 h-4 border-2 border-gray-500 bg-gray-400 inline-block flex-shrink-0" /> Навигация (активный пункт — белый)</div>
            <div className="flex items-center gap-2"><span className="w-4 h-4 border-2 border-gray-400 bg-gray-200 inline-block flex-shrink-0" /> Баннер / блок</div>
          </div>
          <div className="text-[10px] text-gray-400 space-y-1">
            <div className="flex items-center gap-2"><span className="w-4 h-4 border border-gray-300 bg-gray-50 inline-block flex-shrink-0" /> Ссылка / пункт списка</div>
            <div className="flex items-center gap-2"><span className="w-4 h-4 border border-dashed border-gray-400 bg-gray-100 inline-block flex-shrink-0" /> Заголовок группы (italic)</div>
          </div>
          <div className="text-[10px] text-gray-400 col-span-2">
            Сетка: 3 колонки — [180px | 1fr | 180px]<br />
            Макс. ширина: 1100px · Центрирование по горизонтали<br />
            Активный раздел меню: «ТВОРЧЕСКИЕ ПРОЕКТЫ» (выделен белым)
          </div>
        </div>

      </div>
    </div>
  );
}
