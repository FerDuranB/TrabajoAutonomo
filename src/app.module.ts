import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database.module.ts/database.module.ts.module';
import { ArtistaModule } from './artista/artista.module';
import { AlbunesModule } from './albunes/albunes.module';
import { CancionesModule } from './canciones/canciones.module';

@Module({
  imports: [DatabaseModule, ArtistaModule, AlbunesModule, CancionesModule],
  // controllers: [AppController],
  // providers: [AppService],
})
export class AppModule {}
