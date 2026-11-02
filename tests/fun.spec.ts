import { expect, test } from "@playwright/test";

// The three Fun cards stack on phones, and share one row at equal height from 834.
for (const width of [320, 390]) {
  test(`three cards stacked at ${width}`, async ({ page }) => {
    await page.setViewportSize({ width, height: 900 });
    await page.goto("/fun");
    const boxes = await page.locator("main ul > li").evaluateAll((items) => items.map((i) => i.getBoundingClientRect().toJSON()));
    expect(boxes).toHaveLength(3);
    expect(new Set(boxes.map((b) => Math.round(b.left))).size).toBe(1);
    expect(boxes[1].top).toBeGreaterThan(boxes[0].bottom);
  });
}

for (const width of [834, 1200, 1440]) {
  test(`three cards in one row at ${width}`, async ({ page }) => {
    await page.setViewportSize({ width, height: 900 });
    await page.goto("/fun");
    const boxes = await page.locator("main ul > li").evaluateAll((items) => items.map((i) => i.getBoundingClientRect().toJSON()));
    expect(boxes).toHaveLength(3);
    expect(new Set(boxes.map((b) => Math.round(b.top))).size).toBe(1);
    expect(new Set(boxes.map((b) => Math.round(b.height))).size).toBe(1);
  });
}
