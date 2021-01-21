import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommandUserHandler } from 'src/application/User/command/command-user.handler';
import { AuthService } from 'src/domain/User/services/auth.service';
import { HashingService } from 'src/domain/User/services/hashing.service';
import { UserService } from 'src/domain/User/services/user.service';
import { UserController } from './controller/user.controller';
import { AuthController } from './controller/auth.controller';
import { UserEntity } from './Entity/user.entity';
import { DaoUserProvider } from './provider/dao/dao-user.provider';
import { RepositoryUserProvider } from './provider/repository/repository-user.provider';
import { AuthSpecificationProvider } from './provider/specifications/auth-specification.provider';
import { UserSpecificationProvider } from './provider/specifications/user-specification.provider';
import { CommandAuthHandler } from 'src/application/User/command/command-auth.handler';
import { LocalStrategy } from 'src/domain/User/services/local.strategy.service';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from 'src/domain/User/services/jwt.strategy.service';
import { JwtProvider } from './provider/repository/repository-jwt.provider';
import { JwtConfig } from '../Config/JWT/jwt.config';


@Module({
    imports: [TypeOrmModule.forFeature([UserEntity]), PassportModule, JwtModule.register(JwtConfig)],
    controllers: [UserController, AuthController],
    providers: [
        CommandUserHandler,
        CommandAuthHandler,
        UserService,
        HashingService,
        AuthService,
        LocalStrategy,
        JwtStrategy,
        RepositoryUserProvider,
        DaoUserProvider,
        UserSpecificationProvider,
        AuthSpecificationProvider,
        JwtProvider]
})
export class UserModule { }
