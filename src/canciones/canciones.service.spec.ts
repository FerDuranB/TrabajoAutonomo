import { Test, TestingModule } from '@nestjs/testing';
import { CancionsService } from './canciones.service';

describe('CancionesService', () => {
  let service: CancionsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CancionsService],
    }).compile();

    service = module.get<CancionsService>(CancionsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
