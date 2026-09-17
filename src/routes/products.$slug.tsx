import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import {
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  Boxes,
  CheckCircle2,
  Clock,
  Globe2,
  Layers,
  Package,
  Settings,
  Shield,
  ShieldCheck,
  Sparkles,
  Truck,
} from "lucide-react";

import { SiteLayout } from "@/components/site/SiteLayout";
import { PRODUCTS } from "@/lib/site-content";
import { PRODUCT_IMAGES } from "@/lib/site-images";

const PRODUCT_SLUG_ALIASES: Record<string, string> = {
  "corrugated-paper-packaging": "corrugated",
  "corrugated-boxes": "corrugated",
  plastic: "plastic-pp",
  pp: "plastic-pp",
  "plastic-pp-packaging": "plastic-pp",
  "metal-returnable-packaging": "metal",
  "metal-packaging": "metal",
  wood: "wood-plywood",
  plywood: "wood-plywood",
  "wood-plywood-packaging": "wood-plywood",
  "protective-packaging": "protective",
  "pulp-honeycomb": "protective",
  "pulp-honeycomb-packaging": "protective",
  labels: "labels-identification",
  identification: "labels-identification",
  "labels-and-identification": "labels-identification",
  customized: "customized-packaging",
  "custom-packaging": "customized-packaging",
};

