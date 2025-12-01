import { ArrowUpRight } from "lucide-react";

const ReasonsSection = () => {
  const items = [
    {
      title: "EXPERTISE IN CUTTING-EDGE TECHNOLOGIES",
      desc: "NexGen ensures your projects are powered by state-of-the-art technologies, guaranteeing innovation and future-proof solutions.",
    },
    {
      title: "PROVEN TRACK RECORD OF SUCCESS",
      desc: "NexGen demonstrates a consistent ability to meet and exceed client expectations, providing reliable and effective web solutions tailored to diverse needs.",
    },
    {
      title: "CLIENT-CENTRIC APPROACH",
      desc: "At NexGen, we prioritize understanding our clients' unique requirements, fostering transparent communication throughout the development process.",
    },
    {
      title: "DEDICATED TEAM OF PROFESSIONALS",
      desc: "Our professionals bring a wealth of expertise to the table, ensuring the delivery of top-notch, scalable, and secure web solutions for your business.",
    },
  ];

  return (
    <section className=" w-full bg-black pb-20">
      {/* Title Block */}
      <div className="bg-[#1A1A1A] border border-[#1f1f1f] rounded-3xl px-10 py-8 mb-10">
        <h2 className="text-3xl text-[#F9EFEC] font-bold tracking-tight">
          REASONS TO CHOOSE NEXGEN FOR YOUR DIGITAL JOURNEY
        </h2>
      </div>

      {/* 4 FLEX CARDS */}
      <div className="flex flex-col lg:flex-row gap-6">
        {items.map((item, i) => (
          <div
            key={i}
            className="flex flex-col justify-between bg-[#1A1A1A] border border-[#1f1f1f] rounded-3xl p-8 flex-1 shadow-[0_0_25px_rgba(0,0,0,0.35)]"
          >
            {/* Title */}
            <h3 className="text-xl text-[#F9EFEC] font-semibold tracking-wide leading-snug">
              {item.title}
            </h3>

            {/* Description */}
            <p className="text-sm text-[#B3B3B2] leading-relaxed mt-4">
              {item.desc}
            </p>

            {/* Learn More */}
            <button className="flex items-center gap-3 mt-8 text-gray-300 hover:text-white transition">
              <span className="w-12 h-12 rounded-full bg-[#0b0b0b] border border-[#2a2a2a] flex items-center justify-center">
                <ArrowUpRight size={20} className="text-[#e59874]" />
              </span>
              <span className="text-sm">Learn More</span>
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ReasonsSection;
