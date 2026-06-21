const B = ({
  h = 'auto',
  label,
  sub,
  dashed = false,
  dark = false,
  className = '',
  children,
}: {
  h?: string;
  label: string;
  sub?: string;
  dashed?: boolean;
  dark?: boolean;
  className?: string;
  children?: React.ReactNode;
}) => (
  <div
    className={`flex flex-col items-center justify-center text-center px-2 py-2 ${dashed ? 'border-2 border-dashed border-gray-400' : 'border-2 border-gray-400'} ${dark ? 'bg-gray-300' : 'bg-gray-100'} ${className}`}
    style={{ minHeight: h }}
  >
    <span className="text-[11px] font-bold text-gray-700 leading-tight">{label}</span>
    {sub && <span className="text-[10px] text-gray-500 mt-1 leading-tight">{sub}</span>}
    {children}
  </div>
);

const ColLabel = ({ text }: { text: string }) => (
  <div className="text-[9px] uppercase tracking-widest text-gray-400 text-center mb-1">{text}</div>
);

const Divider = () => <div className="border-t border-dashed border-gray-300 my-0.5" />;

const LinkItem = ({ text }: { text: string }) => (
  <div className="border border-gray-300 bg-gray-50 px-2 py-1 flex items-start gap-1.5">
    <span className="text-gray-400 mt-0.5 flex-shrink-0">→</span>
    <span className="text-[10px] text-gray-600 text-left leading-tight">{text}</span>
  </div>
);

const GroupHeading = ({ text }: { text: string }) => (
  <div className="border-2 border-dashed border-gray-400 bg-gray-200 px-2 py-1 text-[11px] font-bold text-gray-600 text-center">
    Заголовок группы: «{text}» · Цвет: золотой/оранжевый · Italic
  </div>
);

