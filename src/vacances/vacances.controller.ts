import { Controller, Get, Param } from "@nestjs/common";
import { Vacance, VacanceService } from "./vacances.service";

@Controller("vacances")
export class VacanceController {
    constructor(private readonly vacanceService: VacanceService) {}

    @Get()
    getVacances(): Promise<Vacance[]> {
        return this.vacanceService.getVacances()
    }

    @Get(":zone")
    getVacancesByZone(@Param("zone") zone: string): Promise<Vacance[]> {
        return this.vacanceService.getVacances(zone);
    }
}