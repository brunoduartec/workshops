/* eslint-disable @typescript-eslint/no-unsafe-call */
import {
  IsBoolean,
  IsDefined,
  IsNotEmpty,
  IsObject,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ClienteDto {
  @IsString()
  @IsNotEmpty()
  id: string;

  @IsBoolean()
  @IsOptional()
  podeFalar: string;
}

export class MessageDataDto {
  @IsString()
  @IsNotEmpty()
  conteudo: string;

  @IsString()
  @IsOptional()
  canal?: string;

  @IsDefined()
  @IsNotEmpty()
  @ValidateNested()
  @Type(() => ClienteDto)
  cliente: ClienteDto;

  @IsOptional()
  @IsObject()
  metadados?: Record<string, any>;
}
