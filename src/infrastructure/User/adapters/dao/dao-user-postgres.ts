import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { DaoUser } from "src/domain/User/port/dao/DaoUser";
import { Repository } from "typeorm";
import { UserEntity } from "../../Entity/user.entity";


@Injectable()
export class DaoUserPostgres implements DaoUser {
    constructor(@InjectRepository(UserEntity) private userRepository : Repository<UserEntity>) {}

    async getUsers() : Promise<{}[]> {
        return ;
    }

    async findUserByParameter(parameter : {}[]) : Promise<UserEntity> {
        return this.userRepository.findOne({
            where: parameter
        });
    }

    async findUserByParameters(where : {}[], select: []) : Promise<UserEntity> {
        return this.userRepository.findOne({
            where,
            select
        });
    }
}
