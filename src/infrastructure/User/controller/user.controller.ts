import { Body, Controller, Get, Post } from '@nestjs/common';
import { CommandCreateUser } from 'src/application/User/command/command-create-user';
import { CommandUserHandler } from 'src/application/User/command/command-user.handler';


@Controller('accounts')
export class UserController {

    constructor(private readonly commandUserHandler : CommandUserHandler) {}
    @Get('me') 
    getUser() {

    }

    @Post('create')
    async createUser(@Body() body : CommandCreateUser) {
        await this.commandUserHandler.executeUserCreator(body);
    }

}
