import { BadRequestException, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Filme } from "../Interfaces/filme.interface";
import { FilmeDTO } from "src/DTO/filme.dto";

@Injectable()
export class FilmeRepository {
    constructor(
        @InjectModel('filme') private readonly filmeModel: Model<Filme>
    ) { }

    async getAllFilmesCurtidos(): Promise<Filme[]> {
        const allFilmes = this.filmeModel.find({}, { __v: false }).exec();
        if (!(await allFilmes).length)
            throw new BadRequestException("Não existe filmes cadastrados");
        return allFilmes;
    }

    async getFilmeById(id: number): Promise<Filme> {
        return await this.filmeModel.findOne({idFilme: id}, { __v: false });
    }

    
    async updateFilmeById(filmeId: number, novoFilme: FilmeDTO): Promise<Filme> {
        return await this.filmeModel.replaceOne({ idFilme: filmeId }, novoFilme);
    }

    async saveFilme(novoFilme: FilmeDTO): Promise<Filme> {
        const filmeSalvo = new this.filmeModel(novoFilme);
        return await filmeSalvo.save();
    }


}