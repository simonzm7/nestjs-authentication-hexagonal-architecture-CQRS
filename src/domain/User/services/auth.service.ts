import { Injectable } from "@nestjs/common";
import { JwtRepository } from "../port/repository/repository-jwt";


@Injectable()
export class AuthService {

    constructor(private readonly jwtMyService: JwtRepository) { }

    async logIn(userId: number, user_level : number) {
        const payload = { userId,  user_level};
        return {
            message: {
                access_token: this.jwtMyService.encodeToken(payload)
            }
        }
    }
}