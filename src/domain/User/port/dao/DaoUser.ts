import { UserEntity } from "src/infrastructure/User/Entity/user.entity";

export abstract class DaoUser {
    public abstract getUsers() : Promise<{}[]>
    public abstract findUserByParameter(parameter : {}[]) : Promise<UserEntity>;
    public abstract findUserByParameters(where : {}[], select: string[]) : Promise<{user_level : string}>;
}