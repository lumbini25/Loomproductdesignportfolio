import { anewvista } from "./anewvista";
import { bloom } from "./bloom";
import { knowunity } from "./knowunity";
import type { CaseStudy } from "./types";
import { venue } from "./venue";
import { wtv } from "./wtv";

const studies: CaseStudy[] = [knowunity, wtv, venue, bloom, anewvista];

export function getCaseStudy(slug: string) {
  return studies.find((s) => s.slug === slug);
}
