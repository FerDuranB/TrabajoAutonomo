import { Schema } from 'mongoose';

export const AlbunSchema = new Schema({
  titulo: String,
  generoMusical: String,
  fecheLanzamiento: Date,
  canciones: [{ type: Schema.Types.ObjectId, ref: 'Cancion' }],
});
