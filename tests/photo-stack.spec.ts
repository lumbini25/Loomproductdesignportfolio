import { expect, test, type Page } from "@playwright/test";

// The Home hero's stack of three sketches: thrown once on landing, then by click, tap or keyboard.
test.use({ contextOptions: { reducedMotion: "no-preference" } });

const topCard = (page: Page) => page.locator('[data-place="0"] img').getAttribute("src");
const settle = (page: Page) => page.waitForTimeout(1100);

for (const [width, height] of [
  [390, 844],
  [834, 1112],
  [1440, 900],
] as const) {
  test.describe(`at ${width}`, () => {
    test.beforeEach(async ({ page }) => {
      await page.setViewportSize({ width, height });
      await page.goto("/");
      await page.waitForTimeout(700 + 1100); // The landing throw.
    });

    test("cycles through all three and resets, without moving the page", async ({ page }) => {
      const button = page.getByRole("button", { name: "Show the next sketch" });
      const before = await page.evaluate(() => document.documentElement.scrollHeight);
      const seen = [await topCard(page)];
      expect(seen[0]).toContain("museum");

      for (let i = 0; i < 3; i++) {
        await button.click();
        await settle(page);
        seen.push(await topCard(page));
      }
      expect(seen[1]).toContain("sunset");
      expect(seen[2]).toContain("working");
      expect(seen[3]).toBe(seen[0]);
      expect(await page.evaluate(() => document.documentElement.scrollHeight)).toBe(before);
    });

    test("stays inside the window through the whole throw", async ({ page }) => {
      await page.getByRole("button", { name: "Show the next sketch" }).click();
      for (let i = 0; i < 18; i++) {
        const { left, right, overflow } = await page.evaluate(() => {
          const boxes = [...document.querySelectorAll("[data-place]")].map((c) => c.getBoundingClientRect());
          const de = document.documentElement;
          return { left: Math.min(...boxes.map((b) => b.left)), right: Math.max(...boxes.map((b) => b.right)), overflow: de.scrollWidth - de.clientWidth };
        });
        expect(left).toBeGreaterThanOrEqual(0);
        expect(right).toBeLessThanOrEqual(width);
        expect(overflow).toBeLessThanOrEqual(0);
        await page.waitForTimeout(50);
      }
    });

    test("works by keyboard and keeps focus", async ({ page }) => {
      const button = page.getByRole("button", { name: "Show the next sketch" });
      await button.focus();
      const first = await topCard(page);
      await page.keyboard.press("Enter");
      await settle(page);
      expect(await topCard(page)).not.toBe(first);
      await page.keyboard.press("Space");
      await settle(page);
      await expect(button).toBeFocused();
    });
  });
}

test("reduced motion: no landing throw, and a press swaps at once", async ({ browser }) => {
  const context = await browser.newContext({ reducedMotion: "reduce" });
  const page = await context.newPage();
  await page.goto("http://localhost:3100/");
  await page.waitForTimeout(1200);
  expect(await topCard(page)).toContain("working");
  await page.getByRole("button", { name: "Show the next sketch" }).click();
  expect(await topCard(page)).toContain("museum");
  await context.close();
});
