import { UserEntity } from "src/infrastructure/User/Entity/user.entity";

export abstract class UserSpecificationRepository {
    public abstract userAlreadyExists(email : string);
    public abstract userExistsAndReturn(email : string) : Promise<UserEntity>;
}
