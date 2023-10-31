const puppeteer = require("puppeteer");
const { URL } = require("./config.json");

class Scrapper {
  async obtenerContenido() {
    const browser = await puppeteer.launch({ headless: "new" });
    const page = await browser.newPage();
    await page.goto(URL);
    let contenido;
    while (!contenido) {
      contenido = await page.evaluate(
        () => document.querySelector(".percentage")?.textContent
      );
    }
    await browser.close();
    return contenido;
  }
}

module.exports = Scrapper;
