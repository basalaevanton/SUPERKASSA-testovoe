import { StartActionEnum, SetStartAction } from "./types";

export const StartActionCreators = {
  setStart: (start: string): SetStartAction => ({
    type: StartActionEnum.SET_START,
    payload: start,
  }),
};
