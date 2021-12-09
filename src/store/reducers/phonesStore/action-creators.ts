import { collection, getDocs } from "firebase/firestore";
import { Dispatch } from "react";
import { PhoneNumber } from "../../../interfaces/phoneNumber.interface";
import { db } from "../../../lib/firebase";
import { PhonesAction, PhoneActionTypes } from "./types";

export const getPhoneNumbers = () => {
  return async (dispatch: Dispatch<PhonesAction>) => {
    try {
      dispatch({ type: PhoneActionTypes.GET_PHONES });
      const querySnapshot = await getDocs(collection(db, "phones"));
      const result: any[] = [];
      querySnapshot.forEach((doc) => {
        result.push(doc.data());
      });
      dispatch({
        type: PhoneActionTypes.GET_PHONES_SUCCESS,
        payload: result,
      });
    } catch (error) {
      dispatch({
        type: PhoneActionTypes.GET_PHONES_ERROR,
        payload: "Произошла ошибка при загрузке телефонных номеров",
      });
    }
  };
};
