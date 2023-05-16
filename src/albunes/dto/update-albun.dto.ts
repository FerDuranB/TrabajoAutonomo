import { ApiProperty } from "@nestjs/swagger";

export class UpdateAlbunDto {
    @ApiProperty({example:'Nombre de la cancion'})
    readonly titulo?: String;
    @ApiProperty({example:'Genero del albun'})
    readonly generoMusical?: String;
    @ApiProperty({example:'Fecha de Lanzamiento YYYY-MM-DD'})
    readonly fecheLanzamiento?: Date;
    readonly canciones?: String [];
}