import { Schema } from 'mongoose';

export const ArtistaSchema = new Schema({
  nombre: String,
  fechaInicio: Date,
  fechaFin: String,
  albumes: [{ type: Schema.Types.ObjectId, ref: 'Album' }],
  canciones: [{ type: Schema.Types.ObjectId, ref: 'Cancion' }],
});
