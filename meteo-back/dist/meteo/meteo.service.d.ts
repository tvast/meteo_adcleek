import { WeatherService } from '../weather/weather.service';
export declare class MeteoService {
    private readonly weatherService;
    constructor(weatherService: WeatherService);
    getWeatherInfo(city: string): Promise<{
        code: any;
        icon: string;
    }>;
}
