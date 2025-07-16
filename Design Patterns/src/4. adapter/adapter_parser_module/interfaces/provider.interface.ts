import { StandardInputDto } from '../dto/standard-input.dto';

export interface ProviderAdapter {
  transform(input: any): StandardInputDto;
}
