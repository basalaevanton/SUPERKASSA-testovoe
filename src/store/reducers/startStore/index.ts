import { StartAction, StartActionEnum, StartState } from "./types";

const initialState: StartState = {
  start: "",
};

export default function StartReducer(
  state = initialState,
  action: StartAction
): StartState {
  switch (action.type) {
    case StartActionEnum.SET_START:
      return { ...state, start: action.payload };

    default:
      return state;
  }
}
