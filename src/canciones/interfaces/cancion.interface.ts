import { Document } from 'mongoose';

export interface Cancion extends Document {
    Titulo: String,
    fechaLanzamienito: Date,
    generoMuscial: String,
    // nombre: string;
    // generoMusical: string;
    // fechaInicio: Date;
    // fechaFin: Date;
    // albumes: string[];
    // canciones: string[];
}
