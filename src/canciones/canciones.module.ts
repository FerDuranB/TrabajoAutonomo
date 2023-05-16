import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CancionSchema } from './cancion.shema';
import { CancionsController } from './canciones.controller';
import { CancionsService } from './canciones.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Cancion', schema: CancionSchema }])],
  controllers: [CancionsController],
  providers: [CancionsService]
})
export class CancionesModule {}
