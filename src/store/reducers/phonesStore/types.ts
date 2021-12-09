import { PhoneNumber } from "../../../interfaces/phoneNumber.interface";

export interface PhonesState {
  phoneNumbers: PhoneNumber[];

  loading: boolean;
  error: null | string;
}

export enum PhoneActionTypes {
  GET_PHONES = "FETCH_PHONES",
  GET_PHONES_SUCCESS = "FETCH_PHONES_SUCCESS",
  GET_PHONES_ERROR = "FETCH_PHONES_ERROR",

  DELETE_PHONE_NUMBER = "DELETE_PHONE_NUMBER",
  DELETE_ALL_PHONES = "DELETE_ALL_PHONES",
}

export interface GetPhonesAction {
  type: PhoneActionTypes.GET_PHONES;
}

export interface GetPhonesSuccesAction {
  type: PhoneActionTypes.GET_PHONES_SUCCESS;
  payload: PhoneNumber[];
}
export interface GetPhonesErrorAction {
  type: PhoneActionTypes.GET_PHONES_ERROR;
  payload: string;
}

export interface DeletePhoneAction {
  type: PhoneActionTypes.DELETE_PHONE_NUMBER;
  payload: PhoneNumber[];
}
export interface DeleteAllPhonesAction {
  type: PhoneActionTypes.DELETE_ALL_PHONES;
}

export type PhonesAction =
  | DeletePhoneAction
  | DeleteAllPhonesAction
  | GetPhonesAction
  | GetPhonesSuccesAction
  | GetPhonesErrorAction;