export const Route = createFileRoute("/products/$slug")({
  loader: ({ params }) => {
    const canonicalSlug = PRODUCT_SLUG_ALIASES[params.slug] || params.slug;
    const product =
      PRODUCTS.find((p) => p.slug === canonicalSlug) ||
      PRODUCTS.find((p) => p.slug === params.slug) ||
      PRODUCTS[0];
    return { product };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Product unavailable | VEVRA Packaging" }, { name: "robots", content: "noindex" }],
      };
    }
    const { product } = loaderData;
    return {
      meta: [
        { title: `${product.name} | VEVRA Packaging` },
        { name: "description", content: product.short },
        { property: "og:title", content: `${product.name} — VEVRA Packaging` },
        { property: "og:description", content: product.short },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: ProductDetail,
});

function formatProductTitle(name: string) {
  if (name.includes("Packaging")) {
    const parts = name.split("Packaging");
    return {
      main: parts[0].trim(),
      accent: "Packaging",
    };
  }
  const words = name.split(" ");
  if (words.length > 1) {
    return {
      main: words.slice(0, -1).join(" "),
      accent: words[words.length - 1],
    };
  }
  return {
    main: name,
    accent: "Solutions",
  };
}

function ProductDetail() {
  const { product } = Route.useLoaderData();
  const titleFormatted = formatProductTitle(product?.name || "Product Solutions");
  const productImage = (product?.slug && PRODUCT_IMAGES[product.slug]) || PRODUCT_IMAGES["corrugated"];

  // Split points for the 2 problem/use-case blocks
  const problemPoints = product.points.slice(0, 3);
  const applicationPoints = product.points.length > 3 ? product.points.slice(3, 6) : product.points;

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
            src={productImage}
            alt={`${product.name} Solutions by VEVRA`}
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
                PRODUCT CAPABILITY
              </div>

              <h1 className="mt-4 text-3xl sm:text-4xl lg:text-[2.85rem] xl:text-[3.35rem] font-black tracking-tight leading-[1.08] text-brand-blue-dark">
                {titleFormatted.main} <br />
                <span className="text-brand">{titleFormatted.accent}</span>
              </h1>

              <p className="mt-4 text-sm sm:text-base leading-relaxed text-slate-600 font-medium max-w-[520px]">
                {product.short}
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
                      Engineered <br />
                      <span className="text-xl font-bold">for your</span> <br />
                      <span className="text-2xl font-black text-brand-blue-dark">Supply Chain</span>
                    </span>
                    <div className="w-16 h-1 bg-brand rounded-full mx-auto mt-0.5" />
                  </div>
                  <ArrowUpRight className="h-6 w-6 stroke-[2.5] text-brand-blue-dark -mt-4" />
                </div>
              </div>

              {/* 3 Value Pillars in Row */}
              <div className="mt-12 pt-8 border-t border-slate-200/80 grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-slate-200">
                <div className="flex items-start gap-3 sm:pr-4 py-3 sm:py-0">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-rose-50 text-brand">
                    <Shield className="h-4.5 w-4.5 stroke-[2]" />
                  </div>
                  <div>
                    <span className="text-xs font-black text-brand-blue-dark block">Strong &amp; Reliable</span>
                    <span className="text-[11px] text-slate-500 font-medium block leading-tight mt-0.5">Built for heavy-duty protection</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 sm:px-4 py-3 sm:py-0">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-rose-50 text-brand">
                    <CheckCircle2 className="h-4.5 w-4.5 stroke-[2]" />
                  </div>
                  <div>
                    <span className="text-xs font-black text-brand-blue-dark block">Custom Solutions</span>
                    <span className="text-[11px] text-slate-500 font-medium block leading-tight mt-0.5">Designed for your application</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 sm:pl-4 py-3 sm:py-0">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-rose-50 text-brand">
                    <Globe2 className="h-4.5 w-4.5 stroke-[2]" />
                  </div>
                  <div>
                    <span className="text-xs font-black text-brand-blue-dark block">Global Ready</span>
                    <span className="text-[11px] text-slate-500 font-medium block leading-tight mt-0.5">Export-ready compliance</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Visual Area (Mobile image & Desktop floating overlays) */}
            <div className="relative w-full min-h-[340px] sm:min-h-[420px] lg:min-h-[480px] flex flex-col justify-between items-end">
              {/* Mobile/Tablet Fallback Image (shown only below lg screens) */}
              <div className="lg:hidden w-full h-72 sm:h-96 rounded-2xl overflow-hidden mb-4 relative">
                <img
                  src={productImage}
                  alt={`${product.name} Solutions by VEVRA`}
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
                  <span className="text-lg sm:text-xl font-black text-brand-blue-dark block leading-none">10,000+</span>
                  <span className="text-[9px] font-black uppercase tracking-[0.14em] text-slate-500 block mt-1">Industrial Shipments Protected</span>
                </div>
              </div>

              {/* Floating Dark Benefit Panel (Bottom Right) */}
              <div className="mt-auto rounded-2xl bg-[#081830]/95 border border-white/15 p-4 sm:p-5 backdrop-blur-md text-white shadow-2xl w-full max-w-[280px] space-y-2.5 z-10 select-none">
                <div className="flex items-center gap-3 text-xs font-bold text-slate-200">
                  <ShieldCheck className="h-4 w-4 text-rose-400 shrink-0" />
                  <span>Heavy-Duty Protection</span>
                </div>
                <div className="flex items-center gap-3 text-xs font-bold text-slate-200">
                  <Clock className="h-4 w-4 text-rose-400 shrink-0" />
                  <span>Engineered Precision</span>
                </div>
                <div className="flex items-center gap-3 text-xs font-bold text-slate-200">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                  <span>100% Quality Guaranteed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. OVERVIEW & SOLUTIONS BREAKDOWN */}
      <section className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-24 text-slate-900" aria-labelledby="overview-title">
        <div className="relative mx-auto max-w-[1440px] px-8 sm:px-10 lg:px-12 xl:px-14">
          {/* Section Header Row */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-12 border-b border-slate-100">
            <div>
              <div className="flex items-center gap-2.5 text-xs font-black uppercase tracking-[0.28em] text-brand">
                <span className="h-1 w-8 bg-brand inline-block rounded-full" />
                OVERVIEW
              </div>

              <h2
                id="overview-title"
                className="mt-3 text-3xl sm:text-4xl lg:text-[2.6rem] font-black tracking-tight text-brand-blue-dark"
              >
                {product.name} solutions
              </h2>

              <p className="mt-3 text-sm sm:text-base leading-relaxed text-slate-600 font-medium max-w-[640px]">
                {product.intro}
              </p>
            </div>

            {/* Right Accent Vertical Badge */}
            <div className="hidden lg:flex items-start gap-3 shrink-0 select-none pl-4 border-l-2 border-brand/60 py-1">
              <div className="text-[10px] font-black uppercase tracking-[0.22em] text-slate-600 leading-snug">
                RELIABLE
                <br />
                PACKAGING
                <br />
                FOR A GLOBAL
                <br />
                TOMORROW
                <br />
                <span className="h-0.5 w-5 bg-brand inline-block mt-1.5" />
              </div>
            </div>
          </div>

          {/* Main 2-Column Content Grid: Left Image + Right Problem/Use-case Lists */}
          <div className="mt-12 sm:mt-14 grid gap-12 lg:grid-cols-[1.1fr_1fr] items-start">
            {/* Left Photo Container with Overlay & Floating Inset */}
            <div className="relative w-full rounded-3xl overflow-hidden shadow-xl border border-slate-100 bg-slate-900 group">
              <img
                src={productImage}
                alt={`${product.name} Industrial Packaging Solutions`}
                className="w-full h-auto object-cover min-h-[380px] sm:min-h-[440px] max-h-[500px]"
                loading="lazy"
              />

              {/* Watermark text */}
              <div className="absolute right-6 top-8 text-right select-none pointer-events-none">
                <span className="text-xl sm:text-2xl font-black uppercase tracking-[0.2em] text-white/40 block leading-tight drop-shadow-md">
                  GLOBAL
                  <br />
                  PACKAGING
                  <br />
                  SOLUTIONS
                </span>
              </div>

              {/* Inset Floating Badge (Bottom-left) */}
              <div className="absolute bottom-6 left-6 rounded-2xl bg-slate-950/80 border border-white/10 px-4 py-3 backdrop-blur-md text-white shadow-lg">
                <span className="text-[10px] font-black uppercase tracking-[0.22em] text-slate-300 block">
                  ENGINEERED FOR
                </span>
                <span className="text-xs sm:text-[13px] font-black tracking-wider text-white block mt-0.5">
                  SAFER SUPPLY CHAINS
                </span>
                <span className="h-0.5 w-6 bg-brand inline-block mt-1.5 rounded-full" />
              </div>
            </div>

            {/* Right Column: Problem Solving & Use Case Pill Cards */}
            <div className="space-y-8">
              {/* Block 1: What problem does it solve? */}
              <div>
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-rose-50 text-brand shadow-sm">
                    <ShieldCheck className="h-5 w-5 stroke-[2]" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-black text-brand-blue-dark">
                    What problem does it solve?
                  </h3>
                </div>

                <p className="mt-3 text-xs sm:text-sm leading-relaxed text-slate-600 font-medium">
                  A packaging format selected around product protection, handling, storage, transit and the total cost of the packaging ecosystem.
                </p>

                {/* 3 Points Cards */}
                <div className="mt-4 space-y-2.5">
                  {problemPoints.map((pt) => (
                    <div
                      key={pt}
                      className="group flex items-center justify-between rounded-xl border border-slate-200/90 bg-white px-5 py-3 shadow-[0_2px_8px_-2px_rgba(15,23,42,0.03)] transition-all duration-300 hover:border-brand/50 hover:shadow-sm hover:-translate-y-0.5 cursor-pointer"
                    >
                      <span className="text-xs sm:text-sm font-bold text-brand-blue-dark group-hover:text-brand transition-colors">
                        {pt}
                      </span>
                      <ArrowRight className="h-3.5 w-3.5 text-brand transition-transform group-hover:translate-x-1" />
                    </div>
                  ))}
                </div>
              </div>

              {/* Block 2: Where is it used? */}
              <div>
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-rose-50 text-brand shadow-sm">
                    <Settings className="h-5 w-5 stroke-[2]" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-black text-brand-blue-dark">
                    Where is it used?
                  </h3>
                </div>

                <p className="mt-3 text-xs sm:text-sm leading-relaxed text-slate-600 font-medium">
                  Across manufacturing, industrial, automotive, consumer and export supply chains, with customization available for the application.
                </p>

                {/* 3 Points Cards */}
                <div className="mt-4 space-y-2.5">
                  {applicationPoints.map((pt) => (
                    <div
                      key={pt}
                      className="group flex items-center justify-between rounded-xl border border-slate-200/90 bg-white px-5 py-3 shadow-[0_2px_8px_-2px_rgba(15,23,42,0.03)] transition-all duration-300 hover:border-brand/50 hover:shadow-sm hover:-translate-y-0.5 cursor-pointer"
                    >
                      <span className="text-xs sm:text-sm font-bold text-brand-blue-dark group-hover:text-brand transition-colors">
                        {pt}
                      </span>
                      <ArrowRight className="h-3.5 w-3.5 text-brand transition-transform group-hover:translate-x-1" />
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Action Buttons */}
              <div className="mt-8 pt-4 flex flex-wrap items-center gap-4">
                <Link
                  to="/contact"
                  className="rounded-full bg-brand px-7 sm:px-8 py-3.5 text-xs sm:text-sm font-black uppercase tracking-[0.14em] text-white shadow-lg shadow-brand/25 transition-all duration-300 hover:bg-brand-dark hover:scale-105 inline-flex items-center gap-2.5"
                >
                  <span>Generate Quick RFQ</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>

                <Link
                  to="/products"
                  className="rounded-full border border-slate-300 bg-white px-7 sm:px-8 py-3.5 text-xs sm:text-sm font-black uppercase tracking-[0.14em] text-brand-blue-dark transition-all duration-300 hover:border-brand hover:text-brand hover:scale-105 inline-flex items-center gap-2.5"
                >
                  <span>All Products</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
