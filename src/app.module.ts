import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { configValidationSchema } from './config.schema'
import { SequenceModule } from './sequence/sequence.module'

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `${process.cwd()}/.env.${process.env.NODE_ENV}`,
      isGlobal: true,
      validationSchema: configValidationSchema
    }),
    SequenceModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
