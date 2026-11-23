// Renders resume/resume.html to public/resume.pdf (A4).
// Needs Playwright: set PLAYWRIGHT_PATH to a playwright package dir, or have `playwright` resolvable.
const path = require("path");
const { chromium } = require(process.env.PLAYWRIGHT_PATH || "playwright");

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto("file://" + path.join(__dirname, "resume.html"), { waitUntil: "networkidle" });
  await page.pdf({ path: path.join(__dirname, "..", "public", "resume.pdf"), format: "A4", printBackground: true, preferCSSPageSize: true });
  await browser.close();
  console.log("wrote public/resume.pdf");
})();
