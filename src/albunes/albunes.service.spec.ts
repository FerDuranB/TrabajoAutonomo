import { Test, TestingModule } from '@nestjs/testing';
import { AlbunsService } from './albunes.service';

describe('AlbunesService', () => {
  let service: AlbunsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AlbunsService],
    }).compile();

    service = module.get<AlbunsService>(AlbunsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
