import type { Metadata } from "next";
import { legalPages } from "../legal-content";
import { LegalPage } from "../legal-page";

export const metadata: Metadata = {
  title: "Shipping & Delivery Policy",
  description: legalPages.shipping.description,
  alternates: { canonical: "/shipping" },
};

export default function ShippingPage() {
  return <LegalPage content={legalPages.shipping} />;
}
