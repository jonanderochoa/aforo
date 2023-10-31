const cron = require("node-cron");
const Scrapper = require("./scrapper");
const Db = require("./db");

const db = new Db();
const CRON_MIN = "* * * * *";
const CRON_HOUR = "0 10-21 * * *";

cron.schedule(CRON_MIN, () => {
  try {
    saveAforoInDb();
  } catch (error) {
    console.log("ERROR");
  }
});

function saveAforoInDb() {
  const scrapper = new Scrapper();
  scrapper
    .obtenerContenido()
    .then((aforo) => db.insertAforo(aforo))
    .catch((error) => console.error("Error:", error));
}
