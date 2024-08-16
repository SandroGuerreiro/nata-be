import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class EstablishmentRepository {
  constructor(private readonly prismaService: PrismaService) {}

  createEstablishment(data: Prisma.EstablishmentCreateInput) {
    return this.prismaService.establishment.create({
      data,
    });
  }
}
