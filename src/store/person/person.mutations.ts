import { ActivityStatus } from "../../common/enums";
import { PersonResponseInterface } from "../../models/person";
import { StoreMutations } from "../store.mutations";
import { PersonStateInterface } from "./person.state";

class PersonMutations extends StoreMutations<PersonStateInterface> {
  setPersonalInformation(
    state: PersonStateInterface,
    personalInformation: PersonResponseInterface
  ) {
    return Object.assign({}, state, {
      person: Object.assign({}, state.person, {
        activity: ActivityStatus.Loaded,
        payload: personalInformation,
      }),
    });
  }
}

export default new PersonMutations();
