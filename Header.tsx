import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 md:px-8 pt-2">
      <div className="max-w-[1280px] mx-auto">
        <div className="bg-black shadow-lg backdrop-blur-sm rounded-lg px-4 md:px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <Link to="/" className="flex-shrink-0">
            <img 
              src="https://api.builder.io/api/v1/image/assets/TEMP/df0192c5817ecfceb7fbd6f5b0031178683aba94?width=196" 
              alt="Logo" 
              className="h-10 w-auto"
            />
          </Link>

          <nav className="flex flex-wrap items-center justify-center gap-4 md:gap-8 lg:gap-10">
            <Link to="/catalog" className="text-white font-bebas text-xl md:text-2xl hover:text-gray-300 transition-colors uppercase tracking-wide">
              Каталог
            </Link>
            <Link to="/solutions" className="text-white font-bebas text-xl md:text-2xl hover:text-gray-300 transition-colors uppercase tracking-wide">
              Решения
            </Link>
            <Link to="/service" className="text-white font-bebas text-xl md:text-2xl hover:text-gray-300 transition-colors uppercase tracking-wide">
              Сервис
            </Link>
            <Link to="/about" className="text-white font-bebas text-xl md:text-2xl hover:text-gray-300 transition-colors uppercase tracking-wide">
              О нас
            </Link>
            <Link to="/contacts" className="text-white font-bebas text-xl md:text-2xl hover:text-gray-300 transition-colors uppercase tracking-wide">
              Контакты
            </Link>
          </nav>

          <div className="flex flex-col gap-2">
            <a 
              href="tel:88005553535" 
              className="flex items-center gap-3 bg-[#2A2E3A] rounded-full px-4 py-2 text-white font-bebas text-sm md:text-base hover:bg-opacity-80 transition-all group"
            >
              8 800 555 35 35
              <div className="w-6 h-6 rounded-full bg-gray-500 flex items-center justify-center group-hover:bg-gray-400 transition-colors">
                <ArrowUpRight className="w-4 h-4 text-black" />
              </div>
            </a>
            <a 
              href="mailto:stanislavpolyanskikh@yandex.ru" 
              className="bg-[#2A2E3A] rounded-full px-4 py-2 text-white font-bebas text-xs md:text-sm hover:bg-opacity-80 transition-all text-center"
            >
              stanislavpolyanskikh@yandex.ru
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
