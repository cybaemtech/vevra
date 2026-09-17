import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Award,
  Calendar,
  Camera,
  ChevronLeft,
  ChevronRight,
  Download,
  Heart,
  Image as ImageIcon,
  MapPin,
  Maximize2,
  PartyPopper,
  Pause,
  Play,
  Quote,
  Sparkles,
  Star,
  Target,
  Trophy,
  Users,
  Utensils,
  Leaf,
  Layers,
} from "lucide-react";

import { SiteLayout } from "@/components/site/SiteLayout";

// Real Event & Celebration Images from assets/Event&Celebration
import celebration1Img from "@/assets/Event&Celebration/Celebration-1.png";
import eventEbikeImg from "@/assets/Event&Celebration/Event-e-bike.png";
import eventOfficeImg from "@/assets/Event&Celebration/EventToffice.png";
import vehicleRestaurantImg from "@/assets/Event&Celebration/Vehicle-restrorant.png";
import poojaOfficeImg from "@/assets/Event&Celebration/poojaatoffice.png";
import teamImg from "@/assets/Event&Celebration/team.png";

export const Route = createFileRoute("/life-at-vevra")({
  head: () => ({
    meta: [
      { title: "Life at VEVRA — Celebrations, Culture & Moments | VEVRA" },
      {
        name: "description",
        content:
          "At VEVRA, we celebrate our journey together. Explore our culture, team building events, festive celebrations, and milestones that bring us closer.",
      },
    ],
  }),
  component: LifeAtVevraPage,
});

// Gallery Items using real Event & Celebration images
const GALLERY_ITEMS = [
  {
    id: 1,
    category: "Team Togetherness",
    title: "VEVRA Core Team & Leadership Gathering",
    location: "Corporate Office, Pune",
    image: teamImg,
  },
  {
    id: 2,
    category: "Festive Pooja",
    title: "Traditional Office Pooja & Cultural Celebration",
    location: "Corporate Office, Pune",
    image: poojaOfficeImg,
  },
  {
    id: 3,
    category: "Celebrations",
    title: "Milestone Celebration & Team Achievements",
    location: "VEVRA Headquarters",
    image: celebration1Img,
  },
  {
    id: 4,
    category: "Corporate Events",
    title: "Team Conference & Corporate Strategy Meet",
    location: "Pune, Maharashtra",
    image: eventOfficeImg,
  },
  {
    id: 5,
    category: "E-Mobility Showcase",
    title: "Electric Mobility & Smart E-Bike Showcase",
    location: "Pune, Maharashtra",
    image: eventEbikeImg,
  },
  {
    id: 6,
    category: "Mobile Restaurant",
    title: "Electric Restaurant on Wheels & Fleet Showcase",
    location: "Exhibition Center, India",
    image: vehicleRestaurantImg,
  },
];

// Year-round Highlight Events with real Event & Celebration images
const YEAR_EVENTS = [
  {
    month: "JAN",
    year: "2026",
    title: "New Year Celebration",
    description: "Welcoming new horizons and setting ambitious team goals.",
    image: celebration1Img,
  },
  {
    month: "MAR",
    year: "2026",
    title: "Traditional Office Pooja",
    description: "Festivities, traditional rituals and cultural harmony.",
    image: poojaOfficeImg,
  },
  {
    month: "JUN",
    year: "2026",
    title: "Corporate Strategy Meet",
    description: "Leadership team meet and company roadmap presentation.",
    image: eventOfficeImg,
  },
  {
    month: "AUG",
    year: "2026",
    title: "E-Mobility Expo Meet",
    description: "Unveiling new generation electric vehicles and smart accessories.",
    image: eventEbikeImg,
  },
  {
    month: "OCT",
    year: "2026",
    title: "Restaurant on Wheels",
    description: "Showcasing modular mobile electric food cart fleet solutions.",
    image: vehicleRestaurantImg,
  },
  {
    month: "DEC",
    year: "2026",
    title: "Annual Day & Awards",
    description: "Recognizing outstanding performances and celebrating team success.",
    image: teamImg,
  },
];

