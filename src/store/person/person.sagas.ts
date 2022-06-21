import { all, call, fork, takeLatest } from "@redux-saga/core/effects";
import { put } from "redux-saga/effects";
import { ActionTypedInterface } from "../../models";
import { PersonResponseModel } from "../../models/person";
import { UsersService, UsersServiceInterface } from "../../services";
import actions from "./person.actions";
import { PersonStateInterface } from "./person.state";
import * as types from "./person.types";

const usersService: UsersServiceInterface = new UsersService();

export function* watchFetchPersonalInformation() {
  yield takeLatest(
    types.FETCH_PERSONAL_DETAILS,
    function* (action: ActionTypedInterface<string>) {
      try {
        yield put(
          actions.setLoading<PersonStateInterface>(
            types.FETCH_PERSONAL_DETAILS_LOADING,
            "person"
          )
        );
        const personalDetails: PersonResponseModel = yield call(
          usersService.getPersonaDetailsByUsername,
          action.payload!
        );
        yield put({
          type: types.FETCH_PERSONAL_DETAILS_LOADED,
          payload: personalDetails,
        });
      } catch (error: any) {
        console.log(error);
        
        yield put(
          actions.setError<PersonStateInterface>(
            types.FETCH_PERSONAL_DETAILS_FAILED,
            "person",
            error
          )
        );
      }
    }
  );
}

export function* personSaga() {
  yield all([fork(watchFetchPersonalInformation)]);
}
