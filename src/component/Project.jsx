import coverimg from "../component/images/coverimg.jpg";
import { ArrowRight, ArrowUpRight } from "lucide-react";
const Project = () => {
  return (
    <div className="min-h-screen bg-[#060606] text-white font-sans px-4 lg:px-10 py-6">
      {/* NAVBAR */}
      <header className="flex items-center justify-between mb-10">
        <span className="text-2xl tracking-widest font-light cursor-pointer">
          NexGen
        </span>

        <nav className="hidden md:flex items-center gap-6 text-sm tracking-wider uppercase">
          <button className="px-4 py-2 rounded-xl bg-[#0F0F0F] border border-[#1a1a1a] text-[#f3ede6] shadow-[0_0_20px_rgba(0,0,0,0.3)]">
            Home
          </button>
          <span className="hover:text-[#f59a71] cursor-pointer">Services</span>
          <span className="hover:text-[#f59a71] cursor-pointer">Projects</span>
          <span className="hover:text-[#f59a71] cursor-pointer">About</span>
          <span className="hover:text-[#f59a71] cursor-pointer">Careers</span>
          <span className="hover:text-[#f59a71] cursor-pointer">Blogs</span>

          <button className="ml-4 px-5 py-2 rounded-xl bg-[#e59874] hover:bg-[#e58c63] text-black font-semibold tracking-widest">
            CONTACT&nbsp; US
          </button>
        </nav>
      </header>

      {/* MAIN GRID */}
      <div className="grid lg:grid-cols-[2.2fr,1.4fr] gap-8">
        {/* LEFT HERO BLOCK */}
        <div className="bg-[#0d0d0d] rounded-3xl p-10 border border-[#1d1d1d] shadow-lg">
          <h1 className="text-5xl xl:text-6xl font-extrabold leading-tight tracking-tight">
            DIGITAL SOLUTIONS
            <br />
            THAT DRIVE SUCCESS
          </h1>

          <div className="flex items-center gap-4 mt-6">
            <button className="w-12 h-12 rounded-full border border-[#f59a71] flex items-center justify-center">
              <ArrowRight className="text-[#f59a71]" size={22} />
            </button>

            <span className="text-sm tracking-[0.25em] uppercase text-[#f59a71]">
              Start a project
            </span>
          </div>

          <p className="mt-6 text-[#676665] max-w-xl">
            At NexGen, we believe in the transformative power of digital
            solutions. Our team of experts is dedicated to helping businesses
            like yours thrive in the fast-paced digital landscape.
          </p>

          {/* Services Strip */}
          <div className="mt-6 text-[#676665] bg-[#101010] border border-[#1f1f1f] rounded-xl px-4 py-3 text-[12px] tracking-widest flex flex-wrap gap-3">
            • MARKETING • WEBSITE DESIGN • BRANDING • WEBSITE DEVELOPMENT •
            MOBILE APP DEVELOPMENT • DIGITAL STRATEGY
          </div>
        </div>

        {/* RIGHT HERO IMAGE */}
        <div className="bg-[#0d0d0d] rounded-3xl p-5 border border-[#1d1d1d] shadow-lg relative">
          <img
            src={coverimg}
            alt="project"
            className="rounded-2xl w-full h-[380px] object-cover"
          />

          <button className="absolute top-5 right-5 w-16 h-16 rounded-full bg-[#f59a71] shadow-lg border-4 border-[#060606] flex items-center justify-center">
            <span className="text-2xl text-black">↗</span>
          </button>

          <div className="mt-4">
            <h3 className="text-lg font-semibold tracking-wide">
              ESTATEIN REAL ESTATE
            </h3>
            <p className="text-sm text-gray-400">Web Development.</p>
          </div>
        </div>
      </div>

      {/* STATS SECTION */}
      <div className="flex justify-between gap-4  mt-10">
        {/* STAT CARD */}
        <div className="w-[280px] bg-[#0d0d0d] rounded-3xl px-6 py-6 border border-[#1f1f1f]">
          <p className="text-xs text-gray-400 tracking-widest">Clients</p>
          <h2 className="text-3xl font-bold mt-3 text-[#e59874]">200+</h2>
        </div>

        <div className="w-[280px] bg-[#0d0d0d] rounded-3xl px-6 py-6 border border-[#1f1f1f]">
          <p className="text-xs text-gray-400 tracking-widest">Projects</p>
          <h2 className="text-3xl font-bold mt-3 text-[#e59874]">280+</h2>
        </div>

        <div className="w-[280px] bg-[#0d0d0d] rounded-3xl px-6 py-6 border border-[#1f1f1f]">
          <p className="text-xs text-gray-400 tracking-widest">Happy Clients</p>
          <h2 className="text-3xl font-bold mt-3 text-[#e59874]">100%</h2>
        </div>

        <div className="w-[280px] bg-[#0d0d0d] rounded-3xl px-6 py-6 border border-[#1f1f1f]">
          <p className="text-xs text-gray-400 tracking-widest">Follower</p>
          <h2 className="text-3xl font-bold mt-3 text-[#e59874]">420K</h2>
        </div>

        <div className="w-[280px] bg-[#0d0d0d] rounded-3xl px-6 py-6 border border-[#1f1f1f] relative">
          <p className="text-xs text-gray-400 tracking-widest">
            Years Of Experience
          </p>
          <h2 className="text-3xl font-bold mt-3 text-[#e59874]">10+</h2>
        </div>
        <div className="w-[280px] flex items-center gap-2 bg-[#0d0d0d] rounded-3xl px-6 py-6 border border-[#1f1f1f] ">
          <button className="bottom-4 right-4 w-12 h-12 rounded-2xl bg-[#0a0a0a] border border-[#2a2a2a] flex items-center justify-center">
            <ArrowUpRight size={22} className="text-white" />
          </button>
          <p className="text-xl text-[#e59874] mt-2 tracking-widest">
            Know more
          </p>
        </div>
      </div>
    </div>
  );
};

export default Project;
