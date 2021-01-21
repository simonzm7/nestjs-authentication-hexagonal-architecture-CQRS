import { AuthSpecificationsRepository } from "src/domain/User/port/repository/specifications/auth.specifications.repository";
import { AuthSpecifications } from "src/domain/User/specifications/auth.specifications";


export const AuthSpecificationProvider = {
    provide: AuthSpecificationsRepository,
    useClass: AuthSpecifications
}