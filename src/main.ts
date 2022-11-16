import { NestFactory } from '@nestjs/core'
import { Logger, ValidationPipe } from '@nestjs/common'
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger'
import { ConfigService } from '@nestjs/config'
import { AppModule } from './app.module'

async function bootstrap() {
  // Create a new Nest application instance
  const app = await NestFactory.create(AppModule, {
    logger: ['log', 'error', 'warn', 'debug', 'verbose']
  })
  app.setGlobalPrefix('api/v1')
  app.useGlobalPipes(new ValidationPipe())
  app.enableCors({
    origin: true,
    methods: 'GET, HEAD, PUT, PATCH, POST, DELETE, OPTIONS',
    credentials: true
  })
  const configService = app.get(ConfigService)
  const logger = new Logger('bootstrap')

  // Create a swagger document
  const options = new DocumentBuilder()
    .setTitle('DEVELOPMENT CHALLENGE')
    .setDescription('FIBONACCI SEQUENCE')
    .setVersion('1.0')
    .build()
  const document = SwaggerModule.createDocument(app, options)
  SwaggerModule.setup('document', app, document)

  // Create a new HTTP server instance
  const port = configService.get('PORT')
  const mode = configService.get('MODE')
  await app.listen(port, () => {
    logger.log(`🚀 APPLICATION LISTENING ON PORT ${port}`)
    logger.log(`🚀 APPLICATION RUNNING IN ${mode} MODE`)
  })
}
bootstrap()
