import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { FilmeDTO } from 'src/DTO/filme.dto';
import { FilmeService } from 'src/Services/filme/filme.service';
import { Filme } from 'src/mongo/Interfaces/filme.interface';

@Controller('filmes')
export class FilmesController {
    constructor(
        private readonly filmeService: FilmeService
    ){}

    @Get()
    async getAllFilmesCurtidos(): Promise<Filme[]>{
        return await this.filmeService.getAllFilmesCurtidos();
    }

    @Get('id/:filmeId')
    async getFilmeById(@Param('filmeId') filmeId: number): Promise<Filme>{
        return await this.filmeService.getFilmeById(filmeId);
    }

    @Post()
    async saveFilme(@Body() novoFilme: FilmeDTO): Promise<Filme>{
        return await this.filmeService.saveFilme(novoFilme);
    }

    @Patch('atualizar/:filmeID')
    async updateFilmeById(@Param('filmeID') filmeId: number, @Body() novoFilme: FilmeDTO): Promise<Filme> {
        return await this.filmeService.updateFilmeById(filmeId, novoFilme);
    }
}
