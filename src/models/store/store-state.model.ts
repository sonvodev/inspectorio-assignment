import { ActivityStatus } from "../../common/enums";

export interface StoreStateInterface<T = {}, TError = {}> {
  activity: ActivityStatus;
  payload?: T;
  error?: TError | null;
  version?: number | null;
  [x: string]: any;
}
