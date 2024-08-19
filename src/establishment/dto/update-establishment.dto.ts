import { OmitType, PartialType } from '@nestjs/mapped-types';
import { CreateEstablishmentDto } from './create-establishment.dto';

export class UpdateEstablishmentDto extends PartialType(
  OmitType(CreateEstablishmentDto, ['user']),
) {}
