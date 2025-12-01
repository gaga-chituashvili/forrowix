import {
  ArrowUpRight,
  Palette,
  Smartphone,
  Code2,
  BarChart3,
} from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: <Palette size={22} className="text-[#e59874]" />,
      title: "WEB DESIGN",
      desc: "Our Web Design service is all about creating visually stunning and user-friendly websites that leave a lasting impression.",
      price: "STARTS FROM $1,500",
    },
    {
      icon: <Smartphone size={22} className="text-[#e59874]" />,
      title: "MOBILE APP DEVELOPMENT",
      desc: "With our Mobile App Development service, we harness the power of mobile technology to create cutting-edge applications.",
      price: "STARTS FROM $2,500",
    },
    {
      icon: <Code2 size={22} className="text-[#e59874]" />,
      title: "WEB DEVELOPMENT",
      desc: "Our Web Development service is focused on turning your website into a powerful digital asset using the latest technologies.",
      price: "STARTS FROM $1,800",
    },
    {
      icon: <BarChart3 size={22} className="text-[#e59874]" />,
      title: "DIGITAL MARKETING",
      desc: "In the digital age, marketing is a critical aspect of your business’s success. Our Digital Marketing service enhances your brand visibility.",
      price: "STARTS FROM $1,200",
    },
  ];

  return (
    <section className=" w-full bg-black p-3">
      {/* SECTION HEADER */}
      <div className="bg-[#1A1A1A] border border-[#1f1f1f] rounded-3xl px-10 py-8 mb-10">
        <h2 className="text-3xl font-bold tracking-tight text-white">
          OUR SERVICES
        </h2>
      </div>

      {/* SERVICES 2 ROW — 4 BLOCKS — FLEX VERSION */}
      <div className="flex flex-col gap-6 bg-black">
        {/* FIRST ROW */}
        <div className="flex flex-col lg:flex-row gap-6">
          {/** Card 1 */}
          <div className="flex flex-col justify-between bg-[#1A1A1A] border border-[#1f1f1f] rounded-3xl p-8 flex-1">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-[#e59874]/10 flex items-center justify-center">
                  {services[0].icon}
                </div>
                <h3 className="text-lg font-semibold text-[#F9EFEC] tracking-wide">
                  {services[0].title}
                </h3>
              </div>

              <button className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-gray-300">
                <span className="w-8 h-8 rounded-full border border-[#2a2a2a] flex items-center justify-center">
                  <ArrowUpRight size={16} />
                </span>
                BOOK A CALL
              </button>
            </div>

            <p className="text-sm text-gray-300 mt-6">{services[0].desc}</p>
            <p className="text-sm text-[#F9EFEC] font-semibold text-center tracking-[0.25em] uppercase mt-10">
              {services[0].price}
            </p>
          </div>

          {/** Card 2 */}
          <div className="flex flex-col justify-between bg-[#1A1A1A] border border-[#1f1f1f] rounded-3xl p-8 flex-1">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-[#e59874]/10 flex items-center justify-center">
                  {services[1].icon}
                </div>
                <h3 className="text-lg font-semibold text-[#F9EFEC] tracking-wide">
                  {services[1].title}
                </h3>
              </div>

              <button className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-gray-300">
                <span className="w-8 h-8 rounded-full border border-[#2a2a2a] flex items-center justify-center">
                  <ArrowUpRight size={16} />
                </span>
                BOOK A CALL
              </button>
            </div>

            <p className="text-sm text-gray-300 mt-6">{services[1].desc}</p>
            <p className="text-sm text-[#F9EFEC] font-semibold text-center tracking-[0.25em] uppercase mt-10">
              {services[1].price}
            </p>
          </div>
        </div>

        {/* SECOND ROW */}
        <div className="flex flex-col lg:flex-row gap-6">
          {/** Card 3 */}
          <div className="flex flex-col justify-between bg-[#1A1A1A] border border-[#1f1f1f] rounded-3xl p-8 flex-1">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-[#B3B3B2]/10 flex items-center justify-center">
                  {services[2].icon}
                </div>
                <h3 className="text-lg  text-[#F9EFEC] font-semibold tracking-wide">
                  {services[2].title}
                </h3>
              </div>

              <button className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-gray-300">
                <span className="w-8 h-8 rounded-full border border-[#2a2a2a] flex items-center justify-center">
                  <ArrowUpRight size={16} />
                </span>
                BOOK A CALL
              </button>
            </div>

            <p className="text-sm text-gray-300 mt-6">{services[2].desc}</p>
            <p className="text-sm text-[#F9EFEC] font-semibold text-center tracking-[0.25em] uppercase mt-10">
              {services[2].price}
            </p>
          </div>

          {/** Card 4 */}
          <div className="flex flex-col justify-between bg-[#1A1A1A] border border-[#1f1f1f] rounded-3xl p-8 flex-1">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-[#e59874]/10 flex items-center justify-center">
                  {services[3].icon}
                </div>
                <h3 className="text-lg text-[#F9EFEC] font-semibold tracking-wide">
                  {services[3].title}
                </h3>
              </div>

              <button className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-gray-300">
                <span className="w-8 h-8 rounded-full border border-[#2a2a2a] flex items-center justify-center">
                  <ArrowUpRight size={16} />
                </span>
                BOOK A CALL
              </button>
            </div>

            <p className="text-sm text-gray-300 mt-6">{services[3].desc}</p>
            <p className="text-sm text-[#F9EFEC] font-semibold text-center tracking-[0.25em] uppercase mt-10">
              {services[3].price}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
