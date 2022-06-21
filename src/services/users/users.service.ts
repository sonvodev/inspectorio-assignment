import { ApiEndpoints } from "../../common/enums";
import {
  PersonResponseInterface,
  PersonResponseModel,
} from "../../models/person";
import { BaseService } from "../base.services";
import { UsersServiceInterface } from "./users.service.interface";

export class UsersService extends BaseService implements UsersServiceInterface {
  getPersonaDetailsByUsername(
    username: string
  ): Promise<Partial<PersonResponseModel>> {
    return super
      .get<PersonResponseInterface>(
        ApiEndpoints.USERS_DETAILS.replace(":username", username.toLowerCase())
      )
      .then((response: PersonResponseInterface) => {
        return new PersonResponseModel(response);
      })
      .catch((error) => {
        return Promise.reject(error);
      });
  }
}
