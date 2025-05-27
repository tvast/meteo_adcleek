"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CitiesService = void 0;
const common_1 = require("@nestjs/common");
const sqlite3 = require("sqlite3");
const sqlite_1 = require("sqlite");
let CitiesService = class CitiesService {
    dbPromise = (0, sqlite_1.open)({
        filename: './database.sqlite',
        driver: sqlite3.Database,
    });
    async findAll() {
        const db = await this.dbPromise;
        return db.all('SELECT * FROM city');
    }
    async findOne(insee) {
        const db = await this.dbPromise;
        return db.get('SELECT * FROM city WHERE insee = ?', insee);
    }
};
exports.CitiesService = CitiesService;
exports.CitiesService = CitiesService = __decorate([
    (0, common_1.Injectable)()
], CitiesService);
//# sourceMappingURL=app.service.js.map