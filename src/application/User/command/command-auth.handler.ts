import { Injectable } from "@nestjs/common";
import { User } from "src/domain/User/models/User";
import { DaoUser } from "src/domain/User/port/dao/DaoUser";
import { AuthService } from "src/domain/User/services/auth.service";




@Injectable()
export class CommandAuthHandler {

    constructor(private readonly authService : AuthService) {}
    async executeLogIn(userId : number, user_level : number){
        return this.authService.logIn(userId, user_level);
    }
}
