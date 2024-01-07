import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { ConfigService } from "@nestjs/config";
import { ValidationPipe } from "@nestjs/common";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Configuration
  const configService = app.get(ConfigService);
  const port = configService.get<number>("port") as number;

  // Validation
  app.useGlobalPipes(new ValidationPipe());

  await app.listen(port);
}

void bootstrap();
