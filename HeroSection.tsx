import { Link } from "react-router-dom";

const categories = [
  {
    title: "Лабораторные печи",
    image: "https://api.builder.io/api/v1/image/assets/TEMP/99d84b81e40206c3a2c85fba601bd5abc06b28df?width=1200",
    size: "large",
    link: "/catalog/laboratory",
  },
  {
    title: "Сервисное обслуживание",
    image: "https://api.builder.io/api/v1/image/assets/TEMP/e0139561ba985b8bd0968e0fb375076491b0e241?width=1200",
    size: "large",
    link: "/service",
  },
  {
    title: "Промышленные печи",
    image: "https://api.builder.io/api/v1/image/assets/TEMP/ce7fd453c32f9a92003f8c56d0e14b2192ac481f?width=800",
    size: "small",
    link: "/catalog/industrial",
  },
  {
    title: "Тунельные печи",
    image: "https://api.builder.io/api/v1/image/assets/TEMP/3e92494fc5c54567b137c85996b19c3a1f0568de?width=800",
    size: "small",
    link: "/catalog/tunnel",
  },
  {
    title: "Высокотемпературные печи",
    image: "https://api.builder.io/api/v1/image/assets/TEMP/0739f7e6422aeb93780447d96fb5e846405ec716?width=800",
    size: "small",
    link: "/catalog/high-temp",
  },
];

export default function HeroSection() {
  return (
    <section className="max-w-[1280px] mx-auto px-4 md:px-8 pt-32 pb-12 md:pb-20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0">
        {categories.map((category, index) => {
          const isLarge = category.size === "large";
          const colSpan = isLarge ? "md:col-span-2 lg:col-span-3/2" : "";
          
          return (
            <Link
              key={index}
              to={category.link}
              className={`relative group overflow-hidden h-[325px] ${
                index === 0 ? "lg:col-span-1" : ""
              } ${index === 1 ? "lg:col-span-2" : ""}`}
            >
              <img
                src={category.image}
                alt={category.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
              
              {index === 2 && (
                <div className="absolute right-0 top-0 bottom-0 w-1/2 bg-gradient-to-l from-black/60 via-gray-800/20 to-transparent pointer-events-none" />
              )}

              <div className="absolute inset-0 flex flex-col items-center justify-start pt-8 md:pt-10 px-6">
                <h3 className="text-white font-bebas text-3xl md:text-4xl text-center mb-4 uppercase tracking-wide">
                  {category.title}
                </h3>
                <div className="w-2/3 max-w-[267px] h-[2px] bg-white" />
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
