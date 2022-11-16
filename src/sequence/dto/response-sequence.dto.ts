import { ApiProperty, OmitType } from '@nestjs/swagger'

import { ResponseAndDataDto } from 'src/common/base/dto/response.dto'
import { IsArray, IsInt, IsString } from 'class-validator'

export class SequenceDto {
  @ApiProperty({ type: Number, description: 'จำนวนสมาชิก' })
  @IsInt()
  memberCount: number

  @ApiProperty({ type: Number, isArray: true, description: 'ลำดับตัวเลข' })
  @IsArray()
  @IsString()
  sequences: number[]

  @ApiProperty({ type: String, description: 'ผลรวมทั้งหมด' })
  @IsInt()
  total: number
}

export class ResponseSequenceDto extends OmitType(ResponseAndDataDto, ['data'] as const) {
  @ApiProperty({ type: SequenceDto })
  data: SequenceDto
}
