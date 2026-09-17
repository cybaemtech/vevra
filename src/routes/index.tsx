import { createFileRoute, Link } from "@tanstack/react-router";

import { BusinessModelsSection } from "@/components/site/BusinessModelsSection";
import { BusinessModelSpectrum } from "@/components/site/BusinessModelSpectrum";
import { BusinessValueSection } from "@/components/site/BusinessValueSection";
import { CeoStatement } from "@/components/site/CeoStatement";
import { ClientLogoMarquee } from "@/components/site/ClientLogoWall";
import { CustomerSuccessSection } from "@/components/site/CustomerSuccessSection";
import { EcosystemSection } from "@/components/site/EcosystemSection";
import { EvolutionSection } from "@/components/site/EvolutionSection";
import { FutureDirectionsSection } from "@/components/site/FutureDirectionsSection";
import { ImmersiveHero } from "@/components/site/ImmersiveHero";
import { IndustriesSection } from "@/components/site/IndustriesSection";
import { PackagingCapabilitiesSection } from "@/components/site/PackagingCapabilitiesSection";
import { ProblemSolutionsSection } from "@/components/site/ProblemSolutionsSection";
import { ServicesSection } from "@/components/site/ServicesSection";
import { ServiceMirrorWall } from "@/components/site/ServiceMirrorWall";
import { TrustedIndustryLeadersSection } from "@/components/site/TrustedIndustryLeadersSection";
import { RfqButton, Section, SiteLayout } from "@/components/site/SiteLayout";
import {
  
  CLIENTS,
  COMMITMENTS,
  COMPANY,
  CUSTOMER_PROBLEMS,
  CUSTOMER_SUCCESS_PROCESS,
  EVOLUTION,
  FUTURE_DIRECTIONS,
  PRODUCTS,
  STATS,
  VALUE_OUTCOMES,
} from "@/lib/site-content";
import { PRODUCT_IMAGES } from "@/lib/site-images";

const ECOSYSTEM = [
  "Design",
  "Engineer",
  "Manufacture",
  "Supply",
  "Store",
  "Track",
  "Return",
  "Reuse",
  "Optimize",
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Vevra Packaging — End-to-End Packaging Solutions" },
      { name: "description", content: "VEVRA designs, manufactures, manages and optimizes packaging ecosystems so businesses can focus on their core products." },
      { property: "og:title", content: "Vevra Packaging — We Manage Your Packaging Ecosystem" },
      { property: "og:description", content: "End-to-end packaging and supply-chain solutions across design, manufacturing, returnables, warehousing and logistics." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <SiteLayout>
      <ImmersiveHero />

      {/* TRUSTED BY INDUSTRY LEADERS */}
      <TrustedIndustryLeadersSection />

      <CeoStatement />

      {/* ECOSYSTEM */}
      <EcosystemSection />

      {/* PROBLEMS */}
      <ProblemSolutionsSection />

      {/* PACKAGING CAPABILITIES */}
      <PackagingCapabilitiesSection />

      {/* SERVICES */}
      <ServicesSection />

      {/* BUSINESS MODELS */}
      <BusinessModelsSection />

      {/* VALUE OUTCOMES */}
      <BusinessValueSection />

      {/* CUSTOMER SUCCESS */}
      <CustomerSuccessSection />

      {/* INDUSTRIES */}
      <IndustriesSection />

      {/* EVOLUTION */}
      <EvolutionSection />

      {/* THE NEXT CHAPTER */}
      <FutureDirectionsSection />

      {/* FINAL CTA */}
      <section className="bg-brand-blue-dark py-16 text-white">
        <div className="mx-auto flex max-w-[1280px] flex-col items-start gap-6 px-6 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight">Have a packaging challenge? Let&apos;s solve it.</h2>
            <p className="mt-3 max-w-2xl text-white/70">
              Tell us what you manufacture, move or store. Our team will identify the right packaging,
              service or end-to-end model. Or call {COMPANY.phone}.
            </p>
          </div>
          <RfqButton label="Generate My RFQ" />
        </div>
      </section>
    </SiteLayout>
  );
}
