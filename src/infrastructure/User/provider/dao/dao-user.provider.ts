import { DaoUser } from "src/domain/User/port/dao/DaoUser";
import { DaoUserPostgres } from "../../adapters/dao/dao-user-postgres";


export const DaoUserProvider = {
    provide: DaoUser,
    useClass: DaoUserPostgres
}