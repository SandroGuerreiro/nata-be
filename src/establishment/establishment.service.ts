import { Injectable } from '@nestjs/common';
import { CreateEstablishmentDto } from './dto/create-establishment.dto';
import { UpdateEstablishmentDto } from './dto/update-establishment.dto';
import { UUID } from 'crypto';
import { EstablishmentRepository } from './establishment.repository';

@Injectable()
export class EstablishmentService {
  constructor(
    private readonly establishmentRepository: EstablishmentRepository,
  ) {}

  async create(establishment: CreateEstablishmentDto) {
    return await this.establishmentRepository.create({
      ...establishment,
      user: {
        connect: { id: establishment.user },
      },
    });
  }

  async findAll() {
    return await this.establishmentRepository.findAll();
  }

  async findOne(id: UUID) {
    return await this.establishmentRepository.findOne(id);
  }

  async update(id: UUID, establishment: UpdateEstablishmentDto) {
    return await this.establishmentRepository.update(id, establishment);
  }

  remove(id: UUID) {
    return this.establishmentRepository.delete(id);
  }
}
