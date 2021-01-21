import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { DaoUser } from "src/domain/User/port/dao/DaoUser";
import { JwtRepository } from "src/domain/User/port/repository/repository-jwt";



@Injectable()
export class RoleGuard implements CanActivate{
    constructor(private readonly refelector : Reflector,
        private readonly jwtRepository : JwtRepository,
        private readonly daoUser : DaoUser){}

    async canActivate(context : ExecutionContext) : Promise<boolean> {
        const levels = this.refelector.get<string[]>('roles', context.getHandler());
        if(!levels){
            return true;
        }
        const request = context.switchToHttp().getRequest();
        const decoded  : { userId : number, user_level : string } =  this.jwtRepository.decodeToken(request.headers.authorization);
        const { user_level } = await this.daoUser.findUserByParameters([{id: decoded.userId}], ['user_level']);

        return Promise.resolve(this.matchLevel(levels, user_level))
    }
    private matchLevel(levels : string[], user_level : string){
        return levels.some((e) => e === user_level);
    }
}