import { Module } from "@nestjs/common";
import { VacanceService } from "./vacances.service";
import { VacanceController } from "./vacances.controller";
import { ConfigurationModule } from "src/configuration/configuration.module";

@Module({
    imports: [
        ConfigurationModule.register({apiUri: "https://data.education.gouv.fr/api/explore/v2.1/catalog/datasets/fr-en-calendrier-scolaire/exports/json"}),
    ],
    exports: [VacanceService],
    controllers: [VacanceController],
    providers: [VacanceService]
})
export class VacanceModule{}