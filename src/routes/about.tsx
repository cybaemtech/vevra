import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Award,
  Building2,
  CheckCircle2,
  ChevronRight,
  Eye,
  Factory,
  Gem,
  Handshake,
  HeartHandshake,
  Layers,
  MapPin,
  Medal,
  Package,
  Settings,
  Shield,
  ShieldCheck,
  Sparkles,
  Target,
  TrendingUp,
  Truck,
  Users,
  UsersRound,
} from "lucide-react";

import heroCratesImage from "@/assets/editorial/about-hero-crates.jpg";
import purposeMountainImage from "@/assets/editorial/about-purpose-mountain.jpg";
import { RfqButton, SiteLayout } from "@/components/site/SiteLayout";
import { WorldExpansionMap } from "@/components/site/WorldExpansionMap";
import { STATS } from "@/lib/site-content";

const VALUES_LIST = [
  {
    step: "01",
    title: "Customer First",
    body: "We put the customer's requirements at the centre.",
    icon: HeartHandshake,
  },
  {
    step: "02",
    title: "Integrity",
    body: "We build relationships through transparency, trust and doing the right thing.",
    icon: ShieldCheck,
  },
  {
    step: "03",
    title: "Ownership",
    body: "We take responsibility for the problem, not just our part.",
    icon: Settings,
  },
  {
    step: "04",
    title: "Teamwork",
    body: "We work together with customers, partners and our people.",
    icon: UsersRound,
  },
  {
    step: "05",
    title: "Excellence",
    body: "We continuously improve how we design, deliver and manage solutions.",
    icon: Gem,
  },
];

const EVOLUTION_CARDS = [
  { step: "01", title: "Packaging Products" },
  { step: "02", title: "Returnable Packaging" },
  { step: "03", title: "Packaging Rental" },
  { step: "04", title: "PP / Plastic Solutions" },
  { step: "05", title: "Packaging Engineering" },
  { step: "06", title: "On-Site Packaging Operations" },
  { step: "07", title: "Warehouse & Logistics Support" },
  { step: "08", title: "End-to-End Packaging Management" },
];

