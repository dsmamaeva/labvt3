import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    question: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="relative w-full min-h-[375px] py-12 md:py-16 overflow-hidden bg-[#2A2E3A]">
      <div className="absolute inset-0 bg-black opacity-80" />
      
      <img 
        src="https://api.builder.io/api/v1/image/assets/TEMP/414ff3d34af8301146a5623062c7936af058d34f?width=2550" 
        alt="Background texture" 
        className="absolute inset-0 w-full h-full object-cover mix-blend-luminosity opacity-20"
      />
      
      <div className="absolute inset-0 bg-gradient-to-b from-black/90 to-transparent h-1/3" />

      <div className="relative max-w-[1280px] mx-auto px-4 md:px-8">
        <h2 className="text-white font-bebas text-3xl md:text-4xl text-center mb-4 uppercase tracking-wide">
          Остались вопросы?
        </h2>
        <p className="text-white font-bebas text-sm md:text-[15px] text-center max-w-2xl mx-auto mb-8 uppercase leading-relaxed">
          Вы можете быстро получить консультацию. Для этого напишите на почту Lvt@gmail.com или свяжитесь через форму обратной связи
        </p>

        <form onSubmit={handleSubmit} className="max-w-3xl mx-auto">
          <div className="bg-black border border-black rounded-lg p-4 md:p-6 shadow-[4px_4px_10px_5px_rgba(255,255,255,0.25)]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="text-white font-bebas text-sm md:text-[15px] mb-2 block uppercase">
                  имя *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full h-[30px] rounded-[15px] border border-[#2A2E3A] bg-white/5 backdrop-blur-sm px-4 text-white font-bebas text-sm focus:outline-none focus:ring-2 focus:ring-white/20"
                  style={{
                    boxShadow: "0 4px 4px 0 rgba(0, 0, 0, 0.25), 42.667px -42.667px 42.667px 0 rgba(165, 165, 165, 0.07) inset, -42.667px 42.667px 42.667px 0 rgba(255, 255, 255, 0.07) inset",
                  }}
                />
              </div>
              <div>
                <label className="text-white font-bebas text-sm md:text-[15px] mb-2 block uppercase">
                  Номер телефона *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full h-[30px] rounded-[15px] border border-[#2A2E3A] bg-white/5 backdrop-blur-sm px-4 text-white font-bebas text-sm focus:outline-none focus:ring-2 focus:ring-white/20"
                  style={{
                    boxShadow: "0 4px 4px 0 rgba(0, 0, 0, 0.25), 42.667px -42.667px 42.667px 0 rgba(165, 165, 165, 0.07) inset, -42.667px 42.667px 42.667px 0 rgba(255, 255, 255, 0.07) inset",
                  }}
                />
              </div>
            </div>
            <div>
              <label className="text-white font-bebas text-sm md:text-[15px] mb-2 block uppercase">
                Ваш вопрос*
              </label>
              <textarea
                name="question"
                value={formData.question}
                onChange={handleChange}
                required
                rows={3}
                className="w-full rounded-[15px] border border-[#2A2E3A] bg-white/5 backdrop-blur-sm px-4 py-2 text-white font-bebas text-sm focus:outline-none focus:ring-2 focus:ring-white/20 resize-none"
                style={{
                  boxShadow: "0 4px 4px 0 rgba(0, 0, 0, 0.25), 42.667px -42.667px 42.667px 0 rgba(165, 165, 165, 0.07) inset, -42.667px 42.667px 42.667px 0 rgba(255, 255, 255, 0.07) inset",
                }}
              />
            </div>
          </div>
          
          <div className="flex justify-center mt-6">
            <button
              type="submit"
              className="bg-[#2A2E3A] text-white font-bebas text-sm md:text-[15px] px-12 py-3 rounded-[30px] hover:bg-opacity-80 transition-all uppercase tracking-wide"
            >
              Задать вопрос
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
