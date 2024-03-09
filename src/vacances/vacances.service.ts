import { Injectable } from "@nestjs/common";
import { ConfigurationService } from "src/configuration/configuration.service";
import { noAccent } from "utils";

export type Vacance = {
    description: string;
    population: string;
    start_date: string | Date;
    end_date: string | Date;
    location: string;
    zones: string;
    annee_scolaire: string;
}

@Injectable()
export class VacanceService {

    constructor(
        private readonly configurationService: ConfigurationService
    ) {}

    async getVacances(zone?: string) {
        const response = await fetch(this.configurationService.apiUri)
        const data: Vacance[] = await response.json()
        const vacances: Vacance[] = zone ? data.filter(vacance => noAccent(vacance.zones.toLowerCase()) === noAccent(zone.toLowerCase())) : data
        return vacances
    }
}