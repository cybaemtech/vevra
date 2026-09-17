import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import {
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  Check,
  CheckCircle2,
  Clock,
  Factory,
  FileCheck2,
  FileText,
  Layers,
  Package,
  Settings,
  Shield,
  ShieldCheck,
  Truck,
  Users,
  UsersRound,
} from "lucide-react";

import { SiteLayout } from "@/components/site/SiteLayout";
import { SERVICES } from "@/lib/site-content";
import { SERVICE_IMAGES } from "@/lib/site-images";

const SERVICE_SLUG_ALIASES: Record<string, string> = {
  engineering: "packaging-engineering",
  "design-engineering": "packaging-engineering",
  returnables: "returnable-packaging",
  returnable: "returnable-packaging",
  rental: "packaging-rental",
  pooling: "equipment-pooling",
  onsite: "on-site-packaging-operations",
  "on-site": "on-site-packaging-operations",
  transport: "transport-logistics",
  logistics: "transport-logistics",
  warehousing: "warehouse-packaging-management",
  "warehouse-management": "warehouse-packaging-management",
};

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const canonicalSlug = SERVICE_SLUG_ALIASES[params.slug] || params.slug;
    const service =
      SERVICES.find((s) => s.slug === canonicalSlug) ||
      SERVICES.find((s) => s.slug === params.slug) ||
      SERVICES[0];
    return { service };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Service unavailable | VEVRA Packaging" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const { service } = loaderData;
    return {
      meta: [
        { title: `${service.name} | VEVRA Packaging` },
        { name: "description", content: service.short },
        { property: "og:title", content: `${service.name} — VEVRA Packaging` },
        { property: "og:description", content: service.short },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: ServiceDetail,
});

function formatServiceTitle(name: string) {
  const words = name.split(" ");
  if (words.length > 2) {
    return {
      main: words.slice(0, -1).join(" "),
      accent: words[words.length - 1],
    };
  }
  if (words.length === 2) {
    return {
      main: words[0],
      accent: words[1],
    };
  }
  return {
    main: name,
    accent: "",
  };
}

const FEATURE_ICONS = [
  { icon: UsersRound, bg: "bg-rose-50 text-brand" },
  { icon: Package, bg: "bg-blue-50 text-brand-blue" },
  { icon: Factory, bg: "bg-rose-50 text-brand" },
  { icon: Truck, bg: "bg-blue-50 text-brand-blue" },
  { icon: Settings, bg: "bg-rose-50 text-brand" },
  { icon: FileCheck2, bg: "bg-blue-50 text-brand-blue" },
];

function getFeatureDescription(point: string, serviceSlug: string) {
  const map: Record<string, string> = {
    "Packaging manpower": "Skilled manpower for end-to-end packaging operations.",
    "Material handling": "Efficient handling of materials and packaging components.",
    "On-site packing": "On-site packing as per your production needs and timelines.",
    "Dispatch support": "Timely dispatch coordination to ensure smooth deliveries.",
    "Packaging operations": "Complete on-site packaging process execution and supervision.",
    "Process discipline": "Standardized processes for quality, safety and efficiency.",
    "Packaging design": "Engineered around product protection and stack efficiency.",
    "Engineering and prototyping": "Rapid functional prototypes for rigorous transit validation.",
    "Transit trials and testing": "Dynamic stress and vibration simulation for zero damage.",
    "Reusable packaging systems": "Built to withstand repeated cycles across distribution networks.",
    "Asset circulation": "Tracking and pooling systems to maximize asset turns.",
    "Zero or reduced capex model": "Pay for utilization rather than heavy upfront capital.",
  };
  return map[point] || `Specialized ${point.toLowerCase()} tailored for your specific operating environment.`;
}

