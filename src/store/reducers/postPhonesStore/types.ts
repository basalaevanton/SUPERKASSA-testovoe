import { PhoneNumber } from "../../../interfaces/phoneNumber.interface";

export interface PhonesState {
  phoneNumber: PhoneNumber;

  loading: boolean;
  error: null | string;
}

export enum PostPhoneActionTypes {
  SET_PHONES = "SET_PHONES",
  POST_PHONES = "POST_PHONES",
  POST_PHONES_SUCCESS = "POST_PHONES_SUCCESS",
  POST_PHONES_ERROR = "POST_PHONES_ERROR",
}
export interface SetPhonesAction {
  type: PostPhoneActionTypes.SET_PHONES;
  payload: PhoneNumber;
}
export interface PostPhonesAction {
  type: PostPhoneActionTypes.POST_PHONES;
}

export interface PostPhonesSuccesAction {
  type: PostPhoneActionTypes.POST_PHONES_SUCCESS;
}
export interface PostPhonesErrorAction {
  type: PostPhoneActionTypes.POST_PHONES_ERROR;
  payload: string;
}

export type PhonesAction =
  | SetPhonesAction
  | PostPhonesAction
  | PostPhonesSuccesAction
  | PostPhonesErrorAction;
