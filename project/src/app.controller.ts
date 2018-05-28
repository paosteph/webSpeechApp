import { Get, Controller } from '@nestjs/common';
import { AppService } from './app.service';
const fs = require('fs');
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  root(): string {
      console.log('Inicio al programa');
      let datoArchivo;
      let html = fs.readFileSync(__dirname + '/html/Index.html','utf8');
      return  html;
  }


}
