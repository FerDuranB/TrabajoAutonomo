import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Artista } from './interfaces/artista.interface';
import { CreateArtistaDto } from './dto/create-artista.dto';
import { UpdateArtistaDto } from './dto/update-artista.dto';

@Injectable()
export class ArtistasService {
  constructor(
    @InjectModel('Artista') private readonly artistaModel: Model<Artista>,
  ) {}

  async create(createArtistaDto: CreateArtistaDto): Promise<Artista> {
    const createdArtista = new this.artistaModel(createArtistaDto);
    return createdArtista.save();
  }

  async findAll(): Promise<Artista[]> {
    return this.artistaModel.find().exec();
  }

  async findOne(id: string): Promise<Artista> {
    return this.artistaModel.findById(id).exec();
  }

  async update(id: string, updateArtistaDto: UpdateArtistaDto): Promise<Artista> {
    return this.artistaModel.findByIdAndUpdate(id, updateArtistaDto, { new: true }).exec();
  }

  async remove(id: string): Promise<Artista> {
    return this.artistaModel.findByIdAndDelete(id).exec();
  }
}

