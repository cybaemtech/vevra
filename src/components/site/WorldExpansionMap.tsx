import { ArrowRight, ArrowUpRight, Globe2, MapPin, Package } from "lucide-react";

import { COMPANY } from "@/lib/site-content";

const EXPORT_ROUTES = [
  { d: "M 691 276 Q 622 152 520 145", x: 520, y: 145, label: "Europe", delay: "0s" },
  { d: "M 691 276 Q 650 232 615 230", x: 615, y: 230, label: "Middle East", delay: "0.45s" },
  { d: "M 691 276 Q 590 298 548 315", x: 548, y: 315, label: "Africa", delay: "0.9s" },
  { d: "M 691 276 Q 790 270 858 210", x: 858, y: 210, label: "East Asia", delay: "1.35s" },
  { d: "M 691 276 Q 792 334 852 406", x: 852, y: 406, label: "Oceania", delay: "1.8s" },
  { d: "M 691 276 Q 410 55 232 180", x: 232, y: 180, label: "Americas", delay: "2.25s" },
] as const;

const INDIA_LOCATIONS = [
  "Pune (Kuruli) – Corporate & manufacturing",
  "Chakan Industrial Area",
  "Ranjangaon",
  "Bhosari MIDC",
  "Chennai",
  "Bengaluru",
  "Gurugram",
  "Ahmedabad",
  "Nashik",
  "Aurangabad",
  "Indore",
];

