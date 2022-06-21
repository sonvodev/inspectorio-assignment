import { StoreActions } from "../store.actions";
import * as types from "./person.types";

class PersonActions extends StoreActions {
  fetchPersonalDetails(username: string) {
    return {
      type: types.FETCH_PERSONAL_DETAILS,
      payload: username,
    };
  }
}

export default new PersonActions();
