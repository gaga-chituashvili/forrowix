import { ArrowUpRight } from "lucide-react";
import workimg1 from "./images/workimg1.png";
import workimg2 from "./images/workimg2.png";
import member1 from "./images/member1.png";

const WorksSection = () => {
  const works = [
    {
      title: "ZENITH FITNESS APP",
      category: "Mobile App Development",
      time: "6 months",
      desc: "An all-in-one health and wellness app that offers personalized fitness plans, nutrition guidance, and virtual workout classes.",
      image: workimg1,
      techs: ["React Native", "Firebase", "Redux", "REST API", "MongoDB"],
      members: [member1, member1, member1, member1, member1],
    },
    {
      title: "A-AURA ECOMMERCE",
      category: "Web Design & Development",
      time: "3 months",
      desc: "A complete overhaul of a corporate website to enhance its brand identity and user experience.",
      image: workimg2,
      techs: ["WordPress", "PHP", "HTML5", "CSS3", "JavaScript"],
      members: [member1, member1, member1, member1, member1],
    },
  ];

  return (
    <section className="pt-20 w-full bg-black">
      {/* SECTION TITLE */}
      <div className="flex items-center justify-between bg-[#0d0d0d] border border-[#1f1f1f] rounded-3xl px-10 py-8 mb-10">
        <h2 className="text-3xl text-[#F9EFEC] font-bold tracking-tight">
          OUR WORKS
        </h2>

        <button className="flex items-center gap-3 text-sm uppercase tracking-[0.25em] text-gray-300">
          <span className="w-10 h-10 rounded-full border border-[#2a2a2a] flex items-center justify-center">
            <ArrowUpRight size={18} />
          </span>
          ALL WORKS
        </button>
      </div>

      {/* WORK BLOCKS */}
      <div className="flex flex-col gap-10">
        {works.map((w, index) => (
          <div
            key={w.title}
            className="bg-black border border-[#1f1f1f] rounded-3xl p-6 flex flex-col lg:flex-row gap-6 shadow-[0_0_25px_rgba(0,0,0,0.35)]"
          >
            {/* LEFT INFO BLOCK */}
            <div className="flex flex-col justify-between w-full lg:w-[32%] bg-[#1A1A1A] border border-[#1f1f1f] rounded-2xl p-6">
              {/* Title Row */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-[#e59874]/15 flex items-center justify-center">
                    <span className="text-[#e59874]">★</span>
                  </div>

                  <h3 className="text-lg font-semibold tracking-wide text-[#F9EFEC]">
                    {w.title}
                  </h3>
                </div>

                {/* DETAILS */}
                <button className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-gray-300">
                  <span className="w-8 h-8 rounded-full border border-[#2a2a2a] flex items-center justify-center">
                    <ArrowUpRight size={16} />
                  </span>
                  DETAILS
                </button>
              </div>

              {/* Tags */}
              <div className="mt-6 flex flex-col gap-3 text-sm">
                <p className="px-3 py-1 bg-[#181818] rounded-full inline-block text-gray-200 text-xs">
                  Category • {w.category}
                </p>
                <p className="px-3 py-1 bg-[#181818] rounded-full inline-block text-gray-200 text-xs">
                  Time Taken • {w.time}
                </p>
              </div>

              {/* Description */}
              <p className="text-sm text-[#B3B3B2] leading-relaxed mt-6">
                {w.desc}
              </p>
            </div>

            {/* CENTER IMAGE BLOCK */}
            <div className="w-full lg:w-[40%] rounded-2xl overflow-hidden border border-[#1f1f1f]">
              <img
                src={w.image}
                alt={w.title}
                className="w-full h-[300px] lg:h-[330px] object-cover"
              />
            </div>

            {/* RIGHT TECH + TEAM + BUTTON */}
            <div className="flex flex-col justify-between w-full lg:w-[28%] bg-[#1A1A1A] border border-[#1f1f1f] rounded-2xl p-6">
              {/* Technologies */}
              <div>
                <p className="text-xs tracking-[0.25em] uppercase text-gray-400 mb-3">
                  TECHNOLOGIES USED
                </p>

                <div className="flex flex-wrap gap-2">
                  {w.techs.map((tech) => (
                    <span
                      key={`${w.title}-${tech}`}
                      className="px-3 py-1 bg-[#181818] rounded-full text-xs text-gray-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Team */}
              <div>
                <p className="text-xs tracking-[0.25em] uppercase text-gray-400 mb-3 mt-6">
                  TEAM MEMBERS
                </p>

                <div className="flex -space-x-3 mb-6">
                  {w.members.map((m, i) => (
                    <img
                      key={`${w.title}-member-${i}`}
                      src={m}
                      alt="Team member"
                      className="w-10 h-10 rounded-full border-2 border-white object-cover"
                    />
                  ))}
                </div>

                <button className="w-full py-3 rounded-2xl bg-[#e59874] hover:bg-[#e58d63] text-black text-xs font-semibold tracking-[0.25em] uppercase">
                  Book a call
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorksSection;
