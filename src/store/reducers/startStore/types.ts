export interface StartState {
  start: string;
}

export enum StartActionEnum {
  SET_START = "SET_START",
}

export interface SetStartAction {
  type: StartActionEnum.SET_START;
  payload: string;
}

export type StartAction = SetStartAction;
