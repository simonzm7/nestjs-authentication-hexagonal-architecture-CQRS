import { Injectable } from "@nestjs/common";
import { DaoUser } from "src/domain/User/port/dao/DaoUser";




@Injectable()
export class QueryUserHandler {

    constructor(private readonly daoUser : DaoUser) {}
    async executeGetUsers(){
        return this.daoUser.getUsers();
    }
}
