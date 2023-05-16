import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Cancion } from './interfaces/cancion.interface';
import { CreateCancionDto } from './dto/create-cancion.dto';
import { UpdateCancionDto } from './dto/update-cancion.dto';

@Injectable()
export class CancionsService {
  constructor(
    @InjectModel('Cancion') private readonly aancionModel: Model<Cancion>,
  ) {}

  async create(createCancionDto: CreateCancionDto): Promise<Cancion> {
    const createdCancion = new this.aancionModel(createCancionDto);
    return createdCancion.save();
  }

  async findAll(): Promise<Cancion[]> {
    return this.aancionModel.find().exec();
  }

  async findOne(id: string): Promise<Cancion> {
    return this.aancionModel.findById(id).exec();
  }

  async update(id: string, updateCancionDto: UpdateCancionDto): Promise<Cancion> {
    return this.aancionModel.findByIdAndUpdate(id, updateCancionDto, { new: true }).exec();
  }

  async remove(id: string): Promise<Cancion> {
    return this.aancionModel.findByIdAndDelete(id).exec();
  }
}

