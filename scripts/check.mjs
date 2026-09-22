import { access, readFile, readdir } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const files = (await readdir(root)).filter((file) => file.endsWith(".html"));
const errors = [];

for (const file of files) {
  const html = await readFile(join(root, file), "utf8");
  for (const required of ["<title>", 'name="description"', 'rel="canonical"', 'lang="en"']) {
    if (!html.includes(required)) errors.push(`${file}: missing ${required}`);
  }

  for (const match of html.matchAll(/(?:href|src)="([^"]+)"/g)) {
    const value = match[1];
    if (/^(?:https?:|mailto:|#|\/)/.test(value)) continue;
    try {
      await access(join(root, value.split(/[?#]/)[0]));
    } catch {
      errors.push(`${file}: missing local asset ${value}`);
    }
  }
}

if (errors.length) {
  console.error(errors.join("\n"));
  process.exit(1);
}

console.log(`Checked ${files.length} pages: metadata and local assets are valid.`);
