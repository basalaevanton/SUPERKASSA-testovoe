import React, { ForwardedRef, forwardRef, useState } from "react";

import { InputProps } from "./Input.props";
import styles from "./Input.module.scss";

import cn from "classnames";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../lib/firebase";
import { PhoneNumber } from "../../interfaces/phoneNumber.interface";

export const Input = forwardRef(
  (
    { ...props }: InputProps,
    ref: ForwardedRef<HTMLInputElement>
  ): JSX.Element => {
    const [phoneNumber, setPhoneNumber] = useState({
      phoneNumber: "",
      country: "",
      countryCode: "",
    });

    const addPhone = async (e: any) => {
      e.preventDefault();
      const newPhone: PhoneNumber = { ...phoneNumber, id: Date.now() };
      try {
        const docRef = await addDoc(collection(db, "phones"), newPhone);
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
      setPhoneNumber({ ...phoneNumber, phoneNumber: "" });
    };

    return (
      <div className={styles.inputWrappe}>
        <form>
          <input
            className={styles.input}
            ref={ref}
            value={phoneNumber.phoneNumber}
            onChange={(e) =>
              setPhoneNumber({ ...phoneNumber, phoneNumber: e.target.value })
            }
            {...props}
          />
          <button onClick={addPhone}>send</button>
        </form>
      </div>
    );
  }
);
