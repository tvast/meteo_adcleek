"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initializeDB = initializeDB;
const sqlite3 = require("sqlite3");
const sqlite_1 = require("sqlite");
const cities_1 = require("./cities");
async function initializeDB() {
    const db = await (0, sqlite_1.open)({
        filename: "./database.sqlite",
        driver: sqlite3.Database,
    });
    await db.exec(`
    CREATE TABLE IF NOT EXISTS city (
      insee TEXT PRIMARY KEY,
      name TEXT NOT NULL,
      zipcode TEXT NOT NULL,
      population INTEGER NOT NULL
    );
  `);
    const villes = cities_1.cities;
    for (const city of villes) {
        await db.run(`INSERT OR IGNORE INTO city (insee, name, zipcode, population) VALUES (?, ?, ?, ?)`, [city.insee, city.name, city.zipcode, city.population]);
    }
    console.log("✅ Seeded city data.");
}
//# sourceMappingURL=database-helper.js.map