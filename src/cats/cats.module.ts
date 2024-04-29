import { Module } from '@nestjs/common';
import { Cat } from './entities/cat.entity';
import { CatsService } from './cats.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CatsController } from './cats.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Cat])],
  controllers: [CatsController],
  providers: [CatsService],
})
export class CatsModule {}
