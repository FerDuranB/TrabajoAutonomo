import { ApiProperty } from "@nestjs/swagger";

export class UpdateCancionDto {
    @ApiProperty({example:'Nombre de la cancion'})
    readonly Titulo?: String;
    @ApiProperty({example:'Fecha de Lanzamiento YYYY/MM/DD'})
    readonly fechaLanzamienito?: Date;
    @ApiProperty({example:'Genero de la cancion'})
    readonly generoMuscial?: String;
}