function ServiceDetail() {
  const { service } = Route.useLoaderData();
  const titleFormatted = formatServiceTitle(service.name);
  const serviceImage = SERVICE_IMAGES[service.slug] || SERVICE_IMAGES["on-site-packaging-operations"];

  return (
    <SiteLayout>
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden bg-white text-slate-900 border-b border-slate-100">
        {/* Ambient subtle red curve / radiance on left */}
        <div className="pointer-events-none absolute -left-24 top-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-rose-50/70 blur-3xl" />
        <div className="pointer-events-none absolute -left-10 bottom-0 h-48 w-48 rounded-full bg-rose-100/40 blur-2xl" />

        {/* Right side panoramic image background (seamless bleed without card shell) */}
        <div className="hidden lg:block absolute right-0 top-0 bottom-0 w-[52%] xl:w-[50%] pointer-events-none select-none overflow-hidden">
          <img
            src={serviceImage}
            alt={`${service.name} Operations by VEVRA`}
            className="w-full h-full object-cover object-left"
            loading="eager"
          />
          {/* Left subtle fade to blend seamlessly into white hero content */}
          <div className="absolute inset-y-0 left-0 w-32 xl:w-48 bg-gradient-to-r from-white via-white/80 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white/30 to-transparent" />
        </div>

        <div className="relative mx-auto max-w-[1440px] px-8 sm:px-10 lg:px-12 xl:px-14 py-12 sm:py-16 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] items-center">
            {/* Left Content */}
            <div className="max-w-[640px] z-10">
              <div className="flex items-center gap-2.5 text-xs font-black uppercase tracking-[0.28em] text-brand">
                <span className="h-1 w-8 bg-brand inline-block rounded-full" />
                SERVICE CAPABILITY
              </div>

              <h1 className="mt-4 text-3xl sm:text-4xl lg:text-[2.85rem] xl:text-[3.35rem] font-black tracking-tight leading-[1.08] text-brand-blue-dark">
                {titleFormatted.main} <br />
                <span className="text-brand">{titleFormatted.accent}</span>
              </h1>

              <p className="mt-4 text-sm sm:text-base leading-relaxed text-slate-600 font-medium max-w-[520px]">
                {service.short}
              </p>

              {/* Action Buttons + Cursive Script */}
              <div className="mt-8 flex flex-wrap items-center gap-6">
                <div className="flex flex-wrap items-center gap-4">
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

                {/* Cursive Tagline Accent */}
                <div className="hidden sm:flex items-center gap-1.5 text-brand-blue-dark select-none">
                  <div className="text-center -rotate-6">
                    <span className="font-['Dancing_Script',cursive] text-2xl font-bold text-brand-blue-dark block leading-tight">
                      Packaging <br />
                      <span className="text-xl font-bold">at your</span> <br />
                      <span className="text-2xl font-black text-brand-blue-dark">Production Site</span>
                    </span>
                    <div className="w-16 h-1 bg-brand rounded-full mx-auto mt-0.5" />
                  </div>
                  <ArrowUpRight className="h-6 w-6 stroke-[2.5] text-brand-blue-dark -mt-4" />
                </div>
              </div>

              {/* 3 Value Badges in Row with Vertical Dividers */}
              <div className="mt-12 pt-8 border-t border-slate-200/80 grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-slate-200">
                <div className="flex items-start gap-3 sm:pr-4 py-3 sm:py-0">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-rose-50 text-brand">
                    <Settings className="h-4.5 w-4.5 stroke-[2]" />
                  </div>
                  <div>
                    <span className="text-xs font-black text-brand-blue-dark block">Flexible &amp; Scalable</span>
                    <span className="text-[11px] text-slate-500 font-medium block leading-tight mt-0.5">On-Demand Support</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 sm:px-4 py-3 sm:py-0">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-rose-50 text-brand">
                    <Users className="h-4.5 w-4.5 stroke-[2]" />
                  </div>
                  <div>
                    <span className="text-xs font-black text-brand-blue-dark block">Skilled Manpower</span>
                    <span className="text-[11px] text-slate-500 font-medium block leading-tight mt-0.5">Trained &amp; Reliable</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 sm:pl-4 py-3 sm:py-0">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-rose-50 text-brand">
                    <ShieldCheck className="h-4.5 w-4.5 stroke-[2]" />
                  </div>
                  <div>
                    <span className="text-xs font-black text-brand-blue-dark block">Safe &amp; Efficient</span>
                    <span className="text-[11px] text-slate-500 font-medium block leading-tight mt-0.5">Industry Best Practices</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Visual Area (Mobile image & Desktop floating overlays) */}
            <div className="relative w-full min-h-[340px] sm:min-h-[420px] lg:min-h-[480px] flex flex-col justify-between items-end">
              {/* Mobile/Tablet Fallback Image (shown only below lg screens) */}
              <div className="lg:hidden w-full h-72 sm:h-96 rounded-2xl overflow-hidden mb-4 relative">
                <img
                  src={serviceImage}
                  alt={`${service.name} Operations by VEVRA`}
                  className="w-full h-full object-cover"
                  loading="eager"
                />
              </div>

              {/* Floating Stat Badge (Top Right) */}
              <div className="rounded-2xl bg-white/95 border border-slate-200/80 p-3.5 sm:p-4 backdrop-blur-md shadow-xl flex items-center gap-3 self-end z-10 transition-transform duration-300 hover:scale-105">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-rose-50 text-brand">
                  <BarChart3 className="h-5 w-5 stroke-[2.5]" />
                </div>
                <div>
                  <span className="text-lg sm:text-xl font-black text-brand-blue-dark block leading-none">500+</span>
                  <span className="text-[9px] font-black uppercase tracking-[0.14em] text-slate-500 block mt-1">Packaging Operations Supported</span>
                </div>
              </div>

              {/* Floating Dark Benefit Panel (Bottom Right) */}
              <div className="mt-auto rounded-2xl bg-[#081830]/95 border border-white/15 p-4 sm:p-5 backdrop-blur-md text-white shadow-2xl w-full max-w-[280px] space-y-2.5 z-10 select-none">
                <div className="flex items-center gap-3 text-xs font-bold text-slate-200">
                  <Settings className="h-4 w-4 text-rose-400 shrink-0" />
                  <span>Reduce Operational Efforts</span>
                </div>
                <div className="flex items-center gap-3 text-xs font-bold text-slate-200">
                  <Clock className="h-4 w-4 text-rose-400 shrink-0" />
                  <span>On-Time Execution</span>
                </div>
                <div className="flex items-center gap-3 text-xs font-bold text-slate-200">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                  <span>Consistent Quality</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. OVERVIEW & CAPABILITIES BREAKDOWN */}
      <section className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-24 text-slate-900" aria-labelledby="overview-title">
        <div className="relative mx-auto max-w-[1440px] px-8 sm:px-10 lg:px-12 xl:px-14">
          {/* Section Header */}
          <div className="max-w-[700px]">
            <div className="flex items-center gap-2.5 text-xs font-black uppercase tracking-[0.28em] text-brand">
              <span className="h-1 w-8 bg-brand inline-block rounded-full" />
              OVERVIEW
            </div>

            <h2
              id="overview-title"
              className="mt-3.5 text-3xl sm:text-4xl lg:text-[2.6rem] font-black tracking-tight text-brand-blue-dark"
            >
              What this service <span className="text-brand">covers</span>
            </h2>

            <p className="mt-3 text-sm sm:text-base leading-relaxed text-slate-600 font-medium">
              {service.intro}
            </p>
          </div>

          {/* Main 2-Column Content Grid: Left Photo with Floating Metrics + Right 6 Cards Grid */}
          <div className="mt-12 sm:mt-14 grid gap-12 lg:grid-cols-[0.95fr_1.2fr] items-start">
            {/* Left Photo Card + Floating Metrics + Tagline */}
            <div className="flex flex-col gap-6 order-2 lg:order-1">
              <div className="relative w-full rounded-3xl overflow-hidden shadow-2xl border border-slate-100 bg-slate-900 group">
                <img
                  src={serviceImage}
                  alt={`${service.name} Process`}
                  className="w-full h-auto object-cover min-h-[340px] sm:min-h-[380px] max-h-[440px] transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />

                {/* Top Floating Glass Badge */}
                <div className="absolute top-5 right-5 rounded-2xl bg-white/95 border border-slate-200/80 p-3.5 backdrop-blur-md shadow-lg flex items-center gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-rose-50 text-brand">
                    <BarChart3 className="h-4.5 w-4.5 stroke-[2.5]" />
                  </div>
                  <div>
                    <span className="text-base sm:text-lg font-black text-brand-blue-dark block leading-none">500+</span>
                    <span className="text-[9px] font-black uppercase tracking-[0.16em] text-slate-500 block mt-0.5">Packaging Operations Supported</span>
                  </div>
                </div>

                {/* Bottom Floating Dual Badges */}
                <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between gap-3">
                  <div className="rounded-2xl bg-white/95 border border-slate-200/80 px-4 py-2.5 backdrop-blur-md shadow-md flex items-center gap-2.5">
                    <ShieldCheck className="h-5 w-5 text-brand-blue stroke-[2.2]" />
                    <div>
                      <span className="text-sm font-black text-brand-blue-dark block leading-none">99.8%</span>
                      <span className="text-[9px] font-black uppercase tracking-[0.16em] text-slate-500 block mt-0.5">On-Time Dispatch</span>
                    </div>
                  </div>

                  <div className="rounded-2xl bg-white/95 border border-slate-200/80 px-4 py-2.5 backdrop-blur-md shadow-md flex items-center gap-2.5">
                    <Package className="h-5 w-5 text-brand stroke-[2]" />
                    <div className="text-[9px] font-black uppercase tracking-[0.14em] text-brand-blue-dark leading-tight">
                      Safe <br />
                      Efficient <br />
                      Reliable
                    </div>
                  </div>
                </div>
              </div>

              {/* Tagline under image */}
              <div className="border-l-2 border-brand/80 pl-4 py-1">
                <span className="text-[10px] font-black uppercase tracking-[0.24em] text-slate-500 block">
                  ON-SITE. ON TIME. EVERY TIME.
                </span>
                <h4 className="mt-1 text-lg sm:text-xl font-black text-brand-blue-dark">
                  Reliable people. Stronger operations.
                </h4>
              </div>
            </div>

            {/* Right 6 Feature Cards Grid (2 cols x 3 rows) */}
            <div className="order-1 lg:order-2">
              <div className="grid gap-4.5 sm:grid-cols-2 md:grid-cols-3">
                {service.points.slice(0, 6).map((point, index) => {
                  const style = FEATURE_ICONS[index % FEATURE_ICONS.length] || FEATURE_ICONS[0];
                  const Icon = style.icon;
                  return (
                    <div
                      key={point}
                      className="group rounded-3xl border border-slate-200/90 bg-white p-5 shadow-[0_4px_16px_-4px_rgba(15,23,42,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-brand/40 hover:shadow-lg flex flex-col justify-between min-h-[160px]"
                    >
                      <div className={`flex h-10 w-10 items-center justify-center rounded-2xl ${style.bg} shadow-sm transition-transform duration-300 group-hover:scale-110`}>
                        <Icon className="h-5 w-5 stroke-[2]" />
                      </div>

                      <div className="mt-4">
                        <h3 className="text-sm font-black text-brand-blue-dark group-hover:text-brand transition-colors">
                          {point}
                        </h3>
                        <p className="mt-1.5 text-xs text-slate-500 font-medium leading-relaxed">
                          {getFeatureDescription(point, service.slug)}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Action Buttons */}
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <Link
                  to="/contact"
                  className="rounded-full bg-brand px-7 sm:px-8 py-3.5 text-xs sm:text-sm font-black uppercase tracking-[0.14em] text-white shadow-lg shadow-brand/25 transition-all duration-300 hover:bg-brand-dark hover:scale-105 inline-flex items-center gap-2.5"
                >
                  <span>Generate Quick RFQ</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>

                <Link
                  to="/services"
                  className="rounded-full border border-slate-300 bg-white px-7 sm:px-8 py-3.5 text-xs sm:text-sm font-black uppercase tracking-[0.14em] text-brand-blue-dark transition-all duration-300 hover:border-brand hover:text-brand hover:scale-105 inline-flex items-center gap-2.5"
                >
                  <span>All Services</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
