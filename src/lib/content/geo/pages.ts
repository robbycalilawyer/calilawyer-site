import { ATTORNEY } from "@/lib/site";
import { geo, type GeoKind, type GeoPage } from "./types";

/** Visible text on every new page until the briefs are fact-checked. */
export const COPY_PENDING = "Copy pending fact-check.";

const FAQS = [1, 2, 3].map((number) => ({
  q: `Question ${number}. Copy pending fact-check.`,
  a: COPY_PENDING,
}));

const RELATED = [
  { href: "/lemon-law", title: "Lemon law" },
  { href: "/injury", title: "Personal injury" },
  { href: "/contact", title: "Contact" },
  { href: ATTORNEY.path, title: "Attorney" },
];

function shell(input: {
  path: string;
  title: string;
  eyebrow: string;
  h1: string;
  kind: GeoKind;
  city?: string;
  serviceName?: string;
  withTable?: boolean;
  answer?: string;
}): GeoPage {
  return geo({
    path: input.path,
    title: input.title,
    description: COPY_PENDING,
    eyebrow: input.eyebrow,
    h1: input.h1,
    answer: input.answer ?? COPY_PENDING,
    kind: input.kind,
    city: input.city,
    serviceName: input.serviceName,
    sections: [{ heading: "Overview", paragraphs: [COPY_PENDING] }],
    table: input.withTable
      ? {
          caption: COPY_PENDING,
          headers: ["Topic", "Status"],
          rows: [[COPY_PENDING, COPY_PENDING]],
        }
      : undefined,
    citations: [],
    faqs: input.kind === "reviews" ? [] : FAQS,
    related: RELATED.filter((link) => link.href !== input.path),
  });
}

const CITIES = [
  ["glendale", "Glendale"],
  ["burbank", "Burbank"],
  ["pasadena", "Pasadena"],
  ["los-angeles", "Los Angeles"],
] as const;

export const CITY_INJURY_PAGES: GeoPage[] = CITIES.map(([slug, name]) =>
  shell({
    path: `/${slug}/personal-injury-lawyer`,
    title: `${name} personal injury lawyer`,
    eyebrow: `${name} injury`,
    h1: `Personal injury lawyer in ${name}`,
    kind: "city",
    city: name,
    serviceName: `${name} personal injury lawyer`,
  }),
);

export const CITY_LEMON_PAGES: GeoPage[] = CITIES.map(([slug, name]) =>
  shell({
    path: `/${slug}/lemon-law-attorney`,
    title: `${name} lemon law attorney`,
    eyebrow: `${name} lemon law`,
    h1: `Lemon law attorney in ${name}`,
    kind: "city",
    city: name,
    serviceName: `${name} lemon law attorney`,
  }),
);

export const attorneyPage = shell({
  path: ATTORNEY.path,
  title: "Attorney",
  eyebrow: "Attorney",
  h1: ATTORNEY.name,
  kind: "person",
});

export const reviewsPage = shell({
  path: "/reviews",
  title: "Reviews",
  eyebrow: "Reviews",
  h1: "Reviews",
  kind: "reviews",
});

export const GEO_PAGES: GeoPage[] = [
  shell({
    path: "/guides/california-personal-injury-statute-of-limitations",
    title: "California personal injury statute of limitations",
    eyebrow: "Injury deadlines",
    h1: "California personal injury statute of limitations",
    kind: "article",
    withTable: true,
  }),
  shell({
    path: "/guides/california-comparative-fault",
    title: "California comparative fault",
    eyebrow: "Comparative fault",
    h1: "California comparative fault",
    kind: "article",
  }),
  shell({
    path: "/lemon-law/song-beverly-act-explained",
    title: "California lemon law explained",
    eyebrow: "Song-Beverly",
    h1: "California lemon law explained",
    kind: "article",
    withTable: true,
  }),
  shell({
    path: "/lemon-law/deadlines",
    title: "California lemon law deadlines",
    eyebrow: "Deadlines",
    h1: "California lemon law deadlines",
    kind: "article",
    withTable: true,
    answer: "See CCP §871.21 and §871.29. Copy pending fact-check.",
  }),
  shell({
    path: "/lemon-law/attorney-fees",
    title: "Lemon law attorney fees",
    eyebrow: "Attorney fees",
    h1: "Lemon law attorney fees",
    kind: "article",
  }),
  shell({
    path: "/lemon-law/used-cpo-leased",
    title: "Used and leased lemon law",
    eyebrow: "Used and leased",
    h1: "Used and leased vehicles",
    kind: "faq",
    answer: "Used vehicles may qualify, case by case.",
  }),
  shell({
    path: "/lemon-law/ev-tesla",
    title: "Electric vehicle lemon law",
    eyebrow: "Electric vehicles",
    h1: "Electric vehicle lemon law",
    kind: "faq",
  }),
  shell({
    path: "/personal-injury/attorney-fees",
    title: "Personal injury attorney fees",
    eyebrow: "Attorney fees",
    h1: "Personal injury attorney fees",
    kind: "faq",
  }),
  shell({
    path: "/personal-injury/car-accidents",
    title: "Car accident claims",
    eyebrow: "Car accidents",
    h1: "Car accident claims",
    kind: "faq",
  }),
  shell({
    path: "/personal-injury/rideshare-accidents",
    title: "Rideshare accident claims",
    eyebrow: "Rideshare",
    h1: "Rideshare accident claims",
    kind: "faq",
  }),
  shell({
    path: "/personal-injury/motorcycle-accidents",
    title: "Motorcycle accident claims",
    eyebrow: "Motorcycle",
    h1: "Motorcycle accident claims",
    kind: "faq",
  }),
  shell({
    path: "/personal-injury/pedestrian-accidents",
    title: "Pedestrian accident claims",
    eyebrow: "Pedestrian",
    h1: "Pedestrian accident claims",
    kind: "faq",
  }),
  shell({
    path: "/personal-injury/dog-bites",
    title: "Dog bite claims",
    eyebrow: "Dog bites",
    h1: "Dog bite claims",
    kind: "faq",
  }),
  shell({
    path: "/personal-injury/premises-liability",
    title: "Premises liability claims",
    eyebrow: "Premises",
    h1: "Premises liability claims",
    kind: "faq",
  }),
  ...CITY_INJURY_PAGES,
  ...CITY_LEMON_PAGES,
  attorneyPage,
  reviewsPage,
];
