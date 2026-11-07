export const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/services", label: "Our Services" },
  { to: "/schemes", label: "Schemes" },
  { to: "/projects", label: "Projects" },
  { to: "/gallery", label: "Gallery" },
  { to: "/careers", label: "Careers" },
  { to: "/contact", label: "Contact" },
] as const;

export const HEAD_OFFICE = {
  name: "Head Office",
  address: "Ansari Building, Kodathipadi, Mannarkkad - 678582, Palakkad, Kerala",
  phones: ["04924-223000", "+91 9072 101 888", "+91 9072 101 999"],
};

export const BRANCHES = [
  { name: "Edathanattukara", address: "Karuvally Shopping Centre, Kottappalla, Edathanattukara", phones: ["04924-267 001", "+91 9072 369 444", "+91 9072 369 888"] },
  { name: "Nellippuzha Junction", address: "Fathima Tower, Nellippuzha Jn, Mannarkkad", phones: ["04924-224 000", "+91 9605 900 222", "+91 9605 900 666"] },
  { name: "Perinthalmanna", address: "Kannamthodi Heritage Complex, Perinthalmanna", phones: ["+91 9207 101 666", "+91 9207 818 818"] },
  { name: "Abu Dhabi, UAE", address: "Al Khazna Building, Najda Street, Abu Dhabi – UAE", phones: ["026 783 266", "0542 811 555", "+91 9207 111 555"] },
  { name: "Mukkam, Calicut", address: "C V Tower, Karasseri, Mukkam, Calicut", phones: ["+91 9207 151 555", "+91 9207 030 555"] },
  { name: "Ayyappankavu, Karakurussi", address: "PC Complex, Ayyappankavu, Karakurussi", phones: ["+91 9207 630 555"] },
];

export const telHref = (p: string) => `tel:${p.replace(/[^\d+]/g, "")}`;

export type Service = { slug: string; title: string; short: string; body: string[] };

export const SERVICES: Service[] = [
  {
    slug: "savings-schemes",
    title: "Savings Schemes",
    short: "Structured ways to build savings steadily over time, guided by our team.",
    body: [
      "Amana's savings schemes are designed to help members root their savings and grow towards their financial aspirations with reliable, disciplined choices.",
    ],
  },
  {
    slug: "pravasi-welfare-scheme",
    title: "Pravasi Welfare Scheme",
    short: "A welfare initiative for Pravasis (non-resident Keralites), including members in the UAE.",
    body: [
      "Our Pravasi Welfare Scheme is aimed at supporting the financial wellbeing of non-resident Keralites and their families, with a dedicated branch in Abu Dhabi.",
    ],
  },
  {
    slug: "pravasi-life-care",
    title: "Pravasi Life Care",
    short: "Care-focused support for Pravasi members and the families who depend on them.",
    body: [
      "Pravasi Life Care reflects the society's commitment to the common man's welfare — supporting Pravasi members through every stage of life.",
    ],
  },
  {
    slug: "chit-fund-services",
    title: "Chit Fund Services",
    short: "Group savings through Best Laid Chits Limited, with transparent monthly auctions.",
    body: [
      "A chit fund brings a group of subscribers together under an organiser. Each month every subscriber contributes their scheduled payment to the pot, and an open auction decides who receives the pooled amount that month.",
      "The fund runs for a number of months equal to the number of subscribers, making it a disciplined, community-based way to save.",
    ],
  },
  {
    slug: "investment-information",
    title: "Investment Information",
    short: "Clear information to help you understand your investment options before you commit.",
    body: [
      "Our team helps members understand the opportunities available, so that every decision — small or large — is made with clarity and confidence.",
    ],
  },
  {
    slug: "financial-guidance",
    title: "Financial Guidance",
    short: "One-to-one guidance from our team for individuals, families and businesses.",
    body: [
      "Whether you are planning for the future or looking for reliable financial advice, our expert team is here to guide you every step of the way.",
    ],
  },
];

export const DIVISIONS = [
  {
    title: "Amana Best Laid Society",
    text: "Working for the common man's welfare — savings, welfare schemes and community-focused initiatives that help ordinary people move forward.",
    to: "/about" as const,
  },
  {
    title: "Best Laid Developer's LLP",
    text: "A Limited Liability Partnership focused on business development, structured around clear partner roles and responsibilities.",
    to: "/projects" as const,
  },
  {
    title: "Best Laid Chits Limited",
    text: "Chit fund services offering a disciplined, community-based way to save through transparent monthly auctions.",
    to: "/services/$slug" as const,
  },
];
