import type { Metadata } from "next";
import { PracticeArea } from "@/components/PracticeArea";
import { accidents } from "@/lib/content/accidents";

const entry = accidents["motorcycle-accident"];

export const metadata: Metadata = {
  title: entry.title,
  description: entry.description,
};

export default function MotorcycleAccidentPage() {
  return <PracticeArea content={entry.content} />;
}