// Culture Cards
const CULTURE_PILLARS = [
  {
    icon: Users,
    title: "People First",
    description: "We celebrate every individual and their contribution.",
  },
  {
    icon: Leaf,
    title: "Work-Life Balance",
    description: "Events that refresh, energize and inspire.",
  },
  {
    icon: Target,
    title: "Together We Grow",
    description: "From small wins to big milestones, we move as one.",
  },
  {
    icon: Star,
    title: "A Brighter Tomorrow",
    description: "Building a positive, inclusive and future-ready culture.",
  },
];

function LifeAtVevraPage() {
  const [activeGalleryIdx, setActiveGalleryIdx] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Automatic slideshow: advance slide every 3.5 seconds
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setActiveGalleryIdx((prev) => (prev === GALLERY_ITEMS.length - 1 ? 0 : prev + 1));
    }, 3500);

    return () => clearInterval(timer);
  }, [isPaused]);

  const prevGallery = () => {
    setActiveGalleryIdx((prev) => (prev === 0 ? GALLERY_ITEMS.length - 1 : prev - 1));
  };

  const nextGallery = () => {
    setActiveGalleryIdx((prev) => (prev === GALLERY_ITEMS.length - 1 ? 0 : prev + 1));
  };

  const activeItem = GALLERY_ITEMS[activeGalleryIdx];

  return (
    <SiteLayout>
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#F8FAFC] via-[#FDFDFE] to-white pt-12 pb-16 lg:pt-16 lg:pb-24">
        {/* Background Ambient Glows & Grid Accent */}
        <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 -z-10 h-[500px] w-full max-w-7xl">
          <div className="absolute top-10 left-10 h-72 w-72 rounded-full bg-rose-400/15 blur-3xl" />
          <div className="absolute top-20 right-10 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl" />
          <div className="absolute bottom-10 left-1/3 h-64 w-64 rounded-full bg-amber-400/10 blur-3xl" />
        </div>

        <div className="mx-auto max-w-[1280px] px-6">
          <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-14">
            
            {/* Left Column: Heading, Badges, Metrics & Actions */}
            <div className="lg:col-span-6">
              {/* Premium Pill Badge */}
              <div className="inline-flex items-center gap-2 rounded-full border border-rose-200/80 bg-rose-50/80 px-4 py-1.5 shadow-sm backdrop-blur">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D9232A] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#D9232A]"></span>
                </span>
                <span className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#D9232A]">
                  LIFE &amp; CULTURE AT VEVRA
                </span>
              </div>

              {/* High-impact Title */}
              <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-[#0B1930] sm:text-5xl lg:text-[3.65rem] lg:leading-[1.1]">
                Celebrations <br />
                That Bring Us{" "}
                <span className="bg-gradient-to-r from-[#D9232A] via-rose-600 to-amber-600 bg-clip-text text-transparent">
                  Closer
                </span>
              </h1>

              {/* Subtitle */}
              <p className="mt-5 max-w-xl text-base leading-relaxed text-[#4A5568] sm:text-lg">
                At VEVRA, we don't just engineer sustainable mobility &amp; modular kitchens — we celebrate every step of our journey. From milestone breakthroughs to festive traditions, our moments inspire lasting bonds.
              </p>

              {/* Mini Highlights Strip */}
              <div className="mt-6 flex flex-wrap items-center gap-4 text-xs font-bold text-[#0B1930]">
                <div className="flex items-center gap-2 rounded-xl bg-slate-100/80 px-3.5 py-2 border border-slate-200/60">
                  <PartyPopper className="h-4 w-4 text-[#D9232A]" />
                  <span>50+ Yearly Events</span>
                </div>
                <div className="flex items-center gap-2 rounded-xl bg-slate-100/80 px-3.5 py-2 border border-slate-200/60">
                  <Users className="h-4 w-4 text-blue-600" />
                  <span>1 United Team</span>
                </div>
                <div className="flex items-center gap-2 rounded-xl bg-slate-100/80 px-3.5 py-2 border border-slate-200/60">
                  <Sparkles className="h-4 w-4 text-amber-500" />
                  <span>100% Passion</span>
                </div>
              </div>

              {/* Dual Action Buttons */}
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href="#gallery-section"
                  className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-gradient-to-r from-[#D9232A] to-[#b81d23] px-8 py-3.5 text-sm font-bold text-white shadow-xl shadow-[#D9232A]/25 transition-all duration-300 hover:shadow-2xl hover:shadow-[#D9232A]/35 hover:-translate-y-0.5 active:scale-[0.98]"
                >
                  <span>Explore Media Gallery</span>
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>

                <a
                  href="#culture-section"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-300/80 bg-white/90 px-6 py-3.5 text-sm font-bold text-[#0B1930] shadow-sm backdrop-blur transition-all duration-300 hover:border-slate-400 hover:bg-slate-50 hover:-translate-y-0.5"
                >
                  <Heart className="h-4 w-4 text-[#D9232A]" />
                  <span>Our Culture</span>
                </a>
              </div>
            </div>

            {/* Right Column: Multi-layered Glass Card Showcase */}
            <div className="relative lg:col-span-6">
              {/* Backlight Glow Behind Frame */}
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-r from-[#D9232A]/20 via-blue-600/15 to-amber-500/20 blur-2xl -z-10" />

              {/* Outer Framed Presentation Card */}
              <div className="relative rounded-[28px] bg-gradient-to-tr from-slate-300/60 via-rose-200/40 to-blue-200/60 p-[3px] shadow-2xl">
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[25px] bg-slate-950">
                  <img
                    src={teamImg}
                    alt="VEVRA Team Celebrations and Moments"
                    className="h-full w-full object-cover object-center transition-transform duration-700 hover:scale-105"
                  />
                  
                  {/* Atmospheric Vignette Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-black/10 pointer-events-none" />

                  {/* Top Right Mini Brand Badge */}
                 

                  {/* Top Left Quote / Bold Slogan */}
                  <div className="absolute top-4 left-4 rounded-xl bg-black/60 px-3.5 py-2 shadow-lg backdrop-blur-md border border-white/20">
                    <p className="text-[11px] font-bold tracking-tight text-white leading-tight">
                      Great People Build <br />
                      <span className="text-rose-400">Great Things</span>
                    </p>
                  </div>

                  {/* Bottom Strip Inside Image */}
                  <div className="absolute inset-x-0 bottom-0 p-5 flex items-end justify-between">
                    <div>
                      <p className="text-[10px] font-extrabold uppercase tracking-widest text-rose-300">
                        VEVRA FAMILY
                      </p>
                      <h3 className="text-sm sm:text-base font-bold text-white leading-tight">
                        Leadership &amp; Core Team Milestone Gathering
                      </h3>
                    </div>
                    <div className="rounded-lg bg-black/60 px-3 py-1.5 text-right backdrop-blur border border-white/20">
                      <p className="text-[10px] font-black tracking-widest text-white uppercase">
                        WORK • CELEBRATE • GROW
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Glassmorphism Badge 1 (Top Left Overhang) */}
              <div className="hidden sm:flex absolute -top-5 -left-5 z-20 items-center gap-3 rounded-2xl border border-slate-200/80 bg-white/95 p-3 shadow-xl backdrop-blur-md transition-transform duration-300 hover:scale-105">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-rose-500 to-[#D9232A] text-white shadow-md shadow-rose-500/25">
                  <Trophy className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Excellence</p>
                  <p className="text-xs font-black text-[#0B1930]">Milestones &amp; Awards</p>
                </div>
              </div>

              {/* Floating Glassmorphism Badge 2 (Bottom Right Overhang) */}
              <div className="hidden sm:flex absolute -bottom-5 -right-5 z-20 items-center gap-3 rounded-2xl border border-slate-200/80 bg-white/95 p-3 shadow-xl backdrop-blur-md transition-transform duration-300 hover:scale-105">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-indigo-700 text-white shadow-md shadow-blue-500/25">
                  <Heart className="h-5 w-5 fill-white" />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Togetherness</p>
                  <p className="text-xs font-black text-[#0B1930]">One United Family</p>
                </div>
              </div>

            </div>

          </div>

          {/* 4-Pill Feature Strip with Hover Elevation & Premium Styling */}
          <div className="mt-14 grid grid-cols-2 gap-4 rounded-2xl border border-slate-200/80 bg-white/90 p-4 shadow-sm backdrop-blur sm:grid-cols-4 sm:p-5">
            <div className="group flex items-center gap-3 rounded-xl p-2.5 transition-all duration-300 hover:bg-rose-50/60">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#D9232A]/10 text-[#D9232A] transition-all duration-300 group-hover:scale-110 group-hover:bg-[#D9232A] group-hover:text-white shadow-sm">
                <PartyPopper className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs font-bold text-[#0B1930] leading-tight">Festivals</p>
                <p className="text-[11px] text-[#64748B]">We Celebrate Together</p>
              </div>
            </div>

            <div className="group flex items-center gap-3 rounded-xl p-2.5 transition-all duration-300 hover:bg-rose-50/60">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#D9232A]/10 text-[#D9232A] transition-all duration-300 group-hover:scale-110 group-hover:bg-[#D9232A] group-hover:text-white shadow-sm">
                <Trophy className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs font-bold text-[#0B1930] leading-tight">Milestones</p>
                <p className="text-[11px] text-[#64748B]">We Achieve as One</p>
              </div>
            </div>

            <div className="group flex items-center gap-3 rounded-xl p-2.5 transition-all duration-300 hover:bg-rose-50/60">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#D9232A]/10 text-[#D9232A] transition-all duration-300 group-hover:scale-110 group-hover:bg-[#D9232A] group-hover:text-white shadow-sm">
                <Users className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs font-bold text-[#0B1930] leading-tight">Team Building</p>
                <p className="text-[11px] text-[#64748B]">Events &amp; Retreats</p>
              </div>
            </div>

            <div className="group flex items-center gap-3 rounded-xl p-2.5 transition-all duration-300 hover:bg-rose-50/60">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#D9232A]/10 text-[#D9232A] transition-all duration-300 group-hover:scale-110 group-hover:bg-[#D9232A] group-hover:text-white shadow-sm">
                <Heart className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs font-bold text-[#0B1930] leading-tight">A Culture</p>
                <p className="text-[11px] text-[#64748B]">We Cherish Daily</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. MEDIA GALLERY SECTION ("Moments That Matter") */}
      <section id="gallery-section" className="relative bg-white py-20 overflow-hidden">
        <div className="mx-auto max-w-[1280px] px-6">
          
          {/* Top Grid: Left Copy & Stats, Right Big Featured Showcase */}
          <div className="grid items-center gap-10 lg:grid-cols-12">
            
            {/* Left Column: Heading, Subtitle, 3 Stat Badges & Button */}
            <div className="relative lg:col-span-5">
              {/* Dot Pattern Graphic */}
              <div className="absolute -top-6 right-0 -z-10 grid grid-cols-5 gap-1.5 opacity-30">
                {Array.from({ length: 25 }).map((_, i) => (
                  <div key={i} className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                ))}
              </div>

              {/* Eyebrow */}
              <div className="flex items-center gap-2">
                <span className="inline-block w-6 h-0.5 bg-[#D9232A]" />
                <span className="text-xs font-black uppercase tracking-[0.25em] text-[#D9232A]">
                  MEDIA GALLERY
                </span>
              </div>

              {/* Headline */}
              <h2 className="mt-4 text-4xl sm:text-5xl font-extrabold tracking-tight text-[#0B1930] leading-[1.12]">
                Moments <br />
                <span className="text-[#D9232A]">That Matter</span>
              </h2>

              {/* Subtitle */}
              <p className="mt-4 max-w-md text-sm leading-relaxed text-[#64748B]">
                A glimpse into our journey — events, exhibitions, celebrations and milestones that reflect our people, partnerships and progress.
              </p>

              {/* 3 Stat Badges with Vertical Dividers */}
              <div className="mt-8 grid grid-cols-3 gap-2 border-y border-slate-100 py-6">
                {/* 1. Event Photos */}
                <div className="flex flex-col items-center sm:items-start">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-rose-50 text-[#D9232A] border border-rose-100/80">
                    <Camera className="h-5 w-5" />
                  </div>
                  <p className="mt-2.5 text-xl sm:text-2xl font-black text-[#0B1930]">200+</p>
                  <p className="text-[11px] font-semibold text-[#64748B]">Event Photos</p>
                </div>

                {/* 2. Team Moments */}
                <div className="flex flex-col items-center sm:items-start border-l border-slate-200/80 pl-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600 border border-blue-100/80">
                    <Users className="h-5 w-5" />
                  </div>
                  <p className="mt-2.5 text-xl sm:text-2xl font-black text-[#0B1930]">50+</p>
                  <p className="text-[11px] font-semibold text-[#64748B]">Team Moments</p>
                </div>

                {/* 3. Years Of Togetherness */}
                <div className="flex flex-col items-center sm:items-start border-l border-slate-200/80 pl-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-rose-50 text-rose-600 border border-rose-100/80">
                    <Star className="h-5 w-5" />
                  </div>
                  <p className="mt-2.5 text-xl sm:text-2xl font-black text-[#0B1930]">Years</p>
                  <p className="text-[11px] font-semibold text-[#64748B]">Of Togetherness</p>
                </div>
              </div>

              {/* CTA Button */}
              <div className="mt-8">
                <a
                  href="#gallery-thumbnails"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#D9232A] px-7 py-3 text-sm font-bold text-white shadow-lg shadow-[#D9232A]/25 transition-all hover:bg-[#b81d23]"
                >
                  Explore All Gallery
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>

            {/* Right Column: Large Featured Showcase Card with Slideshow */}
            <div className="relative lg:col-span-7">
              <div
                className="relative overflow-hidden rounded-[26px] bg-slate-950 border border-slate-200 shadow-2xl group"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden">
                  {/* Layered Crossfading Images */}
                  {GALLERY_ITEMS.map((item, idx) => {
                    const isActive = idx === activeGalleryIdx;
                    return (
                      <img
                        key={item.id}
                        src={item.image}
                        alt={item.title}
                        className={`absolute inset-0 h-full w-full object-cover transition-all duration-700 ease-in-out ${
                          isActive
                            ? "opacity-100 scale-100 z-0"
                            : "opacity-0 scale-105 pointer-events-none -z-10"
                        }`}
                      />
                    );
                  })}

                  {/* Dark gradient for text visibility */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent pointer-events-none z-10" />

                  {/* Top Right Auto-Play / Pause State Pill */}
                  <button
                    type="button"
                    onClick={() => setIsPaused((p) => !p)}
                    className="absolute top-4 right-4 z-20 flex items-center gap-1.5 rounded-full bg-black/55 px-3 py-1.5 text-[11px] font-bold text-white/90 backdrop-blur-md transition-all hover:bg-black/85 hover:text-white"
                    title={isPaused ? "Click to resume slideshow" : "Click to pause slideshow"}
                  >
                    {isPaused ? (
                      <>
                        <Play className="h-3 w-3 text-emerald-400 fill-emerald-400" />
                        <span>Paused</span>
                      </>
                    ) : (
                      <>
                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                        </span>
                        <span>Auto-play</span>
                      </>
                    )}
                  </button>

                  {/* Bottom Inset Bar */}
                  <div className="absolute inset-x-0 bottom-0 z-20 p-5 sm:p-6 flex items-end justify-between gap-4">
                    <div className="transition-all duration-500">
                      <h3 className="text-base sm:text-lg font-bold text-white leading-tight">
                        {activeItem.title}
                      </h3>
                      <div className="mt-1.5 flex items-center gap-1.5 text-xs text-white/80">
                        <MapPin className="h-3.5 w-3.5 text-[#D9232A]" />
                        <span>{activeItem.location}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 shrink-0">
                      <span className="text-xs font-bold text-white/90 font-mono">
                        {String(activeGalleryIdx + 1).padStart(2, "0")} / {String(GALLERY_ITEMS.length).padStart(2, "0")}
                      </span>
                      <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/30 bg-black/40 text-white backdrop-blur">
                        <Maximize2 className="h-4 w-4" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Bottom Thumbnails Carousel Row */}
          <div id="gallery-thumbnails" className="mt-12 flex items-center gap-3">
            {/* Left Nav Arrow */}
            <button
              type="button"
              onClick={prevGallery}
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-white text-[#0B1930] shadow-sm transition-all hover:border-[#D9232A] hover:bg-rose-50 hover:text-[#D9232A]"
              aria-label="Previous image"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            {/* 6 Thumbnail Cards Grid */}
            <div className="grid flex-1 grid-cols-3 gap-3 sm:grid-cols-6">
              {GALLERY_ITEMS.map((item, idx) => {
                const isSelected = idx === activeGalleryIdx;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setActiveGalleryIdx(idx)}
                    className="group flex flex-col items-center gap-2 text-left cursor-pointer"
                  >
                    <div
                      className={`relative aspect-[16/10] w-full overflow-hidden rounded-xl border-2 transition-all ${
                        isSelected
                          ? "border-blue-600 ring-4 ring-blue-500/20 shadow-md scale-[1.02]"
                          : "border-slate-200/90 hover:border-slate-400 opacity-80 hover:opacity-100"
                      }`}
                    >
                      <img
                        src={item.image}
                        alt={item.category}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <span
                      className={`text-[11px] font-bold text-center leading-tight transition-colors line-clamp-1 ${
                        isSelected ? "text-[#0B1930]" : "text-[#64748B] group-hover:text-[#0B1930]"
                      }`}
                    >
                      {item.category}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Right Nav Arrow */}
            <button
              type="button"
              onClick={nextGallery}
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-white text-[#0B1930] shadow-sm transition-all hover:border-[#D9232A] hover:bg-rose-50 hover:text-[#D9232A]"
              aria-label="Next image"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>

          {/* Bottom Progress Indicator Bar */}
          <div className="mt-8 flex items-center justify-between border-t border-slate-100 pt-5">
            {/* Center / Left Dashes */}
            <div className="flex items-center gap-2">
              {GALLERY_ITEMS.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setActiveGalleryIdx(i)}
                  className={`h-1.5 rounded-full transition-all ${
                    i === activeGalleryIdx ? "w-8 bg-[#0B1930]" : "w-3 bg-slate-200 hover:bg-slate-300"
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>

            {/* Right Progress Counter */}
            <div className="flex items-center gap-3">
              <span className="text-xs font-bold text-[#64748B]">
                {String(activeGalleryIdx + 1).padStart(2, "0")} / {String(GALLERY_ITEMS.length).padStart(2, "0")}
              </span>
              <div className="h-1 w-24 overflow-hidden rounded-full bg-slate-100">
                <div
                  className="h-full bg-[#0B1930] transition-all duration-300"
                  style={{ width: `${((activeGalleryIdx + 1) / GALLERY_ITEMS.length) * 100}%` }}
                />
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 3. OUR CULTURE SECTION ("More Than Just Work") */}
      <section id="culture-section" className="bg-[#F8FAFC] py-20">
        <div className="mx-auto max-w-[1280px] px-6">
          <div className="grid items-center gap-12 lg:grid-cols-12">
            
            {/* Left Column: Mission & Button */}
            <div className="lg:col-span-5">
              <span className="text-[11px] font-extrabold uppercase tracking-[0.25em] text-[#D9232A]">
                OUR CULTURE
              </span>
              <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-[#0B1930] sm:text-4xl">
                More Than <br />
                Just Work
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-[#64748B]">
                At VEVRA, we believe a happy workplace creates extraordinary results. Our events and celebrations reflect our values — respect, teamwork and togetherness.
              </p>

              <div className="mt-8">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#D9232A] px-7 py-3 text-sm font-bold text-white shadow-lg shadow-[#D9232A]/25 transition-all hover:bg-[#b81d23]"
                >
                  Join Our Journey
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Right Column: 2x2 Culture Value Cards */}
            <div className="lg:col-span-7">
              <div className="grid gap-4 sm:grid-cols-2">
                {CULTURE_PILLARS.map((pillar, idx) => {
                  const Icon = pillar.icon;
                  return (
                    <div
                      key={idx}
                      className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                    >
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#D9232A]/10 text-[#D9232A]">
                        <Icon className="h-6 w-6" />
                      </div>
                      <h3 className="mt-4 text-base font-bold text-[#0B1930]">
                        {pillar.title}
                      </h3>
                      <p className="mt-1.5 text-xs leading-relaxed text-[#64748B]">
                        {pillar.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. HIGHLIGHT EVENTS SECTION ("Events Through the Year") */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-[1280px] px-6">
          
          {/* Section Header with Controls */}
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <span className="text-[11px] font-extrabold uppercase tracking-[0.25em] text-[#D9232A]">
                HIGHLIGHT EVENTS
              </span>
              <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-[#0B1930] sm:text-4xl">
                Events Through the Year
              </h2>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-[#0B1930] shadow-sm transition-all hover:border-[#D9232A] hover:bg-rose-50 hover:text-[#D9232A]"
                aria-label="Previous events"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                type="button"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-[#0B1930] shadow-sm transition-all hover:border-[#D9232A] hover:bg-rose-50 hover:text-[#D9232A]"
                aria-label="Next events"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* 6 Event Cards Grid */}
          <div className="mt-10 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
            {YEAR_EVENTS.map((evt, idx) => (
              <div
                key={idx}
                className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                {/* Edge-to-edge Event Image Frame */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-900">
                  <img
                    src={evt.image}
                    alt={evt.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20" />

                  {/* Top Left Month/Year Badge */}
                  <div className="absolute top-3 left-3 rounded-lg bg-black/60 px-2.5 py-1 text-center backdrop-blur-md border border-white/20">
                    <p className="text-[10px] font-black text-white leading-tight uppercase">
                      {evt.month}
                    </p>
                    <p className="text-[9px] font-bold text-white/70 leading-none">
                      {evt.year}
                    </p>
                  </div>
                </div>

                {/* Event Name */}
                <div className="p-4 text-center">
                  <h3 className="text-xs font-bold text-[#0B1930] group-hover:text-[#D9232A] transition-colors">
                    {evt.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. QUOTE & SUNSET TEAM SLOGAN BANNER */}
      <section className="relative overflow-hidden bg-gradient-to-r from-rose-50/70 via-white to-amber-50/40 py-16 border-t border-slate-200/70">
        <div className="mx-auto max-w-[1280px] px-6">
          <div className="grid items-center gap-8 lg:grid-cols-12">
            
            {/* Left Column: Quote */}
            <div className="lg:col-span-6 flex items-start gap-4">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#38bdf8]/15 text-[#0284c7]">
                <Quote className="h-7 w-7" />
              </div>
              <div>
                <p className="text-lg sm:text-xl font-bold text-[#0B1930] leading-snug">
                  "It's not just about the work we do, but the memories we create together."
                </p>
                <p className="mt-2 text-xs font-bold uppercase tracking-wider text-[#D9232A]">
                  Team VEVRA
                </p>
              </div>
            </div>

            {/* Right Column: Panoramic Silhouette Accent */}
            <div className="relative lg:col-span-6 overflow-hidden rounded-2xl bg-slate-900 shadow-md">
              <div className="relative aspect-[21/9] w-full overflow-hidden">
                <img
                  src={celebration1Img}
                  alt="Team VEVRA Memories"
                  className="h-full w-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-l from-black/80 via-black/30 to-transparent" />

                {/* Right Cursive Accent */}
               
              </div>
            </div>

          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
