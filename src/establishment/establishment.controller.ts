import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateEstablishmentDto } from './dto/create-establishment.dto';
import { UpdateEstablishmentDto } from './dto/update-establishment.dto';
import { EstablishmentService } from './establishment.service';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Establishment } from './interfaces/establishment.interface';
import { UUID } from 'crypto';

@Controller('establishment')
export class EstablishmentController {
  constructor(private readonly establishmentService: EstablishmentService) {}

  @Post()
  create(@Body() createEstablishmentDto: CreateEstablishmentDto) {
    return this.establishmentService.create(createEstablishmentDto);
  }

  @Get()
  findAll() {
    return this.establishmentService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: UUID) {
    return this.establishmentService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: UUID,
    @Body() updateEstablishmentDto: UpdateEstablishmentDto,
  ) {
    return this.establishmentService.update(id, updateEstablishmentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: UUID) {
    return this.establishmentService.remove(id);
  }
}
