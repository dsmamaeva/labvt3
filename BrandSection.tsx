export default function BrandSection() {
  return (
    <section className="relative w-full h-[375px] overflow-hidden">
      <img 
        src="https://api.builder.io/api/v1/image/assets/TEMP/580ce9a931a37b723d9d8e68e62ae035d075198e?width=2560" 
        alt="Brand background" 
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#1F222B]/90 to-[#2A2E3A]" />
      <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#2A2E3A]/90" />
      
      <div className="relative h-full max-w-[1280px] mx-auto px-4 md:px-8 flex items-center">
        <div className="max-w-md">
          <p className="text-white font-scandilover text-3xl md:text-[35px] mb-2 leading-tight">за</p>
          <h2 className="text-white font-bebas text-3xl md:text-4xl leading-tight uppercase tracking-wide">
            Мы — развитие промышленности России
          </h2>
        </div>
      </div>
    </section>
  );
}
