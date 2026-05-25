import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

// CTA switch:
// Keep false during pilot mode so primary actions use WhatsApp onboarding flows.
// Set true after app links/APKs are ready, then replace the placeholder URLs below.
const ENABLE_APP_DOWNLOAD = false;
const CUSTOMER_APP_DOWNLOAD_URL = "#customer-app-link-coming-soon";
const HOST_APP_DOWNLOAD_URL = "#host-app-link-coming-soon";

const CUSTOMER_CTA_URL =
  "https://wa.me/918438508211?text=Hi%20Wringg%2C%20I%20would%20like%20to%20join%20the%20BTM%20pilot%20and%20book%20a%20pickup.";
const HOST_CTA_URL =
  "https://wa.me/918438508211?text=Hi%20Wringg%2C%20I%20would%20like%20to%20become%20an%20early%20host%20for%20the%20BTM%20pilot.";
const SUPPORT_CTA_URL =
  "https://wa.me/918438508211?text=Hi%20Wringg%2C%20I%20need%20help%20with%20clothing-care%20service.";

const customerActionUrl = ENABLE_APP_DOWNLOAD
  ? CUSTOMER_APP_DOWNLOAD_URL
  : CUSTOMER_CTA_URL;
const hostActionUrl = ENABLE_APP_DOWNLOAD ? HOST_APP_DOWNLOAD_URL : HOST_CTA_URL;

const navItems = [
  { label: "How it Works", href: "#how-it-works" },
  { label: "Services", href: "#services" },
  { label: "Become Host", href: "#partners" },
  { label: "Contact", href: "#contact" },
];

const heroTags = [
  "Nearby trained hosts",
  "BTM pilot live",
  "Clean accountable care",
  "Community powered",
];

const uspCards = [
  {
    label: "For Customers",
    title: "Stop losing weekends to laundry day.",
    description:
      "Book clothing care through nearby hosts and get back time for the week you actually wanted.",
    marker: "01",
  },
  {
    label: "For Hosts",
    title: "Make money with your washing machine.",
    description:
      "Turn idle washing capacity and free time into neighbourhood income through WRINGG.",
    marker: "02",
  },
  {
    label: "For the Future",
    title: "A local host network for everyday clothing care.",
    description:
      "Distributed hosts, a trust layer, and hyperlocal coordination built one neighbourhood at a time.",
    marker: "03",
  },
];

const services = [
  {
    title: "Doorstep Pickup",
    description:
      "Local pickup coordination from apartments, PGs, and nearby homes inside the active pilot zone.",
    image: "/2.WEBP.png",
  },
  {
    title: "Nearby Trained Hosts",
    description:
      "Clothing care handled by onboarded neighbourhood hosts with clear operating standards.",
    image: "/1.WEBP.png",
  },
  {
    title: "Wash, Iron, Fold",
    description:
      "Everyday garments are cleaned, pressed, folded, and returned with care and consistency.",
    image: "/1 (4).png",
  },
  {
    title: "Simple Coordination",
    description:
      "A product-led flow for updates, handoffs, pickup status, and support during the pilot.",
    image: "/1 (5).png",
  },
  {
    title: "Apartment Network",
    description:
      "Built around community density so hosts and customers are closer to each other.",
    image: "/1 (3).png",
  },
  {
    title: "Hyperlocal Delivery",
    description:
      "Shorter routes, local accountability, and faster learning across the BTM pilot network.",
    image: "/1 (2).png",
  },
];

const steps = [
  {
    title: "Request a pickup",
    description:
      "Share your location and clothing-care need from the active pilot area.",
  },
  {
    title: "Match with a host",
    description:
      "Wringg coordinates with a nearby trained host in or around your community.",
  },
  {
    title: "Care is handled",
    description:
      "Clothes move through wash, iron, fold, and quality checks with accountability.",
  },
  {
    title: "Receive fresh clothes",
    description:
      "Your order returns through a simple local pickup and delivery flow.",
  },
];

const customerPoints = [
  "Skip the laundry-day headache.",
  "Your weekend should not disappear into washing, drying and ironing.",
  "Doorstep pickup and drop within active pilot zones.",
  "A calmer way to manage clothing care in busy Bengaluru routines.",
];

const trustFeatures = [
  {
    title: "Neighbourhood-first",
    description: "Care happens closer to home through trusted local hosts.",
  },
  {
    title: "Pilot transparency",
    description: "Clear expectations while the BTM network is being built.",
  },
  {
    title: "Human connection",
    description: "Friendly hosts and support, not a faceless counter.",
  },
  {
    title: "Built in Bengaluru",
    description: "Designed around apartments, PGs, and busy city routines.",
  },
];

