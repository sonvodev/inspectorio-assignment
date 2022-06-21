import { PersonResponseModel } from "../../models/person";

export interface UsersServiceInterface {
  getPersonaDetailsByUsername(
    username: string
  ): Promise<Partial<PersonResponseModel>>;
}
