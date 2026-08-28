import { existsSync, readdirSync, readFileSync, statSync } from "node:fs";
import { dirname, join, resolve } from "node:path";

const repository = resolve(import.meta.dirname, "..");
const projects = [
  repository,
  ...readdirSync(join(repository, "sites"), { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => join(repository, "sites", entry.name)),
];
const ignoredDirectories = new Set([".git", ".vercel", "node_modules", "sites"]);
const references = /(?:href|src)=(?:"([^"]+)"|'([^']+)')/g;
const failures = [];
let htmlFiles = 0;
let localReferences = 0;

function collectHtml(directory, projectRoot, output = []) {
  for (const entry of readdirSync(directory, { withFileTypes: true })) {
    if (entry.isDirectory() && (ignoredDirectories.has(entry.name) || entry.name.startsWith("."))) continue;
    const path = join(directory, entry.name);
    if (entry.isDirectory()) collectHtml(path, projectRoot, output);
    else if (entry.name.endsWith(".html")) output.push(path);
  }
  return output;
}

function candidateExists(path) {
  if (existsSync(path) && statSync(path).isFile()) return true;
  return existsSync(join(path, "index.html"));
}

for (const projectRoot of projects) {
  for (const htmlFile of collectHtml(projectRoot, projectRoot)) {
    htmlFiles += 1;
    const html = readFileSync(htmlFile, "utf8");
    for (const match of html.matchAll(references)) {
      const reference = match[1] ?? match[2];
      if (!reference || /^(?:[a-z]+:|#|\/\/)/i.test(reference)) continue;
      const clean = decodeURIComponent(reference.split(/[?#]/, 1)[0]);
      if (!clean) continue;
      localReferences += 1;
      const target = clean.startsWith("/")
        ? resolve(projectRoot, `.${clean}`)
        : resolve(dirname(htmlFile), clean);
      if (!candidateExists(target)) failures.push(`${htmlFile.slice(repository.length + 1)} -> ${reference}`);
    }
  }
}

if (failures.length) {
  console.error(`Broken local references (${failures.length}):`);
  failures.forEach((failure) => console.error(`- ${failure}`));
  process.exitCode = 1;
} else {
  console.log(`Checked ${htmlFiles} HTML files and ${localReferences} local references: all resolved.`);
}
