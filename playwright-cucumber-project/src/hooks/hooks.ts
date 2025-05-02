import { Before, After, BeforeAll, AfterAll, setDefaultTimeout, setWorldConstructor } from "@cucumber/cucumber";
import { Browser, BrowserContext, Page, chromium } from "playwright";
import { ScenarioContext } from "../support/ScenarioContext";

class CustomWorld {
  public scenarioContext: ScenarioContext;

  constructor() {
    this.scenarioContext = new ScenarioContext();
  }
}

setWorldConstructor(CustomWorld);

let browser: Browser;
let context: BrowserContext;
let page: Page;

setDefaultTimeout(60 * 1000);

BeforeAll(async function () {
  console.log("Launching browser...");
  browser = await chromium.launch({ headless: false });
});

Before(async function () {
  console.log("Creating new browser context and page...");
  context = await browser.newContext();
  page = await context.newPage();
  this.page = page;
  this.scenarioContext = new ScenarioContext();
});

After(async function () {
  console.log("Closing page and context...");
  await page.close();
  await context.close();
});

AfterAll(async function () {
  console.log("Closing browser...");
  await browser.close();
});

export { page };