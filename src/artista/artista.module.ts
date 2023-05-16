import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ArtistaSchema } from './artista.schema';
import { ArtistasController } from './artista.controller';
import { ArtistasService } from './artista.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Artista', schema: ArtistaSchema }])],
  controllers: [ArtistasController],
  providers: [ArtistasService]
})
export class ArtistaModule {}


// import { Module } from '@nestjs/common';
// import { ArtistaController } from './artista.controller';
// import { ArtistaService } from './artista.service';

// @Module({
//   controllers: [ArtistaController],
//   providers: [ArtistaService]
// })
// export class ArtistaModule {}
