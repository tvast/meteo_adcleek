import { Controller, Get, Param, NotFoundException } from '@nestjs/common';
import { CitiesService } from './app.service';

@Controller('cities')
export class CitiesController {
  constructor(private readonly citiesService: CitiesService) {}

  @Get()
  async getAll() {
    return this.citiesService.findAll();
  }

  @Get(':insee')
  async getByInsee(@Param('insee') insee: string) {
    const city = await this.citiesService.findOne(insee);
    if (!city) {
      throw new NotFoundException(`City with INSEE code ${insee} not found.`);
    }
    return city;
  }
}