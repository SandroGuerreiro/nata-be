import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateEstablishmentDto } from './dto/create-establishment.dto';
import { UpdateEstablishmentDto } from './dto/update-establishment.dto';
import { EstablishmentService } from './establishment.service';
import { UUID } from 'crypto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Establishment')
@Controller('establishment')
export class EstablishmentController {
  constructor(private readonly establishmentService: EstablishmentService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new establishment' })
  @ApiResponse({
    status: 201,
    description: 'Establishment created successfully',
  })
  create(
    @Body() createEstablishmentDto: CreateEstablishmentDto,
  ): Promise<HttpStatus> {
    this.establishmentService.create(createEstablishmentDto);

    return;
  }

  @Get()
  @ApiOperation({ summary: 'Get all establishments' })
  @ApiResponse({
    status: 200,
    description: 'Establishment list retrieved successfully',
  })
  findAll() {
    return this.establishmentService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a specific establishment' })
  @ApiResponse({
    status: 200,
    description: 'Establishment retrieved successfully',
  })
  findOne(@Param('id') id: UUID) {
    return this.establishmentService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update a specific establishment' })
  @ApiResponse({
    status: 200,
    description: 'Establishment updated successfully',
  })
  update(
    @Param('id') id: UUID,
    @Body() updateEstablishmentDto: UpdateEstablishmentDto,
  ) {
    return this.establishmentService.update(id, updateEstablishmentDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a specific establishment' })
  @ApiResponse({
    status: 200,
    description: 'Establishment deleted successfully',
  })
  remove(@Param('id') id: UUID) {
    return this.establishmentService.remove(id);
  }
}
