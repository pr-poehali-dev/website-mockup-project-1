import { useState } from 'react';

const Annotation = ({ text, color = 'bg-yellow-400' }: { text: string; color?: string }) => (
  <div className={`absolute z-10 ${color} text-black text-[10px] font-bold px-2 py-0.5 rounded shadow-lg pointer-events-none whitespace-nowrap`}>
    ▶ {text}
  </div>
);

const DesignNote = ({ children }: { children: React.ReactNode }) => (
  <div className="border-l-4 border-yellow-400 bg-yellow-50 text-yellow-800 text-[10px] font-mono px-2 py-1 mb-1">
    {children}
  </div>
);

export default function Index() {
  const [showNotes, setShowNotes] = useState(true);

  return (
    <div className="min-h-screen bg-gray-100 font-sans">

      {/* Управление аннотациями */}
      <div className="sticky top-0 z-50 bg-gray-900 text-white text-xs flex items-center justify-between px-4 py-2 shadow-xl">
        <span className="font-bold tracking-wide">📐 Дизайн-прототип — Культурный комплекс «Корабел» / Главная</span>
        <button
          onClick={() => setShowNotes(!showNotes)}
          className="bg-yellow-400 text-black px-3 py-1 rounded font-bold hover:bg-yellow-300 transition-colors"
        >
          {showNotes ? 'Скрыть аннотации' : 'Показать аннотации'}
        </button>
      </div>

      <div className="max-w-[1200px] mx-auto bg-white shadow-2xl">

        {/* ───── БЛОК 1: Панель доступности ───── */}
        {showNotes && (
          <DesignNote>
            ПАНЕЛЬ ДОСТУПНОСТИ · Фон: #1a6dbf (синий) · Текст: белый · Шрифт: PT Sans Bold 13px · Высота: 36px
          </DesignNote>
        )}
        <div className="bg-[#1a6dbf] text-white flex items-center justify-between px-4 h-9">
          <div className="flex items-center gap-2 text-sm font-bold">
            <span className="text-base">👁</span>
            ВЕРСИЯ ДЛЯ СЛАБОВИДЯЩИХ
          </div>
          <span className="text-lg cursor-pointer">🔍</span>
        </div>

        {/* ───── БЛОК 2: Шапка ───── */}
        {showNotes && (
          <DesignNote>
            ШАПКА · Фон: белый · Высота: ~140px · Содержит: логотип слева, фотобаннер здания по центру, юбилейный блок «100 лет» справа · Фото: реальное фото здания
          </DesignNote>
        )}
        <div className="bg-white border-b-4 border-[#1a3a6b]">
          <div className="flex items-stretch h-[130px]">

            {/* Логотип */}
            <div className="relative flex-shrink-0">
              {showNotes && <Annotation text="Логотип: герб + название на свитке · шрифт декоративный · цвет: #c9060c (красный) + #1a3a6b (синий)" color="bg-pink-400" />}
              <div className="h-full flex items-center px-4 border-r-2 border-gray-200 bg-[#f5edd8] w-[220px]">
                <div className="text-center w-full">
                  <div className="text-[9px] text-[#1a3a6b] font-bold leading-tight">
                    ПРАВИТЕЛЬСТВО СЕВАСТОПОЛЯ<br />
                    ДЕПАРТАМЕНТ КУЛЬТУРЫ
                  </div>
                  <div className="text-[#c9060c] font-black text-lg leading-tight mt-1">КУЛЬТУРНЫЙ<br />КОМПЛЕКС</div>
                  <div className="text-[#1a3a6b] font-black text-xl">«КОРАБЕЛ»</div>
                </div>
              </div>
            </div>

            {/* Баннер-фото */}
            <div className="relative flex-1">
              {showNotes && <Annotation text="Фотобаннер: фото здания + весенние цветы · размытый переход по краям · высота 100%" color="bg-green-400" />}
              <div
                className="h-full bg-gradient-to-r from-[#f5edd8] via-[#b8d4e8] to-[#e8f4e8] flex items-center justify-center"
              >
                <div
                  className="w-full h-full bg-center bg-cover opacity-80"
                  style={{ backgroundImage: `url(https://cdn.poehali.dev/projects/bd5a3401-19b1-4c90-ae85-96f1f40298da/bucket/f4ffdb29-b0c6-4f9c-baaf-c58d768f5205.png)`, backgroundPosition: '50% 15%' }}
                />
              </div>
            </div>

            {/* 100 лет */}
            <div className="relative flex-shrink-0">
              {showNotes && <Annotation text="Юбилей: «100» — большой красный serif · «лет» — курсив · фон прозрачный" color="bg-orange-400" />}
              <div className="h-full flex items-center justify-center px-4 w-[140px]">
                <div className="text-center">
                  <div className="text-6xl font-black text-[#c9060c] leading-none" style={{ fontFamily: 'Georgia, serif' }}>100</div>
                  <div className="text-2xl italic text-[#1a3a6b]" style={{ fontFamily: 'Georgia, serif' }}>лет</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ───── БЛОК 3: Навигация ───── */}
        {showNotes && (
          <DesignNote>
            НАВИГАЦИЯ · Фон: #1a3a6b (тёмно-синий) · Текст: белый, PT Sans Bold, 14px, CAPS · Hover: #1a6dbf · Активный пункт: подчёркивание или выделение · Стрелка ▾ у пунктов с подменю
          </DesignNote>
        )}
        <nav className="bg-[#1a3a6b] text-white">
          <div className="flex flex-wrap">
            {[
              { label: 'ГЛАВНАЯ', arrow: true, active: true },
              { label: 'О НАС', arrow: true },
              { label: 'СТРУКТУРА', arrow: true },
              { label: 'КОЛЛЕКТИВЫ', arrow: true },
              { label: 'ТВОРЧЕСКИЕ ПРОЕКТЫ', arrow: false },
              { label: 'МУЛЬТИМЕДИА', arrow: false },
              { label: 'КОНТАКТЫ', arrow: true },
            ].map((item) => (
              <button
                key={item.label}
                className={`flex items-center gap-1 px-4 py-3 text-sm font-bold hover:bg-[#1a6dbf] transition-colors border-r border-white/10 ${item.active ? 'bg-[#1a6dbf]' : ''}`}
              >
                {item.label} {item.arrow && <span className="text-xs opacity-70">▾</span>}
              </button>
            ))}
          </div>
        </nav>

        {/* ───── БЛОК 4: Основной контент ───── */}
        {showNotes && (
          <DesignNote>
            ОСНОВНАЯ ЗОНА · Фон страницы: морское фото (повторяющееся) · Поверх блоков: полупрозрачные подложки · Сетка: 3 колонки [190px | 1fr | 190px] · Отступы: 12px
          </DesignNote>
        )}
        <div
          className="p-3"
          style={{
            background: 'linear-gradient(180deg, #0a4a8c 0%, #1565b8 40%, #0d3f7a 100%)',
            backgroundImage: `url(https://cdn.poehali.dev/projects/bd5a3401-19b1-4c90-ae85-96f1f40298da/files/61935dfa-feda-4a7a-85a8-54319ee05823.jpg)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="grid grid-cols-[190px_1fr_190px] gap-3">

            {/* ── ЛЕВАЯ КОЛОНКА ── */}
            <div className="space-y-2">
              {showNotes && (
                <DesignNote>ЛЕВАЯ КОЛОНКА · Баннеры: фиксированная ширина 190px · каждый со своим фоном</DesignNote>
              )}

              {/* Пушкинская карта */}
              <div className="relative">
                {showNotes && <Annotation text="Баннер: тёмный фон + неон-зелёный текст + фото" color="bg-purple-400" />}
                <div className="bg-black rounded overflow-hidden h-[72px] flex items-center px-3 gap-2 border border-purple-500">
                  <div className="w-10 h-10 bg-purple-600 rounded-full flex-shrink-0 flex items-center justify-center text-white text-xs font-bold">ПК</div>
                  <div>
                    <div className="text-[10px] text-white">УЧАСТНИК ПРОГРАММЫ</div>
                    <div className="text-[#00ff00] font-black text-sm leading-tight">ПУШКИНСКАЯ КАРТА</div>
                  </div>
                </div>
              </div>

              {/* СВО */}
              <div className="relative">
                {showNotes && <Annotation text="Баннер: оливковый/военный фон · текст белый" color="bg-olive-400 bg-yellow-600" />}
                <div className="bg-[#4a5c3a] rounded h-[50px] flex items-center px-3 gap-2">
                  <div className="w-6 h-6 bg-[#6b7c4a] rounded flex-shrink-0" />
                  <div className="text-white text-[11px] font-semibold">Рабочая группа по вопросам СВО</div>
                </div>
              </div>

              {/* Афиша */}
              <div className="relative">
                {showNotes && <Annotation text="Афиша: тёмный фон + красный акцент + крупная дата + название события" color="bg-red-400" />}
                <div className="bg-[#1a0a0a] rounded overflow-hidden">
                  <div className="bg-[#c9060c] text-white text-center py-1 text-xs font-bold">26 ИЮНЯ · 19:00</div>
                  <div className="p-2 text-center">
                    <div className="text-white text-[11px] leading-tight">ДОМ ОФИЦЕРОВ ЧФ</div>
                    <div className="text-white font-black text-xl leading-tight mt-1">ТРИО<br />БАЛАЛАЕК</div>
                    <div className="text-[#ffd700] text-[10px] mt-1 tracking-widest">ГРАНИ · СТРУНЫ · ЭНЕРГИЯ</div>
                    <div className="mt-2 bg-gray-800 rounded h-16 flex items-center justify-center text-gray-500 text-[10px]">[фото артистов]</div>
                    <div className="text-[#ffd700] text-[10px] mt-2 font-bold">ВХОД СВОБОДНЫЙ</div>
                  </div>
                </div>
              </div>

              {/* Kassa */}
              <div className="relative">
                {showNotes && <Annotation text="Баннер: жёлтый фон + чёрный логотип" color="bg-yellow-400" />}
                <div className="bg-[#f5c800] rounded h-[44px] flex items-center justify-center">
                  <span className="font-black text-xl text-black">kassa<span className="bg-black text-[#f5c800] px-1 rounded">24</span></span>
                </div>
              </div>

              {/* Соц поддержка */}
              <div className="relative">
                {showNotes && <Annotation text="Баннер: белый фон + синий текст + иконка семьи" color="bg-blue-300" />}
                <div className="bg-white rounded h-[70px] flex items-center px-3 gap-2">
                  <div className="w-10 h-10 flex-shrink-0 text-2xl">👨‍👩‍👧‍👦</div>
                  <div className="text-[#1a3a6b] font-bold text-[11px] leading-tight">МЕРЫ СОЦИАЛЬНОЙ ПОДДЕРЖКИ</div>
                </div>
              </div>
            </div>

            {/* ── ЦЕНТР ── */}
            <div className="space-y-2">

              {/* Соцсети */}
              {showNotes && (
                <DesignNote>СОЦСЕТИ · Иконки ВК, ОК, Viber, WhatsApp · цветные кружки · справа: счётчик просмотров на оранжевом фоне</DesignNote>
              )}
              <div className="bg-white/90 rounded px-3 py-2 flex items-center gap-2">
                {[
                  { label: 'ВК', bg: '#4a76a8' },
                  { label: 'ОК', bg: '#ed812b' },
                  { label: 'V', bg: '#7360f2' },
                  { label: 'W', bg: '#25d366' },
                ].map((s) => (
                  <div key={s.label} className="w-7 h-7 rounded-full text-white text-[10px] font-bold flex items-center justify-center flex-shrink-0" style={{ background: s.bg }}>
                    {s.label}
                  </div>
                ))}
                <span className="text-[10px] text-gray-500 ml-1">Информация о материале</span>
                <span className="ml-auto bg-orange-500 text-white text-[10px] px-2 py-0.5 rounded font-bold">Просмотров: 42191</span>
              </div>

              {/* Контент */}
              {showNotes && (
                <DesignNote>КОНТЕНТ-БЛОК · Фон: полупрозрачный бирюзово-синий (#1a7a8a с opacity 0.7) · Текст: белый · Отступы: 24px</DesignNote>
              )}
              <div className="bg-[#1a7a8a]/70 backdrop-blur rounded p-5 text-white space-y-4">

                {showNotes && (
                  <DesignNote>ЗАГОЛОВОК · PT Serif Bold · 28px · по центру · цвет: белый</DesignNote>
                )}
                <h1 className="text-center text-2xl font-bold" style={{ fontFamily: 'Georgia, serif' }}>
                  Режим работы
                </h1>

                {showNotes && (
                  <DesignNote>ПОДЗАГОЛОВОК · PT Sans · 15px · по центру · цвет: белый · название организации жирным</DesignNote>
                )}
                <p className="text-center text-sm leading-relaxed">
                  Административно-управленческого персонала<br />
                  <strong>ГБУК КК «КОРАБЕЛ»</strong>
                </p>

                {showNotes && (
                  <DesignNote>ТАБЛИЦА ЧАСОВ · Рамка: белая 1px · Шапка таблицы: тёмный фон · Чередование строк: лёгкое</DesignNote>
                )}
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr className="bg-white/20">
                      <th className="border border-white/40 p-2 text-left">Дни недели</th>
                      <th className="border border-white/40 p-2 text-left">Часы работы</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-white/40 p-2">Понедельник — пятница</td>
                      <td className="border border-white/40 p-2">с 9.00 до 18.00</td>
                    </tr>
                  </tbody>
                </table>

                <p className="text-center text-sm leading-relaxed opacity-90">
                  Расписание занятий творческих коллективов, клубов по интересам вы можете найти в разделе «Творческие коллективы».
                </p>

                {showNotes && (
                  <DesignNote>АДРЕС · иконка 📍 · PT Sans · 15px · по центру · жирный</DesignNote>
                )}
                <p className="text-center text-sm font-bold">
                  📍 Наш адрес: 299001 г.Севастополь, ул.Рабочая, 2
                </p>

                {showNotes && (
                  <DesignNote>ЗАГОЛОВОК «ТЕЛЕФОНЫ» · Georgia serif · 22px · по центру</DesignNote>
                )}
                <h2 className="text-center text-xl font-bold" style={{ fontFamily: 'Georgia, serif' }}>
                  Телефоны:
                </h2>

                {showNotes && (
                  <DesignNote>ТАБЛИЦА ТЕЛЕФОНОВ · 2 столбца: должность (обычный) | номер (жирный, цвет: #ffd700 золотой) · рамка белая</DesignNote>
                )}
                <table className="w-full border-collapse text-sm">
                  <tbody>
                    {[
                      ['Директор:', '+7 (8692)49-29-80'],
                      ['Заместитель директора:', '+7 (8692)49-29-98'],
                      ['Отдел культурно-массовых мероприятий и зрелищ:', '+7 (8692)49-29-81'],
                      ['Художественный отдел и отдел по работе со структурными подразделениями:', '+7 (8692)49-29-69'],
                      ['Бухгалтерия:', '+7 (8692)49-29-79'],
                    ].map(([role, phone]) => (
                      <tr key={role}>
                        <td className="border border-white/40 p-2 text-center">{role}</td>
                        <td className="border border-white/40 p-2 text-center font-bold text-[#ffd700]">{phone}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* ── ПРАВАЯ КОЛОНКА ── */}
            <div className="space-y-2">
              {showNotes && (
                <DesignNote>ПРАВАЯ КОЛОНКА · Баннеры: ширина 190px · разные стили</DesignNote>
              )}

              {/* MAX */}
              <div className="relative">
                {showNotes && <Annotation text="Баннер: тёмно-фиолетовый · логотип MAX + кнопка «Подключить»" color="bg-purple-400" />}
                <div className="bg-[#1a0a3a] rounded p-3 text-white text-center">
                  <div className="text-2xl font-black text-white mb-1">⊙ max</div>
                  <div className="bg-[#3a2a6a] rounded px-2 py-1 text-[10px] mb-2">Подключить цифровой ID</div>
                  <div className="text-[11px] leading-tight">Подтверждайте возраст и льготы в приложении MAX</div>
                  <div className="mt-2 bg-gray-700 rounded h-20 flex items-center justify-center text-gray-500 text-[10px]">[фото телефона]</div>
                </div>
              </div>

              {/* Финграмотность */}
              <div className="relative">
                {showNotes && <Annotation text="Баннер: светлый · иллюстрация + текст" color="bg-blue-300" />}
                <div className="bg-white rounded p-2 h-[80px] flex items-center justify-center">
                  <div className="text-[#1a3a6b] text-[10px] text-center font-semibold">Финансовая грамотность<br /><span className="text-gray-400 font-normal">[иллюстрация]</span></div>
                </div>
              </div>

              {/* Пожароопасный */}
              <div className="relative">
                {showNotes && <Annotation text="Баннер: тёмный + огненное фото + белый текст" color="bg-red-400" />}
                <div className="bg-[#3a1a00] rounded overflow-hidden h-[60px] flex items-center">
                  <div className="flex-1 h-full bg-gradient-to-r from-orange-900 to-red-900 flex items-center justify-center">
                    <span className="text-white font-black text-[11px] text-center px-2">ПОЖАРООПАСНЫЙ СЕЗОН</span>
                  </div>
                </div>
              </div>

              {/* Россия */}
              <div className="relative">
                {showNotes && <Annotation text="Баннер: красный фон · логотип «Россия» · золотой орёл · возрастной ценз 0+" color="bg-red-400" />}
                <div className="bg-[#c9060c] rounded p-3 text-white text-center">
                  <div className="text-[10px] font-bold mb-1">НАЦИОНАЛЬНЫЙ ЦЕНТР <span className="bg-white text-red-700 px-1 rounded">0+</span></div>
                  <div className="text-3xl mb-1">🦅</div>
                  <div className="font-black text-xl tracking-widest">РОССИЯ</div>
                  <div className="text-[10px] opacity-80 mt-1">Всё только начинается!</div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* ───── БЛОК 5: Подвал ───── */}
        {showNotes && (
          <DesignNote>
            ПОДВАЛ · Фон: #1a3a6b · Текст: белый, мелкий · Содержит: копирайт, адрес, политика конфиденциальности
          </DesignNote>
        )}
        <footer className="bg-[#1a3a6b] text-white text-center py-4 text-xs">
          © 2026 ГБУК КК «Корабел» · г. Севастополь, ул. Рабочая, 2 · Политика конфиденциальности
        </footer>

        {/* ───── БЛОК 6: Cookie ───── */}
        {showNotes && (
          <DesignNote>
            COOKIE-БАННЕР · position: fixed, bottom · Фон: #1a3a6b/90% · Текст: белый · Кнопка: синяя #1a6dbf · Ширина: ~400px, по центру
          </DesignNote>
        )}
        <div className="bg-[#1a3a6b]/90 border border-white/20 mx-auto p-4 text-white text-xs mt-2">
          <p className="mb-2">Мы используем cookie-файлы для анализа и удобства. Продолжая пользоваться сайтом, вы соглашаетесь на их использование.</p>
          <button className="bg-[#1a6dbf] text-white px-4 py-1.5 rounded font-bold hover:bg-blue-600 transition-colors">Принять</button>
        </div>

      </div>

      {/* ───── ЛЕГЕНДА ЦВЕТОВ ───── */}
      {showNotes && (
        <div className="max-w-[1200px] mx-auto mt-6 mb-8 bg-white rounded-xl shadow-lg p-5">
          <div className="font-bold text-gray-700 mb-3 text-sm">🎨 Палитра проекта</div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { color: '#1a3a6b', label: 'Тёмно-синий', desc: 'Навигация, подвал, заголовки' },
              { color: '#1a6dbf', label: 'Синий', desc: 'Панель доступности, кнопки' },
              { color: '#1a7a8a', label: 'Бирюзовый', desc: 'Фон контент-блока' },
              { color: '#c9060c', label: 'Красный', desc: 'Акценты, юбилей, баннеры' },
              { color: '#ffd700', label: 'Золотой', desc: 'Телефоны, акценты' },
              { color: '#f5c800', label: 'Жёлтый', desc: 'Kassa24 баннер' },
              { color: '#4a5c3a', label: 'Оливковый', desc: 'Баннер СВО' },
              { color: '#f5edd8', label: 'Кремовый', desc: 'Фон логотипа / свитка' },
            ].map((c) => (
              <div key={c.color} className="flex items-center gap-2">
                <div className="w-8 h-8 rounded flex-shrink-0 border border-gray-200" style={{ background: c.color }} />
                <div>
                  <div className="text-[11px] font-bold text-gray-700">{c.label}</div>
                  <div className="text-[10px] text-gray-400">{c.color} · {c.desc}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 pt-3 border-t border-gray-200">
            <div className="font-bold text-gray-700 mb-2 text-sm">🔤 Типографика</div>
            <div className="grid grid-cols-2 gap-2 text-[11px] text-gray-500">
              <div><strong>Georgia / PT Serif</strong> — заголовки, «100 лет», названия блоков</div>
              <div><strong>PT Sans</strong> — основной текст, навигация, таблицы</div>
              <div><strong>Monospace</strong> — телефоны, технические данные</div>
              <div><strong>Жирный + CAPS</strong> — пункты навигации, акцентные надписи</div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
