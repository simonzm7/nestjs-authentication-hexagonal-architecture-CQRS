export abstract class JwtRepository {
    public abstract encodeToken(payload : {});
    public abstract decodeToken(token : string) : { userId : number, user_level : string };
}
