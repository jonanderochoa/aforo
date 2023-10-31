const puppeteer = require("puppeteer");
const URL = "https://sputnikclimbing.deporsite.net/aforo-berango";

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
