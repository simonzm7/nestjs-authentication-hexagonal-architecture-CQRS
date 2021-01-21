import { RepositoryUser } from "src/domain/User/port/repository/repository-user";
import { UserRepositoryPostgres } from "../../adapters/repository/user.repository-postgres";


export const RepositoryUserProvider = {
    provide: RepositoryUser,
    useClass: UserRepositoryPostgres
}