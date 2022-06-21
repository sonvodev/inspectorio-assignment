import { ActivityStatus } from '../common/enums';

export class StoreMutations<State> {

  resetStateOfReducer<T>(state: State & { [key: string]: any }, key: keyof (T), intialPayload: any) {
    return {
      ...state,
      [key]: {
        ...state[key as string],
        activity: ActivityStatus.NoActivity,
        error: null,
        version: new Date().getTime(),
        ...intialPayload
      },
    };
  }

  setLoading<T>(state: State & { [key: string]: any }, key: keyof (T)) {
    return {
      ...state,
      [key]: {
        ...state[key as string],
        activity: ActivityStatus.Loading,
        error: null,
        version: new Date().getTime(),
      },
    };
  }

  setError<T, TError = {}>(
    state: State & { [key: string]: any },
    key: keyof (T),
    error: TError | null,
  ) {
    return {
      ...state,
      [key]: {
        ...state[key as string],
        activity: ActivityStatus.LoadedFailed,
        error,
        version: new Date().getTime(),
      },
    };
  }

  setLoaded<T>(state: State & { [key: string]: any }, key: keyof (T)) {
    return {
      ...state,
      [key]: {
        ...state[key as string],
        activity: ActivityStatus.Loaded,
        error: null,
        version: new Date().getTime(),
      },
    };
  }
}
