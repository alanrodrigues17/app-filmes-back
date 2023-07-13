import { Schema } from "mongoose";

export const FilmeSchema = new Schema({
    idFilme: Number,
    curtido: Boolean,
    img: String,
    titulo: String
});
