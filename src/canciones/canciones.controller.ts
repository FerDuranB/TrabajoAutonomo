import {
    Controller,
    Get,
    Post,
    Body,
    Put,
    Param,
    Delete,
  } from '@nestjs/common';
  import { CancionsService } from './canciones.service';
  import { CreateCancionDto } from './dto/create-cancion.dto';
  import { UpdateCancionDto } from './dto/update-cancion.dto';
  import { Cancion } from './interfaces/cancion.interface';
import { ApiBadRequestResponse, ApiCreatedResponse, ApiResponse, ApiTags } from '@nestjs/swagger';
  
  @ApiTags('Canciones')
  @Controller('cancions')
  export class CancionsController {
    constructor(private readonly cancionsService: CancionsService) {}
  
    @Post()
    @ApiResponse({status:201, description: 'Crear una nueva cancion' })
    @ApiCreatedResponse({ description: 'La cancion ha sido creado' })
    @ApiBadRequestResponse({ status: 500,description: 'Solicitud incorrecta' })
    async create(@Body() createCancionDto: CreateCancionDto): Promise<Cancion> {
      return this.cancionsService.create(createCancionDto);
    }
  
    @Get()
    @ApiResponse({status:201, description: 'Se enontraron la lista de caciones' })
    @ApiBadRequestResponse({ status: 500,description: 'Solicitud incorrecta' })
    async findAll(): Promise<Cancion[]> {
      return this.cancionsService.findAll();
    }
  
    @Get(':id')
    @ApiResponse({status:201, description: 'Se enontraron la lista de caciones por Id' })
    @ApiBadRequestResponse({ status: 500,description: 'Solicitud incorrecta' })
    async findOne(@Param('id') id: string): Promise<Cancion> {
      return this.cancionsService.findOne(id);
    }
  
    @Put(':id')
    @ApiResponse({status:201, description: 'Se Actualizo la cacion' })
    @ApiBadRequestResponse({ status: 500,description: 'Solicitud incorrecta' })
    async update(
      @Param('id') id: string,
      @Body() updateCancionDto: UpdateCancionDto,
    ): Promise<Cancion> {
      return this.cancionsService.update(id, updateCancionDto);
    }
  
    @Delete(':id')
    @ApiResponse({status:201, description: 'Se elimino la cacion' })
    @ApiBadRequestResponse({ status: 500,description: 'Solicitud incorrecta' })
    async remove(@Param('id') id: string): Promise<Cancion> {
      return this.cancionsService.remove(id);
    }
  }
  