export default function Index() {
  return (
    <div className="min-h-screen bg-white p-6 font-mono">
      <div className="max-w-[1100px] mx-auto space-y-1.5">

        <div className="text-center text-[11px] text-gray-400 uppercase tracking-widest mb-3">
          Вайрфрейм · «Творческие проекты» · Культурный комплекс «Корабел»
        </div>

        {/* 1. Панель доступности */}
        <B h="36px" dark label="Панель доступности" sub="Фон: синий · Иконка + «Версия для слабовидящих» · Поиск справа" />

        {/* 2. Шапка */}
        <div className="border-2 border-gray-400 bg-gray-100 p-2 space-y-1.5">
          <div className="text-[9px] uppercase tracking-widest text-gray-400 mb-1">Шапка — идентична всем страницам</div>
          <div className="flex gap-2 items-stretch h-[110px]">
            <B h="110px" dashed label="Логотип" sub="Герб + «КОРАБЕЛ» на свитке · Красный + синий · Кремовый фон" className="w-[200px] flex-shrink-0" />
            <B h="110px" dashed label="Фотобаннер" sub="Фото здания + цветы · Занимает всё пространство" className="flex-1" />
            <B h="110px" dashed label="«100 лет»" sub="Крупная красная цифра · Serif · Курсив «лет»" className="w-[130px] flex-shrink-0" />
          </div>
        </div>

        {/* 3. Навигация */}
        <div className="border-2 border-gray-500 bg-gray-300 px-3 py-2">
          <div className="text-[9px] uppercase tracking-widest text-gray-500 mb-1.5">
            Навигация · Фон: тёмно-синий · Текст: белый CAPS · Hover — светлее · Активный пункт выделен
          </div>
          <div className="flex flex-wrap gap-1">
            {['ГЛАВНАЯ ▾', 'О НАС ▾', 'СТРУКТУРА ▾', 'КОЛЛЕКТИВЫ ▾', 'ТВОРЧЕСКИЕ ПРОЕКТЫ', 'МУЛЬТИМЕДИА', 'КОНТАКТЫ ▾'].map((item) => (
              <div
                key={item}
                className={`border px-3 py-1 text-[10px] whitespace-nowrap ${item === 'ТВОРЧЕСКИЕ ПРОЕКТЫ' ? 'border-gray-600 bg-gray-400 font-bold text-gray-800' : 'border-gray-400 bg-gray-200 text-gray-500'}`}
              >
                {item} {item === 'ТВОРЧЕСКИЕ ПРОЕКТЫ' && '← активный'}
              </div>
            ))}
          </div>
        </div>

        <Divider />

        {/* 4. Три колонки */}
        <div className="text-[9px] uppercase tracking-widest text-gray-400 mb-1">
          Основная зона · Фон: фото моря · Поверх — полупрозрачные блоки · Сетка: 190px | 1fr | 190px
        </div>
        <div className="grid grid-cols-[190px_1fr_190px] gap-2 items-start">

          {/* Левая колонка */}
          <div className="space-y-1.5">
            <ColLabel text="Левая колонка · баннеры" />
            <B h="70px" label="Баннер: Пушкинская карта" sub="Тёмный фон · Неоново-зелёный текст · Фото участника" />
            <B h="48px" label="Баннер: Рабочая группа по вопросам СВО" sub="Оливковый фон · Белый текст · Иконка" />
            <B h="190px" label="Афиша мероприятия" sub="Тёмный фон · Красный акцент вверху · Дата + время · Название фестиваля «Самородки-2026» · День Балалайки · Фото · «Вход свободный»" />
            <B h="44px" label="Баннер: Kassa 24" sub="Жёлтый фон · Чёрный логотип" />
            <B h="70px" label="Баннер: Меры социальной поддержки" sub="Белый фон · Синий текст · Иконка семьи" />
          </div>

          {/* Центр */}
          <div className="space-y-1.5">
            <ColLabel text="Центральный контент" />
            <B h="36px" label="Соцсети + счётчик просмотров" sub="Иконки ВК, ОК, Viber, WhatsApp · Счётчик: оранжевый фон справа · «11 482»" />

            <div className="border-2 border-gray-400 bg-gray-100 p-3 space-y-1.5">
              <div className="text-[9px] uppercase tracking-widest text-gray-400 mb-1">
                Контент-блок · Полупрозрачный бирюзовый фон · Текст белый · Нет заголовка страницы — сразу группы ссылок
              </div>

              <GroupHeading text="Конкурсы и фестивали" />
              <div className="space-y-0.5 pl-2">
                <LinkItem text="Всероссийский конкурс-фестиваль народной музыки и танца «Самородки»" />
                <LinkItem text="Творческий проект «Таланты Севастополя»" />
                <LinkItem text="Региональный вокальный детско-юношеский конкурс патриотической песни «Голос Победы»" />
                <LinkItem text="Вокальный конкурс дуэтов «Две звезды»" />
                <LinkItem text="Региональный смотр-конкурс народного творчества пожилых людей «Когда душа поёт»" />
              </div>

              <GroupHeading text="Творческие проекты" />
              <div className="space-y-0.5 pl-2">
                <LinkItem text="Ретро-проект «Эхо забытых мелодий»" />
                <LinkItem text="#ЛЕТНИЙ СЕВАСТОПОЛЬ_2022 «Творческие мили»" />
                <LinkItem text="#ЛЕТНИЙ СЕВАСТОПОЛЬ_2022 «Звёзды Каламиты»" />
                <LinkItem text="Музыкально-драматический проект «Герои Севастополя»" />
                <LinkItem text="Творческий проект «Пушкинский бал»" />
                <LinkItem text="Творческий проект «Сокровища музыкальной культуры»" />
                <LinkItem text="Арт-проект «Хрустальные сезоны Севастополя»" />
              </div>

              <GroupHeading text="Для детей и молодёжи" />
              <div className="space-y-0.5 pl-2">
                <LinkItem text="Интерактивный познавательный проект «Школа весёлых наук»" />
                <LinkItem text="Интерактивный патриотический проект «Дети за мир на земле»" />
                <LinkItem text="Творческий проект «Страна Чудес и Талантов»" />
                <LinkItem text="Патриотический проект — [название]" />
                <LinkItem text="Детский проект — [название]" />
              </div>

              <GroupHeading text="Медиапроекты" />
              <div className="space-y-0.5 pl-2">
                <LinkItem text="Медиапроект — [название]" />
                <LinkItem text="Медиапроект — [название]" />
              </div>

              <div className="border-2 border-dashed border-gray-400 bg-gray-50 px-2 py-1 text-[10px] text-gray-500 text-center">
                Список продолжается · Прокрутка страницы · Нет пагинации
              </div>
            </div>
          </div>

          {/* Правая колонка */}
          <div className="space-y-1.5">
            <ColLabel text="Правая колонка · баннеры" />
            <B h="100px" label="Баннер: Приложение MAX" sub="Тёмно-фиолетовый фон · Логотип · Кнопка «Подключить» · Фото телефона" />
            <B h="80px" label="Баннер: Финансовая грамотность" sub="Светлый фон · Иллюстрация + заголовок" />
            <B h="56px" label="Баннер: Пожароопасный сезон" sub="Тёмный фон · Фото огня · Белый текст" />
            <B h="90px" label="Баннер: Нац. центр «Россия»" sub="Красный фон · Золотой орёл · Белый текст · Ценз 0+" />
          </div>

        </div>

        <Divider />

        {/* 5. Подвал */}
        <B h="48px" dark label="Подвал" sub="Фон: тёмно-синий · Белый текст · Копирайт · Адрес · Политика конфиденциальности" />

        {/* 6. Cookie */}
        <div className="border-2 border-dashed border-gray-400 bg-gray-50 p-2 flex items-center justify-between gap-4">
          <div>
            <span className="text-[11px] font-bold text-gray-600">Cookie-уведомление</span>
            <span className="text-[10px] text-gray-400 ml-2">position: fixed · bottom · по центру · Фон: тёмно-синий 90% · Текст белый</span>
          </div>
          <div className="border-2 border-gray-400 bg-gray-200 px-4 py-1 text-[10px] text-gray-600 flex-shrink-0">[Принять] · синяя кнопка</div>
        </div>

        {/* Легенда */}
        <div className="mt-6 pt-4 border-t-2 border-dashed border-gray-300 grid grid-cols-3 gap-4 text-[10px] text-gray-400">
          <div className="space-y-1">
            <div className="flex gap-2 items-center"><span className="w-4 h-4 border-2 border-gray-400 bg-gray-300 inline-block flex-shrink-0" /> Шапка / навигация / подвал</div>
            <div className="flex gap-2 items-center"><span className="w-4 h-4 border-2 border-gray-400 bg-gray-100 inline-block flex-shrink-0" /> Контентный блок / баннер</div>
            <div className="flex gap-2 items-center"><span className="w-4 h-4 border-2 border-dashed border-gray-400 bg-gray-50 inline-block flex-shrink-0" /> Медиа / изображение / fixed-блок</div>
            <div className="flex gap-2 items-center"><span className="w-4 h-4 border-2 border-dashed border-gray-400 bg-gray-200 inline-block flex-shrink-0" /> Заголовок группы ссылок</div>
          </div>
          <div className="space-y-1">
            <div>Шрифты: <strong>PT Serif</strong> — заголовки групп (italic) · <strong>PT Sans</strong> — ссылки, nav</div>
            <div>Сетка: <strong>190px | 1fr | 190px</strong></div>
            <div>Макс. ширина: <strong>1200px</strong></div>
            <div>Активный пункт меню: <strong>«ТВОРЧЕСКИЕ ПРОЕКТЫ»</strong></div>
          </div>
          <div className="space-y-1">
            <div>Ссылки в списке: белый текст · hover: подчёркивание</div>
            <div>Заголовки групп: золотой/оранжевый · italic · по левому краю</div>
            <div>Фон страницы: фото моря (background-attachment: fixed)</div>
          </div>
        </div>

      </div>
    </div>
  );
}
