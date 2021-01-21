import { ConfigService } from "@nestjs/config";



export const configDatabase: any = (configService: ConfigService) => ({
    type: 'postgres',
    host: configService.get<string>('DB_HOST'),
    port: 5432,
    username: configService.get<string>('DB_USERNAME'),
    password: configService.get<string>('DB_PASSWORD'),
    database: configService.get<string>('DB_DATABASE'),
    entities: ['dist/**/*.entity{.ts,.js}'],
    synchronize: true
});
