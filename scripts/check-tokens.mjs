// Fails if a raw hex colour appears in a component file. Colours belong in app/globals.css as
// tokens (CLAUDE.md, "Every value from the tokens"), so that file is not scanned.
import fs from "node:fs";

const hex = /#(?:[0-9a-fA-F]{8}|[0-9a-fA-F]{6}|[0-9a-fA-F]{3,4})(?![0-9a-zA-Z_-])/g;
const files = ["app", "components"].flatMap((dir) =>
  fs.readdirSync(dir, { recursive: true }).filter((f) => f.endsWith(".tsx")).map((f) => `${dir}/${f}`),
);

let found = 0;
for (const file of files) {
  fs.readFileSync(file, "utf8").split("\n").forEach((line, i) => {
    for (const [value] of line.matchAll(hex)) {
      console.log(`${file}:${i + 1}  ${value}`);
      found++;
    }
  });
}

if (found > 0) {
  console.error(`\n${found} raw hex colour${found === 1 ? "" : "s"} found. Use a token from app/globals.css.`);
  process.exit(1);
}
console.log(`No raw hex colours in ${files.length} files.`);
