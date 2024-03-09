import { BadRequestException, Injectable } from '@nestjs/common';

const fields = [
  "description",
  "population",
  "start_date",
  "end_date",
  "location",
  "zones",
  "annee_scolaire"
]

@Injectable()
export class AppService {
  getFields(index?: number): string[] | string {
    if(index < 0 || index > fields.length -1) throw new BadRequestException(`Index must be between 0 and ${fields.length - 1}.`)
    return index ? fields[index] : fields;
  }
}
