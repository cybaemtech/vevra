import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Boxes,
  Layers,
  Package,
  Recycle,
  ScanLine,
  Shield,
  Sparkles,
} from "lucide-react";

import cap01 from "@/assets/capabilities/cap-01-corrugated.jpg";
import cap02 from "@/assets/capabilities/cap-02-plastic.jpg";
import cap03 from "@/assets/capabilities/cap-03-metal.jpg";
import cap07 from "@/assets/capabilities/cap-07-labels.jpg";
import cap08Wood from "@/assets/capabilities/cap-08-wood-plywood.jpg";
import capPulpHoneycomb from "@/assets/capabilities/cap-pulp-honeycomb.jpg";
import boxCorner from "@/assets/capabilities/cap-box-corner.jpg";
import { SiteLayout } from "@/components/site/SiteLayout";

const PRODUCT_ITEMS = [
  {
    step: "01",
    title: "Corrugated Packaging",
    short: "Corrugated boxes, CFB, die-cut, heavy-duty and export packaging.",
    image: cap01,
    icon: Package,
    to: "/products/corrugated",
    active: true,
  },
  {
    step: "02",
    title: "Plastic / PP Packaging",
    short: "Reusable plastic and PP formats for protection, handling and circulation.",
    image: cap02,
    icon: Recycle,
    to: "/products/plastic-pp",
  },
  {
    step: "03",
    title: "Metal Returnable Packaging",
    short: "Metal pallets, bins, racks, trolleys and customized returnable containers.",
    image: cap03,
    icon: Layers,
    to: "/products/metal",
  },
  {
    step: "04",
    title: "Wood / Plywood Packaging",
    short: "Wooden pallets, boxes, plywood cases and export-ready heavy-duty packaging.",
    image: cap08Wood,
    icon: Boxes,
    to: "/products/wood-plywood",
  },
  {
    step: "05",
    title: "Pulp & Honeycomb Packaging",
    short: "Pulp trays, honeycomb, dunnage, partitions and component fitments.",
    image: capPulpHoneycomb,
    icon: Shield,
    to: "/products/protective",
  },
  {
    step: "06",
    title: "Labels & Identification",
    short: "Industrial labels and identification solutions for clearer packaging visibility.",
    image: cap07,
    icon: ScanLine,
    to: "/products/labels-identification",
  },
  {
    step: "07",
    title: "Customized Packaging",
    short: "Packaging solutions built around a specific product, process or supply-chain challenge.",
    image: boxCorner,
    icon: Sparkles,
    to: "/products/customized-packaging",
  },
];

