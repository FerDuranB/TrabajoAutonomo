import { Test, TestingModule } from '@nestjs/testing';
import { ArtistasService } from './artista.service';

describe('ArtistaService', () => {
  let service: ArtistasService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ArtistasService],
    }).compile();

    service = module.get<ArtistasService>(ArtistasService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
