import { IdPhoneNumber } from "../../../interfaces/phoneNumber.interface";

export interface PhonesState {
  phoneNumbers: IdPhoneNumber[];

  loading: boolean;
  error: null | string;
}

export enum GetPhoneActionTypes {
  GET_PHONES = "FETCH_PHONES",
  GET_PHONES_SUCCESS = "FETCH_PHONES_SUCCESS",
  GET_PHONES_ERROR = "FETCH_PHONES_ERROR",

  DELETE_PHONE_NUMBER = "DELETE_PHONE_NUMBER",
  DELETE_ALL_PHONES = "DELETE_ALL_PHONES",
}

export interface GetPhonesAction {
  type: GetPhoneActionTypes.GET_PHONES;
}

export interface GetPhonesSuccesAction {
  type: GetPhoneActionTypes.GET_PHONES_SUCCESS;
  payload: any;
}
export interface GetPhonesErrorAction {
  type: GetPhoneActionTypes.GET_PHONES_ERROR;
  payload: string;
}

export interface DeletePhoneAction {
  type: GetPhoneActionTypes.DELETE_PHONE_NUMBER;
  payload: IdPhoneNumber[];
}
export interface DeleteAllPhonesAction {
  type: GetPhoneActionTypes.DELETE_ALL_PHONES;
}

export type PhonesAction =
  | DeletePhoneAction
  | DeleteAllPhonesAction
  | GetPhonesAction
  | GetPhonesSuccesAction
  | GetPhonesErrorAction;
