"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const typeorm_1 = require("@nestjs/typeorm");
const app_controller_1 = require("./app.controller");
const meteo_controller_1 = require("./meteo/meteo.controller");
const app_service_1 = require("./app.service");
const weather_service_1 = require("./weather/weather.service");
const meteo_service_1 = require("./meteo/meteo.service");
const seeder_service_1 = require("./database/seeder.service");
const city_entity_1 = require("./entities/city.entity");
const forecast_entity_1 = require("./entities/forecast.entity");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({ isGlobal: true }),
            typeorm_1.TypeOrmModule.forRoot({
                type: 'sqlite',
                database: 'database.sqlite',
                entities: [city_entity_1.City, forecast_entity_1.Forecast],
                synchronize: true,
            }),
            typeorm_1.TypeOrmModule.forFeature([city_entity_1.City, forecast_entity_1.Forecast]),
        ],
        controllers: [app_controller_1.CitiesController, meteo_controller_1.MeteoController],
        providers: [
            app_service_1.CitiesService,
            weather_service_1.WeatherService,
            meteo_service_1.MeteoService,
            seeder_service_1.SeederService,
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map