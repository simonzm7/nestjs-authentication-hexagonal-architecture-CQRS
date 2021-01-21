import { Module } from '@nestjs/common';
import { UserModule } from './User/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { configDatabase } from './Config/Database/configDatabase';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
    imports: [UserModule, TypeOrmModule.forRootAsync({
        imports: [ConfigModule.forRoot({
            envFilePath: ['.env'],
            isGlobal: true
        })],
        useFactory: configDatabase,
        inject: [ConfigService]
    })]
})
export class InfrastructureModule { }