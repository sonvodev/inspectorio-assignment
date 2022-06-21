import { ActionTypedInterface } from "../../models";
import mutations from "./person.mutations";
import initialState, { PersonStateInterface } from "./person.state";
import * as types from "./person.types";

export const reducers = (
  state: PersonStateInterface = initialState,
  action: ActionTypedInterface
) => {
  switch (action.type) {
    case types.FETCH_PERSONAL_DETAILS_LOADING:
      return mutations.setLoading<PersonStateInterface>(state, "person");
    case types.FETCH_PERSONAL_DETAILS_LOADED:
      return mutations.setPersonalInformation(state, action.payload);
    case types.FETCH_PERSONAL_DETAILS_FAILED:
      return mutations.setError<PersonStateInterface>(
        state,
        "person",
        action.payload
      );

    default:
      return state;
  }
};
export default reducers;
