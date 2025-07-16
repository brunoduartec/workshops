/*
https://docs.nestjs.com/providers#services
*/

import { Injectable } from '@nestjs/common';
import { ProviderAdapter } from '../interfaces/provider.interface';
import { StandardInputDto } from '../dto/standard-input.dto';

interface ProviderAInput {
  nome_completo: string;
  contato_email: string;
  data_nascimento: string;
}

@Injectable()
export class ProviderAAdapterService implements ProviderAdapter {
  transform(input: ProviderAInput): StandardInputDto {
    return {
      name: input.nome_completo,
      email: input.contato_email,
      birthDate: new Date(input.data_nascimento),
    };
  }
}
