import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  HeartHandshake,
  Leaf,
  Lightbulb,
  Linkedin,
  Sparkles,
  Target,
  TrendingUp,
  Users,
} from "lucide-react";

import bindraHero from "@/assets/leadership/bindra-hero.png";
import ceoImg from "@/assets/ceo.png";
import leaderNeha from "@/assets/leadership/leader-neha.png";
import leaderRohit from "@/assets/leadership/leader-rohit.png";
import leaderPooja from "@/assets/leadership/leader-pooja.png";
import mountainFlag from "@/assets/ld.png";
import { SiteLayout } from "@/components/site/SiteLayout";

export const Route = createFileRoute("/leadership")({
  head: () => ({
    meta: [
      { title: "Leadership — Inspired Leadership for a Stronger Tomorrow | VEVRA" },
      {
        name: "description",
        content:
          "Meet the visionary leaders and mentors guiding VEVRA Packaging towards innovation, sustainable growth, and world-class packaging excellence.",
      },
      { property: "og:title", content: "VEVRA Leadership & Mentors" },
      {
        property: "og:description",
        content: "Visionary leaders. Stronger together. Building a brighter tomorrow in packaging.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: LeadershipPage,
});

const CEO_LEADER = {
  name: "Ashish Gawhane",
  role: "Chief Executive Officer (CEO)",
  bio: "Leads the strategic vision and overall growth of VEVRA Packaging, driving innovation, operational excellence and long-term value creation.",
  quote: "Packaging is not just about products, it's about enabling businesses to grow.",
  image: ceoImg,
  linkedin: "https://linkedin.com",
};

const EXECUTIVE_LEADERS = [
  {
    name: "Neha Kulkarni",
    role: "Chief Operating Officer (COO)",
    image: leaderNeha,
    linkedin: "https://linkedin.com",
  },
  {
    name: "Kunal Gawhane",
    role: "Chief Financial Officer (CFO)",
    image: leaderRohit,
    linkedin: "https://linkedin.com",
  },
  {
    name: "Pooja Deshmukh",
    role: "Chief Strategy Officer (CSO)",
    image: leaderPooja,
    linkedin: "https://linkedin.com",
  },
];

const VALUES = [
  {
    icon: HeartHandshake,
    title: "Integrity",
    desc: "We lead with honesty and accountability.",
  },
  {
    icon: Users,
    title: "Empowerment",
    desc: "We believe in people and their potential.",
  },
  {
    icon: Target,
    title: "Customer Focus",
    desc: "We create value for every customer.",
  },
  {
    icon: Leaf,
    title: "Sustainable Growth",
    desc: "We build for a better tomorrow.",
  },
];

function LeadershipPage() {
  return (
    <SiteLayout>
      {/* 1. Hero Section: Inspired Leadership */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#f2f6fb] via-[#f8faff] to-[#edf3fa] pt-10 pb-6 sm:pt-14 sm:pb-8 lg:pt-16 lg:pb-12 text-slate-900 border-b border-slate-200/70">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-8 lg:grid-cols-12 lg:gap-6 xl:gap-8">
            
            {/* Left Column (5 cols): Title, Subtitle & 4 Pillars */}
            <div className="lg:col-span-5 z-10">
              <div className="flex items-center gap-2">
                <span className="inline-block w-6 h-0.5 bg-[#D9232A]" />
                <span className="text-[11px] sm:text-xs font-black uppercase tracking-[0.26em] text-[#D9232A]">
                  OUR LEADERSHIP
                </span>
              </div>

              <h1 className="mt-3.5 text-3xl sm:text-4xl lg:text-[2.85rem] xl:text-[3.35rem] font-black tracking-tight text-slate-950 leading-[1.12]">
                Inspired Leadership
                <br />
                for a <span className="text-[#D9232A]">Stronger Tomorrow.</span>
              </h1>

              <p className="mt-4 max-w-lg text-sm sm:text-base leading-relaxed text-slate-600 font-medium">
                We believe strong businesses are built by strong people. Our leadership drives vision, innovation and a people-first culture to create long-term value for customers, partners and communities.
              </p>

              {/* 4 Feature Badges in horizontal row */}
              <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 pt-6 border-t border-slate-200/80">
                <div className="flex flex-col items-start gap-2">
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white text-[#D9232A] border border-rose-200 shadow-sm">
                    <Target className="h-5 w-5" />
                  </div>
                  <span className="text-xs font-bold text-slate-900 leading-tight">
                    Clear<br />Vision
                  </span>
                </div>

                <div className="flex flex-col items-start gap-2">
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white text-[#D9232A] border border-rose-200 shadow-sm">
                    <Users className="h-5 w-5" />
                  </div>
                  <span className="text-xs font-bold text-slate-900 leading-tight">
                    People<br />First
                  </span>
                </div>

                <div className="flex flex-col items-start gap-2">
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white text-[#D9232A] border border-rose-200 shadow-sm">
                    <Lightbulb className="h-5 w-5" />
                  </div>
                  <span className="text-xs font-bold text-slate-900 leading-tight">
                    Continuous<br />Innovation
                  </span>
                </div>

                <div className="flex flex-col items-start gap-2">
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white text-[#D9232A] border border-rose-200 shadow-sm">
                    <TrendingUp className="h-5 w-5" />
                  </div>
                  <span className="text-xs font-bold text-slate-900 leading-tight">
                    Sustainable<br />Growth
                  </span>
                </div>
              </div>

            </div>

            {/* Center Column (4 cols): Dr. Vivek Bindra Hero Image with Organic Pinkish-Red Shade */}
            <div className="lg:col-span-4 flex items-center justify-center relative isolate min-h-[360px] sm:min-h-[400px] lg:min-h-[460px]">
              {/* Lighter Pinkish-Red Organic Shape shifted slightly downside */}
              <div
                className="absolute top-[34%] sm:top-[36%] lg:top-[36%] left-[49%] -translate-x-1/2 -translate-y-1/2 w-[270px] sm:w-[320px] lg:w-[350px] h-[250px] sm:h-[290px] lg:h-[320px] pointer-events-none z-0 select-none"
                aria-hidden="true"
              >
                <svg
                  viewBox="0 0 400 400"
                  className="w-full h-full"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <linearGradient id="roseOrganicGrad" x1="20%" y1="15%" x2="80%" y2="85%">
                      <stop offset="0%" stopColor="#fdecee" stopOpacity="0.85" />
                      <stop offset="50%" stopColor="#fcdde2" stopOpacity="0.75" />
                      <stop offset="100%" stopColor="#fbd2d8" stopOpacity="0.65" />
                    </linearGradient>
                  </defs>
                  
                  {/* Organic rounded droplet / circle behind head and left shoulder */}
                  <path
                    d="M280,50 C360,60 380,150 360,230 C340,300 270,330 190,320 C100,310 60,240 70,140 C80,60 190,40 280,50 Z"
                    fill="url(#roseOrganicGrad)"
                  />
                </svg>
              </div>

              {/* Bindra Portrait Image with smooth bottom fade */}
              <img
                src={bindraHero}
                alt="Dr. Vivek Bindra - Leadership Mentor and Business Coach"
                className="relative z-10 h-auto max-h-[380px] sm:max-h-[430px] lg:max-h-[470px] xl:max-h-[500px] object-contain drop-shadow-xl transition-transform duration-300 hover:scale-[1.02]"
                style={{
                  maskImage: "linear-gradient(to bottom, black 85%, transparent 100%)",
                  WebkitMaskImage: "linear-gradient(to bottom, black 85%, transparent 100%)",
                }}
                loading="eager"
              />
            </div>

            {/* Right Column (3 cols): Top Handwritten Script & Bottom Quote Card */}
            <div className="lg:col-span-3 flex flex-col justify-between self-stretch py-2 lg:py-4 gap-6">
              {/* Top: Handwritten Script Header */}
              <div className="flex flex-col items-start sm:items-end lg:items-start select-none pt-1">
                <span className="font-['Dancing_Script',cursive] text-3xl sm:text-4xl lg:text-[2.6rem] font-bold text-slate-800 block -rotate-3 leading-[1.08]">
                  Leadership
                  <br />
                  Transforms
                  <br />
                  Busineesss
                </span>
                <span className="inline-block w-16 h-1 bg-[#D9232A] mt-2 rounded-full -rotate-2" />
              </div>

              {/* Bottom: Floating White Quote Card */}
              <div className="rounded-2xl bg-white/95 backdrop-blur-sm p-4 sm:p-5 border border-slate-200/90 shadow-xl shadow-slate-200/60 select-none">
                <span className="text-3xl sm:text-4xl font-serif font-black text-[#D9232A] leading-none select-none block">“</span>
                <p className="mt-1.5 text-xs sm:text-[13px] font-bold leading-relaxed text-slate-800">
                  "The biggest asset of any business is its people. When you build people, you build an unstoppable organization."
                </p>
                <span className="inline-block w-8 h-0.5 bg-[#D9232A] my-2.5 rounded-full" />
                <div>
                  <h4 className="text-xs sm:text-sm font-black text-slate-950">Vivek Bindra</h4>
                  <p className="text-[10px] sm:text-[11px] font-medium text-slate-500 leading-tight mt-0.5">
                    Business Coach | Motivational Speaker<br />Leadership Mentor
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. Role Model Section: Dr. Vivek Bindra */}
      <section className="bg-white py-14 sm:py-18 border-b border-slate-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-6">
              <div className="flex items-center gap-2">
                <span className="inline-block w-6 h-0.5 bg-[#D9232A]" />
                <span className="text-xs font-black uppercase tracking-[0.24em] text-[#D9232A]">
                  OUR ROLE MODEL
                </span>
              </div>
              <h2 className="mt-2 text-3xl sm:text-4xl font-black text-slate-950">
                Dr. Vivek <span className="text-[#D9232A]">Bindra</span>
              </h2>
              <p className="mt-1 text-sm font-bold text-slate-800">
                A Source of Inspiration
              </p>
              <p className="mt-3.5 text-xs sm:text-sm leading-relaxed text-slate-600 font-medium max-w-xl">
                Dr. Vivek Bindra is a globally renowned business coach, motivational speaker and leadership expert. His teachings on leadership, business growth and people development continue to inspire us to think bigger, act bolder and create meaningful impact through our work.
              </p>
            </div>

            {/* Right 4 Stat Cards */}
            <div className="lg:col-span-6 grid grid-cols-2 sm:grid-cols-4 gap-3.5">
              <div className="rounded-2xl border border-slate-200/80 bg-white p-4 sm:p-5 text-center shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl sm:text-2xl font-black text-slate-950">10M+</h3>
                <p className="mt-1 text-[11px] font-semibold text-slate-500 leading-snug">
                  People Inspired<br />Worldwide
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200/80 bg-white p-4 sm:p-5 text-center shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl sm:text-2xl font-black text-slate-950">1,000+</h3>
                <p className="mt-1 text-[11px] font-semibold text-slate-500 leading-snug">
                  Organizations<br />Mentored
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200/80 bg-white p-4 sm:p-5 text-center shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-lg sm:text-xl font-black text-slate-950">Leadership</h3>
                <p className="mt-1 text-[11px] font-semibold text-slate-500 leading-snug">
                  Thought Leader<br />& Author
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200/80 bg-white p-4 sm:p-5 text-center shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl sm:text-2xl font-black text-slate-950">Global</h3>
                <p className="mt-1 text-[11px] font-semibold text-slate-500 leading-snug">
                  Business<br />Coach
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Leadership Team Section */}
      <section className="bg-white py-16 sm:py-20 lg:py-24 border-b border-slate-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between pb-10 sm:pb-12">
            <div>
              <div className="flex items-center gap-2">
                <span className="inline-block w-6 h-0.5 bg-[#D9232A]" />
                <span className="text-xs font-black uppercase tracking-[0.24em] text-[#D9232A]">
                  OUR LEADERSHIP TEAM
                </span>
              </div>
              <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-black text-slate-950 tracking-tight">
                Guided by Experience. Driven by Purpose.
              </h2>
            </div>
            <p className="max-w-md text-xs sm:text-sm font-medium text-slate-600 leading-relaxed">
              Our leadership team brings together diverse expertise and a shared commitment to innovation, customer success and sustainable growth.
            </p>
          </div>

          {/* Cards Layout: Featured CEO Card on Left + 3 Executive Cards on Right */}
          <div className="grid gap-5 grid-cols-1 lg:grid-cols-12 items-stretch">
            
            {/* CEO Featured Card (Left ~6 cols) */}
            <div className="lg:col-span-6 xl:col-span-6 flex flex-col justify-between rounded-2xl sm:rounded-3xl border border-slate-200/90 bg-white p-5 sm:p-6 shadow-sm transition-all duration-300 hover:shadow-md">
              <div className="flex flex-col sm:flex-row gap-5 sm:gap-6 items-start">
                {/* CEO Image */}
                <div className="w-full sm:w-[200px] md:w-[225px] lg:w-[215px] xl:w-[235px] aspect-[4/4.8] sm:aspect-[4/5.2] shrink-0 rounded-2xl overflow-hidden bg-slate-100 border border-slate-200/80 shadow-sm">
                  <img
                    src={CEO_LEADER.image}
                    alt={`${CEO_LEADER.name} - ${CEO_LEADER.role}`}
                    className="h-full w-full object-cover object-top transition-transform duration-500 hover:scale-105"
                    loading="lazy"
                  />
                </div>

                {/* CEO Info & Quote (Compact stacked upward with increased font size) */}
                <div className="flex-1 min-w-0 flex flex-col justify-start">
                  <h3 className="text-xl sm:text-2xl lg:text-[1.65rem] font-black text-slate-950 tracking-tight">
                    {CEO_LEADER.name}
                  </h3>
                  <p className="text-xs sm:text-sm font-bold text-slate-800 mt-0.5">
                    {CEO_LEADER.role}
                  </p>
                  <p className="mt-2.5 text-xs sm:text-[13px] leading-relaxed text-slate-600 font-medium">
                    {CEO_LEADER.bio}
                  </p>
                  
                  {/* LinkedIn Icon */}
                  <div className="mt-3 flex items-center">
                    <a
                      href={CEO_LEADER.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${CEO_LEADER.name} on LinkedIn`}
                      className="flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-lg bg-[#0A66C2] text-white transition-opacity hover:opacity-85 shadow-sm"
                    >
                      <Linkedin className="h-4 w-4 fill-white" />
                    </a>
                  </div>

                  {/* CEO Quote Moved Upward with Increased Font Size */}
                  <div className="mt-3.5 pt-3 border-t border-slate-100 flex items-start gap-2.5">
                    <span className="text-2xl sm:text-3xl font-serif font-black text-[#D9232A] leading-none shrink-0 select-none block">
                      ““
                    </span>
                    <p className="text-xs sm:text-[13px] lg:text-sm font-semibold text-slate-700 italic leading-snug">
                      "{CEO_LEADER.quote}"
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* 3 Executive Leader Cards (Right ~6 cols) */}
            <div className="lg:col-span-6 xl:col-span-6 grid grid-cols-1 sm:grid-cols-3 gap-4 items-stretch">
              {EXECUTIVE_LEADERS.map((leader) => (
                <div
                  key={leader.name}
                  className="group flex flex-col justify-between rounded-2xl border border-slate-200/90 bg-white p-3.5 sm:p-4 shadow-sm transition-all duration-300 hover:shadow-md"
                >
                  <div>
                    {/* Photo with soft rounded frame */}
                    <div className="relative aspect-[4/4.3] overflow-hidden rounded-xl bg-slate-100 border border-slate-200/70">
                      <img
                        src={leader.image}
                        alt={leader.name}
                        className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                    </div>

                    <div className="mt-3.5">
                      <h3 className="text-sm sm:text-base font-black text-slate-950">{leader.name}</h3>
                      <p className="text-[11px] sm:text-xs font-bold text-slate-600 mt-0.5">{leader.role}</p>
                    </div>
                  </div>

                  {/* LinkedIn Link Button */}
                  <div className="mt-4 pt-2.5 border-t border-slate-100 flex items-center justify-start">
                    <a
                      href={leader.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${leader.name} on LinkedIn`}
                      className="flex h-6 w-6 sm:h-7 sm:w-7 items-center justify-center rounded bg-[#0A66C2] text-white transition-opacity hover:opacity-85 shadow-sm"
                    >
                      <Linkedin className="h-3.5 w-3.5 fill-white" />
                    </a>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>
      </section>

      {/* 4. Leadership Values Section */}
      <section className="bg-rose-50/40 py-16 sm:py-20 border-b border-slate-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
            
            {/* Left Title */}
            <div className="lg:col-span-4">
              <div className="flex items-center gap-2">
                <span className="inline-block w-6 h-0.5 bg-[#D9232A]" />
                <span className="text-xs font-black uppercase tracking-[0.24em] text-[#D9232A]">
                  OUR LEADERSHIP VALUES
                </span>
              </div>
              <h2 className="mt-2 text-3xl sm:text-4xl font-black text-slate-950 leading-tight">
                The Principles
                <br />
                That <span className="text-[#D9232A]">Drive Us.</span>
              </h2>
            </div>

            {/* Right 4 Values in a Row */}
            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {VALUES.map((val) => {
                const Icon = val.icon;
                return (
                  <div key={val.title} className="flex flex-col items-center text-center p-2">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-[#D9232A] shadow-sm border border-rose-100 mb-3">
                      <Icon className="h-6 w-6 stroke-[1.8]" />
                    </div>
                    <h3 className="text-sm font-black text-slate-950">{val.title}</h3>
                    <p className="mt-1 text-xs text-slate-600 font-medium leading-relaxed">{val.desc}</p>
                  </div>
                );
              })}
            </div>

          </div>
        </div>
      </section>

      {/* 5. Bottom Callout Banner */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-xl shadow-slate-100">
            <div className="grid lg:grid-cols-12 items-center bg-white">
              
              {/* Left Photo: Mountain Flag with Smooth White Gradient Mix */}
              <div className="lg:col-span-5 h-64 sm:h-72 lg:h-full min-h-[280px] lg:min-h-[320px] relative overflow-hidden bg-white">
                <img
                  src={mountainFlag}
                  alt="VEVRA leadership team holding flag on mountain summit"
                  className="h-full w-full object-cover object-center"
                  loading="lazy"
                />
                {/* Desktop: Smooth white gradient blend from left photo to right side */}
                <div className="absolute inset-y-0 right-0 w-28 sm:w-36 lg:w-48 bg-gradient-to-r from-transparent via-white/75 to-white pointer-events-none hidden lg:block" />
                {/* Mobile: Smooth white gradient blend from photo to bottom content */}
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white via-white/80 to-transparent pointer-events-none lg:hidden" />
              </div>

              {/* Right Content */}
              <div className="lg:col-span-7 p-8 sm:p-10 lg:p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 bg-white">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="inline-block w-5 h-0.5 bg-[#D9232A]" />
                    <span className="text-[11px] font-black uppercase tracking-[0.24em] text-[#D9232A]">
                      TOGETHER WE BUILD MORE
                    </span>
                  </div>

                  <h3 className="mt-2.5 text-2xl sm:text-3xl font-black text-slate-950 leading-tight">
                    Great Leaders
                    <br />
                    <span className="text-[#D9232A]">Create Greater Futures.</span>
                  </h3>

                  <p className="mt-2.5 max-w-lg text-xs sm:text-sm font-medium text-slate-600 leading-relaxed">
                    Our leadership works together to build a stronger, smarter and more sustainable packaging industry.
                  </p>
                </div>

                {/* Button */}
                <div className="shrink-0">
                  <Link
                    to="/contact"
                    className="arrow-move inline-flex items-center gap-2 rounded-full bg-[#D9232A] px-7 py-3.5 text-xs sm:text-sm font-bold text-white shadow-lg shadow-[#D9232A]/25 transition-all hover:bg-rose-700 hover:shadow-xl"
                  >
                    Join Our Journey <span className="arrow">→</span>
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

    </SiteLayout>
  );
}
