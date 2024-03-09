import { Injectable } from "@nestjs/common";

@Injectable()
export class ConfigurationService {
    apiUri: string;

    constructor(options: Record<string, string>) {
        this.apiUri = options["apiUri"]
    }
}