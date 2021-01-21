import { UserLevel } from "../Enum/UserLevel";



export class User {

    private readonly email: string;
    private readonly user_level : UserLevel;
    private password: string;
   
    constructor({ email, password }) {
        this.email = email;
        this.password = password;
        this.user_level = UserLevel.None;
    }

    setPassword(encryptedPassword: string) {
        this.password = encryptedPassword;
    }
    
    get getEmailAddress(): string {
        return this.email;
    }

    get getPassword(): string {
        return this.password;
    }

    get getUserRole() : UserLevel {
        return this.user_level;
    }

}
