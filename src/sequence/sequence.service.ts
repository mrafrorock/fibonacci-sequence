import { ConflictException, Injectable, Logger } from '@nestjs/common'
import { SequenceDto } from './dto/response-sequence.dto'
import { generateSequenceNumbers, sumSequence } from 'src/common/utils'
import { MESSAGE } from 'src/common/base/message'

@Injectable()
export class SequenceService {
  private readonly logger = new Logger(SequenceService.name)

  /**
   * Find sequence numbers
   * @param memberCount
   */
  public async findSequenceNumbers(memberCount: number) {
    if (memberCount > 100 || memberCount < 0) throw new ConflictException(MESSAGE.SEQUENCE.NUMBER_NOT_MATCH)
    try {
      const sequenceDto = new SequenceDto()
      sequenceDto.memberCount = memberCount
      sequenceDto.sequences = generateSequenceNumbers(memberCount)
      sequenceDto.total = sumSequence(sequenceDto.sequences)
      return { data: sequenceDto }
    } catch (error) {
      this.logger.error(JSON.stringify(error))
      throw error
    }
  }
}
