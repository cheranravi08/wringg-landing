import type { Metadata } from "next";
import { legalPages } from "../legal-content";
import { LegalPage } from "../legal-page";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: legalPages.terms.description,
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return <LegalPage content={legalPages.terms} />;
}
