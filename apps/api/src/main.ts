import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { ConfigService } from "@nestjs/config";
import { ValidationPipe } from "@nestjs/common";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Configuration
  const configService = app.get(ConfigService);
  const port = configService.get<number>("port") as number;

  // Validation
  app.useGlobalPipes(new ValidationPipe());

  // Documentation
  const config = new DocumentBuilder()
    .setTitle("API")
    .setDescription("Starter - Backend")
    .setVersion("1.0")
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup("api", app, document);

  await app.listen(port);
}

void bootstrap();
