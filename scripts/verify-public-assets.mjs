import fs from "node:fs";
import path from "node:path";

const projectRoot = path.join(import.meta.dirname, "..");

function assertFile(relativePath) {
  const absolutePath = path.join(projectRoot, relativePath);
  if (!fs.existsSync(absolutePath)) {
    throw new Error(`${relativePath} is missing`);
  }
}

assertFile("index.html");
assertFile("src/App.tsx");
assertFile("src/pages/Home.tsx");
assertFile("src/pages/Contact.tsx");
assertFile("src/components/InquiryForm.tsx");
assertFile("src/components/LeadWizardProvider.tsx");
assertFile("public/favicon.svg");
assertFile("public/site.webmanifest");
assertFile("public/robots.txt");
assertFile("public/sitemap.xml");
assertFile("public/llms.txt");
assertFile("public/media/hero-incubator.webp");
assertFile("public/media/technology-incubator.webp");
assertFile("public/media/founder-vidhya.webp");
assertFile("public/media/founder-aditya.webp");
assertFile("public/media/sere-120.webp");
assertFile("public/media/sere-240.webp");
assertFile("public/media/sere-500.webp");
assertFile("public/media/aic-mahindra.webp");
assertFile("public/media/og-cover.jpg");

const indexHtml = fs.readFileSync(path.join(projectRoot, "index.html"), "utf8");
if (!indexHtml.includes("SERE Smart Hatching | Automated Egg Incubators for Precision Poultry Farming")) {
  throw new Error("index.html title has drifted");
}

if (!indexHtml.includes("og:image")) {
  throw new Error("index.html is missing the open graph image metadata");
}

console.log("serefy innovations public asset checks passed");
