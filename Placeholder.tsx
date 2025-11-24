import { Link } from "react-router-dom";
import Header from "@/components/Header";

interface PlaceholderProps {
  title: string;
}

export default function Placeholder({ title }: PlaceholderProps) {
  return (
    <div className="min-h-screen bg-[#2A2E3A]">
      <Header />
      <main className="pt-32 pb-20 px-4 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-white font-bebas text-5xl md:text-6xl mb-6 uppercase tracking-wide">
            {title}
          </h1>
          <p className="text-white/80 font-bebas text-xl md:text-2xl mb-8 uppercase">
            Эта страница находится в разработке
          </p>
          <p className="text-white/60 font-bebas text-lg mb-8 uppercase">
            Пожалуйста, продолжайте добавлять контент, если хотите заполнить эту страницу
          </p>
          <Link 
            to="/" 
            className="inline-block bg-white/10 hover:bg-white/20 text-white font-bebas text-lg px-8 py-3 rounded-full transition-all uppercase tracking-wide"
          >
            Вернуться на главную
          </Link>
        </div>
      </main>
    </div>
  );
}