export function WorldExpansionMap() {
  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-24 text-slate-900 border-t border-slate-100" aria-labelledby="global-expansion-title">
      {/* Background soft ambient radiance */}
      <div className="pointer-events-none absolute right-0 top-0 h-[600px] w-[600px] rounded-full bg-rose-50/60 blur-3xl" />
      <div className="pointer-events-none absolute -left-20 bottom-10 h-72 w-72 rounded-full bg-slate-100/80 blur-2xl" />

      <div className="relative mx-auto max-w-[1520px] px-6 sm:px-10 lg:px-14 xl:px-16 2xl:px-20">
        {/* 1. TOP ROW: Pan-India Network, Expanding to the World + Map Card */}
        <div className="grid gap-12 lg:grid-cols-[1fr_1.35fr] xl:grid-cols-[0.88fr_1.42fr] items-center">
          {/* Left Column */}
          <div className="max-w-[560px]">
            {/* Eyebrow Pill */}
            <div className="inline-flex items-center gap-2 rounded-full border border-rose-200 bg-white px-4 py-1.5 text-[11px] font-black uppercase tracking-[0.24em] text-brand shadow-sm">
              <Globe2 className="h-3.5 w-3.5 text-brand" />
              <span>INDIA BUILT. GLOBALLY BOUND.</span>
            </div>

            {/* Headline */}
            <h2
              id="global-expansion-title"
              className="mt-5 text-3xl sm:text-4xl lg:text-[2.85rem] xl:text-[3.35rem] font-black tracking-tight leading-[1.08] text-brand-blue-dark"
            >
              A Pan-India <br />
              network, <br />
              <span className="text-brand">
                expanding to <br />
                the world.
              </span>
            </h2>

            {/* Description */}
            <p className="mt-5 text-xs sm:text-sm lg:text-base leading-relaxed text-slate-600 font-medium max-w-[480px]">
              Our manufacturing and warehouse network supports customers across India. Now, VEVRA is entering its next phase—taking engineered packaging expertise to export markets worldwide.
            </p>

            {/* Metric Pills (Side by side) */}
            <div className="mt-8 sm:mt-10 grid grid-cols-2 gap-4 max-w-[460px]">
              {/* Card 1: India Locations */}
              <div className="group rounded-2xl border border-slate-200/90 bg-white p-4.5 sm:p-5 shadow-[0_4px_16px_-4px_rgba(15,23,42,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-brand/40 hover:shadow-md flex items-center gap-3.5">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-rose-50 text-brand shadow-sm transition-transform duration-300 group-hover:scale-110">
                  <MapPin className="h-5 w-5 stroke-[2]" />
                </div>
                <div>
                  <span className="text-2xl sm:text-3xl font-black text-brand-blue-dark block tracking-tight">11+</span>
                  <span className="text-[10px] font-black uppercase tracking-[0.16em] text-slate-500 block mt-0.5">INDIA LOCATIONS*</span>
                </div>
              </div>

              {/* Card 2: Export Expansion */}
              <div className="group rounded-2xl border border-slate-200/90 bg-white p-4.5 sm:p-5 shadow-[0_4px_16px_-4px_rgba(15,23,42,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-brand/40 hover:shadow-md flex items-center gap-3.5">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-rose-50 text-brand shadow-sm transition-transform duration-300 group-hover:scale-110">
                  <Globe2 className="h-5 w-5 stroke-[2]" />
                </div>
                <div>
                  <span className="text-xl sm:text-2xl font-black text-brand-blue-dark inline-flex items-center gap-1 tracking-tight">
                    Global <ArrowUpRight className="h-4 w-4 text-brand stroke-[2.5]" />
                  </span>
                  <span className="text-[10px] font-black uppercase tracking-[0.16em] text-slate-500 block mt-0.5">EXPORT EXPANSION</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Map Card + Right Vertical Badges & Cursive Script */}
          <div className="flex flex-col lg:flex-row items-stretch lg:items-center gap-6">
            {/* Map Card */}
            <div className="relative rounded-3xl border border-slate-200/90 bg-[#F9FAFB] p-5 sm:p-7 shadow-xl overflow-hidden flex-1">
              {/* Card Top Header */}
              <div className="flex items-center justify-between border-b border-slate-200/70 pb-4 mb-2">
                <div className="flex items-center gap-2.5 text-xs font-black uppercase tracking-[0.2em] text-brand-blue-dark">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand opacity-75" />
                    <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-brand" />
                  </span>
                  <span>GLOBAL EXPANSION NETWORK</span>
                </div>
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
                  LIVE TRAJECTORY
                </span>
              </div>

              {/* Map SVG Area */}
              <div className="relative aspect-[2/1] min-h-[260px] sm:min-h-[300px] overflow-hidden flex items-center justify-center">
                {/* Background Watermark Globe on right */}
                <div className="pointer-events-none absolute right-2 bottom-0 w-44 sm:w-52 h-44 sm:h-52 opacity-15">
                  <svg viewBox="0 0 200 200" fill="none" stroke="#0B1E3B" strokeWidth="1" className="w-full h-full">
                    <circle cx="100" cy="100" r="90" />
                    <ellipse cx="100" cy="100" rx="90" ry="40" />
                    <ellipse cx="100" cy="100" rx="90" ry="70" />
                    <line x1="10" y1="100" x2="190" y2="100" />
                    <line x1="100" y1="10" x2="100" y2="190" />
                  </svg>
                </div>

                <svg
                  className="w-full h-full"
                  viewBox="0 0 1000 500"
                  role="img"
                  aria-label="Interactive world map showing VEVRA global export arcs expanding from India"
                >
                  {/* Continents (Light Slate Mode) */}
                  <g className="fill-slate-200/80 stroke-slate-300 stroke-[1]">
                    {/* North America */}
                    <path d="M84 126l41-45 91-25 76 19 48 57-32 36-49-8-37 40-69-15-42-32z" />
                    {/* South America */}
                    <path d="M270 242l45 17 36 61-4 75-31 58-25-44 8-57-27-45z" />
                    {/* Europe */}
                    <path d="M445 116l44-39 78 1 36 34 59 8 42 34-13 42-50 15-20 37-49-15-39-40-61-7-31-35z" />
                    {/* Africa */}
                    <path d="M520 229l58-7 48 38 12 60-34 97-46-28-12-62-34-47z" />
                    {/* Asia */}
                    <path d="M646 145l86-35 92 11 88 62-28 57-67 10-39 55-55-5-28-48-65-26z" />
                    {/* Australia */}
                    <path d="M814 358l55-24 67 38-20 57-70 14-40-39z" />
                    {/* Greenland */}
                    <path d="M391 73l29-26 36 8-10 34-43 9z" />
                  </g>

                  {/* India Land Highlight in Deep Navy */}
                  <path
                    d="M680 250 l25 -10 l15 25 l-10 35 l-18 15 l-12 -25 z"
                    fill="#0B1E3B"
                    stroke="#E11D48"
                    strokeWidth="1.5"
                  />

                  {/* Animated Trajectory Arcs in Brand Red */}
                  <g className="stroke-brand fill-none" strokeWidth="2" strokeDasharray="6,4">
                    {EXPORT_ROUTES.map((route) => (
                      <g key={route.label}>
                        <path d={route.d} className="opacity-75" />
                        {/* Destination Pulsing Dot */}
                        <circle cx={route.x} cy={route.y} r="5" fill="#E11D48" />
                        <circle cx={route.x} cy={route.y} r="9" stroke="#E11D48" strokeWidth="1" className="opacity-40 animate-ping" />
                      </g>
                    ))}
                  </g>

                  {/* India Hub Pulsing Wave & Label */}
                  <g className="pointer-events-none">
                    <circle cx="691" cy="276" r="16" fill="none" stroke="#E11D48" strokeWidth="1.5" className="animate-ping opacity-60" />
                    <circle cx="691" cy="276" r="6" fill="#E11D48" />
                  </g>

                  {/* India Hub Label Badge */}
                  <foreignObject x="696" y="260" width="110" height="34">
                    <div className="inline-flex items-center rounded-full bg-white border border-slate-300/80 px-2.5 py-0.5 text-[9px] font-black tracking-wider text-brand-blue-dark shadow-md">
                      INDIA HUB
                    </div>
                  </foreignObject>
                </svg>

                {/* Bottom-Left Floating Inset Capsule */}
                <div className="absolute bottom-4 left-4 rounded-2xl border border-slate-200/90 bg-white/95 p-3.5 sm:p-4 backdrop-blur-md shadow-lg max-w-[230px]">
                  <span className="text-[9px] font-black uppercase tracking-[0.2em] text-slate-400 block">
                    EXPANSION MODE
                  </span>
                  <span className="mt-1 text-xs font-bold text-brand-blue-dark block leading-snug">
                    Engineering packaging beyond borders
                  </span>
                  <span className="h-0.5 w-6 bg-brand inline-block mt-2 rounded-full" />
                </div>
              </div>
            </div>

            {/* Right Side Vertical Badges & Cursive Script */}
            <div className="hidden xl:flex flex-col justify-between py-2 select-none shrink-0 w-36">
              {/* Top Isometric Cube & Badges */}
              <div>
                <Package className="h-6 w-6 text-brand stroke-[2] mb-2" />
                <div className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-600 leading-snug">
                  PACK
                  <br />
                  PROTECT
                  <br />
                  MOVE
                  <br />
                  SUSTAIN
                </div>
                <span className="h-0.5 w-6 bg-brand inline-block my-2.5" />
                <div className="text-[9px] font-black uppercase tracking-[0.18em] text-slate-500 leading-snug">
                  STRONGER
                  <br />
                  SUPPLY CHAINS
                  <br />
                  GLOBALLY
                </div>
              </div>

              {/* Bottom Cursive Script */}
              <div className="mt-10">
                <span className="font-['Dancing_Script',cursive] text-2xl font-bold text-brand -rotate-6 block leading-tight">
                  From India
                  <br />
                  <span className="text-xl font-semibold">to the World</span>
                </span>
                <svg className="h-3 w-24 text-brand mt-1" viewBox="0 0 100 12" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M0 6 Q 50 12, 100 2" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* 2. BOTTOM ROW: Operational Footprint */}
        <div className="mt-16 sm:mt-20 border-t border-slate-200/80 pt-12 sm:pt-14">
          {/* Header */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2.5 text-xs font-black uppercase tracking-[0.28em] text-brand">
                <span className="h-1 w-8 bg-brand inline-block rounded-full" />
                OPERATIONAL FOOTPRINT
              </div>

              <h3 className="mt-2.5 text-2xl sm:text-3xl font-black text-brand-blue-dark tracking-tight">
                Manufacturing units &amp; warehouses across India
              </h3>
            </div>

            {/* Corporate Office Address */}
            <div className="flex items-start gap-2.5 max-w-md bg-slate-50 border border-slate-200/80 rounded-2xl p-3.5 sm:p-4">
              <MapPin className="h-4.5 w-4.5 text-brand shrink-0 mt-0.5" />
              <p className="text-xs sm:text-[13px] font-medium text-slate-600 leading-relaxed">
                Corporate Office: {COMPANY.address}
              </p>
            </div>
          </div>

          {/* 11 Location Cards Grid (4 columns) */}
          <div className="mt-8 sm:mt-10 grid gap-3.5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {INDIA_LOCATIONS.map((loc) => (
              <div
                key={loc}
                className="group flex items-center justify-between rounded-2xl border border-slate-200/90 bg-white px-4.5 py-3.5 shadow-[0_4px_14px_-4px_rgba(15,23,42,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-brand/40 hover:shadow-md cursor-pointer"
              >
                <div className="flex items-center gap-3 min-w-0 pr-2">
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-rose-50 text-brand transition-colors group-hover:bg-brand group-hover:text-white">
                    <MapPin className="h-3.5 w-3.5 stroke-[2]" />
                  </div>
                  <span className="text-xs sm:text-[13px] font-bold text-brand-blue-dark group-hover:text-brand transition-colors truncate">
                    {loc}
                  </span>
                </div>

                <ArrowRight className="h-3.5 w-3.5 shrink-0 text-slate-400 transition-all duration-300 group-hover:text-brand group-hover:translate-x-1" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}