const comparison = {
  traditional: [
    "Anonymous processing",
    "Long batching delays",
    "No community trust",
    "One-size-fits-all service",
  ],
  wringg: [
    "Nearby trained hosts",
    "Hyperlocal coordination",
    "Community-powered trust",
    "Income for local households",
  ],
};

function ButtonLink({
  href,
  children,
  variant = "primary",
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "soft" | "dark";
}) {
  const styles = {
    primary:
      "bg-[#2098d6] text-white shadow-sky-500/20 hover:bg-[#1689c8] hover:shadow-sky-500/30",
    secondary:
      "border border-sky-200 bg-white text-[#0f3e5c] shadow-sky-200/40 hover:border-sky-300 hover:bg-sky-50",
    soft: "bg-cyan-50 text-[#0f6f83] shadow-cyan-100/70 hover:bg-cyan-100",
    dark: "bg-[#0f3148] text-white shadow-slate-900/15 hover:bg-[#123c58]",
  };

  return (
    <a
      href={href}
      className={`inline-flex min-h-12 items-center justify-center rounded-full px-6 text-sm font-semibold shadow-lg transition duration-300 hover:-translate-y-0.5 focus:outline-none focus:ring-4 focus:ring-cyan-100 ${styles[variant]}`}
    >
      {children}
    </a>
  );
}

function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <p className="text-xs font-bold uppercase tracking-[0.22em] text-cyan-700">
      {children}
    </p>
  );
}

