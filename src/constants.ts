// ─── Business ────────────────────────────────────────────────────────────────
export const SITE_URL      = "https://www.rightfirsttimeplumbing.com";
export const BUSINESS_NAME = "Right First Time Plumbing";
export const OWNER_NAME    = "Owen McDermott";
export const LICENSE       = "NC Plumbing License #38563";

// ─── Contact ─────────────────────────────────────────────────────────────────
export const PHONE_TEL     = "tel:+19194512283";
export const PHONE_RAW     = "+1-919-451-2283";
export const PHONE_DISPLAY = "(919) 451-2283";

export const EMAIL         = "info@rightfirsttimeplumbing.com";
export const EMAIL_QUOTE_HREF =
  `mailto:${EMAIL}?subject=Free%20Plumbing%20Quote%20Request` +
  `&body=Hi%20team%2C%0D%0A%0D%0AI%20need%20help%20with%3A%20%5Bdescribe%20your%20plumbing%20issue%5D`;

// ─── Service areas ────────────────────────────────────────────────────────────
export const SERVICE_AREAS = ["Carrboro", "Chapel Hill", "Hillsborough"] as const;

// ─── Navigation ──────────────────────────────────────────────────────────────
export const NAV_ITEMS = [
  { id: "team",     label: "Meet the Team" },
  { id: "services", label: "Services"      },
  { id: "why-us",   label: "Why Us"        },
  { id: "faq",      label: "FAQ"           },
  { id: "contact",  label: "Contact"       },
] as const;

// ─── FAQ ─────────────────────────────────────────────────────────────────────
export const FAQ_ITEMS = [
  {
    question: "Do you offer 24/7 emergency plumbing service?",
    answer:
      `Yes, ${BUSINESS_NAME} provides round-the-clock emergency plumbing in Carrboro, Chapel Hill, Hillsborough and surrounding areas. Call ${PHONE_DISPLAY} any time, day or night.`,
  },
  {
    question: "What areas do you serve?",
    answer:
      "We serve Carrboro, Chapel Hill, Hillsborough, and the wider Orange County and Durham County areas in North Carolina. Not sure if we cover your address? Give us a call and we'll let you know.",
  },
  {
    question: "Are you licensed and insured in North Carolina?",
    answer:
      `Yes. ${BUSINESS_NAME} holds ${LICENSE} and is fully insured. You're protected on every job.`,
  },
  {
    question: "Do you offer free estimates?",
    answer:
      `Phone quotes are completely free. Just call or email to describe your job and we'll give you a clear, upfront price. If we need to call out to assess the work in person, a callout fee applies. Call us at ${PHONE_DISPLAY} and we can advise which applies to your situation.`,
  },
  {
    question: "How quickly can you respond to a plumbing emergency?",
    answer:
      "We aim to respond same-day for most emergencies in our service area. Owen handles all jobs personally, so you speak directly with the plumber, no call centres or subcontractors.",
  },
  {
    question: "Do you repair and install water heaters?",
    answer:
      "Yes. We install and repair both tank and tankless water heaters from all major brands. Whether you need a like-for-like replacement or want to upgrade to a more efficient unit, we can advise and install.",
  },
  {
    question: "What should I do if I have a burst pipe?",
    answer:
      `First, turn off your main water shut-off valve to stop the flow. Then call us immediately at ${PHONE_DISPLAY}. We'll walk you through any immediate steps over the phone and get to you as quickly as possible.`,
  },
] as const;
