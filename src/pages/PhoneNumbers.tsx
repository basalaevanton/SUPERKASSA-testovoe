import React, { useEffect } from "react";
import { withLayout } from "../layout/Layout";

import { useTypedSelector, useActions } from "../hooks";

import { InputMui, PhoneInputLib } from "../components";

const Start = () => {
  const { phoneNumbers, loading, error } = useTypedSelector(
    (state) => state.PhoneNumbersReducer
  );
  const { getPhoneNumbers } = useActions();

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
      <div>{/* <InputMui /> */}</div>
      <div>
        <PhoneInputLib />
      </div>

      {phoneNumbers
        .sort((a, b) => a.id - b.id)
        .map((number, index) => (
          <div key={number.id} style={{ paddingTop: "15px" }}>
            {index + 1}) {number.country} +{number.phoneNumber}
          </div>
        ))}
    </div>
  );
};

export default withLayout(Start);
