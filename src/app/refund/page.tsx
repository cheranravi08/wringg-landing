import type { Metadata } from "next";
import { legalPages } from "../legal-content";
import { LegalPage } from "../legal-page";

export const metadata: Metadata = {
  title: "Refund & Cancellation Policy",
  description: legalPages.refund.description,
  alternates: { canonical: "/refund" },
};

export default function RefundPage() {
  return <LegalPage content={legalPages.refund} />;
}
