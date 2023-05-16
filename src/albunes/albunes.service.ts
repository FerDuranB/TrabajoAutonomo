import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Albun } from './interfaces/albun.interface';
import { CreateAlbunDto } from './dto/create-albun.dto';
import { UpdateAlbunDto } from './dto/update-albun.dto';

@Injectable()
export class AlbunsService {
  constructor(
    @InjectModel('Albun') private readonly albunModel: Model<Albun>,
  ) {}

  async create(createAlbunDto: CreateAlbunDto): Promise<Albun> {
    const createdAlbun = new this.albunModel(createAlbunDto);
    return createdAlbun.save();
  }

  async findAll(): Promise<Albun[]> {
    return this.albunModel.find().exec();
  }

  async findOne(id: string): Promise<Albun> {
    return this.albunModel.findById(id).exec();
  }

  async update(id: string, updateAlbunDto: UpdateAlbunDto): Promise<Albun> {
    return this.albunModel.findByIdAndUpdate(id, updateAlbunDto, { new: true }).exec();
  }

  async remove(id: string): Promise<Albun> {
    return this.albunModel.findByIdAndDelete(id).exec();
  }
}