function HeroVisual() {
  return (
    <div className="relative mx-auto w-full max-w-[620px] lg:ml-auto">
      <div className="absolute -left-5 top-12 h-28 w-28 rounded-full bg-sky-100 blur-3xl" />
      <div className="absolute -right-7 bottom-10 h-32 w-32 rounded-full bg-cyan-100 blur-3xl" />
      <div className="relative rounded-[1.8rem] border border-white/80 bg-white/75 p-3 shadow-[0_28px_80px_rgba(15,62,92,0.14)] backdrop-blur">
        <div className="relative aspect-[1.08] overflow-hidden rounded-[1.45rem] bg-sky-50 sm:aspect-[1.18]">
          <Image
            src="/2.WEBP.png"
            alt="Wringg local host handing fresh clothes to a customer"
            fill
            sizes="(max-width: 1024px) 100vw, 52vw"
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#052235]/42 via-transparent to-white/10" />
          <div className="absolute left-4 top-4 rounded-2xl border border-white/70 bg-white/92 px-4 py-3 shadow-lg backdrop-blur sm:left-6 sm:top-6">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-cyan-700">
              BTM Pilot
            </p>
            <p className="mt-1 text-base font-black text-[#0f3148] sm:text-lg">
              Network live
            </p>
          </div>
          <div className="absolute bottom-4 right-4 max-w-[220px] rounded-2xl border border-white/70 bg-white/92 px-4 py-3 shadow-lg backdrop-blur sm:bottom-6 sm:right-6">
            <p className="text-sm font-black text-[#0f3148]">Community host matched</p>
            <p className="mt-1 text-xs font-semibold text-slate-500">
              Nearby. Trained. Accountable.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ServiceCard({ service }: { service: (typeof services)[number] }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-[1.35rem] border border-sky-100 bg-white shadow-[0_18px_55px_rgba(15,62,92,0.07)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_26px_75px_rgba(15,62,92,0.12)]">
      <div className="relative aspect-[1.42] overflow-hidden bg-sky-50">
        <Image
          src={service.image}
          alt={service.title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition duration-500 group-hover:scale-[1.03]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#062334]/28 via-transparent to-transparent" />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-2xl bg-cyan-50 text-base font-black text-cyan-700">
          {service.title.slice(0, 1)}
        </div>
        <h3 className="text-xl font-black text-[#0f3148]">{service.title}</h3>
        <p className="mt-3 flex-1 text-sm leading-7 text-slate-600">{service.description}</p>
      </div>
    </article>
  );
}

function UspCard({ card }: { card: (typeof uspCards)[number] }) {
  return (
    <article className="group rounded-[1.35rem] border border-sky-100 bg-white p-6 shadow-[0_18px_55px_rgba(15,62,92,0.07)] transition duration-300 hover:-translate-y-1 hover:border-cyan-200 hover:shadow-[0_26px_75px_rgba(15,62,92,0.12)]">
      <div className="mb-7 flex items-center justify-between gap-4">
        <span className="rounded-full bg-cyan-50 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-cyan-700">
          {card.label}
        </span>
        <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#2098d6] text-sm font-black text-white transition group-hover:scale-105">
          {card.marker}
        </span>
      </div>
      <h3 className="text-2xl font-black leading-tight text-[#0f3148]">{card.title}</h3>
      <p className="mt-4 text-sm leading-7 text-slate-600">{card.description}</p>
    </article>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#fbfdff] text-[#0f3148]">
      <header className="sticky top-0 z-50 border-b border-sky-100/70 bg-white/82 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-5 px-5 py-3.5 sm:px-8 lg:py-4">
          <Link href="#home" className="flex min-w-0 items-center">
            <Image
              src="/LOGO+TEXT.jpg"
              alt="Wringg logo and wordmark"
              width={226}
              height={56}
              className="h-11 w-auto object-contain sm:h-14"
              priority
            />
          </Link>

          <nav className="hidden items-center gap-7 text-sm font-semibold text-slate-600 lg:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-full px-1 py-2 transition hover:text-[#2098d6]"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <ButtonLink href={hostActionUrl}>Join Pilot</ButtonLink>
        </div>
      </header>

      <section id="home" className="relative bg-gradient-to-b from-white via-sky-50/45 to-white">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 pb-12 pt-12 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14 lg:pb-16 lg:pt-16">
          <div className="fade-up max-w-2xl">
            <div className="mb-5 inline-flex rounded-full border border-cyan-100 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-cyan-700 shadow-sm">
              Currently piloting in BTM, Bengaluru
            </div>
            <h1 className="text-4xl font-black leading-[1.04] tracking-normal text-[#0b2638] sm:text-5xl lg:text-6xl">
              Not a laundry shop. A neighbourhood-powered care network.
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-8 text-slate-600">
              WRINGG connects busy customers with trained local hosts nearby,
              making clothing care faster, more trusted, and more human.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href={customerActionUrl}>Book Pickup</ButtonLink>
              <ButtonLink href={hostActionUrl} variant="secondary">
                Become Host
              </ButtonLink>
            </div>
            <div className="mt-7 grid max-w-xl grid-cols-2 gap-3">
              {heroTags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-2xl border border-sky-100 bg-white/88 px-4 py-3 text-sm font-semibold text-slate-600 shadow-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <HeroVisual />
        </div>

        <div className="mx-auto max-w-7xl px-5 pb-10 sm:px-8">
          <div className="grid gap-5 md:grid-cols-3">
            {uspCards.map((card) => (
              <UspCard key={card.label} card={card} />
            ))}
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-5 pb-12 sm:px-8">
          <div className="grid overflow-hidden rounded-[1.7rem] border border-sky-100 bg-white shadow-[0_20px_70px_rgba(15,62,92,0.08)] md:grid-cols-4">
            {trustFeatures.map((feature) => (
              <div
                key={feature.title}
                className="border-b border-sky-100 p-5 last:border-b-0 md:border-b-0 md:border-r md:last:border-r-0"
              >
                <div className="mb-4 h-2.5 w-10 rounded-full bg-cyan-200" />
                <h3 className="text-base font-black text-[#0f3148]">{feature.title}</h3>
                <p className="mt-2 text-sm font-medium leading-6 text-slate-500">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-20">
        <div className="mx-auto mb-11 max-w-3xl text-center">
          <SectionLabel>Services</SectionLabel>
          <h2 className="mt-3 text-3xl font-black leading-tight sm:text-5xl">
            A disciplined operating layer for neighbourhood clothing care.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600">
            WRINGG works through nearby trained hosts, clean and accountable
            clothing care, local pickup coordination, and a community-powered
            service model that creates income opportunity.
          </p>
        </div>
        <div className="grid auto-rows-fr gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>
      </section>

      <section id="how-it-works" className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="mx-auto mb-10 max-w-2xl text-center">
            <SectionLabel>How it Works</SectionLabel>
            <h2 className="mt-3 text-3xl font-black sm:text-5xl">
              Simple, local, accountable.
            </h2>
          </div>
          <div className="grid gap-5 md:grid-cols-4">
            {steps.map((step, index) => (
              <div
                key={step.title}
                className="relative rounded-[1.35rem] border border-sky-100 bg-sky-50/60 p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-[0_18px_50px_rgba(15,62,92,0.08)]"
              >
                <span className="mb-7 inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#2098d6] text-sm font-black text-white">
                  {index + 1}
                </span>
                <h3 className="text-lg font-black">{step.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-20">
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <SectionLabel>Comparison</SectionLabel>
          <h2 className="mt-3 text-3xl font-black leading-tight sm:text-5xl">
            This is not a laundry counter.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600">
            WRINGG changes the operating model from anonymous processing to a
            trusted local host network for everyday clothing care.
          </p>
        </div>
        <div className="grid overflow-hidden rounded-[1.8rem] border border-sky-100 bg-white shadow-[0_24px_80px_rgba(15,62,92,0.09)] lg:grid-cols-2">
          <div className="border-b border-sky-100 p-7 lg:border-b-0 lg:border-r sm:p-9">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-slate-400">
              Traditional
            </p>
            <h3 className="mt-3 text-2xl font-black text-[#0f3148]">
              Laundry counter
            </h3>
            <div className="mt-7 grid gap-3">
              {comparison.traditional.map((item) => (
                <div key={item} className="rounded-2xl bg-slate-50 p-4 text-sm font-semibold text-slate-600">
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div className="bg-gradient-to-br from-sky-50 via-white to-cyan-50 p-7 sm:p-9">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-700">
              WRINGG
            </p>
            <h3 className="mt-3 text-2xl font-black text-[#0f3148]">
              Neighbourhood host network
            </h3>
            <div className="mt-7 grid gap-3">
              {comparison.wringg.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-cyan-100 bg-white p-4 text-sm font-bold text-[#0f3148] shadow-sm"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-5 py-16 sm:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:py-20">
        <div className="rounded-[1.8rem] bg-[#0f3148] p-7 text-white shadow-[0_28px_80px_rgba(15,49,72,0.18)] sm:p-10">
          <SectionLabel>For customers</SectionLabel>
          <h2 className="mt-3 text-3xl font-black sm:text-5xl">
            Skip the laundry-day headache.
          </h2>
          <p className="mt-5 text-base leading-8 text-sky-50">
            Your weekend should not disappear into washing, drying and ironing.
            WRINGG gives early BTM users a calmer way to manage clothing care
            through local hosts and simple pickup coordination.
          </p>
          <div className="mt-7 grid gap-3">
            {customerPoints.map((point) => (
              <div key={point} className="rounded-2xl bg-white/10 p-4 text-sm leading-7 text-sky-50">
                {point}
              </div>
            ))}
          </div>
          <div className="mt-7">
            <ButtonLink href={customerActionUrl} variant="soft">
              Join as Early User
            </ButtonLink>
          </div>
        </div>

        <div
          id="partners"
          className="overflow-hidden rounded-[1.8rem] border border-sky-100 bg-white shadow-[0_28px_80px_rgba(15,62,92,0.1)]"
        >
          <div className="grid h-full md:grid-cols-[0.9fr_1.1fr]">
            <div className="relative min-h-72 bg-sky-50">
              <Image
                src="/1.WEBP.png"
                alt="Wringg host network"
                fill
                sizes="(max-width: 768px) 100vw, 28vw"
                className="object-cover"
              />
            </div>
            <div className="p-7 sm:p-10">
              <SectionLabel>Become Host</SectionLabel>
              <h2 className="mt-3 text-3xl font-black sm:text-4xl">
                Make money with your washing machine.
              </h2>
              <p className="mt-5 text-base leading-8 text-slate-600">
                Have a washing machine and free time? WRINGG helps you turn
                everyday clothing care into neighbourhood income. Help nearby
                customers while building flexible income from home.
              </p>
              <div className="mt-7">
                <ButtonLink href={hostActionUrl}>Become a Host</ButtonLink>
              </div>
              <div className="mt-7 rounded-[1.35rem] bg-cyan-50 p-5">
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-cyan-700">
                  Pilot mode
                </p>
                <p className="mt-2 text-base font-black">
                  Currently onboarding early hosts in BTM.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="bg-gradient-to-b from-sky-50 to-white py-16 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <SectionLabel>Community</SectionLabel>
            <h2 className="mt-3 text-3xl font-black sm:text-5xl">
              Built around your neighbourhood.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              WRINGG connects customers with trusted local clothing-care hosts
              inside their own communities. Households can earn extra income,
              customers get convenience, turnaround can become faster, and trust
              grows through familiar apartment ecosystems.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                "Extra income for households",
                "Convenience for customers",
                "Faster local turnaround",
                "Community trust at the center",
              ].map((item) => (
                <div key={item} className="rounded-2xl border border-sky-100 bg-white p-5 font-bold shadow-sm">
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="relative aspect-[0.82] overflow-hidden rounded-[1.8rem] shadow-[0_24px_70px_rgba(15,62,92,0.12)]">
              <Image
                src="/1.WEBP.png"
                alt="Wringg customer receiving clothes from a trusted local host"
                fill
                sizes="(max-width: 768px) 100vw, 25vw"
                className="object-cover"
              />
            </div>
            <div className="grid gap-5">
              <div className="relative aspect-[1.25] overflow-hidden rounded-[1.8rem] shadow-[0_24px_70px_rgba(15,62,92,0.1)]">
                <Image
                  src="/1 (3).png"
                  alt="Wringg hosts in a Bengaluru apartment community"
                  fill
                  sizes="(max-width: 768px) 100vw, 25vw"
                  className="object-cover"
                />
              </div>
              <div className="rounded-[1.8rem] border border-cyan-100 bg-white p-7 shadow-sm">
                <p className="text-4xl font-black text-[#2098d6]">BTM</p>
                <p className="mt-2 text-sm font-semibold leading-6 text-slate-600">
                  Pilot network now live in Bengaluru, with focused early-user
                  onboarding in BTM Layout.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-20">
        <div className="grid gap-8 rounded-[1.8rem] border border-sky-100 bg-white p-7 shadow-[0_24px_80px_rgba(15,62,92,0.08)] sm:p-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <SectionLabel>Operating model</SectionLabel>
            <h2 className="mt-3 text-3xl font-black leading-tight sm:text-5xl">
              Built like a local host network.
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-600">
              WRINGG uses a distributed host model, trust layer, and hyperlocal
              operations to make clothing care scalable from one neighbourhood
              at a time.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              ["Distributed hosts", "Care capacity comes from trained local homes."],
              ["Trust layer", "Standards, support, and accountable coordination."],
              ["Hyperlocal ops", "Shorter routes and neighbourhood-level density."],
            ].map(([title, description]) => (
              <div key={title} className="rounded-[1.35rem] bg-sky-50/70 p-5">
                <h3 className="text-lg font-black text-[#0f3148]">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-4 sm:px-8">
        <div className="rounded-[1.7rem] border border-cyan-100 bg-white p-7 text-center shadow-[0_18px_55px_rgba(15,62,92,0.07)]">
          <p className="text-lg font-black text-[#0f3148]">
            &quot;Your friendly neighbourhood host makes laundry feel less like a chore.&quot;
          </p>
          <p className="mt-2 text-sm font-semibold text-cyan-700">
            Friendly neighbourhood host energy.
          </p>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-20">
        <div className="rounded-[1.8rem] bg-white p-7 shadow-[0_28px_80px_rgba(15,62,92,0.1)] sm:p-10">
          <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr] lg:items-end">
            <div>
              <SectionLabel>Contact</SectionLabel>
              <h2 className="mt-3 text-3xl font-black sm:text-5xl">
                Join the pilot while the network is being shaped.
              </h2>
              <p className="mt-5 text-base leading-8 text-slate-600">
                Ask about the active service zone, join as an early customer, or
                become an early WRINGG host for the BTM pilot.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              <a href={SUPPORT_CTA_URL} className="rounded-2xl bg-sky-50 p-5 font-bold transition hover:bg-sky-100">
                <span className="block text-xs uppercase tracking-[0.18em] text-sky-600">
                  WhatsApp
                </span>
                <span className="mt-2 block text-sm">+91 84385 08211</span>
              </a>
              <a href="mailto:hello@wringg.in" className="rounded-2xl bg-cyan-50 p-5 font-bold transition hover:bg-cyan-100">
                <span className="block text-xs uppercase tracking-[0.18em] text-cyan-700">
                  Email
                </span>
                <span className="mt-2 block text-sm">hello@wringg.in</span>
              </a>
              <div className="rounded-2xl bg-slate-50 p-5 font-bold">
                <span className="block text-xs uppercase tracking-[0.18em] text-slate-500">
                  Location
                </span>
                <span className="mt-2 block text-sm">BTM Layout, Bengaluru</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-sky-100 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-7 px-5 py-9 sm:px-8 md:flex-row md:items-center md:justify-between">
          <div className="flex min-w-0 flex-col gap-3">
            <Image
              src="/LOGO+TEXT.jpg"
              alt="Wringg logo and wordmark"
              width={190}
              height={48}
              className="h-11 w-fit object-contain"
            />
            <p className="text-sm font-semibold text-slate-500">
              Wash. Wear. Repeat. Built in Bengaluru.
            </p>
          </div>
          <div className="flex flex-wrap gap-x-5 gap-y-3 text-sm font-bold text-slate-600">
            <Link href="/privacy" className="hover:text-sky-600">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-sky-600">Terms</Link>
            <Link href="/refund" className="hover:text-sky-600">Refund Policy</Link>
            <Link href="/shipping" className="hover:text-sky-600">Shipping</Link>
            <Link href="/contact" className="hover:text-sky-600">Contact</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
