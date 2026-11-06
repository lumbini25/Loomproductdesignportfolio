// A hand-drawn ring as one SVG path: a pen going round a little more than once and a half, wobbling
// off a true ellipse, drifting a few pixels as it goes and finishing past where it started, the way
// someone circles something twice to make the point. Deterministic (the same seed gives the same
// ring), so the server and the browser draw the same path.

const TAU = Math.PI * 2;

// A repeatable pseudo-random number in 0..1 from a seed and an index.
function rand(seed: number, i: number) {
  const x = Math.sin(seed * 127.1 + i * 311.7) * 43758.5453;
  return x - Math.floor(x);
}

export type Ring = { cx: number; cy: number; rx: number; ry: number };

export function penPath({ cx, cy, rx, ry }: Ring, seed: number, startDeg: number, turns = 1.65, tiltDeg = 0): string {
  const steps = Math.round(turns * 26);
  const start = (startDeg * Math.PI) / 180;
  const tilt = (tiltDeg * Math.PI) / 180;
  const driftX = (rand(seed, 901) - 0.5) * rx * 0.28;
  const driftY = (rand(seed, 902) - 0.5) * ry * 0.28;
  const pts: [number, number][] = [];
  for (let i = 0; i <= steps; i++) {
    const t = i / steps;
    const a = start + t * turns * TAU;
    // The second pass sits a little off the first, and every point is nudged.
    const wobble = 1 + 0.07 * Math.sin(2 * a + seed) + 0.05 * Math.sin(3 * a + seed * 2) + (rand(seed, i) - 0.5) * 0.06;
    const pass = 1 + 0.1 * t - 0.04 * Math.sin(t * Math.PI);
    const ex = rx * pass * wobble * Math.cos(a);
    const ey = ry * pass * wobble * Math.sin(a);
    pts.push([
      cx + ex * Math.cos(tilt) - ey * Math.sin(tilt) + driftX * t,
      cy + ex * Math.sin(tilt) + ey * Math.cos(tilt) + driftY * t,
    ]);
  }
  // Catmull-Rom through the points, as cubic Béziers, so the line has no corners.
  const f = (n: number) => n.toFixed(1);
  let d = `M${f(pts[0][0])} ${f(pts[0][1])}`;
  for (let i = 0; i < pts.length - 1; i++) {
    const p0 = pts[Math.max(0, i - 1)];
    const p1 = pts[i];
    const p2 = pts[i + 1];
    const p3 = pts[Math.min(pts.length - 1, i + 2)];
    const c1 = [p1[0] + (p2[0] - p0[0]) / 6, p1[1] + (p2[1] - p0[1]) / 6];
    const c2 = [p2[0] - (p3[0] - p1[0]) / 6, p2[1] - (p3[1] - p1[1]) / 6];
    d += `C${f(c1[0])} ${f(c1[1])} ${f(c2[0])} ${f(c2[1])} ${f(p2[0])} ${f(p2[1])}`;
  }
  return d;
}
