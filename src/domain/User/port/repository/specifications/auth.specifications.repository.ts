

export abstract class AuthSpecificationsRepository {
    public abstract validateUser(email: string, password: string): Promise<any>;
}