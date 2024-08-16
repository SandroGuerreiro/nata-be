import { Module } from '@nestjs/common';
import { EstablishmentModule } from './establishment/establishment.module';
import { PrismaModule } from './prisma.module';

@Module({
  imports: [EstablishmentModule, PrismaModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
