import { MeteoService } from './meteo.service';
export declare class MeteoController {
    private readonly meteoService;
    constructor(meteoService: MeteoService);
    getMeteo(city: string): Promise<{
        code: any;
        icon: string;
    }>;
    getCityWeatherWithIcons(): Promise<any>;
}
