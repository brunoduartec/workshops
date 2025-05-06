import { BuilderService } from './builder.service';
export declare class BuilderController {
    private readonly builderService;
    constructor(builderService: BuilderService);
    send(): Promise<any>;
}
