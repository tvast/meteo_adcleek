"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Database = void 0;
const sqlite3_1 = require("sqlite3");
const sqlite_1 = require("sqlite");
class Database {
    static db;
    static async getInstance() {
        if (!Database.db) {
            Database.db = await (0, sqlite_1.open)({
                filename: './weather.db',
                driver: sqlite3_1.default.Database,
            });
        }
        return Database.db;
    }
}
exports.Database = Database;
//# sourceMappingURL=sqlite.js.map