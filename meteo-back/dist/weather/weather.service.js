"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var WeatherService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.WeatherService = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = require("axios");
let WeatherService = WeatherService_1 = class WeatherService {
    logger = new common_1.Logger(WeatherService_1.name);
    iconByCode = [
        { icon: 'sun', codes: [0, 1, 2] },
        { icon: 'cloud-sun', codes: [3, 4, 5] },
        { icon: 'cloud-rain', codes: [10, 11, 13, 14, 30, 31, 210, 211] },
        {
            icon: 'cloud-rain-heavy',
            codes: [12, 15, 32, 40, 41, 42, 43, 44, 45, 46, 47, 48, 70, 71, 72, 73, 74, 75, 76, 77, 78, 212],
        },
        { icon: 'cloud-fog2', codes: [6, 7, 16] },
        {
            icon: 'cloud-snow',
            codes: [20, 21, 22, 60, 61, 62, 63, 64, 65, 66, 67, 68, 221, 222, 230, 231, 232, 235],
        },
        {
            icon: 'cloud-lightning',
            codes: [100, 101, 102, 103, 104, 105, 106, 107, 108, 120, 121, 122, 124, 125, 126, 127, 128],
        },
        {
            icon: 'cloud-lightning-rain',
            codes: [130, 131, 132, 133, 134, 135, 136, 137, 138, 140, 141, 142],
        },
    ];
    async getWeatherCodeForCity(city) {
        const token = process.env.METEO_CONCEPT_API_TOKEN;
        try {
            const locationRes = await axios_1.default.get(`https://api.meteo-concept.com/api/location/city`, {
                params: { token, search: city },
            });
            const cityId = locationRes.data.cities?.[0]?.insee;
            if (!cityId)
                return null;
            const forecastRes = await axios_1.default.get(`https://api.meteo-concept.com/api/forecast/daily/0`, {
                params: { token, insee: cityId },
            });
            return forecastRes.data?.forecast?.weather;
        }
        catch (error) {
            this.logger.error(`Weather API error for city ${city}:`, error);
            return null;
        }
    }
    getIconByCode(code) {
        const icon = this.iconByCode.find((group) => group.codes.includes(code));
        return icon?.icon || 'question';
    }
};
exports.WeatherService = WeatherService;
exports.WeatherService = WeatherService = WeatherService_1 = __decorate([
    (0, common_1.Injectable)()
], WeatherService);
//# sourceMappingURL=weather.service.js.map