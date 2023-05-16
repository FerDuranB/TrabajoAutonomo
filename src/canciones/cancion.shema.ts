import { Schema } from 'mongoose';

export const CancionSchema = new Schema({
  Titulo: String,
  fechaLanzamienito: Date,
  generoMuscial: String,
});
