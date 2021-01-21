import { Injectable } from "@nestjs/common";
import { User } from "../models/User";
import { RepositoryUser } from "../port/repository/repository-user";
import { UserSpecificationRepository } from "../port/repository/specifications/user.specification.repository";
import { HashingService } from "./hashing.service";



@Injectable()
export class UserService {

    constructor(private readonly userRepository: RepositoryUser,
        private readonly userSpecification: UserSpecificationRepository,
        private readonly hashingService: HashingService) { }

    async userCreator(user: User) {
        await this.userSpecification.userAlreadyExists(user.getEmailAddress);
        const encryptedPassword: string = await this.hashingService.encryptPassword(user.getPassword);
        user.setPassword(encryptedPassword);
        await this.userRepository.createUpdateUser(user);
    }
}   