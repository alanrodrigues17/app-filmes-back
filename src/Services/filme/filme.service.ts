import { BadRequestException, Body, Injectable, Param, Patch } from '@nestjs/common';
import { FilmeDTO } from 'src/DTO/filme.dto';
import { Filme } from 'src/mongo/Interfaces/filme.interface';
import { FilmeRepository } from 'src/mongo/Repository/filme.repository';

@Injectable()
export class FilmeService {
    constructor(
        private readonly filmeRepositorio: FilmeRepository
    ) { }

    async getAllFilmesCurtidos(): Promise<Filme[]> {
        return await this.filmeRepositorio.getAllFilmesCurtidos();
    }

    async getFilmeById(filmeId: number): Promise<Filme> {
        try {
            const existeFilme = this.filmeRepositorio.getFilmeById(filmeId);
            if (!existeFilme)
                throw new BadRequestException("Sem resultados para esse id");
            return existeFilme;
        } catch (e) {
            throw new BadRequestException("Sem resultados para esse id");
        }
    }
    
    async saveFilme(novoFilme: FilmeDTO): Promise<Filme>{
        return await this.filmeRepositorio.saveFilme(novoFilme);
    }

    async updateFilmeById(filmeId: number, novoFilme: FilmeDTO): Promise<Filme> {
        

        const existeFilme = this.filmeRepositorio.getFilmeById(filmeId);

        if (!existeFilme)
            throw new BadRequestException("Não há resultados para esse id");

        const updatedBook = await this.filmeRepositorio.updateFilmeById(filmeId, novoFilme);

        if (updatedBook)
            return await this.filmeRepositorio.getFilmeById(filmeId);
    }

}
