import { HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateException } from "src/domain/Exceptions/CreateException";
import { User } from "src/domain/User/models/User";
import { RepositoryUser } from "src/domain/User/port/repository/repository-user";
import { Repository } from "typeorm";
import { UserEntity } from "../../Entity/user.entity";


@Injectable()
export class UserRepositoryPostgres implements RepositoryUser {
    constructor(@InjectRepository(UserEntity) private userRepository : Repository<UserEntity>) {}
    async createUpdateUser(user: User){
        await this.userRepository.save({
            email: user.getEmailAddress,
            password: user.getPassword,
            user_level: user.getUserRole,
            createdAt:  new Date().toISOString()
        });
        throw new CreateException({code: 'user_created'}, HttpStatus.OK);
    }
}
