import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";

export interface Crumb {
  name: string;
  path: string;
}

/** Visible trail plus BreadcrumbList JSON-LD. One component, same labels. */
export function BreadcrumbTrail({
  items,
  tone = "light",
}: {
  items: readonly Crumb[];
  tone?: "light" | "dark";
}) {
  const link =
    tone === "dark"
      ? "text-bone hover:text-white"
      : "text-ink/70 hover:text-ink";
  const current = tone === "dark" ? "text-white" : "text-ink";

  return (
    <>
      <JsonLd data={breadcrumbSchema(items)} />
      <nav aria-label="Breadcrumb">
        <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm">
          {items.map((item, index) => {
            const last = index === items.length - 1;
            return (
              <li key={item.path} className="flex items-center gap-2">
                {index > 0 ? (
                  <span aria-hidden="true" className={tone === "dark" ? "text-bone" : "text-ink/40"}>
                    /
                  </span>
                ) : null}
                {last ? (
                  <span className={`font-semibold ${current}`} aria-current="page">
                    {item.name}
                  </span>
                ) : (
                  <Link href={item.path} className={link}>
                    {item.name}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
