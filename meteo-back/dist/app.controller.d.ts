import { CitiesService } from './app.service';
export declare class CitiesController {
    private readonly citiesService;
    constructor(citiesService: CitiesService);
    getAll(): Promise<any[]>;
    getByInsee(insee: string): Promise<any>;
}
