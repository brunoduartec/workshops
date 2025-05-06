import { HttpService } from '@nestjs/axios';
export declare class BuilderService {
    private readonly httpService;
    constructor(httpService: HttpService);
    send(): Promise<any>;
}
