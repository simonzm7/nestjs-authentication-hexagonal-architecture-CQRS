import { Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { CommandAuthHandler } from 'src/application/User/command/command-auth.handler';
import { UserLevel } from 'src/domain/User/Enum/UserLevel';
import { Roles } from 'src/infrastructure/Decorators/role.decorator';
import { RoleGuard } from 'src/infrastructure/Guards/role.guard';


@Controller('accounts')
export class AuthController {

    constructor(private readonly commandAuthHandler: CommandAuthHandler) { }

    @UseGuards(AuthGuard('local'))
    @Post('login')
    async logIn(@Req() req) {
        return this.commandAuthHandler.executeLogIn(req.user.id, req.user.user_level);
    }
   
    @UseGuards(AuthGuard('jwt'))
    @UseGuards(RoleGuard)
    @Get('profile')
    @Roles(UserLevel.Administrator, UserLevel.None)
    getProfile(@Req() req) {
        return req.user.user_level;
    }
}
