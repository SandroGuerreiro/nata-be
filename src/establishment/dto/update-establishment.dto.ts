import { CreateEstablishmentDto } from './create-establishment.dto';
import { OmitType, PartialType } from '@nestjs/swagger';

export class UpdateEstablishmentDto extends PartialType(
  OmitType(CreateEstablishmentDto, ['user']),
) {}
