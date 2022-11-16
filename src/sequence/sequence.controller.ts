import { Controller, Get, HttpException, HttpStatus, Logger, Param, ParseIntPipe, Res } from '@nestjs/common'
import { Response } from 'express'
import { ApiInternalServerErrorResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger'
import { SequenceService } from './sequence.service'
import { ResponseSequenceDto } from './dto/response-sequence.dto'
import { ResponseDto } from 'src/common/base/dto/response.dto'

@ApiTags('SEQUENCE')
@Controller('sequence')
export class SequenceController {
  private readonly logger = new Logger(SequenceController.name)
  constructor(private readonly sequenceService: SequenceService) {}

  @ApiOkResponse({
    type: ResponseSequenceDto,
    description: 'Get sequence',
    status: HttpStatus.OK
  })
  @ApiInternalServerErrorResponse({
    description: `Can't get sequence`,
    status: HttpStatus.INTERNAL_SERVER_ERROR,
    type: ResponseDto
  })
  @Get('/:memberCount')
  public async sequence(@Res() res: Response, @Param('memberCount', ParseIntPipe) memberCount: number) {
    this.logger.verbose(`GET SEQUENCE MEMBER COUNT : ${memberCount}`)
    try {
      const { data } = await this.sequenceService.findSequenceNumbers(memberCount)
      return res.status(HttpStatus.OK).json({
        statusCode: HttpStatus.OK,
        message: `Get sequence`,
        data
      })
    } catch (error) {
      throw new HttpException(
        {
          statusCode: error.response.statusCode,
          message: error.response.message
        },
        error.status
      )
    }
  }
}
