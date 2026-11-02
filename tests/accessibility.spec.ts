import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

// axe over every route at the three design widths, against WCAG 2.1 A and AA (CLAUDE.md, "Hard
// rules"). A clean result covers what a machine can see: not reading order, alt text quality or
// keyboard flow. Reduced motion keeps scroll reveals from hiding content during the scan.
const routes = [
  "/",
  "/about",
  "/fun",
  "/work/knowunity",
  "/work/bloom-and-heal",
  "/work/wtv-consulting",
  "/work/tdk-trusted-positioning",
  "/work/anewvista",
];

const widths = [
  [390, 844],
  [834, 1112],
  [1440, 900],
] as const;

test.use({ contextOptions: { reducedMotion: "reduce" } });

for (const route of routes) {
  for (const [width, height] of widths) {
    test(`${route} at ${width}`, async ({ page }) => {
      await page.setViewportSize({ width, height });
      await page.goto(route, { waitUntil: "load" });
      // Collapsed sections are invisible to axe, so open them first.
      await page.evaluate(() => document.querySelectorAll("details").forEach((d) => (d.open = true)));

      const { violations } = await new AxeBuilder({ page })
        .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
        .analyze();

      const found = violations.flatMap((v) =>
        v.nodes.map((n) => `${v.impact} ${v.id}: ${n.target.join(" ")} — ${n.failureSummary?.split("\n")[1]?.trim()}`),
      );
      expect(found).toEqual([]);
    });
  }
}
