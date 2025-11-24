export default function WhyChooseUs() {
  const features = [
    {
      title: "Собственное производство",
      items: [
        "Полный цикл от проектирования до пуско-наладки",
        "Контроль качества на каждом этапе",
      ],
      icon: (
        <svg className="w-full h-full" viewBox="0 0 217 154" fill="none">
          <g filter="drop-shadow(4px 4px 4px rgba(0, 0, 0, 0.25))">
            <rect x="0" y="59" width="217" height="46" rx="20" stroke="#000" strokeWidth="4" fill="none" />
            <rect x="26" y="0" width="75" height="60" rx="10" stroke="#000" strokeWidth="4" fill="none" />
            <rect x="117" y="0" width="75" height="60" rx="10" stroke="#000" strokeWidth="4" fill="none" />
            <circle cx="26.5" cy="82" r="9.5" stroke="#000" strokeWidth="4" fill="none" />
            <circle cx="191.5" cy="82" r="9.5" stroke="#000" strokeWidth="4" fill="none" />
            <circle cx="109" cy="82" r="9.5" stroke="#000" strokeWidth="4" fill="none" />
            <circle cx="150.5" cy="82" r="9.5" stroke="#000" strokeWidth="4" fill="none" />
            <circle cx="67.5" cy="82" r="9.5" stroke="#000" strokeWidth="4" fill="none" />
            <rect x="23" y="139" width="29" height="15" rx="7" stroke="#000" strokeWidth="4" fill="none" />
            <rect x="165" y="139" width="29" height="15" rx="7" stroke="#000" strokeWidth="4" fill="none" />
            <line x1="38" y1="105" x2="38" y2="139" stroke="#000" strokeWidth="2" />
            <line x1="180" y1="105" x2="180" y2="139" stroke="#000" strokeWidth="2" />
          </g>
        </svg>
      ),
    },
    {
      title: "Индивидуальные решения",
      items: [
        "Адаптация под ваши техпроцессы",
        "Спецпроекты любой сложности",
      ],
      icon: (
        <img 
          src="https://api.builder.io/api/v1/image/assets/TEMP/b5c1cc8d234c2813e60fc0d5e1eb68037828f962?width=310" 
          alt="Checkmark" 
          className="w-full h-full object-contain"
        />
      ),
    },
    {
      title: "Экспертность",
      items: [
        "Более 300 успешных проектов",
        "Работаем с ведущими предприятиями отрасли",
      ],
      icon: (
        <img 
          src="https://api.builder.io/api/v1/image/assets/TEMP/57dc6b47a115406749910a128acc239b6834ef92?width=382" 
          alt="Expert" 
          className="w-full h-full object-contain"
        />
      ),
    },
  ];

  return (
    <section className="max-w-[1280px] mx-auto px-4 md:px-8 py-12 md:py-20">
      <div className="mb-8 md:mb-12">
        <div className="flex items-center gap-4 mb-2">
          <div className="h-[2px] w-16 md:w-24 bg-white" />
        </div>
        <h2 className="text-white font-bebas text-3xl md:text-4xl uppercase tracking-wide">
          Почему выбирают нас
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {features.map((feature, index) => (
          <div key={index} className="flex flex-col">
            <div className="bg-gradient-to-r from-[#16181E] to-[#4B4D53] rounded-[30px] p-8 md:p-12 mb-6 flex items-center justify-center aspect-square">
              <div className="w-full max-w-[217px] h-auto flex items-center justify-center">
                {feature.icon}
              </div>
            </div>
            <h3 className="text-white font-bebas text-2xl md:text-[25px] mb-3 uppercase tracking-wide">
              {feature.title}
            </h3>
            <ul className="text-white font-bebas text-sm md:text-[15px] space-y-1 leading-relaxed uppercase">
              {feature.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
