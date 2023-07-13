import { IsBoolean, IsNotEmpty, IsNumber, IsPositive } from "class-validator";

export class FilmeDTO{
    @IsNumber()
    @IsNotEmpty()
    @IsPositive()
    readonly idFilme: number;

    @IsNotEmpty()
    @IsBoolean()
    readonly curtido: boolean;
}