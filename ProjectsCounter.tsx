export default function ProjectsCounter() {
  return (
    <section className="relative w-full h-[375px] overflow-hidden">
      <div className="absolute inset-0 bg-black" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#2A2E3A] to-black/10" />
      
      <img 
        src="https://api.builder.io/api/v1/image/assets/TEMP/ef48136df71091c7ca942fe9a330ad962af19f59?width=1124" 
        alt="Background pattern" 
        className="absolute right-0 top-0 h-full w-auto object-contain opacity-30"
      />

      <div className="relative h-full max-w-[1280px] mx-auto px-4 md:px-8 flex items-center justify-center">
        <div className="text-center md:text-left">
          <p className="text-white font-inter text-lg md:text-xl mb-2 uppercase tracking-wider">
            РЕАЛИЗОВАЛИ
          </p>
          <div className="flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-8">
            <div className="text-white font-bebas text-7xl md:text-[90px] leading-none">
              10
            </div>
            <div className="text-white font-bebas text-3xl md:text-4xl leading-tight uppercase">
              <p>более</p>
              <p>индивидуальных</p>
              <p>проектов</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
