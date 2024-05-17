import { IsNotEmpty, IsString, Length, MaxLength } from 'class-validator';

export class CreateEstablishmentDto {
  @IsNotEmpty()
  @IsString()
  @Length(3, 20)
  name: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(100)
  address: string;
}
