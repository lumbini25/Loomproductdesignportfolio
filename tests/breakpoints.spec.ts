import { expect, test } from "@playwright/test";

// Every page at the sizes a visitor really uses, not only the three design widths: an overflow at
// 1280 went unseen while 390, 834 and 1440 passed (decisions.md, 2026-10-31). 833/834 and 1199/1200
// sit on either side of the two breakpoints.
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

const sizes = [
  [320, 568],
  [390, 844],
  [430, 932],
  [768, 1024],
  [833, 1112],
  [834, 1112],
  [1024, 768],
  [1199, 800],
  [1200, 800],
  [1280, 720],
  [1440, 900],
  [1512, 780],
  [1728, 1000],
  [1920, 1080],
  [2560, 1440],
] as const;

for (const route of routes) {
  for (const [width, height] of sizes) {
    test(`${route} at ${width}x${height}`, async ({ page }) => {
      const errors: string[] = [];
      page.on("pageerror", (e) => errors.push(e.message));
      await page.setViewportSize({ width, height });

      const response = await page.goto(route, { waitUntil: "load" });
      expect(response?.status(), "page loads").toBe(200);

      const overflow = await page.evaluate(
        () => document.documentElement.scrollWidth - document.documentElement.clientWidth,
      );
      expect(overflow, "no sideways scroll").toBeLessThanOrEqual(0);
      expect(errors, "no script errors").toEqual([]);
    });
  }
}
