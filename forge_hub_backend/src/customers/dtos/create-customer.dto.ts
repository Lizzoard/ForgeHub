import { IsOptional, IsString } from 'class-validator';

export class CreateCustomerDto {
  @IsOptional()
  @IsString()
  firstName?: string;

  @IsString()
  lastName: string;
}
