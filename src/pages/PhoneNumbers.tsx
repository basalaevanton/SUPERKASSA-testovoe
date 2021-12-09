import React, { useEffect, useState } from "react";
import { withLayout } from "../layout/Layout";

import { Typography } from "@mui/material";
import { useTypedSelector, useActions } from "../hooks";

import { db } from "../lib/firebase";
import { PhoneNumber } from "../interfaces/phoneNumber.interface";
import { Input } from "../components";

const Start = () => {
  const { phoneNumbers, loading, error } = useTypedSelector(
    (state) => state.PhoneNumbersReducer
  );
  const { getPhoneNumbers } = useActions();

  console.log(phoneNumbers);

  useEffect(() => {
    getPhoneNumbers();
  }, []);

  if (loading) {
    return <h1>Идет загрузка...</h1>;
  }
  if (error) {
    return <h1>{error}</h1>;
  }
  return (
    <div>
      <Input />
      {phoneNumbers.map((number) => (
        <div key={number.id}>{number.phoneNumber}</div>
      ))}
    </div>
  );
};

export default withLayout(Start);
