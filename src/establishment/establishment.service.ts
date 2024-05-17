import { Injectable } from '@nestjs/common';
import { CreateEstablishmentDto } from './dto/create-establishment.dto';
import { UpdateEstablishmentDto } from './dto/update-establishment.dto';
import { Establishment } from './interfaces/establishment.interface';
import { UUID, randomUUID } from 'crypto';

@Injectable()
export class EstablishmentService {
  private establishments: Establishment[] = [];

  create(establishment: CreateEstablishmentDto) {
    const newEstablishment: Establishment = {
      id: randomUUID(),
      ...establishment,
    };

    this.establishments.push(newEstablishment);
    return newEstablishment;
  }

  findAll() {
    return this.establishments;
  }

  findOne(id: UUID) {
    return this.establishments.find((establishment) => establishment.id === id);
  }

  update(id: UUID, updateEstablishmentDto: UpdateEstablishmentDto) {
    this.establishments = this.establishments.map((establishment) =>
      establishment.id === id
        ? { ...establishment, ...updateEstablishmentDto }
        : establishment,
    );

    return 'Establishment updated';
  }

  remove(id: UUID) {
    this.establishments.filter((establishment) => establishment.id === id);
    const index = this.establishments.findIndex(
      (establishment) => establishment['id'] === id,
    );
    if (index !== -1) this.establishments.splice(index, 1);
    return 'Establishment removed';
  }
}
