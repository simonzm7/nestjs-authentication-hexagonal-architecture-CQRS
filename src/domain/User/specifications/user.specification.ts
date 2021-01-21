import { HttpStatus, Injectable } from "@nestjs/common";
import { CreateException } from "src/domain/Exceptions/CreateException";
import { UserEntity } from "src/infrastructure/User/Entity/user.entity";
import { DaoUser } from "../port/dao/DaoUser";
import { UserSpecificationRepository } from "../port/repository/specifications/user.specification.repository";


@Injectable()
export class UserSpecification implements UserSpecificationRepository {
     constructor(private readonly daoUser: DaoUser) { }



     async userAlreadyExists(email: string) {
          if ((await this.daoUser.findUserByParameter([{ email }]))) {
               throw new CreateException({ code: 'user_already_exists' }, HttpStatus.BAD_REQUEST);
          }
     }


     async userExistsAndReturn(email: string) : Promise<UserEntity>{
          const user = await this.daoUser.findUserByParameter([{ email }]);
          if (!user) {
               throw new CreateException({ code: 'user_not_exists' }, HttpStatus.BAD_REQUEST);
          }
          return user;
     }
}
