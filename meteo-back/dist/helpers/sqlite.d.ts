import sqlite3 from 'sqlite3';
import { Database as SQLiteDatabase } from 'sqlite';
export declare class Database {
    private static db;
    static getInstance(): Promise<SQLiteDatabase<sqlite3.Database, sqlite3.Statement>>;
}
