import { Card } from "./Card";

interface ResultCardProps {
  /** The headline figure — a bracketed placeholder until attorney-verified. */
  amount: string;
  /** Short case type, e.g. "Rear-end collision". */
  caseType: string;
  /** One-line description of what happened / what was recovered. */
  detail: string;
}

/**
 * Result / settlement card. Figure is rendered in mono per the type
 * system. Amounts are placeholders — we never invent settlement
 * numbers.
 */
export function ResultCard({ amount, caseType, detail }: ResultCardProps) {
  return (
    <Card tone="dark" className="flex flex-col">
      <span className="eyebrow text-bone">{caseType}</span>
      <span className="figure mt-3 text-3xl font-medium text-white sm:text-4xl">
        {amount}
      </span>
      <p className="mt-3 text-sm leading-relaxed text-bone">{detail}</p>
    </Card>
  );
}
