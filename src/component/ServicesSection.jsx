import React from "react";
import { services } from "./data/serviceData";
import { ArrowUpRight } from "lucide-react";

const ServicesSection = () => {
  return (
    <section className="w-full bg-black p-3">
      {/* SECTION HEADER */}
      <div className="bg-[#1A1A1A] border border-[#1f1f1f] rounded-3xl px-10 py-8 mb-10">
        <h2 className="text-3xl font-bold tracking-tight text-white">
          OUR SERVICES
        </h2>
      </div>

      {/* SERVICES */}
      <div className="flex flex-col gap-6 bg-black">
        {/* Loop გაწვდილი 2-როდ */}
        {[0, 2].map((start) => (
          <div key={start} className="flex flex-col lg:flex-row gap-6">
            {[services[start], services[start + 1]].map((item, index) => {
              const Icon = item.icon; // 🔥 აი აქ სწორად ვაგენერირებთ icon-ს

              return (
                <div
                  key={index}
                  className="flex flex-col justify-between bg-[#1A1A1A] border border-[#1f1f1f] rounded-3xl p-8 flex-1"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-2xl bg-[#e59874]/10 flex items-center justify-center">
                        <Icon size={22} className="text-[#e59874]" />
                      </div>
                      <h3 className="text-lg font-semibold text-[#F9EFEC] tracking-wide">
                        {item.title}
                      </h3>
                    </div>

                    <button className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-gray-300">
                      <span className="w-8 h-8 rounded-full border border-[#2a2a2a] flex items-center justify-center">
                        <ArrowUpRight size={16} />
                      </span>
                      BOOK A CALL
                    </button>
                  </div>

                  <p className="text-sm text-gray-300 mt-6">{item.desc}</p>

                  <p className="text-sm text-[#F9EFEC] font-semibold text-right tracking-[0.25em] uppercase mt-10">
                    {item.price}
                  </p>
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
