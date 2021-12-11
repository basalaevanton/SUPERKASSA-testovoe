import * as PhoneNumbersActionCreators from "./getPhonesStore/action-creators";
import * as PostPhoneNumbersActionCreators from "./postPhonesStore/action-creators";

export const allActionCreators = {
  ...PhoneNumbersActionCreators,
  ...PostPhoneNumbersActionCreators,
};
