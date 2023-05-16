import { ApiProperty } from "@nestjs/swagger";

export class UpdateArtistaDto {
    @ApiProperty({example:'Nombre de la cancion'})
    readonly nombre?: string;
    @ApiProperty({example:'Genero de la cancion'})
    readonly generoMusical?: string;
    @ApiProperty({example:'Fecha de nacimiento YYYY-MM-DD'})
    readonly fechaInicio?: Date;
    @ApiProperty({example:'Fecha de Fallecimiento YYYY-MM-DD'})
    readonly fechaFin?: Date;

    readonly albumes?: string[];
    readonly canciones?: string[];
}
