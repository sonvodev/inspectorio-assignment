import { ActionTypedInterface } from "../models";

export class StoreActions {
  setLoading<T>(type: string, property: keyof T): ActionTypedInterface<string> {
    return { type, key: property };
  }

  setError<T, TError = {}>(
    type: string,
    property: keyof T,
    error: TError | null
  ) {
    return { type, key: property, payload: error };
  }

  setLoaded<T>(type: string, property: keyof T) {
    return { type, key: property };
  }

  resetStateOfReducer<T>(type: string, reducer: keyof T, value?: any) {
    return { type, payload: { key: reducer, value } };
  }
}
