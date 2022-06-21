import { ActivityStatus } from "../../common/enums";
import { StoreStateInterface } from "../../models";
import { PersonResponseModel } from "../../models/person";

export interface PersonStateInterface {
  cachedPeople: StoreStateInterface<Array<PersonResponseModel>>;
  person: StoreStateInterface<Partial<PersonResponseModel>>;
}

class PersonState implements PersonStateInterface {
  cachedPeople: StoreStateInterface<Array<PersonResponseModel>>;
  person: StoreStateInterface<Partial<PersonResponseModel>>;
  /**
   *
   */
  constructor() {
    this.cachedPeople = {
      activity: ActivityStatus.NoActivity,
      error: null,
      version: null,
      payload: [],
    };
    this.person = {
      activity: ActivityStatus.NoActivity,
      error: null,
      version: null,
      payload: {},
    };
  }
}

export default new PersonState();
