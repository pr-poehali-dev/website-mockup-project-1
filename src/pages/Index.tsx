const B = ({
  h = 'auto',
  label,
  sub,
  dashed = false,
  dark = false,
  children,
}: {
  h?: string;
  label: string;
  sub?: string;
  dashed?: boolean;
  dark?: boolean;
  children?: React.ReactNode;
}) => (
  <div
    className={`flex flex-col items-center justify-center text-center px-2 py-2 ${dashed ? 'border-2 border-dashed border-gray-400' : 'border-2 border-gray-400'} ${dark ? 'bg-gray-300' : 'bg-gray-100'}`}
    style={{ minHeight: h }}
  >
    <span className="text-[11px] font-bold text-gray-700 leading-tight">{label}</span>
    {sub && <span className="text-[10px] text-gray-500 mt-1 leading-tight">{sub}</span>}
    {children}
  </div>
);

const Row = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => (
  <div className={`flex gap-2 ${className}`}>{children}</div>
);

const ColLabel = ({ text }: { text: string }) => (
  <div className="text-[9px] uppercase tracking-widest text-gray-400 text-center mb-1">{text}</div>
);

const Divider = () => <div className="border-t border-dashed border-gray-300 my-0.5" />;

export default function Index() {
  return (
    <div className="min-h-screen bg-white p-6 font-mono">
      <div className="max-w-[1100px] mx-auto space-y-1.5">

        {/* Заголовок */}
        <div className="text-center text-[11px] text-gray-400 uppercase tracking-widest mb-3">
          Вайрфрейм · Главная · Культурный комплекс «Корабел»
        </div>

        {/* 1. Панель доступности */}
        <B
          h="36px"
          dark
          label="Панель доступности"
          sub="Фон: синий · Иконка + текст «Версия для слабовидящих» · Поиск справа"
        />

        {/* 2. Шапка */}
        <div className="border-2 border-gray-400 bg-gray-100 p-2 space-y-1.5">
          <div className="text-[9px] uppercase tracking-widest text-gray-400 mb-1">Шапка</div>
          <Row>
            <B
              h="110px"
              label="Логотип"
              sub="Герб + название «КОРАБЕЛ» на свитке · Красный + синий · Кремовый фон"
              dashed
              className="w-[200px] flex-shrink-0"
            />
            <B
              h="110px"
              label="Фотобаннер"
              sub="Фото здания + весенние цветы · Занимает всё оставшееся пространство"
              dashed
              className="flex-1"
            />
            <B
              h="110px"
              label="«100 лет»"
              sub="Крупная красная цифра 100 · Serif · Курсив «лет» под ней"
              dashed
              className="w-[130px] flex-shrink-0"
            />
          </Row>
        </div>

        {/* 3. Навигация */}
        <div className="border-2 border-gray-500 bg-gray-300 px-3 py-2">
          <div className="text-[9px] uppercase tracking-widest text-gray-500 mb-1.5">Навигация · Фон тёмно-синий · Текст белый CAPS · Hover — светлее · Пункты со стрелкой ▾ имеют выпадающее меню</div>
          <Row>
            {['ГЛАВНАЯ ▾', 'О НАС ▾', 'СТРУКТУРА ▾', 'КОЛЛЕКТИВЫ ▾', 'ТВОРЧЕСКИЕ ПРОЕКТЫ', 'МУЛЬТИМЕДИА', 'КОНТАКТЫ ▾'].map((item) => (
              <div key={item} className="border border-gray-500 bg-gray-200 px-3 py-1 text-[10px] text-gray-600 whitespace-nowrap">{item}</div>
            ))}
          </Row>
        </div>

        <Divider />

        {/* 4. Три колонки */}
        <div className="text-[9px] uppercase tracking-widest text-gray-400 mb-1">
          Основная зона · Фон: фото моря на весь экран · Поверх — полупрозрачные блоки · Сетка: 190px | 1fr | 190px
        </div>
        <div className="grid grid-cols-[190px_1fr_190px] gap-2 items-start">

          {/* Левая */}
          <div className="space-y-1.5">
            <ColLabel text="Левая колонка · баннеры" />
            <B h="70px" label="Баннер: Пушкинская карта" sub="Тёмный фон · Неоново-зелёный текст · Фото участника" />
            <B h="48px" label="Баннер: Рабочая группа по вопросам СВО" sub="Оливковый фон · Белый текст · Иконка" />
            <B h="170px" label="Афиша мероприятия" sub="Тёмный фон · Красный акцент вверху · Крупная дата + время · Название события · Фото артистов · «Вход свободный»" />
            <B h="44px" label="Баннер: Kassa 24" sub="Жёлтый фон · Чёрный логотип" />
            <B h="70px" label="Баннер: Меры социальной поддержки" sub="Белый фон · Синий текст · Иконка семьи" />
          </div>

          {/* Центр */}
          <div className="space-y-1.5">
            <ColLabel text="Центральный контент" />
            <B h="36px" label="Соцсети + счётчик просмотров" sub="Иконки ВК, ОК, Viber, WhatsApp · Счётчик: оранжевый фон справа" />
            <div className="border-2 border-gray-400 bg-gray-100 p-3 space-y-1.5">
              <div className="text-[9px] uppercase tracking-widest text-gray-400 mb-1">Контент-блок · Полупрозрачный бирюзовый фон · Текст белый</div>
              <B h="40px" label="Заголовок: «Режим работы»" sub="PT Serif · 26–28px · По центру · Белый" />
              <B h="40px" label="Подзаголовок: название организации" sub="PT Sans · 14px · По центру · Название жирное" />
              <div className="border-2 border-gray-400 bg-gray-200">
                <div className="text-[9px] text-gray-500 p-1.5 text-center font-bold">Таблица «Режим работы» · 2 столбца · Рамка белая</div>
                <div className="grid grid-cols-2 border-t border-gray-400">
                  <div className="border-r border-gray-400 p-1.5 text-[10px] text-gray-600 text-center">Дни недели</div>
                  <div className="p-1.5 text-[10px] text-gray-600 text-center">Часы работы</div>
                </div>
                <div className="grid grid-cols-2 border-t border-gray-400">
                  <div className="border-r border-gray-400 p-1.5 text-[10px] text-gray-500 text-center">Понедельник — Пятница</div>
                  <div className="p-1.5 text-[10px] text-gray-500 text-center">с 9.00 до 18.00</div>
                </div>
              </div>
              <B h="36px" label="Текст: отсылка к разделу «Творческие коллективы»" sub="PT Sans · 13px · По центру" />
              <B h="36px" label="Адрес организации" sub="Иконка 📍 · PT Sans Bold · По центру" />
              <B h="40px" label="Заголовок: «Телефоны»" sub="PT Serif · 22px · По центру" />
              <div className="border-2 border-gray-400 bg-gray-200">
                <div className="text-[9px] text-gray-500 p-1.5 text-center font-bold">Таблица телефонов · 2 столбца · Должность | Номер</div>
                {['Директор', 'Заместитель директора', 'Отдел культурно-массовых мероприятий', 'Художественный отдел', 'Бухгалтерия'].map((r) => (
                  <div key={r} className="grid grid-cols-2 border-t border-gray-400">
                    <div className="border-r border-gray-400 p-1.5 text-[10px] text-gray-600 text-center">{r}</div>
                    <div className="p-1.5 text-[10px] text-gray-500 text-center font-bold">+7 (8692) ХХ-ХХ-ХХ · золотой цвет</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Правая */}
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
        <B h="48px" dark label="Подвал" sub="Фон тёмно-синий · Белый текст · Копирайт · Адрес · Политика конфиденциальности" />

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
          </div>
          <div className="space-y-1">
            <div>Шрифты: <strong>PT Serif</strong> — заголовки · <strong>PT Sans</strong> — текст, nav</div>
            <div>Сетка основной зоны: <strong>190px | 1fr | 190px</strong></div>
            <div>Макс. ширина контейнера: <strong>1200px</strong></div>
          </div>
          <div className="space-y-1">
            <div>Цвета: тёмно-синий · синий · бирюзовый</div>
            <div>Акценты: красный · золотой · зелёный (неон)</div>
            <div>Фон страницы: фото моря (background-attachment: fixed)</div>
          </div>
        </div>

      </div>
    </div>
  );
}
