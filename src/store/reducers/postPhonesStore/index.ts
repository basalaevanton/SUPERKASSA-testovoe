import { PostPhoneActionTypes, PhonesAction, PhonesState } from "./types";

const initialState: PhonesState = {
  phoneNumber: {
    phoneNumber: "",
    country: "ru",
    countryCode: "",
  },

  loading: false,
  error: null,
};

export default function PostPhoneNumbersReducer(
  state = initialState,
  action: PhonesAction
): PhonesState {
  switch (action.type) {
    case PostPhoneActionTypes.SET_PHONES:
      return { ...state, phoneNumber: action.payload };
    case PostPhoneActionTypes.POST_PHONES:
      return { ...state, loading: true };
    case PostPhoneActionTypes.POST_PHONES_SUCCESS:
      return {
        ...state,
        loading: false,
        phoneNumber: {
          phoneNumber: "",
          country: "ru",
          countryCode: "",
        },
      };
    case PostPhoneActionTypes.POST_PHONES_ERROR:
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
}
