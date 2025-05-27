import * as sqlite3 from "sqlite3";
import { open } from "sqlite";
import { cities } from "./cities";
export async function initializeDB() {
  const db = await open({
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

  // Optional cleanup
  // await db.exec("DELETE FROM city");

  const villes = cities

  for (const city of villes) {
    await db.run(
      `INSERT OR IGNORE INTO city (insee, name, zipcode, population) VALUES (?, ?, ?, ?)`,
      [city.insee, city.name, city.zipcode, city.population]
    );
  }

  console.log("✅ Seeded city data.");
}