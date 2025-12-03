import React from "react";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import member1 from "./images/member1.png";

const TestimonialsSection = () => {
  const testimonials = [
    {
      title: "NEXGEN TURNED OUR BUSINESS AROUND!",
      text: "Their digital marketing strategies helped us reach new customers and increase our revenue by 30% within just a few months. Highly recommended!",
      name: "Sarah Thompson",
      role: "CEO of BlueBloom",
    },
    {
      title: "NEXGEN TURNED OUR BUSINESS AROUND!",
      text: "Their digital marketing strategies helped us reach new customers and increase our revenue by 30% within just a few months. Highly recommended!",
      name: "Wade Warren",
      role: "Art Director",
    },
    {
      title: "WORKING WITH NEXGEN WAS A PLEASURE.",
      text: "Their web design team created a stunning website that perfectly captured our brand's essence. The feedback from our customers has been overwhelmingly positive.",
      name: "Lisa Williams",
      role: "CEO Of HealthTech",
    },
    {
      title: "NEXGEN'S WEB DESIGN TEAM BROUGHT OUR VISION TO LIFE.",
      text: "Their responsive design ensures our website looks stunning on all devices, contributing to increased user engagement.",
      name: "Jennifer Lee",
      role: "COO of Foodie Haven",
    },
  ];

  return (
    <section className="pt-20 w-full bg-black">
      {/* TOP BAR */}
      <div className="flex items-center justify-between bg-[#0d0d0d] border border-[#1f1f1f] rounded-3xl px-10 py-8 mb-8">
        <h2 className="text-3xl md:text-4xl text-[#F9EFEC] font-bold tracking-tight">
          TESTIMONIALS
        </h2>

        <button className="flex items-center gap-3 text-xs md:text-sm uppercase tracking-[0.25em] text-gray-300">
          <span className="w-12 h-12 rounded-full border border-[#262626] flex items-center justify-center">
            <ArrowUpRight size={20} />
          </span>
          ALL TESTIMONIALS
        </button>
      </div>

      {/* CARD LIST */}
      <div className="bg-black border border-[#1f1f1f] rounded-3xl px-6 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pb-2">
          {testimonials.map((t, index) => (
            <article
              key={index}
              className="
          w-full
          max-w-[430px]
          flex flex-col
          h-full
          bg-[#111111]
          border border-[#1f1f1f]
          rounded-[26px]
          overflow-hidden
        "
            >
              {/* CONTENT */}
              <div className="flex flex-col px-8 pt-8 pb-6 h-full">
                <h3 className="text-xl font-semibold text-[#F9EFEC] tracking-wide mb-4">
                  {t.title}
                </h3>

                <p className="text-[15px] leading-relaxed text-[#B3B3B2]">
                  {t.text}
                </p>

                <div className="mt-auto" />
              </div>

              {/* BOTTOM BAR */}
              <div className="bg-[#0b0b0b] px-8 py-5 flex items-center justify-between border-t border-[#1f1f1f]">
                <div className="flex items-center gap-3">
                  <img
                    src={member1}
                    alt="member1"
                    className="w-10 h-10 rounded-full border border-[#2a2a2a]"
                  />
                  <div>
                    <p className="text-sm font-semibold text-[#F9EFEC]">
                      {t.name}
                    </p>
                    <p className="text-xs text-gray-400">{t.role}</p>
                  </div>
                </div>

                <button className="w-11 h-11 rounded-full border border-[#262626] flex items-center justify-center hover:bg-[#191919] transition">
                  <ArrowRight size={18} className="text-[#e59874]" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
