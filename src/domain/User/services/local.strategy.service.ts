import { HttpStatus, Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { CreateException } from 'src/domain/Exceptions/CreateException';
import { AuthSpecificationsRepository } from '../port/repository/specifications/auth.specifications.repository';


@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
    constructor(private readonly authSpecification : AuthSpecificationsRepository) {
        super({
            usernameField: 'email'
        });
    }

    async validate(email : string, password : string){
        const user = await this.authSpecification.validateUser(email, password);
        if(!user){
            throw new CreateException({
                code: 'no_authenticated'
            }, HttpStatus.UNAUTHORIZED);
        }
        return user;
    }
}
