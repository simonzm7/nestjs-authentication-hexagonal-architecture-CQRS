import { JwtRepository } from "src/domain/User/port/repository/repository-jwt";
import { JwtMyService } from "src/domain/User/services/jwt.service";


export const JwtProvider = {
    provide: JwtRepository,
    useClass: JwtMyService
}