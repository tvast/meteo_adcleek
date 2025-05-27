// src/helper/Database.ts
import sqlite3 from 'sqlite3';
import { open, Database as SQLiteDatabase } from 'sqlite';

export class Database {
  private static db: SQLiteDatabase<sqlite3.Database, sqlite3.Statement>;

  static async getInstance(): Promise<SQLiteDatabase<sqlite3.Database, sqlite3.Statement>> {
    if (!Database.db) {
      Database.db = await open({
        filename: './weather.db',
        driver: sqlite3.Database,
      });
    }
    return Database.db;
  }
}