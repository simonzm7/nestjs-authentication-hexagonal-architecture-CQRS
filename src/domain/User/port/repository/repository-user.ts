import { User } from "../../models/User";

export abstract class RepositoryUser {
    public abstract createUpdateUser(user : User);
}