import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ConfigModule, ConfigService } from "@nestjs/config";
import configuration from "./config/configuration";
import { validate } from "./config/validation";
import { HotelsModule } from "./hotels/hotels.module";

@Module({
  imports: [
    // Configuration
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
      validate,
    }),

    // Database
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: "postgres",
        host: configService.get("database.host"),
        port: configService.get<number>("database.port"),
        database: configService.get("database.name"),
        username: configService.get("database.user"),
        password: configService.get("database.password"),
        entities: ["dist/**/*.entity.{js,ts}"],
        synchronize: true,
        autoLoadEntities: true,
      }),
    }),

    // Features
    HotelsModule,
  ],
})
export class AppModule {}
