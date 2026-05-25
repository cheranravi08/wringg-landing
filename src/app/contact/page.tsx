import type { Metadata } from "next";
import { legalPages } from "../legal-content";
import { LegalPage } from "../legal-page";

export const metadata: Metadata = {
  title: "Contact",
  description: legalPages.contact.description,
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return <LegalPage content={legalPages.contact} />;
}
