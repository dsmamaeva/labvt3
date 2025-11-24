export default function IndustrySection() {
  const industries = [
    {
      name: "Керамическая промышленность",
      icon: "https://api.builder.io/api/v1/image/assets/TEMP/475fe0314883f7363ab0ab54b5e23e9bde472fd4?width=292",
    },
    {
      name: "Химическая промышленность",
      icon: "https://api.builder.io/api/v1/image/assets/TEMP/e96270199d9dfc1ea9d91aaffff942855ac40607?width=294",
    },
    {
      name: "Металлургия",
      icon: "https://api.builder.io/api/v1/image/assets/TEMP/5482bde06163d6e0855e531a0da7e3aa195b7f4c?width=292",
    },
    {
      name: "Авиакосмическая отрасль",
      icon: "https://api.builder.io/api/v1/image/assets/TEMP/00dd42c173d30d5b993b372955f7f00b76f5d245?width=292",
    },
    {
      name: "Электротехника",
      icon: "https://api.builder.io/api/v1/image/assets/TEMP/11fe7627108bc691d907b9604ffc12c246b443ed?width=292",
    },
    {
      name: "Лаборатории и нии",
      icon: "https://api.builder.io/api/v1/image/assets/TEMP/d4ab0c72d4f343b944749e50ae477cf0c8607ac8?width=292",
    },
  ];

  return (
    <section className="max-w-[1280px] mx-auto px-4 md:px-8 py-12 md:py-20">
      <div className="mb-8 md:mb-12">
        <div className="flex items-center gap-4 mb-2">
          <div className="h-[2px] w-16 md:w-24 bg-white" />
        </div>
        <h2 className="text-white font-bebas text-3xl md:text-4xl uppercase tracking-wide">
          Индустрии применения
        </h2>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8">
        {industries.map((industry, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            <div className="w-full aspect-square mb-4 rounded-[30px] overflow-hidden bg-gradient-to-r from-[#16181E] to-[#4B4D53] p-4 flex items-center justify-center">
              <img 
                src={industry.icon} 
                alt={industry.name}
                className="w-full h-full object-contain"
              />
            </div>
            <h3 className="text-white font-bebas text-xl md:text-[25px] leading-tight uppercase tracking-wide">
              {industry.name}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
}
