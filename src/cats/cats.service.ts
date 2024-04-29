import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { Cat } from './entities/cat.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';

@Injectable()
export class CatsService {
  constructor(
    @InjectRepository(Cat)
    private catsRepository: Repository<Cat>,
  ) {}

  async create(createCatDto: CreateCatDto) {
    const cat = this.catsRepository.create(createCatDto);
    return await this.catsRepository.save(cat);
  }

  async findAll() {
    return await this.catsRepository.find();
  }

  async findOne(id: number) {
    return await this.catsRepository.findOneBy({ id });
  }

  async update(id: number, updateCatDto: UpdateCatDto) {
    return await this.catsRepository.update(id, updateCatDto);
  }

  async remove(id: number) {
    return await this.catsRepository.softDelete(id);
  }
}
