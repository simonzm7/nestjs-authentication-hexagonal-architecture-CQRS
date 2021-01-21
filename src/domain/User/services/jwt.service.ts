import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { JwtRepository } from "../port/repository/repository-jwt";




@Injectable()
export class JwtMyService implements JwtRepository{

    constructor(private readonly jwtService : JwtService) {}
    encodeToken(payload : {}) {
        return this.jwtService.sign(payload);
    }

    decodeToken(bearer_token : string) : { userId : number, user_level : string }{
        const payload = this.jwtService.verify(bearer_token.split(' ')[1], {
            secret: 'secretKey'
        })
        return {userId : payload.userId, user_level : payload.user_level};

    }
    
}