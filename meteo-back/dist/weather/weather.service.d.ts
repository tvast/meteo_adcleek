export declare class WeatherService {
    private readonly logger;
    private readonly iconByCode;
    getWeatherCodeForCity(city: string): Promise<any>;
    getIconByCode(code: number): string;
}
