import { Controller, Get, HttpStatus, Res } from '@nestjs/common'
import { ApiTags } from '@nestjs/swagger'
import { AppService } from './app.service'

@ApiTags('APP')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/healthz')
  getHealthz(@Res() res): string {
    const data = this.appService.getHealthz()
    return res.status(HttpStatus.OK).json({
      status: 'OK',
      message: data
    })
  }
}
