import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsString,
  IsUUID,
  Length,
  MaxLength,
} from 'class-validator';
import { UUID } from 'crypto';

export class CreateEstablishmentDto {
  @IsNotEmpty()
  @IsString()
  @Length(3, 20)
  name: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(255)
  description: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(100)
  address: string;

  @ApiProperty({
    description: 'The unique identifier for the user',
    type: String,
    format: 'uuid',
  })
  @IsNotEmpty()
  @IsUUID()
  user: UUID;
}
