import { IsBoolean, IsNotEmpty, IsNumber, IsPositive, IsString, MaxLength, MinLength } from "class-validator";

export class FilmeDTO {
    @IsNumber()
    @IsNotEmpty()
    @IsPositive()
    readonly idFilme: number;

    @IsNotEmpty()
    @IsBoolean()
    readonly curtido: boolean;

    @IsNotEmpty()
    @IsString()
    @MinLength(2)
    @MaxLength(100)
    readonly img: string;

    @IsNotEmpty()
    @IsString()
    @MinLength(2)
    @MaxLength(100)
    readonly titulo: string;

}