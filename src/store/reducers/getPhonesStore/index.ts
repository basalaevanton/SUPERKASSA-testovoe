import { GetPhoneActionTypes, PhonesAction, PhonesState } from "./types";

const initialState: PhonesState = {
  phoneNumbers: [],

  loading: false,
  error: null,
};

export default function PhoneNumbersReducer(
  state = initialState,
  action: PhonesAction
): PhonesState {
  switch (action.type) {
    case GetPhoneActionTypes.GET_PHONES:
      return { ...state, loading: true };
    case GetPhoneActionTypes.GET_PHONES_SUCCESS:
      return { ...state, loading: false, phoneNumbers: action.payload };
    case GetPhoneActionTypes.GET_PHONES_ERROR:
      return { ...state, loading: false, error: action.payload };
    case GetPhoneActionTypes.DELETE_PHONE_NUMBER:
      return { ...state, phoneNumbers: action.payload };
    case GetPhoneActionTypes.DELETE_ALL_PHONES:
      return { ...state };
    default:
      return state;
  }
}
