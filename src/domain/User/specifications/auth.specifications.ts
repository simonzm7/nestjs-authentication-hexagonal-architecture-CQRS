import { Injectable } from "@nestjs/common";
import { AuthSpecificationsRepository } from "../port/repository/specifications/auth.specifications.repository";
import { UserSpecificationRepository } from "../port/repository/specifications/user.specification.repository";
import { HashingService } from "../services/hashing.service";



@Injectable()
export class AuthSpecifications  implements AuthSpecificationsRepository{

    constructor(private readonly userSpecifications: UserSpecificationRepository,
        private readonly hashingService: HashingService) { }


    async validateUser(email: string, password: string): Promise<any> {
        const user = await this.userSpecifications.userExistsAndReturn(email);
        if ((await this.hashingService.comparePassword(user.password, password))) {
            const { password, email, ...result } = user;
            return result;
        }
        return null;
    }
}
