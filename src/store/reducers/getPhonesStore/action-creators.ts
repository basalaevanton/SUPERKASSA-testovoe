import { collection, onSnapshot } from "firebase/firestore";
import { Dispatch } from "react";

import { db } from "../../../lib/firebase";
import { PhonesAction, GetPhoneActionTypes } from "./types";

export const getPhoneNumbers = () => {
  return async (dispatch: Dispatch<PhonesAction>) => {
    try {
      dispatch({ type: GetPhoneActionTypes.GET_PHONES });

      const querySnapshot = onSnapshot(
        collection(db, "collection", "phones", "1"),
        (docs) => {
          dispatch({
            type: GetPhoneActionTypes.GET_PHONES_SUCCESS,
            payload: docs.docs.map((doc) => doc.data()),
          });
        }
      );
    } catch (error) {
      dispatch({
        type: GetPhoneActionTypes.GET_PHONES_ERROR,
        payload: "Произошла ошибка при загрузке телефонных номеров",
      });
    }
  };
};
