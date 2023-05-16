import { ApiProperty } from "@nestjs/swagger";

export class CreateArtistaDto {
    @ApiProperty({example:'Nombre del Artista'})
    readonly nombre: string;
    @ApiProperty({example:'Genero de la cancion'})
    readonly generoMusical: string;
    @ApiProperty({example:'Fecha de nacimiento YYYY-MM-DD'})
    readonly fechaInicio: Date;
    @ApiProperty({example:'Fecha de Fallecimiento YYYY-MM-DD'})
    readonly fechaFin: Date;
    // @ApiProperty({example:'Id de Albun'})
    readonly albumesId: string[];
    // @ApiProperty({example:'Id de Cancion'})
    readonly cancionesId: string[];
}
