// src/meteo/meteo.controller.ts
import { Controller, Get, Query } from '@nestjs/common';
import { MeteoService } from './meteo.service';

@Controller('meteo')
export class MeteoController {
  constructor(private readonly meteoService: MeteoService) {}

  @Get()
  async getMeteo(@Query('city') city: string) {
    return this.meteoService.getWeatherInfo(city);
  }
  @Get('icons')
  async getCityWeatherWithIcons() {
    return this.meteoService.getWeatherIconsForCities();
  }
}