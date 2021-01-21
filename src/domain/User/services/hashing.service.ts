import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';


@Injectable()
export class HashingService {

        async encryptPassword(password : string){
            return bcrypt.hash(password, 10);
        }

        async comparePassword(encryptedPassword : string, textPassword : string) {
            return bcrypt.compare(textPassword, encryptedPassword);
        }
}