const VERIFIED_STATS = [
  { value: "15+", label: "Years of Experience", icon: Medal },
  { value: "153+", label: "Employees", icon: Users },
  { value: "4", label: "Manufacturing Units", icon: Factory },
  { value: "11+", label: "Warehouses*", icon: Building2 },
  { value: "6,149+", label: "Customers*", icon: Award },
];

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About VEVRA — From Packaging Supplier to Problem Solver" },
      {
        name: "description",
        content:
          "VEVRA grew from making packaging to solving packaging and supply-chain problems through sustainable, efficient and customer-centred solutions.",
      },
      { property: "og:title", content: "About VEVRA Packaging" },
      {
        property: "og:description",
        content: "The VEVRA story, vision, mission, values and evolution toward end-to-end packaging management.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <SiteLayout>
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden bg-white py-14 sm:py-18 lg:py-22 text-slate-900">
        {/* Ambient background glow */}
        <div className="pointer-events-none absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-rose-50/70 blur-3xl" />
        <div className="pointer-events-none absolute -left-20 bottom-0 h-64 w-64 rounded-full bg-rose-50/50 blur-2xl" />

        <div className="relative mx-auto max-w-[1520px] px-6 sm:px-10 lg:px-14 xl:px-16 2xl:px-20">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] items-center">
            {/* Left Content */}
            <div className="max-w-[660px]">
              <div className="flex items-center gap-2.5 text-xs font-black uppercase tracking-[0.28em] text-brand">
                <span className="h-1 w-8 bg-brand inline-block rounded-full" />
                ABOUT VEVRA
              </div>

              <h1 className="mt-4 text-3xl sm:text-4xl lg:text-[2.85rem] xl:text-[3.35rem] font-black tracking-tight leading-[1.08] text-brand-blue-dark">
                We started by making <br />
                packaging. We grew by <br />
                <span className="text-brand">solving problems.</span>
              </h1>

              <p className="mt-5 text-sm sm:text-base leading-relaxed text-slate-600 font-medium max-w-[560px]">
                VEVRA&apos;s story is about evolution — from packaging products and returnables to a broader end-to-end packaging and supply-chain solutions partnership.
              </p>

              {/* Action Buttons */}
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  to="/contact"
                  className="rounded-full bg-brand px-7 sm:px-8 py-3.5 text-xs sm:text-sm font-black uppercase tracking-[0.14em] text-white shadow-lg shadow-brand/25 transition-all duration-300 hover:bg-brand-dark hover:scale-105 inline-flex items-center gap-2.5"
                >
                  <span>Generate Quick RFQ</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>

                <Link
                  to="/contact"
                  className="rounded-full border border-slate-300 bg-white px-7 sm:px-8 py-3.5 text-xs sm:text-sm font-black uppercase tracking-[0.14em] text-brand-blue-dark transition-all duration-300 hover:border-brand hover:text-brand hover:scale-105 inline-flex items-center gap-2.5"
                >
                  <span>Talk to us</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Right Visual Image & Vertical Badges */}
            <div className="flex items-center justify-end gap-5 sm:gap-7">
              {/* Slanted Container for Industrial Image */}
              <div className="relative w-full max-w-[500px] rounded-3xl overflow-hidden shadow-2xl border border-slate-100 bg-slate-900 group">
                <img
                  src={heroCratesImage}
                  alt="VEVRA Returnable Packaging Factory and Returnable Crates"
                  className="w-full h-auto object-cover max-h-[360px] sm:max-h-[420px] transition-transform duration-700 group-hover:scale-105"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Right-hand Vertical Badges */}
              <div className="hidden sm:flex flex-col justify-between self-stretch py-2 select-none shrink-0">
                <div className="text-[10px] font-black uppercase tracking-[0.22em] text-slate-600 leading-snug border-l-2 border-brand/60 pl-3">
                  PACK
                  <br />
                  PROTECT
                  <br />
                  MOVE
                  <br />
                  SUSTAIN
                </div>

                <div className="text-[10px] font-black uppercase tracking-[0.22em] text-slate-600 leading-snug border-l-2 border-brand/60 pl-3 mt-12">
                  PACKAGING
                  <br />
                  A STRONGER
                  <br />
                  TOMORROW
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. OUR STORY SECTION */}
      <section className="relative overflow-hidden bg-[#FAFBFC] py-14 sm:py-18 lg:py-20 text-slate-900 border-t border-slate-100">
        <div className="relative mx-auto max-w-[1520px] px-6 sm:px-10 lg:px-14 xl:px-16 2xl:px-20">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div>
              <div className="flex items-center gap-2.5 text-xs font-black uppercase tracking-[0.28em] text-brand">
                <span className="h-1 w-8 bg-brand inline-block rounded-full" />
                OUR STORY
              </div>

              <h2 className="mt-3 text-3xl sm:text-4xl lg:text-[2.6rem] font-black tracking-tight text-brand-blue-dark">
                From product supplier to <br className="hidden sm:inline" />
                problem solver
              </h2>
            </div>

            {/* Right Calligraphy Script */}
            <div className="select-none self-start lg:self-center">
              <span className="font-['Dancing_Script',cursive] text-2xl sm:text-3xl font-bold text-brand -rotate-2 block leading-tight">
                Engineering Packaging
                <br />
                <span className="text-xl sm:text-2xl font-semibold">for What&apos;s Next</span>
              </span>
            </div>
          </div>

          {/* Two-Column Story Narrative */}
          <div className="mt-8 sm:mt-10 grid gap-8 sm:gap-12 md:grid-cols-2 text-slate-600 font-medium leading-relaxed text-sm sm:text-base border-t border-slate-200/80 pt-8">
            <p>
              VEVRA was built around a simple question: why should packaging be purchased again and again when it can potentially be reused, circulated and managed more intelligently?
            </p>
            <p>
              That thinking led VEVRA toward returnable packaging, pooling and broader packaging-management solutions. Customers may forget a product, but they remember a partner who solves a difficult problem.
            </p>
          </div>
        </div>
      </section>

      {/* 3. OUR PURPOSE (VISION & MISSION) */}
      <section className="relative overflow-hidden bg-slate-50 py-16 sm:py-20 lg:py-24 text-slate-900 border-t border-slate-100">
        {/* Scenic mountain backdrop on the right */}
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-full lg:w-[45%] opacity-25 lg:opacity-35 overflow-hidden">
          <img
            src={purposeMountainImage}
            alt="Scenic Mountain Highway Landscape"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-50 via-slate-50/80 to-transparent" />
        </div>

        <div className="relative mx-auto max-w-[1520px] px-6 sm:px-10 lg:px-14 xl:px-16 2xl:px-20">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] xl:grid-cols-[1.15fr_0.85fr] items-center">
            {/* Left Content */}
            <div className="max-w-[540px]">
              <div className="inline-flex items-center gap-2 rounded-full border border-rose-200 bg-white px-4 py-1.5 text-[11px] font-black uppercase tracking-[0.24em] text-brand shadow-sm">
                OUR PURPOSE
              </div>

              <h2 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-brand-blue-dark leading-tight">
                Vision <span className="text-brand">&amp;</span> <br />
                Mission
              </h2>

              <p className="mt-5 text-sm sm:text-base leading-relaxed text-slate-600 font-medium">
                The direction behind every solution we engineer, every partnership we build and every supply chain we strengthen.
              </p>

              <div className="mt-8 flex items-center gap-3 text-brand font-black text-xs uppercase tracking-[0.24em] hover:text-brand-dark cursor-pointer">
                <span>BUILT FOR MEANINGFUL CHANGE</span>
                <ArrowRight className="h-4 w-4" />
              </div>
            </div>

            {/* Right Cards: Vision Card (Dark) + Mission Card (White) - Compact Width */}
            <div className="grid gap-5 sm:grid-cols-2 max-w-[540px] lg:max-w-[580px] w-full justify-self-start lg:justify-self-end">
              {/* Vision Card */}
              <div className="group rounded-3xl bg-[#081830] p-6 sm:p-7 text-white shadow-2xl transition-all duration-300 hover:-translate-y-1.5 hover:shadow-brand-blue-dark/50 flex flex-col justify-between min-h-[290px]">
                <div className="flex items-center justify-between">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/10 text-white backdrop-blur-sm shadow-sm">
                    <Eye className="h-4.5 w-4.5" />
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-[0.22em] text-slate-300">
                    01 / VISION
                  </span>
                </div>

                <div className="mt-6">
                  <h3 className="text-xl sm:text-2xl font-black text-white">Vision</h3>
                  <p className="mt-2.5 text-xs sm:text-[13px] leading-relaxed text-slate-200 font-medium">
                    To create meaningful change in the supply chain industry through innovative, sustainable and efficient packaging solutions.
                  </p>
                </div>
              </div>

              {/* Mission Card */}
              <div className="group rounded-3xl bg-white p-6 sm:p-7 text-slate-900 shadow-xl border border-slate-100 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl flex flex-col justify-between min-h-[290px]">
                <div className="flex items-center justify-between">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-rose-50 text-brand shadow-sm">
                    <Target className="h-4.5 w-4.5" />
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-[0.22em] text-brand">
                    02 / MISSION
                  </span>
                </div>

                <div className="mt-6">
                  <h3 className="text-xl sm:text-2xl font-black text-brand-blue-dark">Mission</h3>
                  <p className="mt-2.5 text-xs sm:text-[13px] leading-relaxed text-slate-600 font-medium">
                    To strengthen our customers and partners while empowering our people through continuous improvement and adoption of industry best practices.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. OUR VALUES (HOW WE WORK) */}
      <section className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-24 text-slate-900 border-t border-slate-100">
        <div className="relative mx-auto max-w-[1520px] px-6 sm:px-10 lg:px-14 xl:px-16 2xl:px-20">
          {/* Header */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div>
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-[0.28em] text-brand">
                <span>OUR VALUES</span>
                <ChevronRight className="h-3.5 w-3.5 text-brand" />
              </div>

              <h2 className="mt-3 text-3xl sm:text-4xl lg:text-[2.75rem] font-black tracking-tight text-brand-blue-dark">
                How we work.
              </h2>
            </div>

            <p className="max-w-md text-xs sm:text-sm leading-relaxed text-slate-600 font-medium">
              Five principles that keep every decision grounded, every relationship trusted and every outcome accountable.
            </p>
          </div>

          {/* 5 Values Cards Grid */}
          <div className="mt-12 sm:mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {VALUES_LIST.map((val) => {
              const Icon = val.icon;
              return (
                <div
                  key={val.step}
                  className="group rounded-3xl border border-slate-200/90 bg-white p-6 shadow-[0_4px_16px_-4px_rgba(15,23,42,0.04)] transition-all duration-300 hover:-translate-y-1.5 hover:border-brand/40 hover:shadow-xl flex flex-col justify-between"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-black text-slate-300 group-hover:text-brand transition-colors">
                      {val.step}
                    </span>
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-rose-50 text-brand shadow-sm transition-transform duration-300 group-hover:scale-110">
                      <Icon className="h-4.5 w-4.5 stroke-[2]" />
                    </div>
                  </div>

                  <div className="mt-8">
                    <h3 className="text-base sm:text-lg font-black text-brand-blue-dark group-hover:text-brand transition-colors">
                      {val.title}
                    </h3>
                    <p className="mt-2 text-xs sm:text-[13px] leading-relaxed text-slate-600 font-medium">
                      {val.body}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. OUR EVOLUTION */}
      <section className="relative overflow-hidden bg-[#F8FAFC] py-18 sm:py-22 lg:py-26 text-slate-900 border-t border-slate-100" aria-labelledby="about-evolution-title">
        {/* Subtle background glow */}
        <div className="pointer-events-none absolute right-10 top-0 h-96 w-96 rounded-full bg-rose-100/40 blur-3xl" />
        <div className="pointer-events-none absolute left-0 bottom-0 h-80 w-80 rounded-full bg-slate-200/50 blur-3xl" />

        <div className="relative mx-auto max-w-[1520px] px-6 sm:px-10 lg:px-14 xl:px-16 2xl:px-20">
          {/* Header Row */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="max-w-[700px]">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-[0.28em] text-brand">
                <span>OUR EVOLUTION</span>
                <ChevronRight className="h-3.5 w-3.5 text-brand" />
              </div>

              <h2
                id="about-evolution-title"
                className="mt-3.5 text-3xl sm:text-4xl lg:text-[2.85rem] xl:text-[3.25rem] font-black tracking-tight leading-[1.08] text-brand-blue-dark"
              >
                Built through experience. <br />
                <span className="text-brand">Driven by evolution.</span>
              </h2>
            </div>

            <p className="max-w-[500px] text-xs sm:text-sm lg:text-base leading-relaxed text-slate-600 font-medium pb-1">
              From making packaging products to managing complete packaging ecosystems — each capability builds on the one before it.
            </p>
          </div>

          {/* 8 Step Cards with Timeline Rail */}
          <div className="relative mt-14 sm:mt-16">
            {/* Horizontal Timeline Connector Line (Visible on lg screens) */}
            <div className="hidden lg:block absolute top-[6px] left-6 right-6 h-[2px] bg-gradient-to-r from-brand/40 via-brand to-brand/40 z-0" />

            <div className="grid gap-4 sm:gap-4.5 grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 relative z-10">
              {EVOLUTION_CARDS.map((card) => (
                <div key={card.step} className="flex flex-col items-center group">
                  {/* Step Dot Node with Ping & Ring on Hover */}
                  <div className="relative mb-3.5 flex items-center justify-center">
                    <span className="h-3.5 w-3.5 rounded-full bg-brand ring-4 ring-white shadow-md shadow-brand/30 transition-transform duration-300 group-hover:scale-125" />
                  </div>

                  {/* Step Card */}
                  <div className="w-full rounded-2xl border border-slate-200/90 bg-white p-5 shadow-[0_4px_16px_-4px_rgba(15,23,42,0.04)] transition-all duration-300 hover:-translate-y-2 hover:border-brand hover:shadow-xl flex flex-col justify-between min-h-[175px] sm:min-h-[190px]">
                    <div>
                      <span className="text-xs sm:text-sm font-black text-brand tracking-wider block">
                        {card.step}
                      </span>
                      <h3 className="mt-3 text-xs sm:text-sm font-bold text-brand-blue-dark leading-snug group-hover:text-brand transition-colors">
                        {card.title}
                      </h3>
                    </div>

                    <div className="mt-4 flex items-center justify-end">
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-rose-50 text-brand transition-all duration-300 group-hover:bg-brand group-hover:text-white group-hover:translate-x-1">
                        <ArrowRight className="h-3.5 w-3.5" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Ecosystem Spectrum Breadcrumb */}
          <div className="mt-12 sm:mt-14 flex justify-center">
            <div className="inline-flex flex-wrap items-center justify-center gap-3 sm:gap-4 rounded-full border border-slate-200/80 bg-white px-6 sm:px-8 py-3 text-xs sm:text-sm font-black uppercase tracking-[0.24em] text-slate-600 shadow-sm select-none">
              <span className="hover:text-brand transition-colors">PRODUCTS</span>
              <span className="h-1.5 w-1.5 rounded-full bg-brand inline-block" />
              <span className="hover:text-brand transition-colors">SOLUTIONS</span>
              <span className="h-1.5 w-1.5 rounded-full bg-brand inline-block" />
              <span className="text-brand font-black">MANAGED ECOSYSTEMS</span>
            </div>
          </div>
        </div>
      </section>

      {/* 6. VALIDATED PROOF */}
      <section className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-24 text-slate-900 border-t border-slate-100">
        <div className="relative mx-auto max-w-[1520px] px-6 sm:px-10 lg:px-14 xl:px-16 2xl:px-20">
          <div className="max-w-[600px]">
            <div className="flex items-center gap-2.5 text-xs font-black uppercase tracking-[0.28em] text-brand">
              <span className="h-1 w-8 bg-brand inline-block rounded-full" />
              VALIDATED PROOF
            </div>

            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-[2.6rem] font-black tracking-tight text-brand-blue-dark">
              Experience you can verify
            </h2>
          </div>

          {/* 5 Verified Metric Cards */}
          <div className="mt-10 sm:mt-12 grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {VERIFIED_STATS.map((stat) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.label}
                  className="group rounded-3xl border border-slate-200/90 bg-white p-6 shadow-[0_6px_20px_-4px_rgba(15,23,42,0.04)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-brand/40 flex flex-col items-center text-center"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-rose-50 text-brand shadow-sm transition-transform duration-300 group-hover:scale-110">
                    <Icon className="h-5 w-5 stroke-[2]" />
                  </div>

                  <span className="mt-4 text-3xl sm:text-4xl font-black text-brand tracking-tight">
                    {stat.value}
                  </span>

                  <span className="mt-2 text-[11px] font-black uppercase tracking-[0.2em] text-slate-600">
                    {stat.label}
                  </span>
                </div>
              );
            })}
          </div>

          <p className="mt-6 text-right text-[11px] text-slate-400 font-medium">
            * As per latest available data
          </p>
        </div>
      </section>

      {/* 7. WORLD EXPANSION MAP (PAN-INDIA & GLOBAL NETWORK) */}
      <WorldExpansionMap />
    </SiteLayout>
  );
}
