export declare class CitiesService {
    private dbPromise;
    findAll(): Promise<any[]>;
    findOne(insee: string): Promise<any>;
}
