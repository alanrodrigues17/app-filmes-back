import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { FilmesController } from './Controllers/filmes/filmes.controller';
import { FilmeSchema } from './mongo/Schemas/filme.schema';
import { FilmeService } from './Services/filme/filme.service';
import { FilmeRepository } from './mongo/Repository/filme.repository';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/filmes'),
    MongooseModule.forFeature([
      { name: 'filme', schema: FilmeSchema }
    ])
  ],
  controllers: [FilmesController],
  providers: [
    FilmeService,
    FilmeRepository
  ],
})
export class AppModule { }
