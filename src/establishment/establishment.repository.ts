import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { Prisma } from '@prisma/client';
import { UUID } from 'crypto';

@Injectable()
export class EstablishmentRepository {
  constructor(private readonly prismaService: PrismaService) {}

  create(data: Prisma.EstablishmentCreateInput) {
    return this.prismaService.establishment.create({
      data,
    });
  }

  findAll() {
    return this.prismaService.establishment.findMany();
  }

  findOne(id: UUID) {
    return this.prismaService.establishment.findUnique({
      where: {
        id,
      },
    });
  }

  update(id: UUID, data: Prisma.EstablishmentUpdateInput) {
    return this.prismaService.establishment.update({
      where: {
        id: id,
      },
      data,
    });
  }

  delete(id: UUID) {
    return this.prismaService.establishment.delete({
      where: {
        id,
      },
    });
  }
}
