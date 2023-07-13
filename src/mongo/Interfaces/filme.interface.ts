import { Document } from "mongoose";
import * as mongoose from "mongoose";

export interface Filme extends Document {

    readonly _id: mongoose.Schema.Types.ObjectId;
    readonly idFilme: number,
    readonly curtido: boolean;
    readonly img: string;
    readonly titulo: string;
}