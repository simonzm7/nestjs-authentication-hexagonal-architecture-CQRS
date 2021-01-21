import { Injectable } from '@nestjs/common';
import { User } from 'src/domain/User/models/User';
import { UserService } from 'src/domain/User/services/user.service';
import { CommandCreateUser } from './command-create-user';


@Injectable()
export class CommandUserHandler {

    constructor(private readonly userService : UserService){}
    async executeUserCreator(userCredentials : CommandCreateUser) {
            await this.userService.userCreator(new User({
                email: userCredentials.email,
                password: userCredentials.password
            }))
    }
}
