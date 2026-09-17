import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Boxes,
  Layers,
  Package,
  QrCode,
  Recycle,
  ScanLine,
  Settings,
  Truck,
  Users,
} from "lucide-react";

import cap01 from "@/assets/capabilities/cap-01-corrugated.jpg";
import cap02 from "@/assets/capabilities/cap-02-plastic.jpg";
import cap03 from "@/assets/capabilities/cap-03-metal.jpg";
import cap04 from "@/assets/capabilities/cap-04-pooling.jpg";
import cap05 from "@/assets/capabilities/cap-05-onsite.jpg";
import cap06 from "@/assets/capabilities/cap-06-transport.jpg";
import cap07 from "@/assets/capabilities/cap-07-labels.jpg";
import boxCorner from "@/assets/capabilities/cap-box-corner.jpg";

const CAPABILITIES = [
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
    title: "Equipment Pooling",
    short: "Shared assets. Better utilization.",
    image: cap04,
    icon: Settings,
    to: "/services/equipment-pooling",
  },
  {
    step: "05",
    title: "On-Site Packaging Operations",
    short: "Packaging where your production happens.",
    image: cap05,
    icon: Users,
    to: "/services/on-site-packaging-operations",
  },
  {
    step: "06",
    title: "Transport & Logistics",
    short: "Move the product. Manage the packaging.",
    image: cap06,
    icon: Truck,
    to: "/services/transport-logistics",
  },
  {
    step: "07",
    title: "Labels & Identification",
    short: "Industrial labels and identification solutions for clearer packaging visibility.",
    image: cap07,
    icon: ScanLine,
    to: "/products/labels-identification",
  },
];

export function PackagingCapabilitiesSection() {
  const topCards = CAPABILITIES.slice(0, 4);
  const bottomCards = CAPABILITIES.slice(4, 7);

  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-24 text-slate-900" aria-labelledby="capabilities-title">
      {/* Background Soft Glow */}
      <div className="pointer-events-none absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-rose-100/50 blur-3xl" />
      <div className="pointer-events-none absolute -left-20 bottom-10 h-72 w-72 rounded-full bg-rose-50/70 blur-2xl" />

      {/* Left Decorative Label */}
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

            <h2
              id="capabilities-title"
              className="mt-4 text-3xl sm:text-4xl lg:text-[3.15rem] xl:text-[3.65rem] font-black tracking-tight leading-[1.06] text-brand-blue-dark"
            >
              Explore our <span className="text-brand">packaging solutions</span>
            </h2>

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
                    <h3 className="text-lg sm:text-xl font-black text-brand-blue-dark group-hover:text-brand transition-colors">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-xs sm:text-[13px] leading-relaxed text-slate-600 font-medium">
                      {item.short}
                    </p>
                  </div>
                </div>

                {/* Bottom Action Footer */}
                <div className="px-6 pb-6 pt-5 flex items-center justify-between">
                  <span className="text-[11px] font-black uppercase tracking-[0.16em] text-brand group-hover:text-brand-dark">
                    LEARN MORE →
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
                    <h3 className="text-lg sm:text-xl font-black text-brand-blue-dark group-hover:text-brand transition-colors">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-xs sm:text-[13px] leading-relaxed text-slate-600 font-medium">
                      {item.short}
                    </p>
                  </div>
                </div>

                {/* Bottom Action Footer */}
                <div className="px-6 pb-6 pt-5 flex items-center justify-between">
                  <span className="text-[11px] font-black uppercase tracking-[0.16em] text-brand group-hover:text-brand-dark">
                    LEARN MORE →
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
      </div>
    </section>
  );
}
