import { useState } from "react";
import { ArrowUpRight, Plus, Minus } from "lucide-react";

const FAQSection = () => {
  const faqs = [
    {
      q: "How long does it take to complete a web development project?",
      a: "The timeline varies depending on the project's complexity and requirements. Our team strives to deliver projects on time while maintaining the highest quality standards.",
    },
    {
      q: "Can you handle large-scale mobile app development projects?",
      a: "The timeline varies depending on the project's complexity and requirements. Our team strives to deliver projects on time while maintaining the highest quality standards.",
    },
    {
      q: "Can you integrate third-party APIs into our mobile app?",
      a: "The timeline varies depending on the project's complexity and requirements. Our team strives to deliver projects on time while maintaining the highest quality standards.",
    },
    {
      q: "How do you ensure cross-platform compatibility for mobile apps?",
      a: "The timeline varies depending on the project's complexity and requirements. Our team strives to deliver projects on time while maintaining the highest quality standards.",
    },
    {
      q: "What is your approach to user experience (UX) design?",
      a: "The timeline varies depending on the project's complexity and requirements. Our team strives to deliver projects on time while maintaining the highest quality standards.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="pt-20 pb-20 bg-black w-full">
      {/* TOP BAR */}
      <div className="flex items-center justify-between bg-[#0d0d0d] border border-[#1f1f1f] rounded-3xl px-10 py-8 mb-10">
        <h2 className="text-3xl md:text-4xl text-[#F9EFEC] font-bold tracking-tight">
          FREQUENTLY ASKED QUESTIONS
        </h2>

        <button className="flex items-center gap-3 text-xs md:text-sm uppercase tracking-[0.25em] text-gray-300">
          <span className="w-12 h-12 rounded-full border border-[#262626] flex items-center justify-center">
            <ArrowUpRight size={20} />
          </span>
          VIEW ALL
        </button>
      </div>

      {/* MAIN CONTENT (2 COLUMNS) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* LEFT - FAQ ACCORDION */}
        <div className="flex flex-col gap-4">
          {faqs.map((item, index) => (
            <div
              key={index}
              className="bg-[#111111] border border-[#1f1f1f] rounded-3xl px-8 py-6"
            >
              {/* QUESTION ROW */}
              <div
                className="flex items-center justify-between cursor-pointer"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <h3 className="text-md md:text-lg text-[#F9EFEC]">{item.q}</h3>

                {/* ICON */}
                <span className="w-9 h-9 rounded-full border border-[#222] flex items-center justify-center text-gray-300">
                  {openIndex === index ? (
                    <Minus size={18} />
                  ) : (
                    <Plus size={18} />
                  )}
                </span>
              </div>

              {/* ANSWER */}
              {openIndex === index && (
                <p className="text-[#B3B3B2] text-sm leading-relaxed mt-4 border-t border-[#1f1f1f] pt-4">
                  {item.a}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* RIGHT - FORM */}
        <div className="bg-[#111111] border border-[#1f1f1f] rounded-3xl p-10">
          <h3 className="text-lg tracking-[0.2em] uppercase text-[#F9EFEC] mb-6">
            ASK YOUR QUESTION
          </h3>

          {/* NAME */}
          <p className="text-sm text-gray-300 uppercase tracking-wide mt-2 mb-1">
            NAME
          </p>
          <input
            type="text"
            placeholder="Enter your name"
            className="w-full bg-black border border-[#1f1f1f] rounded-xl px-4 py-3 text-gray-200 mb-4"
          />

          {/* EMAIL */}
          <p className="text-sm text-gray-300 uppercase tracking-wide mb-1">
            EMAIL
          </p>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full bg-black border border-[#1f1f1f] rounded-xl px-4 py-3 text-gray-200 mb-4"
          />

          {/* QUESTION */}
          <p className="text-sm text-gray-300 uppercase tracking-wide mb-1">
            YOUR QUESTION
          </p>
          <textarea
            placeholder="Enter Your Question Here ....."
            className="w-full bg-black border border-[#1f1f1f] rounded-xl px-4 py-3 text-gray-200 h-32 mb-6"
          />

          {/* BUTTON */}
          <button className="w-full py-3 rounded-xl bg-[#e59874] hover:bg-[#e58d63] text-black text-sm tracking-[0.2em] font-semibold uppercase">
            SEND YOUR MESSAGE
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
