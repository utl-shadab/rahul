import card1 from "../assets/card1.svg";
import card2 from "../assets/card2.svg";
import purple from "../assets/purple.svg";
import gray from "../assets/gray.svg";

function Launch() {
  return (
    <section className="py-16 md:py-24 bg-[#FFF4FD] relative overflow-hidden">
      {/* Decorative Background Assets */}
      <img 
        src={purple} 
        className="absolute top-0 left-[-10%] w-[40%] opacity-40 pointer-events-none" 
        alt="" 
      />
      <img 
        src={gray} 
        className="absolute bottom-[-10%] right-[-5%] w-[30%] opacity-30 pointer-events-none rotate-12" 
        alt="" 
      />

      <div className="max-w-7xl mx-auto px-6 relative z-[2]">
        {/* Responsive Grid: 1 column on mobile, 2 on desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          
          {/* Left Card: Launching Info */}
          <div className="flex flex-col bg-[#7C5CFC] rounded-[40px] overflow-hidden shadow-2xl transform transition-all duration-500 hover:scale-[1.01]">
            <div className="pt-10 px-4 md:px-0">
              <img 
                src={card1} 
                alt="Launch Illustration" 
                className="w-full h-auto object-contain max-h-[300px]" 
              />
            </div>
            <div className="p-8 md:p-12 mt-auto">
              <h3 className="text-3xl md:text-4xl font-black text-white mb-4 leading-tight">
                Launching <br className="hidden md:block" /> April 2026
              </h3>
              <p className="text-white/90 text-lg mb-8 max-w-md font-medium leading-relaxed">
                We&apos;re building India&apos;s most trusted emotional support community. 
                Join early. Be part of something meaningful.
              </p>
              <a
                href="#"
                className="inline-block bg-white text-[#7C5CFC] font-bold px-8 py-4 rounded-2xl hover:bg-opacity-90 transition-all shadow-lg active:scale-95"
              >
                Join us on Instagram
              </a>
            </div>
          </div>

          {/* Right Card: Listener Call to Action */}
          <div className="flex flex-col bg-white rounded-[40px] p-8 md:p-12 shadow-xl border border-[#F3E8FF] transform transition-all duration-500 hover:scale-[1.01]">
            <div className="mb-8">
              <div className="w-40 h-40 md:w-56 md:h-56 mx-auto bg-[#FFF4FD] rounded-full overflow-hidden border-4 border-[#FDF2F8]">
                 <img
                  src={card2}
                  alt="Listener Avatar"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <div className="text-center lg:text-left">
              <h3 className="text-3xl md:text-4xl font-black text-pink mb-4 leading-tight  ">
                Are You a <br className="hidden md:block" /> Good Listener?
              </h3>
              <p className="text-gray-700 text-lg mb-8 leading-relaxed">
                Earn by helping people navigate relationships and life challenges.{" "}
                <span className="block mt-2 font-bold text-[#1B164C]">
                  Apply to become a Peacechat listener today.
                </span>
              </p>
              <a
                href="#"
                className="inline-block bg-[#7C5CFC] text-white font-bold px-8 py-4 rounded-2xl hover:bg-[#6b4ae0] transition-all shadow-lg shadow-[#7C5CFC]/30 active:scale-95"
              >
                DM us on Instagram
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Launch;