import { Body, Controller, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService) { }

  @Get()
  hello(): string {
    return "Welcome on holidays API !!!"
  }

  @Get("fields")
  getFields(): string[] | string {
    return this.appService.getFields()
  }

  @Get("fields/:index")
  getField(@Param("index", ParseIntPipe) index: number): string[] | string {
    return this.appService.getFields(index)
  }

  @Post("student")
  addUser(
    @Body() student: {firstname: string; lastname: string;}
  ): {firstname: string; lastname: string;} {
    return student
  }
}
