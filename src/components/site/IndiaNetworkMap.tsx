import { useState } from "react";
import { ArrowRight, Building2, Globe, MapPin, Warehouse } from "lucide-react";

import cap04Pooling from "@/assets/capabilities/cap-04-pooling.jpg";
import cap05Onsite from "@/assets/capabilities/cap-05-onsite.jpg";
import serviceWarehouseRacks from "@/assets/capabilities/service-warehouse-racks.jpg";

export type FacilityNode = {
  id: string;
  name: string;
  region: string;
  badges: { label: string; variant: "red" | "blue" }[];
  image: string;
  x: number;
  y: number;
  isHub?: boolean;
};

// Hub coordinates for Pune
const HUB_COORDS = { x: 195, y: 472 };

export const FACILITIES: FacilityNode[] = [
  {
    id: "pune",
    name: "Pune (Head Office)",
    region: "Maharashtra",
    badges: [
      { label: "Corporate Hub", variant: "red" },
      { label: "Manufacturing", variant: "blue" },
    ],
    image: cap05Onsite,
    x: 195,
    y: 472,
    isHub: true,
  },
  {
    id: "chakan",
    name: "Chakan",
    region: "Maharashtra",
    badges: [{ label: "Manufacturing", variant: "blue" }],
    image: cap04Pooling,
    x: 206,
    y: 450,
  },
  {
    id: "ranjangaon",
    name: "Ranjangaon",
    region: "Maharashtra",
    badges: [
      { label: "Manufacturing", variant: "blue" },
      { label: "Warehouse", variant: "blue" },
    ],
    image: serviceWarehouseRacks,
    x: 222,
    y: 466,
  },
  {
    id: "bhosari",
    name: "Bhosari MIDC",
    region: "Maharashtra",
    badges: [{ label: "Manufacturing", variant: "blue" }],
    image: cap05Onsite,
    x: 202,
    y: 485,
  },
  {
    id: "nashik",
    name: "Nashik",
    region: "Maharashtra",
    badges: [{ label: "Warehouse", variant: "blue" }],
    image: serviceWarehouseRacks,
    x: 188,
    y: 418,
  },
  {
    id: "aurangabad",
    name: "Aurangabad",
    region: "Maharashtra",
    badges: [{ label: "Warehouse", variant: "blue" }],
    image: cap04Pooling,
    x: 238,
    y: 428,
  },
  {
    id: "ahmedabad",
    name: "Ahmedabad",
    region: "Gujarat",
    badges: [{ label: "Warehouse", variant: "blue" }],
    image: serviceWarehouseRacks,
    x: 135,
    y: 335,
  },
  {
    id: "indore",
    name: "Indore",
    region: "Madhya Pradesh",
    badges: [{ label: "Warehouse", variant: "blue" }],
    image: cap04Pooling,
    x: 235,
    y: 360,
  },
  {
    id: "gurugram",
    name: "Gurugram",
    region: "NCR",
    badges: [{ label: "Warehouse", variant: "blue" }],
    image: serviceWarehouseRacks,
    x: 268,
    y: 220,
  },
  {
    id: "bengaluru",
    name: "Bengaluru",
    region: "Karnataka",
    badges: [{ label: "Warehouse", variant: "blue" }],
    image: cap04Pooling,
    x: 225,
    y: 585,
  },
  {
    id: "chennai",
    name: "Chennai",
    region: "Tamil Nadu",
    badges: [{ label: "Warehouse", variant: "blue" }],
    image: serviceWarehouseRacks,
    x: 285,
    y: 575,
  },
];

// Geographically accurate boundary of India with J&K, Gujarat Kathiawar & Kutch, Konkan, Coromandel & NE India
const INDIA_REALISTIC_SVG = `
  M 285 45
  C 298 46, 316 54, 328 68
  C 338 80, 342 96, 335 110
  C 330 120, 324 130, 320 142
  C 332 152, 348 162, 362 172
  C 375 182, 395 194, 415 208
  C 425 214, 436 210, 442 216
  C 446 222, 444 232, 442 240
  C 458 238, 482 226, 508 218
  C 532 210, 558 212, 574 225
  C 580 232, 578 245, 568 256
  C 555 268, 542 278, 536 295
  C 532 312, 534 330, 528 348
  C 522 365, 508 382, 492 384
  C 480 376, 478 358, 482 342
  C 475 348, 462 352, 452 344
  C 440 335, 432 320, 426 305
  C 418 290, 408 278, 402 292
  C 396 312, 400 338, 404 365
  C 398 380, 384 386, 372 382
  C 358 402, 342 430, 330 462
  C 318 492, 306 525, 294 558
  C 286 585, 276 615, 262 645
  C 254 662, 246 675, 240 675
  C 234 662, 226 638, 220 608
  C 212 575, 204 542, 196 508
  C 188 478, 180 448, 174 422
  C 170 398, 168 385, 158 375
  C 148 368, 138 370, 126 372
  C 105 375, 82 370, 72 355
  C 62 340, 68 325, 85 316
  C 102 308, 118 305, 112 295
  C 95 288, 76 280, 84 266
  C 96 254, 122 250, 146 252
  C 168 240, 184 218, 198 195
  C 212 172, 224 148, 234 125
  C 242 102, 256 75, 285 45
  Z
`;

