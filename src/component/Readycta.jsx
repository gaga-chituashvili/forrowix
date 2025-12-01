import { ArrowUpRight } from "lucide-react";

const Readycta = () => {
  return (
    <section className="w-full bg-black py-10">
      <div className="bg-[#c4876d] rounded-3xl px-12 py-20 border border-[#b67863]/40 w-full">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10 w-full">
          {/* LEFT TEXT */}
          <div className="max-w-4xl">
            <h2 className="text-4xl md:text-5xl font-bold text-black tracking-tight">
              READY TO TRANSFORM YOUR DIGITAL PRESENCE?
            </h2>

            <p className="text-black/80 mt-5 text-base md:text-lg leading-relaxed max-w-2xl">
              Take the first step towards digital success with NexGen by your
              side. Our team of experts is eager to craft tailored solutions
              that drive growth for your business.
            </p>
          </div>

          {/* BUTTON */}
          <button
            className="bg-black text-white px-8 py-4 rounded-xl 
                             flex items-center gap-3 text-sm md:text-base 
                             hover:bg-[#111] transition tracking-wide"
          >
            GET IN TOUCH
            <ArrowUpRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Readycta;
