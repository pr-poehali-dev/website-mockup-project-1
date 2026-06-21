import { useState } from 'react';
import Icon from '@/components/ui/icon';

const SEA_BG = 'https://cdn.poehali.dev/projects/bd5a3401-19b1-4c90-ae85-96f1f40298da/files/61935dfa-feda-4a7a-85a8-54319ee05823.jpg';

const navItems = [
  { label: 'ГЛАВНАЯ', sub: [] },
  { label: 'О НАС', sub: ['История', 'Руководство', 'Документы'] },
  { label: 'СТРУКТУРА', sub: ['Подразделения', 'Сотрудники'] },
  { label: 'КОЛЛЕКТИВЫ', sub: ['Творческие коллективы', 'Клубы по интересам'] },
  { label: 'ТВОРЧЕСКИЕ ПРОЕКТЫ', sub: [] },
  { label: 'МУЛЬТИМЕДИА', sub: ['Фотогалерея', 'Видео'] },
  { label: 'КОНТАКТЫ', sub: ['Реквизиты', 'Обратная связь'] },
];

const phones = [
  { role: 'Директор:', num: '+7 (8692) 49-29-80' },
  { role: 'Заместитель директора:', num: '+7 (8692) 49-29-98' },
  { role: 'Отдел культурно-массовых мероприятий и зрелищ:', num: '+7 (8692) 49-29-81' },
  { role: 'Художественный отдел и отдел по работе со структурными подразделениями:', num: '+7 (8692) 49-29-69' },
  { role: 'Бухгалтерия:', num: '+7 (8692) 49-29-79' },
];

const SideBanner = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => (
  <div className={`rounded shadow-lg overflow-hidden border border-white/20 transition-transform hover:scale-[1.02] ${className}`}>
    {children}
  </div>
);