export const Route = createFileRoute("/products/")({
  head: () => ({
    meta: [
      { title: "Products — Packaging Engineered Around Your Product | VEVRA" },
      {
        name: "description",
        content:
          "Explore VEVRA's corrugated, plastic, metal, wood, protective, identification and customized packaging capabilities.",
      },
      { property: "og:title", content: "VEVRA Packaging Products" },
      {
        property: "og:description",
        content: "Packaging formats selected around your product, process, application and supply-chain requirement.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ProductsPage,
});

function ProductsPage() {
  const topCards = PRODUCT_ITEMS.slice(0, 4);
  const bottomCards = PRODUCT_ITEMS.slice(4, 7);

  return (
    <SiteLayout>
      <section className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-24 text-slate-900" aria-labelledby="capabilities-title">
        {/* Background Soft Radiance */}
        <div className="pointer-events-none absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-rose-100/50 blur-3xl" />
        <div className="pointer-events-none absolute -left-20 bottom-10 h-72 w-72 rounded-full bg-rose-50/70 blur-2xl" />

        {/* Left Decorative Watermark Label */}
        <div className="pointer-events-none absolute left-4 sm:left-6 bottom-16 hidden 2xl:flex flex-col gap-2 opacity-50 select-none">
          <div className="text-[10px] font-black uppercase tracking-[0.26em] text-slate-500 leading-tight">
            PEOPLE
            <br />
            PRODUCTS
            <br />
            PLANET
            <br />
            PROGRESS
            <br />
            <span className="h-0.5 w-5 bg-brand inline-block mt-1" />
          </div>
        </div>

        <div className="relative mx-auto max-w-[1520px] px-6 sm:px-10 lg:px-14 xl:px-16 2xl:px-20">
          {/* Header Row */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="max-w-[720px]">
              <div className="flex items-center gap-2.5 text-xs font-black uppercase tracking-[0.28em] text-brand">
                <span className="h-1 w-8 bg-brand inline-block rounded-full" />
                PACKAGING CAPABILITIES
              </div>

              <h1
                id="capabilities-title"
                className="mt-4 text-3xl sm:text-4xl lg:text-[3.15rem] xl:text-[3.65rem] font-black tracking-tight leading-[1.06] text-brand-blue-dark"
              >
                Explore our <span className="text-brand">packaging solutions</span>
              </h1>

              <p className="mt-4 text-sm sm:text-base leading-relaxed text-slate-600 font-medium max-w-[620px]">
                Engineered formats across corrugated, plastic, metal, wood, protective packaging and identification.
              </p>
            </div>

            {/* Top-Right Badge */}
            <div className="hidden md:flex flex-col border-l-2 border-brand/60 pl-4 py-1 text-right select-none">
              <span className="text-[10px] font-black uppercase tracking-[0.22em] text-slate-500 leading-snug">
                FROM
                <br />
                PACKAGING
                <br />
                TO A BRIGHTER
                <br />
                TOMORROW
              </span>
              <span className="h-0.5 w-5 bg-brand inline-block mt-1.5 ml-auto" />
            </div>
          </div>

          {/* Row 1: 4 Cards */}
          <div className="mt-12 sm:mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {topCards.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.title}
                  to={item.to}
                  className={`group relative flex flex-col justify-between overflow-hidden rounded-3xl bg-white transition-all duration-300 hover:-translate-y-1.5 ${
                    item.active
                      ? "border-2 border-brand/50 shadow-xl ring-1 ring-brand/20"
                      : "border border-slate-200/90 shadow-[0_8px_24px_-6px_rgba(15,23,42,0.05)] hover:shadow-2xl hover:border-brand/40"
                  }`}
                >
                  <div>
                    {/* Top Image Section */}
                    <div className="relative h-44 sm:h-48 w-full overflow-hidden bg-slate-100">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                        loading="lazy"
                      />

                      {/* Step Number Pill on Top Left of Image */}
                      <div className="absolute top-3.5 left-3.5 rounded-xl bg-white/90 backdrop-blur-md px-3 py-1 text-xs font-black text-brand-blue-dark shadow-sm border border-white/60">
                        {item.step}
                      </div>
                    </div>

                    {/* Icon Anchor Floating in Middle */}
                    <div className="relative px-6 -mt-6 z-10">
                      <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white border-2 border-rose-100 text-brand shadow-md transition-all duration-300 group-hover:bg-brand group-hover:text-white group-hover:scale-105">
                        <Icon className="h-5 w-5 stroke-[1.8]" />
                      </div>
                    </div>

                    {/* Text Content */}
                    <div className="px-6 pt-3">
                      <h2 className="text-lg sm:text-xl font-black text-brand-blue-dark group-hover:text-brand transition-colors">
                        {item.title}
                      </h2>
                      <p className="mt-2 text-xs sm:text-[13px] leading-relaxed text-slate-600 font-medium">
                        {item.short}
                      </p>
                    </div>
                  </div>

                  {/* Bottom Action Footer */}
                  <div className="px-6 pb-6 pt-5 flex items-center justify-between">
                    <span className="text-[11px] font-black uppercase tracking-[0.16em] text-brand group-hover:text-brand-dark">
                      EXPLORE SOLUTION →
                    </span>
                    <span
                      className={`flex h-9 w-9 items-center justify-center rounded-full transition-all duration-300 group-hover:scale-105 ${
                        item.active
                          ? "bg-brand text-white shadow-md shadow-brand/30"
                          : "bg-rose-50 text-brand group-hover:bg-brand group-hover:text-white"
                      }`}
                    >
                      <ArrowRight className="h-4 w-4 stroke-[2.2]" />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>

          {/* Row 2: 3 Cards + Right Visual Showcase Area */}
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 items-stretch">
            {bottomCards.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.title}
                  to={item.to}
                  className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-slate-200/90 bg-white shadow-[0_8px_24px_-6px_rgba(15,23,42,0.05)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:border-brand/40"
                >
                  <div>
                    {/* Top Image Section */}
                    <div className="relative h-44 sm:h-48 w-full overflow-hidden bg-slate-100">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                        loading="lazy"
                      />

                      {/* Step Number Pill */}
                      <div className="absolute top-3.5 left-3.5 rounded-xl bg-white/90 backdrop-blur-md px-3 py-1 text-xs font-black text-brand-blue-dark shadow-sm border border-white/60">
                        {item.step}
                      </div>
                    </div>

                    {/* Icon Anchor Floating in Middle */}
                    <div className="relative px-6 -mt-6 z-10">
                      <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white border-2 border-rose-100 text-brand shadow-md transition-all duration-300 group-hover:bg-brand group-hover:text-white group-hover:scale-105">
                        <Icon className="h-5 w-5 stroke-[1.8]" />
                      </div>
                    </div>

                    {/* Text Content */}
                    <div className="px-6 pt-3">
                      <h2 className="text-lg sm:text-xl font-black text-brand-blue-dark group-hover:text-brand transition-colors">
                        {item.title}
                      </h2>
                      <p className="mt-2 text-xs sm:text-[13px] leading-relaxed text-slate-600 font-medium">
                        {item.short}
                      </p>
                    </div>
                  </div>

                  {/* Bottom Action Footer */}
                  <div className="px-6 pb-6 pt-5 flex items-center justify-between">
                    <span className="text-[11px] font-black uppercase tracking-[0.16em] text-brand group-hover:text-brand-dark">
                      EXPLORE SOLUTION →
                    </span>
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-rose-50 text-brand transition-all duration-300 group-hover:bg-brand group-hover:text-white group-hover:scale-105">
                      <ArrowRight className="h-4 w-4 stroke-[2.2]" />
                    </span>
                  </div>
                </Link>
              );
            })}

            {/* 4th Column in Bottom Row: Brand Highlight & 3D Corrugated Box Visual */}
            <div className="relative flex flex-col justify-between overflow-hidden rounded-3xl border border-rose-100 bg-gradient-to-br from-white via-rose-50/30 to-rose-50/70 p-6 sm:p-7 shadow-[0_8px_24px_-6px_rgba(15,23,42,0.05)] min-h-[360px]">
              {/* Tagline on top */}
              <div>
                <div className="flex items-start gap-3">
                  <span className="h-12 w-1 bg-brand rounded-full inline-block shrink-0 mt-0.5" />
                  <div className="text-[11px] font-black uppercase tracking-[0.22em] text-slate-600 leading-snug">
                    SUSTAINABLE
                    <br />
                    RELIABLE
                    <br />
                    COST OPTIMIZED
                    <br />
                    <span className="h-0.5 w-5 bg-brand inline-block mt-1.5" />
                  </div>
                </div>

                {/* Red Cursive Script */}
                <div className="mt-6 select-none">
                  <span className="font-['Dancing_Script',cursive] text-3xl sm:text-4xl font-bold text-brand -rotate-3 block leading-tight">
                    One system.
                    <br />
                    Every stage.
                  </span>
                  <svg className="h-3.5 w-28 text-brand mt-1" viewBox="0 0 120 16" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M0 8 Q 60 16, 120 4" />
                  </svg>
                </div>
              </div>

              {/* Bottom 3D Corrugated Box Visual */}
              <div className="relative -mb-4 -mr-4 mt-4 w-full flex justify-end">
                <img
                  src={boxCorner}
                  alt="VEVRA Packaging Box"
                  className="w-48 sm:w-56 h-auto object-contain drop-shadow-xl"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* Bottom RFQ Banner */}
          <div className="mt-16 rounded-3xl bg-brand-blue-dark text-white p-8 sm:p-12 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl">
            <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-brand/20 blur-3xl pointer-events-none" />
            <div className="relative max-w-[680px]">
              <span className="text-xs font-black uppercase tracking-[0.24em] text-rose-400 block">
                CUSTOM INDUSTRIAL SOLUTIONS
              </span>
              <h3 className="mt-2 text-2xl sm:text-3xl font-black tracking-tight text-white">
                Need a tailored packaging design for your operations?
              </h3>
              <p className="mt-2 text-sm text-slate-300">
                Connect with our packaging engineering experts for pack-out studies, sample prototyping, and cost optimization audits.
              </p>
            </div>
            <div className="relative flex flex-wrap items-center gap-4 shrink-0">
              <Link
                to="/contact"
                className="rounded-full bg-brand px-8 py-4 text-xs sm:text-sm font-black uppercase tracking-[0.14em] text-white shadow-lg shadow-brand/30 transition-all duration-300 hover:bg-brand-dark hover:scale-105 inline-flex items-center gap-2"
              >
                <span>Generate Quick RFQ</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/calculator"
                className="rounded-full border border-white/20 bg-white/10 px-8 py-4 text-xs sm:text-sm font-black uppercase tracking-[0.14em] text-white backdrop-blur-sm transition-all duration-300 hover:bg-white hover:text-brand-blue-dark hover:scale-105 inline-flex items-center gap-2"
              >
                <span>Calculate Savings</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
