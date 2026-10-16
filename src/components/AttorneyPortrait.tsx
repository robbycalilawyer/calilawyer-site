import {
  ATTORNEY_ALT,
  ATTORNEY_FIGURE_SIZES,
  ATTORNEY_PHOTO,
  attorneySrcSet,
} from "@/lib/attorney-photo";

/**
 * Static export leaves next/image unoptimized, so this is a real picture
 * element: AVIF, then WebP, then PNG. Width and height reserve the 4:5 box.
 */
export function AttorneyPortrait({
  priority = false,
  sizes = ATTORNEY_FIGURE_SIZES,
}: {
  /** High priority only when this image is in the first viewport. */
  priority?: boolean;
  sizes?: string;
}) {
  return (
    <picture>
      <source type="image/avif" srcSet={attorneySrcSet("avif")} sizes={sizes} />
      <source type="image/webp" srcSet={attorneySrcSet("webp")} sizes={sizes} />
      <img
        src={ATTORNEY_PHOTO.src}
        srcSet={attorneySrcSet("png")}
        sizes={sizes}
        width={ATTORNEY_PHOTO.width}
        height={ATTORNEY_PHOTO.height}
        alt={ATTORNEY_ALT}
        decoding={priority ? "auto" : "async"}
        loading={priority ? "eager" : "lazy"}
        {...(priority ? { fetchPriority: "high" as const } : {})}
        className="aspect-[4/5] h-auto w-full object-cover"
      />
    </picture>
  );
}

export function AttorneyFigure({
  priority = false,
  sizes = ATTORNEY_FIGURE_SIZES,
  className,
}: {
  priority?: boolean;
  sizes?: string;
  className?: string;
}) {
  return (
    <figure className={className}>
      <div className="overflow-hidden rounded-[var(--radius-lg)] bg-ink">
        <AttorneyPortrait priority={priority} sizes={sizes} />
      </div>
      <figcaption className="mt-3 text-sm text-ink/60">Rober A. Terziyan</figcaption>
    </figure>
  );
}
