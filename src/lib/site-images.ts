import cap01Corrugated from "@/assets/capabilities/cap-01-corrugated.jpg";
import cap02Plastic from "@/assets/capabilities/cap-02-plastic.jpg";
import cap03Metal from "@/assets/capabilities/cap-03-metal.jpg";
import cap04Pooling from "@/assets/capabilities/cap-04-pooling.jpg";
import cap05Onsite from "@/assets/capabilities/cap-05-onsite.jpg";
import cap06Transport from "@/assets/capabilities/cap-06-transport.jpg";
import cap07Labels from "@/assets/capabilities/cap-07-labels.jpg";
import cap08Wood from "@/assets/capabilities/cap-08-wood-plywood.jpg";
import capBoxCorner from "@/assets/capabilities/cap-box-corner.jpg";
import capPulpHoneycomb from "@/assets/capabilities/cap-pulp-honeycomb.jpg";
import serviceEngineeringCad from "@/assets/capabilities/service-engineering-cad.jpg";
import serviceReturnableCrates from "@/assets/capabilities/service-returnable-crates.jpg";
import serviceConveyorRental from "@/assets/capabilities/service-conveyor-rental.jpg";
import serviceWarehouseRacks from "@/assets/capabilities/service-warehouse-racks.jpg";
import heroPackaging from "@/assets/hero-packaging.jpg";

export const SITE_IMAGES = {
  engineering: heroPackaging,
  products: cap01Corrugated,
  returnables: cap02Plastic,
  warehouse: "https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=1200&q=80",
} as const;

export const PRODUCT_IMAGES: Record<string, string> = {
  corrugated: cap01Corrugated,
  "plastic-pp": cap02Plastic,
  metal: cap03Metal,
  "wood-plywood": cap08Wood,
  protective: capPulpHoneycomb,
  "labels-identification": cap07Labels,
  "customized-packaging": capBoxCorner,
};

export const SERVICE_IMAGES: Record<string, string> = {
  "packaging-engineering": serviceEngineeringCad,
  "returnable-packaging": serviceReturnableCrates,
  "packaging-rental": serviceConveyorRental,
  "equipment-pooling": cap04Pooling,
  "on-site-packaging-operations": cap05Onsite,
  "transport-logistics": cap06Transport,
  "warehouse-packaging-management": serviceWarehouseRacks,
};
