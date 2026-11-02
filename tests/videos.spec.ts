import { expect, test } from "@playwright/test";

// Every video autoplays, muted and looping, except the two demo films (decisions.md, 2026-11-02).
test.use({ contextOptions: { reducedMotion: "no-preference" } });

const pressToPlay = ["bloom-heal-demo.mp4", "knowunity-active-recall-web.mp4"];

for (const route of ["/", "/fun", "/work/knowunity", "/work/bloom-and-heal", "/work/wtv-consulting", "/work/tdk-trusted-positioning", "/work/anewvista"]) {
  test(`videos on ${route}`, async ({ page }) => {
    await page.goto(route);
    const videos = await page.locator("video").evaluateAll((all) =>
      all.map((v) => ({ file: (v as HTMLVideoElement).querySelector("source")?.getAttribute("src")?.split("/").pop() ?? "", muted: (v as HTMLVideoElement).muted, loop: (v as HTMLVideoElement).loop })),
    );
    expect(videos.length).toBeGreaterThan(0);
    for (const v of videos) {
      const auto = !pressToPlay.includes(v.file);
      expect(v.muted, v.file).toBe(auto);
      expect(v.loop, v.file).toBe(auto);
    }
  });
}
