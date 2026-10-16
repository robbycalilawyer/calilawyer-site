import Link from "next/link";
import { Accordion } from "@/components/Accordion";
import { BreadcrumbTrail, type Crumb } from "@/components/BreadcrumbTrail";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import type { GeoPage } from "@/lib/content/geo/types";
import { articleSchema, cityServiceSchema, faqSchema } from "@/lib/schema";
import { ATTORNEY } from "@/lib/site";

function crumbsFor(page: GeoPage): Crumb[] {
  const root = page.path.split("/").filter(Boolean)[0];
  const parents: Record<string, Crumb> = {
    "lemon-law": { name: "Lemon law", path: "/lemon-law" },
    "personal-injury": { name: "Personal injury", path: "/injury" },
  };
  const items: Crumb[] = [{ name: "Home", path: "/" }];
  const parent = root ? parents[root] : undefined;
  if (parent && parent.path !== page.path) items.push(parent);
  items.push({ name: page.eyebrow, path: page.path });
  return items;
}

/** Answer-first page used by the guides, city pages, and attorney profile. */
export function AnswerPage({ page }: { page: GeoPage }) {
  const crumbs = crumbsFor(page);
  return (
    <>
      {page.faqs.length > 0 ? <JsonLd data={faqSchema(page.faqs)} /> : null}
      {page.kind === "article" ? <JsonLd data={articleSchema(page)} /> : null}
      {page.kind === "city" && page.city && page.serviceName ? (
        <JsonLd
          data={cityServiceSchema({
            path: page.path,
            city: page.city,
            serviceName: page.serviceName,
          })}
        />
      ) : null}
      <PageHero eyebrow={page.eyebrow} title={page.h1} />
      <article className="bg-paper">
        <div className="container-site max-w-3xl py-12 md:py-16">
          <BreadcrumbTrail items={crumbs} />
          <p className="mt-8 text-lg leading-relaxed text-ink">{page.answer}</p>
          <p className="mt-4 text-sm text-ink/70">
            Last reviewed by {ATTORNEY.name}. This is general information, not legal
            advice.
          </p>

          {page.table ? (
            <div className="mt-10 overflow-x-auto">
              <table className="w-full min-w-[36rem] border-collapse text-left text-sm">
                <caption className="mb-3 text-left font-display text-2xl text-ink">
                  {page.table.caption}
                </caption>
                <thead>
                  <tr className="border-b border-ink">
                    {page.table.headers.map((header, index) => (
                      <th key={index} className="px-3 py-3 font-semibold text-ink">
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {page.table.rows.map((row, rowIndex) => (
                    <tr key={rowIndex} className="border-b border-bone">
                      {row.map((cell, index) => (
                        <td key={index} className="px-3 py-3 align-top text-ink/80">
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : null}

          {page.sections.map((section) => (
            <section key={section.heading} className="mt-10">
              <h2 className="font-display text-3xl text-ink">{section.heading}</h2>
              {section.paragraphs?.map((paragraph, index) => (
                <p key={index} className="mt-4 leading-relaxed text-ink/80">
                  {paragraph}
                </p>
              ))}
              {section.list ? (
                <ul className="mt-4 list-disc space-y-2 pl-5 text-ink/80">
                  {section.list.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              ) : null}
            </section>
          ))}

          {page.citations.length > 0 ? (
            <section className="mt-10">
              <h2 className="font-display text-3xl text-ink">Sources</h2>
              <ul className="mt-4 space-y-2">
                {page.citations.map((cite) => (
                  <li key={cite.href}>
                    <a
                      href={cite.href}
                      className="text-ink underline"
                      rel="noopener noreferrer"
                    >
                      {cite.label}
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          ) : null}

          {page.faqs.length > 0 ? (
            <section className="mt-12">
              <h2 className="font-display text-3xl text-ink">Questions</h2>
              <div className="mt-4">
                <Accordion items={page.faqs} />
              </div>
            </section>
          ) : null}

          {page.related.length > 0 ? (
            <section className="mt-12">
              <h2 className="font-display text-3xl text-ink">Related</h2>
              <ul className="mt-4 space-y-2">
                {page.related.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="font-semibold text-ink underline">
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          ) : null}
        </div>
      </article>
    </>
  );
}
