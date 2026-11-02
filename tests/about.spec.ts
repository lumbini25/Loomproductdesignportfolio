import { expect, test, type Page } from "@playwright/test";

// The About page's moving photo rows and its accordion.
test.use({ contextOptions: { reducedMotion: "no-preference" } });

const offsets = (page: Page) =>
  page.evaluate(() => [...document.querySelectorAll(".marquee")].map((r) => new DOMMatrix(getComputedStyle(r).transform).e));

for (const [width, height] of [
  [390, 844],
  [834, 1112],
  [1440, 900],
] as const) {
  test(`photos move opposite ways and pause at ${width}`, async ({ page }) => {
    await page.setViewportSize({ width, height });
    await page.goto("/about");
    await expect(page.locator(".marquee img[alt]:not([alt=''])")).toHaveCount(11);

    const a = await offsets(page);
    await page.waitForTimeout(1000);
    const b = await offsets(page);
    expect(b[0]).toBeLessThan(a[0]); // Row 1 moves left.
    expect(b[1]).toBeGreaterThan(a[1]); // Row 2 moves right.
    expect(Math.abs(b[0] - a[0])).toBeLessThan(60); // Slowly.

    await page.getByRole("button", { name: "Pause the photos" }).click();
    await page.mouse.move(0, 0);
    await page.waitForTimeout(100);
    const c = await offsets(page);
    await page.waitForTimeout(600);
    expect(await offsets(page)).toEqual(c);
    await expect(page.getByRole("button", { name: "Play the photos" })).toBeVisible();
  });
}

test("one belief open at a time, by keyboard", async ({ page }) => {
  await page.goto("/about");
  await expect(page.locator("details[name=beliefs][open]")).toHaveCount(1);
  await page.locator("summary", { hasText: "Useful before beautiful" }).focus();
  await page.keyboard.press("Enter");
  await expect(page.locator("details[name=beliefs][open]")).toHaveCount(1);
  await expect(page.locator("details[name=beliefs][open] summary")).toContainText("Useful before beautiful");
});