export default function Index() {
  const [openNav, setOpenNav] = useState<number | null>(null);
  const [cookies, setCookies] = useState(true);

  return (
    <div
      className="min-h-screen font-sans text-white bg-sea-deep"
      style={{
        backgroundImage: `linear-gradient(180deg, rgba(8,42,85,0.2) 0%, rgba(8,42,85,0.75) 60%), url(${SEA_BG})`,
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
        backgroundPosition: 'top center',
      }}
    >
      {/* Top accessibility bar */}
      <div className="bg-sea-bright text-white text-sm">
        <div className="max-w-[1200px] mx-auto flex items-center justify-between px-4 h-9">
          <button className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <Icon name="Eye" size={16} />
            <span className="font-bold tracking-wide">ВЕРСИЯ ДЛЯ СЛАБОВИДЯЩИХ</span>
          </button>
          <div className="flex items-center gap-3">
            <Icon name="Search" size={18} className="cursor-pointer hover:opacity-80" />
          </div>
        </div>
      </div>

      {/* Header banner */}
      <header className="bg-white shadow-xl">
        <div className="max-w-[1200px] mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row items-center gap-4 justify-between">
            <div className="flex items-center gap-4">
              <div className="bg-[#f4e9d0] border-4 border-[#c9a04e] rounded px-4 py-3 text-center shadow">
                <div className="text-[10px] text-sea-dark leading-tight font-semibold mb-1">
                  ПРАВИТЕЛЬСТВО СЕВАСТОПОЛЯ<br />
                  ДЕПАРТАМЕНТ КУЛЬТУРЫ ГОРОДА СЕВАСТОПОЛЯ
                </div>
                <div className="text-2xl font-serif font-bold text-red-700 leading-none">
                  КУЛЬТУРНЫЙ<br />КОМПЛЕКС
                </div>
                <div className="text-3xl font-serif font-bold text-sea-dark mt-1">«КОРАБЕЛ»</div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="text-center">
                <div className="text-6xl font-serif font-bold text-red-700 drop-shadow">100</div>
                <div className="text-2xl font-serif italic text-sea-dark -mt-2">лет</div>
              </div>
              <div className="hidden lg:flex items-end gap-3 text-sea-dark">
                <Icon name="Building2" size={64} className="text-sea-light" />
                <Icon name="Landmark" size={72} className="text-sea-dark" />
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="bg-sea-dark text-white">
          <div className="max-w-[1200px] mx-auto px-2">
            <ul className="flex flex-wrap items-center">
              {navItems.map((item, i) => (
                <li
                  key={i}
                  className="relative"
                  onMouseEnter={() => setOpenNav(i)}
                  onMouseLeave={() => setOpenNav(null)}
                >
                  <button className="flex items-center gap-1 px-4 py-3 text-sm font-bold hover:bg-sea-bright transition-colors uppercase">
                    {item.label}
                    {item.sub.length > 0 && <Icon name="ChevronDown" size={14} />}
                  </button>
                  {item.sub.length > 0 && openNav === i && (
                    <ul className="absolute left-0 top-full z-20 bg-white text-sea-dark min-w-[220px] shadow-xl animate-fade-in">
                      {item.sub.map((s, j) => (
                        <li key={j}>
                          <button className="block w-full text-left px-4 py-2 text-sm hover:bg-sea-bright hover:text-white transition-colors border-b border-gray-100">
                            {s}
                          </button>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </header>

      {/* Body grid */}
      <main className="max-w-[1200px] mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr_200px] gap-5">
          {/* Left column */}
          <aside className="space-y-4 order-2 lg:order-1">
            <SideBanner className="bg-gradient-to-br from-pink-500 to-fuchsia-600 p-4 text-center">
              <Icon name="BookOpen" size={32} className="mx-auto mb-2" />
              <div className="font-bold text-sm">УЧАСТНИК ПРОГРАММЫ</div>
              <div className="font-serif text-lg font-bold mt-1">ПУШКИНСКАЯ КАРТА</div>
            </SideBanner>

            <SideBanner className="bg-gradient-to-br from-stone-600 to-stone-800 p-4 text-center">
              <Icon name="Shield" size={28} className="mx-auto mb-2" />
              <div className="font-semibold text-sm">Рабочая группа по вопросам СВО</div>
            </SideBanner>

            <SideBanner className="bg-gradient-to-b from-slate-900 to-red-900 p-3 text-center">
              <div className="bg-red-600 inline-block px-3 py-1 rounded text-xs font-bold mb-2">26 ИЮНЯ · 19:00</div>
              <div className="font-serif text-2xl font-bold leading-none">ТРИО БАЛАЛАЕК</div>
              <div className="text-xs mt-2 tracking-widest text-amber-300">ГРАНИ · СТРУНЫ · ЭНЕРГИЯ</div>
              <div className="text-[10px] mt-2 opacity-70">Вход свободный</div>
            </SideBanner>

            <SideBanner className="bg-amber-400 p-3 text-center">
              <div className="font-serif text-2xl font-bold text-slate-900">kassa<span className="bg-slate-900 text-amber-400 px-1 rounded">24</span></div>
            </SideBanner>

            <SideBanner className="bg-gradient-to-br from-sea-bright to-sea-dark p-4 text-center">
              <Icon name="Users" size={32} className="mx-auto mb-2" />
              <div className="font-bold text-sm">МЕРЫ СОЦИАЛЬНОЙ ПОДДЕРЖКИ</div>
            </SideBanner>
          </aside>

          {/* Center content */}
          <section className="order-1 lg:order-2 bg-sea-deep/40 backdrop-blur-sm rounded-lg p-6 md:p-8 shadow-2xl border border-white/10">
            <div className="flex items-center gap-3 text-sm mb-4 text-sky-200">
              <div className="flex gap-2">
                <Icon name="Send" size={18} className="cursor-pointer hover:text-white" />
                <Icon name="MessageCircle" size={18} className="cursor-pointer hover:text-white" />
                <Icon name="Phone" size={18} className="cursor-pointer hover:text-white" />
              </div>
              <span className="ml-auto bg-orange-500 text-white px-2 py-0.5 rounded text-xs">Просмотров: 42191</span>
            </div>

            <h1 className="text-3xl font-serif font-bold text-center mb-6 text-white drop-shadow">Режим работы</h1>

            <p className="text-center mb-6 leading-relaxed">
              Административно-управленческого персонала<br />
              <span className="font-bold">ГБУК КК «КОРАБЕЛ»</span>
            </p>

            <table className="w-full border-collapse mb-6 bg-sea-deep/60">
              <thead>
                <tr className="bg-sea-dark">
                  <th className="border border-white/30 p-3 text-left font-bold">Дни недели</th>
                  <th className="border border-white/30 p-3 text-left font-bold">Часы работы</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-white/30 p-3">Понедельник — пятница</td>
                  <td className="border border-white/30 p-3">с 9.00 до 18.00</td>
                </tr>
              </tbody>
            </table>

            <p className="text-center mb-3 leading-relaxed text-sky-100">
              Расписание занятий творческих коллективов, клубов по интересам вы можете найти в разделе «Творческие коллективы».
            </p>

            <p className="text-center mb-8 font-semibold flex items-center justify-center gap-2">
              <Icon name="MapPin" size={18} className="text-amber-300" />
              Наш адрес: 299001 г. Севастополь, ул. Рабочая, 2
            </p>

            <h2 className="text-2xl font-serif font-bold text-center mb-5">Телефоны</h2>

            <table className="w-full border-collapse bg-sea-deep/60">
              <tbody>
                {phones.map((p, i) => (
                  <tr key={i} className="hover:bg-sea-dark/50 transition-colors">
                    <td className="border border-white/30 p-3 font-medium">{p.role}</td>
                    <td className="border border-white/30 p-3 font-bold whitespace-nowrap text-amber-200">{p.num}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>

          {/* Right column */}
          <aside className="space-y-4 order-3">
            <SideBanner className="bg-gradient-to-br from-violet-700 to-indigo-900 p-4 text-center">
              <div className="font-serif text-2xl font-bold mb-2">MAX</div>
              <div className="text-xs">Подтверждайте возраст и льготы в приложении MAX</div>
            </SideBanner>

            <SideBanner className="bg-white p-3 text-center text-sea-dark">
              <Icon name="GraduationCap" size={28} className="mx-auto mb-1 text-sea-bright" />
              <div className="text-xs font-semibold">Финансовая грамотность</div>
            </SideBanner>

            <SideBanner className="bg-gradient-to-r from-orange-600 to-red-700 p-3 text-center">
              <Icon name="Flame" size={28} className="mx-auto mb-1 text-amber-300" />
              <div className="font-bold text-sm">ПОЖАРООПАСНЫЙ СЕЗОН</div>
            </SideBanner>

            <SideBanner className="bg-red-600 p-4 text-center">
              <Icon name="Award" size={32} className="mx-auto mb-2 text-amber-300" />
              <div className="font-bold text-sm">НАЦИОНАЛЬНЫЙ ЦЕНТР</div>
              <div className="font-serif text-2xl font-bold mt-1">РОССИЯ</div>
              <div className="text-[10px] mt-1 opacity-80">Всё только начинается!</div>
            </SideBanner>
          </aside>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-sea-deep/80 border-t border-white/10 mt-6">
        <div className="max-w-[1200px] mx-auto px-4 py-6 text-center text-sky-200 text-sm">
          © 2026 ГБУК КК «Корабел». г. Севастополь, ул. Рабочая, 2
        </div>
      </footer>

      {/* Cookie bar */}
      {cookies && (
        <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-md bg-white text-sea-dark rounded-lg shadow-2xl p-4 animate-fade-in">
          <p className="text-sm mb-3">
            Мы используем cookie-файлы для анализа и удобства. Продолжая пользоваться сайтом, вы соглашаетесь на их использование.
          </p>
          <button
            onClick={() => setCookies(false)}
            className="bg-sea-bright text-white px-6 py-2 rounded font-bold hover:bg-sea-dark transition-colors"
          >
            Принять
          </button>
        </div>
      )}
    </div>
  );
}
