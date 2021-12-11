import { addDoc, collection } from "firebase/firestore";
import { Dispatch } from "react";
import {
  IdPhoneNumber,
  PhoneNumber,
} from "../../../interfaces/phoneNumber.interface";
import { db } from "../../../lib/firebase";
import { PhonesAction, PostPhoneActionTypes } from "./types";

export const postPhoneNumber = (data: PhoneNumber) => {
  return async (dispatch: Dispatch<PhonesAction>) => {
    try {
      dispatch({ type: PostPhoneActionTypes.POST_PHONES });

      const newPhone: IdPhoneNumber = {
        ...data,
        id: Date.now(),
      };

      const docRef = await addDoc(
        collection(db, "collection", "phones", "1"),
        newPhone
      );

      setTimeout(() => {
        dispatch({
          type: PostPhoneActionTypes.POST_PHONES_SUCCESS,
        });
      }, 100);
    } catch (error) {
      dispatch({
        type: PostPhoneActionTypes.POST_PHONES_ERROR,
        payload: "Произошла ошибка при отправке телефонного номера",
      });
    }
  };
};

export function setNumber(data: PhoneNumber): PhonesAction {
  return { type: PostPhoneActionTypes.SET_PHONES, payload: data };
}
