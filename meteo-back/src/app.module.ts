// src/app.module.ts
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { CitiesController } from './app.controller';     // your cities REST API controller
import { MeteoController } from './meteo/meteo.controller'; // meteo API controller

import { CitiesService } from './app.service';           // your cities service
import { WeatherService } from './weather/weather.service'; // weather logic (icon mapping + API calls)
import { MeteoService } from './meteo/meteo.service';    // meteo service using WeatherService
import { SeederService } from './database/seeder.service'; // seeder service for initial data

import { City } from './entities/city.entity';
import { Forecast } from './entities/forecast.entity';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),           // load .env config globally
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'database.sqlite',
      entities: [City, Forecast],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([City, Forecast]),
  ],
  controllers: [CitiesController, MeteoController],     // both controllers
  providers: [
    CitiesService,
    WeatherService,
    MeteoService,
    SeederService,
  ],                                                    // all providers
})
export class AppModule {}