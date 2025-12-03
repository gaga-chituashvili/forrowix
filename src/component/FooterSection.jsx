import React from "react";
import Marquee from "react-fast-marquee";
import { ArrowUpRight } from "lucide-react";
import {
  Instagram,
  Twitter,
  Dribbble,
  Copyright,
  CircleDot,
} from "lucide-react";
import { UilBehance } from "@iconscout/react-unicons";

const FooterSection = () => {
  return (
    <footer className="bg-black w-full pt-20 pb-20">
      {/* MARQUEE BAR */}
      <div className="flex items-center h-16 bg-[#1A1A1A] border border-[#1f1f1f] px-6 py-3 rounded-xl text-[13px] uppercase tracking-[0.25em] mb-10">
        <Marquee
          gradient={false}
          speed={40}
          pauseOnHover={false}
          className="flex items-center gap-6 text-gray-300"
        >
          <span className="text-[#676665]">ON SOCIAL MEDIA</span>
          <CircleDot size={10} className="mx-6 text-[#CE7D63]" />

          <span className="text-[#676665]">ON SOCIAL MEDIA</span>
          <CircleDot size={10} className="mx-6 text-[#CE7D63]" />

          <span className="text-[#676665]">ON SOCIAL MEDIA</span>
          <CircleDot size={10} className="mx-6 text-[#CE7D63]" />

          <span className="text-[#676665]">ON SOCIAL MEDIA</span>
          <CircleDot size={10} className="mx-6 text-[#CE7D63]" />

          <span className="text-[#676665]">ON SOCIAL MEDIA</span>
          <CircleDot size={10} className="mx-6 text-[#CE7D63]" />
          <span className="text-[#676665]">ON SOCIAL MEDIA</span>
          <CircleDot size={10} className="mx-6 text-[#CE7D63]" />

          <span className="text-[#676665]">ON SOCIAL MEDIA</span>
          <CircleDot size={10} className="mx-6 text-[#CE7D63]" />

          <span className="text-[#676665]">ON SOCIAL MEDIA</span>
          <CircleDot size={10} className="mx-6 text-[#CE7D63]" />
        </Marquee>
      </div>

      {/* MAIN GRID*/}
      <div className="flex flex-col lg:flex-row gap-10 lg:gap-x-20">
        {/* LEFT — SOCIAL CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full max-w-[780px]">
          {/* INSTAGRAM */}
          <div className="bg-[#111111] border border-[#1f1f1f] rounded-2xl px-6 py-6 md:px-7 md:py-8">
            <div className="flex justify-between items-center mb-6">
              <Instagram className="text-[#e59874]" size={32} />
              <span className="w-10 h-10 border border-[#272727] rounded-full flex items-center justify-center">
                <ArrowUpRight size={18} className="text-[#e59874]" />
              </span>
            </div>
            <h3 className="text-white font-semibold tracking-wide text-xl mb-2">
              INSTAGRAM
            </h3>
            <p className="text-[#b3b3b3] text-sm leading-relaxed">
              Share visually appealing snippets of our latest web projects.
            </p>
          </div>

          {/* TWITTER */}
          <div className="bg-[#111111] border border-[#1f1f1f] rounded-2xl px-6 py-6 md:px-7 md:py-8">
            <div className="flex justify-between items-center mb-6">
              <Twitter className="text-[#e59874]" size={32} />
              <span className="w-10 h-10 border border-[#272727] rounded-full flex items-center justify-center">
                <ArrowUpRight size={18} className="text-[#e59874]" />
              </span>
            </div>
            <h3 className="text-white font-semibold tracking-wide text-xl mb-2">
              TWITTER
            </h3>
            <p className="text-[#b3b3b3] text-sm leading-relaxed">
              Tweet about interesting coding challenges you've overcome.
            </p>
          </div>

          {/* DRIBBBLE */}
          <div className="bg-[#111111] border border-[#1f1f1f] rounded-2xl px-6 py-6 md:px-7 md:py-8">
            <div className="flex justify-between items-center mb-6">
              <Dribbble className="text-[#e59874]" size={32} />
              <span className="w-10 h-10 border border-[#272727] rounded-full flex items-center justify-center">
                <ArrowUpRight size={18} className="text-[#e59874]" />
              </span>
            </div>
            <h3 className="text-white font-semibold tracking-wide text-xl mb-2">
              DRIBBBLE
            </h3>
            <p className="text-[#b3b3b3] text-sm leading-relaxed">
              Showcase design elements of our web projects.
            </p>
          </div>

          {/* BEHANCE */}
          <div className="bg-[#111111] border border-[#1f1f1f] rounded-2xl px-6 py-6 md:px-7 md:py-8">
            <div className="flex justify-between items-center mb-6">
              <UilBehance size={32} className="text-[#e59874]" />{" "}
              <span className="w-10 h-10 border border-[#272727] rounded-full flex items-center justify-center">
                <ArrowUpRight size={18} className="text-[#e59874]" />
              </span>
            </div>
            <h3 className="text-white font-semibold tracking-wide text-xl mb-2">
              BEHANCE
            </h3>
            <p className="text-[#b3b3b3] text-sm leading-relaxed">
              Create detailed presentations for our projects.
            </p>
          </div>
        </div>

        {/* RIGHT — NAVIGATION */}
        <div className="flex flex-col gap-8 lg:col-span-4">
          <div className="flex justify-between">
            {/* Home */}
            <div>
              <h4 className="text-white font-semibold mb-4 text-lg">Home</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>Why Us</li>
                <li>About Us</li>
                <li>Testimonials</li>
                <li>FAQ’s</li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-white font-semibold mb-4 text-lg">
                Services
              </h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>Web Development</li>
                <li>App Development</li>
                <li>Web Design</li>
                <li>Digital Marketing</li>
              </ul>
            </div>

            {/* Projects */}
            <div>
              <h4 className="text-white font-semibold mb-4 text-lg">
                Projects
              </h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>Klothink</li>
                <li>Zenith</li>
                <li>Novus</li>
                <li>Apex</li>
              </ul>
            </div>

            {/* Blogs */}
            <div>
              <h4 className="text-white font-semibold mb-4 text-lg">Blogs</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>Business</li>
                <li className="flex items-center gap-2">
                  Design{" "}
                  <span className="text-xs bg-[#333] px-2 py-[2px] rounded-lg">
                    Soon
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  Development{" "}
                  <span className="text-xs bg-[#333] px-2 py-[2px] rounded-lg">
                    Soon
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* NEWSLETTER + BOTTOM */}
          <div className="flex flex-col">
            {/* NEWSLETTER */}
            <div className="bg-[#111111] border border-[#1f1f1f] rounded-2xl p-10 mb-10 w-full">
              <h3 className="text-[#e1e1e1] text-xs uppercase tracking-wide mb-3">
                Newsletter
              </h3>

              <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                <h2 className="text-xl md:text-2xl text-white font-semibold">
                  SUBSCRIBE TO OUR NEWSLETTER
                </h2>

                <div className="flex items-center bg-black border border-[#1f1f1f] rounded-xl px-4 py-3 w-full md:w-80">
                  <input
                    type="text"
                    placeholder="Enter your email"
                    className="bg-transparent text-gray-300 text-sm flex-1 outline-none"
                  />
                  <ArrowUpRight className="text-[#e59874]" />
                </div>
              </div>
            </div>

            {/* FOOTER BOTTOM*/}
            <div
              className="flex flex-col md:flex-row justify-between items-start md:items-center 
                      text-gray-500 text-sm pt-6 border-t border-[#1a1a1a]"
            >
              {/* RIGHT ON MOBILE, RIGHT ON DESKTOP */}
              <div className="order-1 md:order-2 flex gap-6">
                <span>Terms & Conditions</span>
                <span>Privacy Policy</span>
              </div>

              {/* LEFT ON MOBILE, LEFT ON DESKTOP */}
              <div className="flex items-center gap-2">
                <Copyright size={16} className="text-gray-400" />
                <span>2024 NextGen. All rights reserved.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
