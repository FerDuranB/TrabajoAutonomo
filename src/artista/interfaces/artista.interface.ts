import { Document } from 'mongoose';

export interface Artista extends Document {
    nombre: string;
    generoMusical: string;
    fechaInicio: Date;
    fechaFin: Date;
    albumes: string[];
    canciones: string[];
}
