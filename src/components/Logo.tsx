import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  /** White wordmark for ink grounds. Color wordmark for paper grounds. */
  variant?: "on-dark" | "on-light";
  className?: string;
  priority?: boolean;
}

export function Logo({
  variant = "on-dark",
  className = "h-12 w-auto",
  priority = false,
}: LogoProps) {
  const src =
    variant === "on-dark"
      ? "/assets/CaliLawyer_Logo_white.png"
      : "/assets/CaliLawyer_Logo.png";

  return (
    <Link href="/" className="inline-flex shrink-0 items-center">
      <Image
        src={src}
        alt="CaliLawyer.com — California's Injury Firm"
        width={2000}
        height={1008}
        priority={priority}
        className={className}
      />
    </Link>
  );
}
