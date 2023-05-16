import { Document } from 'mongoose';

export interface Albun extends Document {
    titulo: String,
    generoMusical: String,
    fecheLanzamiento: Date,
    canciones: String [],
}
