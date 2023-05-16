import {
    Controller,
    Get,
    Post,
    Body,
    Put,
    Param,
    Delete,
  } from '@nestjs/common';
  import { ArtistasService } from './artista.service';
  import { CreateArtistaDto } from './dto/create-artista.dto';
  import { UpdateArtistaDto } from './dto/update-artista.dto';
  import { Artista } from './interfaces/artista.interface';
import { ApiBadRequestResponse, ApiCreatedResponse, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
  
  @ApiTags('Artistas')
  @Controller('artistas')
  export class ArtistasController {
    constructor(private readonly artistasService: ArtistasService) {}
  
    @Post()
    @ApiResponse({status:201, description: 'Crear un nuevo artista' })
    @ApiCreatedResponse({ description: 'El usuario ha sido creado' })
    @ApiBadRequestResponse({ status: 500,description: 'Solicitud incorrecta' })
    async create(@Body() createArtistaDto: CreateArtistaDto): Promise<Artista> {
      return this.artistasService.create(createArtistaDto);
    }
  
    @Get()
    @ApiResponse({status:201, description: 'Se encontraron todos los artista' })
    @ApiBadRequestResponse({ status: 500,description: 'Solicitud incorrecta' })
    async findAll(): Promise<Artista[]> {
      return this.artistasService.findAll();
    }
  
    @Get(':id')
    @ApiResponse({status:201, description: 'Se encontro al artista' })
    @ApiBadRequestResponse({ status: 500,description: 'Solicitud incorrecta' })
    async findOne(@Param('id') id: string): Promise<Artista> {
      return this.artistasService.findOne(id);
    }
  
    @Put(':id')
    @ApiResponse({status:201, description: 'Se actualizo al Artista' })
    @ApiBadRequestResponse({ status: 500,description: 'Solicitud incorrecta' })
    async update(
      @Param('id') id: string,
      @Body() updateArtistaDto: UpdateArtistaDto,
    ): Promise<Artista> {
      return this.artistasService.update(id, updateArtistaDto);
    }
  
    @Delete(':id')
    @ApiResponse({status:201, description: 'Se elimino al artista' })
    @ApiBadRequestResponse({ status: 500,description: 'Solicitud incorrecta' })
    async remove(@Param('id') id: string): Promise<Artista> {
      return this.artistasService.remove(id);
    }
  }
  