function getArcCurve(node: FacilityNode) {
  const mx = (HUB_COORDS.x + node.x) / 2 + (node.y - HUB_COORDS.y) * 0.14;
  const my = (HUB_COORDS.y + node.y) / 2 - (node.x - HUB_COORDS.x) * 0.14;
  return `M ${HUB_COORDS.x} ${HUB_COORDS.y} Q ${mx} ${my} ${node.x} ${node.y}`;
}

export function IndiaNetworkMap() {
  const [activeNode, setActiveNode] = useState<string | null>(null);

  return (
    <div className="grid items-start gap-8 lg:grid-cols-12 lg:gap-10">
      
      {/* Left Column: Interactive Map Visualization Card */}
      <div className="lg:col-span-7">
        <div className="relative overflow-hidden rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-8 shadow-sm">
          
          {/* Subtle Map Top Bar */}
          <div className="flex items-center justify-between pb-4 border-b border-slate-100">
            <div className="flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] text-[#D9232A]">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#D9232A] opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#D9232A]" />
              </span>
              Connected Supply Network
            </div>
            <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-slate-500">
              11 Locations Live
            </span>
          </div>

          {/* SVG Map Container */}
          <div className="relative mt-4 aspect-[5/6] sm:aspect-[4/4.8] w-full flex items-center justify-center select-none">
            <svg
              viewBox="0 0 620 710"
              className="h-full w-full max-h-[580px]"
              role="img"
              aria-label="Map of India showing VEVRA packaging warehouse network"
            >
              <defs>
                {/* 3D Emboss Filter & Gradients */}
                <filter id="indiaShadow" x="-10%" y="-10%" width="130%" height="130%">
                  <feDropShadow dx="0" dy="10" stdDeviation="14" floodColor="#0f172a" floodOpacity="0.08" />
                  <feDropShadow dx="0" dy="3" stdDeviation="4" floodColor="#0f172a" floodOpacity="0.04" />
                </filter>
                <linearGradient id="indiaLandGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#f8fafc" />
                  <stop offset="50%" stopColor="#f1f5f9" />
                  <stop offset="100%" stopColor="#e2e8f0" />
                </linearGradient>
                <linearGradient id="hubPinGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#ef4444" />
                  <stop offset="100%" stopColor="#b91c1c" />
                </linearGradient>
              </defs>

              {/* Geographic Landmass */}
              <g filter="url(#indiaShadow)">
                <path
                  d={INDIA_REALISTIC_SVG}
                  fill="url(#indiaLandGradient)"
                  stroke="#cbd5e1"
                  strokeWidth="2.2"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                />
              </g>

              {/* Subtle Regional Dividing Lines */}
              <path
                d="M 170 250 Q 230 265 290 265 M 158 375 Q 240 370 340 410 M 204 542 Q 250 540 294 558"
                fill="none"
                stroke="#94a3b8"
                strokeWidth="1"
                strokeDasharray="3 4"
                opacity="0.4"
              />

              {/* Red Dotted Supply Network Arcs Connecting to Pune Hub */}
              <g>
                {FACILITIES.filter((n) => !n.isHub).map((node) => {
                  const isHovered = activeNode === node.id;
                  return (
                    <g key={node.id} className="transition-opacity duration-300">
                      <path
                        d={getArcCurve(node)}
                        fill="none"
                        stroke="#D9232A"
                        strokeWidth={isHovered ? "2.5" : "1.6"}
                        strokeDasharray={isHovered ? "none" : "3 3"}
                        strokeOpacity={isHovered ? "1" : "0.6"}
                        className="transition-all duration-300"
                      />
                    </g>
                  );
                })}
              </g>

              {/* Location Pins & Markers */}
              {FACILITIES.map((node) => {
                const isHovered = activeNode === node.id;
                const isHub = node.isHub;

                return (
                  <g
                    key={node.id}
                    className="cursor-pointer transition-transform duration-200"
                    onMouseEnter={() => setActiveNode(node.id)}
                    onMouseLeave={() => setActiveNode(null)}
                  >
                    {/* Hover Hit Area */}
                    <circle cx={node.x} cy={node.y} r="22" fill="transparent" />

                    {isHub ? (
                      /* Highlighted Pune Hub with Radiating Rings & Label */
                      <g>
                        <circle
                          cx={node.x}
                          cy={node.y}
                          r={isHovered ? "22" : "18"}
                          fill="#D9232A"
                          fillOpacity="0.22"
                          className="animate-pulse"
                        />
                        <circle
                          cx={node.x}
                          cy={node.y}
                          r="8"
                          fill="url(#hubPinGradient)"
                          stroke="#ffffff"
                          strokeWidth="2.5"
                          className="shadow-lg"
                        />
                        {/* Red Head Office Tag Badge */}
                        <g transform={`translate(${node.x + 12}, ${node.y - 12})`}>
                          <rect
                            x="0"
                            y="0"
                            width="104"
                            height="25"
                            rx="12.5"
                            fill="#D9232A"
                            className="shadow-md"
                          />
                          <text
                            x="52"
                            y="16"
                            textAnchor="middle"
                            fill="#ffffff"
                            fontSize="10"
                            fontWeight="800"
                            letterSpacing="0.02em"
                          >
                            Pune (Head Office)
                          </text>
                        </g>
                      </g>
                    ) : (
                      /* Standard Facility Pin Marker */
                      <g>
                        {/* Pin Dot */}
                        <circle
                          cx={node.x}
                          cy={node.y}
                          r={isHovered ? "6.5" : "4.8"}
                          fill={isHovered ? "#991b1b" : "#D9232A"}
                          stroke="#ffffff"
                          strokeWidth="1.6"
                        />
                        
                        {/* City Label Text with Background Halo for Readability */}
                        <text
                          x={node.x + 8}
                          y={node.y + 4}
                          fill="#ffffff"
                          stroke="#ffffff"
                          strokeWidth="3"
                          strokeLinejoin="round"
                          fontSize="10.5"
                          fontWeight="700"
                          opacity="0.85"
                        >
                          {node.name}
                        </text>
                        <text
                          x={node.x + 8}
                          y={node.y + 4}
                          fill={isHovered ? "#D9232A" : "#1e293b"}
                          fontSize="10.5"
                          fontWeight={isHovered ? "800" : "700"}
                          className="transition-colors"
                        >
                          {node.name}
                        </text>
                      </g>
                    )}
                  </g>
                );
              })}
            </svg>

            {/* Bottom-Left Map Legend */}
            <div className="absolute bottom-4 left-4 z-10 rounded-2xl bg-white/95 backdrop-blur-md p-3.5 border border-slate-200/90 shadow-md select-none text-slate-800">
              <div className="space-y-2 text-[11px] font-bold">
                <div className="flex items-center gap-2">
                  <span className="flex h-3 w-3 items-center justify-center rounded-full bg-[#D9232A]" />
                  <span>Our Locations</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-4 border-t-2 border-dashed border-[#D9232A]" />
                  <span>Supply Network</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="flex h-3 w-3 items-center justify-center rounded-full border-2 border-[#D9232A] bg-rose-100" />
                  <span>Head Office (Pune)</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Right Column: Facilities List */}
      <div className="lg:col-span-5">
        <div className="flex items-center gap-2 mb-3">
          <span className="inline-block w-5 h-0.5 bg-[#D9232A]" />
          <p className="text-xs font-black uppercase tracking-[0.24em] text-[#D9232A]">
            OUR FACILITIES
          </p>
        </div>

        {/* Scrollable / Stacked Facilities List */}
        <div className="space-y-2.5 max-h-[640px] overflow-y-auto pr-1">
          {FACILITIES.map((facility) => {
            const isHovered = activeNode === facility.id;

            return (
              <div
                key={facility.id}
                onMouseEnter={() => setActiveNode(facility.id)}
                onMouseLeave={() => setActiveNode(null)}
                className={`group flex items-center justify-between gap-3 rounded-2xl border p-2.5 sm:p-3 transition-all cursor-pointer ${
                  isHovered
                    ? "border-[#D9232A] bg-rose-50/70 shadow-md scale-[1.01]"
                    : "border-slate-200/80 bg-white hover:border-slate-300 hover:bg-slate-50/50 shadow-sm"
                }`}
              >
                {/* Left Thumbnail + Info */}
                <div className="flex items-center gap-3 min-w-0">
                  <img
                    src={facility.image}
                    alt={facility.name}
                    className="h-12 w-14 sm:h-13 sm:w-16 shrink-0 rounded-xl object-cover border border-slate-200"
                    loading="lazy"
                  />
                  <div className="min-w-0">
                    <h4 className="text-xs sm:text-sm font-black text-slate-900 truncate">
                      {facility.name}
                    </h4>
                    <p className="text-[11px] font-medium text-slate-500 truncate">
                      {facility.region}
                    </p>
                  </div>
                </div>

                {/* Badges + Arrow */}
                <div className="flex items-center gap-2 shrink-0">
                  <div className="hidden sm:flex items-center gap-1.5">
                    {facility.badges.map((b) => (
                      <span
                        key={b.label}
                        className={`rounded-full px-2.5 py-0.5 text-[10px] font-bold ${
                          b.variant === "red"
                            ? "bg-[#D9232A] text-white"
                            : "bg-sky-50 text-sky-700 border border-sky-200/60"
                        }`}
                      >
                        {b.label}
                      </span>
                    ))}
                  </div>

                  {/* Arrow Action Button */}
                  <div
                    className={`flex h-7 w-7 items-center justify-center rounded-full transition-colors ${
                      isHovered
                        ? "bg-[#D9232A] text-white"
                        : "bg-slate-100 text-slate-500 group-hover:bg-slate-200"
                    }`}
                  >
                    <ArrowRight className="h-3.5 w-3.5" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

    </div>
  );
}
