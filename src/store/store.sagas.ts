import { all, fork } from "redux-saga/effects";
import { personSaga } from "./person/person.sagas";

function* sagas() {
  yield all([fork(personSaga)]);
}

export default sagas;
