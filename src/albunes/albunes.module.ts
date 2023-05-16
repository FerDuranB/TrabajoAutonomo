import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AlbunSchema } from './albun.schema';
import { AlbunsController } from './albunes.controller';
import { AlbunsService } from './albunes.service';

@Module({
  imports:[MongooseModule.forFeature([{ name: 'Albun', schema: AlbunSchema }])],
  controllers: [AlbunsController],
  providers: [AlbunsService]
})
export class AlbunesModule {}
