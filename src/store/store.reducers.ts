import { combineReducers } from "redux";
import { PersonStateInterface } from "./person/person.state";
import personReducer from "./person/person.reducer";

export interface RootReducersInterface {
  personReducer: PersonStateInterface;
}

export default combineReducers<RootReducersInterface>({
  personReducer,
});
