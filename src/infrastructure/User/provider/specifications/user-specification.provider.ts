import { UserSpecificationRepository } from "src/domain/User/port/repository/specifications/user.specification.repository";
import { UserSpecification } from "src/domain/User/specifications/user.specification";


export const UserSpecificationProvider  = {
    provide: UserSpecificationRepository,
    useClass: UserSpecification
}
