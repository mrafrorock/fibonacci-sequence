import { Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'

@Injectable()
export class AppService {
  constructor(private configService: ConfigService) {}

  getHealthz(): string {
    return `Fibonacci sequence service online! - ${this.configService.get('MODE')}`
  }
}
