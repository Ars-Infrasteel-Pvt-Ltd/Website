export interface Product {
  id: string;
  slug: string;
  name: string;
  description: string;
  spec: string;
  image: string;
  images?: string[];
  types?: string[];
  styles?: string[];
  finishes?: string[];
  accessories?: string[];
  specifications?: { label: string; value: string }[];
  features: string[];
  sourceType: "in-house" | "imported";
  isDataCenter?: boolean;
  catalogue?: string;

  overview?: string;
  useCases?: string[];
  arsAdvantage?: string[];

  origin?: {
    manufacturer: string;
    certifications: string[];
  };

  // Regional approvals / compliance — shown as a "Certified & Approved" section
  compliance?: {
    europe: {
      status: string; // e.g. "CE + EMC + RoHS" or "Generally not applicable"
      standards: string[]; // e.g. ["IEC 62040", "EN 61537"]
    };
    asia: {
      status: string;
      standards: string[];
    };
  };
}