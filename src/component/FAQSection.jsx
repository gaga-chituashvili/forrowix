import React from "react";
import * as Accordion from "@radix-ui/react-accordion";
import { faqs } from "./data/faqData";
import { ArrowUpRight, Plus, Minus } from "lucide-react";

const FAQSection = () => {
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

      {/* MAIN GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* LEFT — ACCORDION */}
        <Accordion.Root
          type="single"
          collapsible
          defaultValue="0"
          className="flex flex-col gap-4"
        >
          {faqs.map((item, index) => (
            <Accordion.Item
              key={index}
              value={String(index)}
              className="bg-[#111111] border border-[#1f1f1f] rounded-3xl px-8 py-6"
            >
              <Accordion.Header>
                <Accordion.Trigger className="w-full flex items-center justify-between cursor-pointer">
                  <span className="text-md md:text-lg text-[#F9EFEC] text-left">
                    {item.q}
                  </span>

                  {/* ICON SWITCH */}
                  <span className="w-9 h-9 rounded-full border border-[#222] flex items-center justify-center text-gray-300 relative">
                    <Plus
                      size={18}
                      className="absolute data-[state=open]:hidden"
                    />
                    <Minus
                      size={18}
                      className="absolute hidden data-[state=open]:block"
                    />
                  </span>
                </Accordion.Trigger>
              </Accordion.Header>

              {/* CONTENT */}
              <Accordion.Content className="overflow-hidden data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp">
                <p className="text-[#B3B3B2] text-sm leading-relaxed mt-4 border-t border-[#1f1f1f] pt-4">
                  {item.a}
                </p>
              </Accordion.Content>
            </Accordion.Item>
          ))}
        </Accordion.Root>

        {/* RIGHT — FORM */}
        <div className="bg-[#111111] border border-[#1f1f1f] rounded-3xl p-10">
          <h3 className="text-lg tracking-[0.2em] uppercase text-[#F9EFEC] mb-6">
            ASK YOUR QUESTION
          </h3>

          {/* NAME */}
          <label
            htmlFor="faq-name"
            className="text-sm text-gray-300 uppercase tracking-wide mb-1"
          >
            NAME
          </label>
          <input
            id="faq-name"
            type="text"
            className="w-full bg-black border border-[#1f1f1f] rounded-xl px-4 py-3 text-gray-200 mb-4"
            placeholder="Enter your name"
          />

          {/* EMAIL */}
          <label
            htmlFor="faq-email"
            className="text-sm text-gray-300 uppercase tracking-wide mb-1"
          >
            EMAIL
          </label>
          <input
            id="faq-email"
            type="email"
            className="w-full bg-black border border-[#1f1f1f] rounded-xl px-4 py-3 text-gray-200 mb-4"
            placeholder="Enter your email"
          />

          {/* QUESTION */}
          <label
            htmlFor="faq-message"
            className="text-sm text-gray-300 uppercase tracking-wide mb-1"
          >
            YOUR QUESTION
          </label>
          <textarea
            id="faq-message"
            className="w-full bg-black border border-[#1f1f1f] rounded-xl px-4 py-3 text-gray-200 h-32 mb-6"
            placeholder="Enter Your Question Here ....."
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
