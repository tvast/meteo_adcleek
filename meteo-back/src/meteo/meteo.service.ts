// src/meteo/meteo.service.ts
import { Injectable } from '@nestjs/common';
import { WeatherService } from '../weather/weather.service';

@Injectable()
export class MeteoService {
  constructor(private readonly weatherService: WeatherService) {}

  async getWeatherInfo(city: string) {
    const weatherCode = await this.weatherService.getWeatherCodeForCity(city);
    const icon = this.weatherService.getIconByCode(weatherCode);
    return { code: weatherCode, icon };
  }
}