import { IsNumber, IsOptional, IsString, validateSync } from "class-validator";
import { plainToInstance } from "class-transformer";

class EnvironmentVariables {
  @IsNumber()
  @IsOptional() // Because it has a default value
  PORT: number;

  @IsString()
  @IsOptional() // Because it has a default value
  DATABASE_HOST: string;

  @IsNumber()
  @IsOptional() // Because it has a default value
  DATABASE_PORT: number;

  @IsString()
  @IsOptional() // Because it has a default value
  DATABASE_NAME: string;

  @IsString()
  @IsOptional() // Because it has a default value
  DATABASE_USER: string;

  @IsString()
  @IsOptional() // Because it has a default value
  DATABASE_PASSWORD: string;
}

export function validate(config: Record<string, unknown>) {
  const validatedConfig = plainToInstance(EnvironmentVariables, config, {
    enableImplicitConversion: true,
  });
  const errors = validateSync(validatedConfig, {
    skipMissingProperties: false,
  });

  if (errors.length > 0) {
    throw new Error(errors.toString());
  }
  return validatedConfig;
}
