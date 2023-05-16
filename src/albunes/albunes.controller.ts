import {
    Controller,
    Get,
    Post,
    Body,
    Put,
    Param,
    Delete,
  } from '@nestjs/common';
  import { AlbunsService } from './albunes.service';
  import { CreateAlbunDto } from './dto/create-albun.dto';
  import { UpdateAlbunDto } from './dto/update-albun.dto';
  import { Albun } from './interfaces/albun.interface';
import { ApiBadRequestResponse, ApiCreatedResponse, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
  
  @ApiTags ('Albunes')
  @Controller('albuns')
  export class AlbunsController {
    constructor(private readonly albunsService: AlbunsService) {}
  
    @Post()
    @ApiResponse({status:201, description: 'Crear un nuevo Albun' })
    @ApiCreatedResponse({description: 'Albun ha sido creado' })
    @ApiBadRequestResponse({status:500, description: 'Solicitud incorrecta' })
    async create(@Body() createAlbunDto: CreateAlbunDto): Promise<Albun> {
      return this.albunsService.create(createAlbunDto);
    }
  
    @Get()
    @ApiResponse({status:201, description: 'Se obtuvo todos los datos' })
    @ApiBadRequestResponse({status:500, description: 'Solicitud incorrecta' })
    async findAll(): Promise<Albun[]> {
      return this.albunsService.findAll();
    }
  
    @Get(':id')
    @ApiResponse({status:201, description: 'Se obtuvo los datos por Id' })
    @ApiBadRequestResponse({status:500, description: 'Solicitud incorrecta' })
    async findOne(@Param('id') id: string): Promise<Albun> {
      return this.albunsService.findOne(id);
    }
  
    @Put(':id')
    @ApiResponse({status:201, description: 'Se actualizo los datos del Albun' })
    @ApiBadRequestResponse({status:500, description: 'Solicitud incorrecta' })
    async update(
      @Param('id') id: string,
      @Body() updateAlbunDto: UpdateAlbunDto,
    ): Promise<Albun> {
      return this.albunsService.update(id, updateAlbunDto);
    }
  
    @Delete(':id')
    @ApiResponse({status:201, description: 'Se elimino los datos' })
    @ApiBadRequestResponse({status:500, description: 'Solicitud incorrecta' })
    async remove(@Param('id') id: string): Promise<Albun> {
      return this.albunsService.remove(id);
    }
  }
  