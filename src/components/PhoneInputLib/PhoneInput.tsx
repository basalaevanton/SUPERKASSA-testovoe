import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/material.css";
import { Button } from "..";
import { configSelectCountrys } from "../../helpers/config";
import { useActions, useTypedSelector } from "../../hooks";

export const PhoneInputLib = (): JSX.Element => {
  const [valid, setValid] = useState<boolean>(false);
  const { phoneNumber } = useTypedSelector(
    (state) => state.PostPhoneNumbersReducer
  );
  const { setNumber } = useActions();

  const changeValue = (value: string, country: any) => {
    console.log(value);

    setNumber({
      phoneNumber: value,
      country: country.name,
      countryCode: country.dialCode,
    });
  };

  const isValid = (value: string, country: any) => {
    if (value.length - country.dialCode.length <= 0) {
      setValid(false);
      return true;
    } else if (value.length - country.dialCode.length <= 3) {
      setValid(false);
      return "Короткий номер";
    } else {
      setValid(true);
      return true;
    }
  };

  return (
    <div>
      React-Phone-Input-2
      <form style={{ display: "flex", marginTop: "15px" }}>
        <PhoneInput
          country={phoneNumber.country}
          onlyCountries={configSelectCountrys}
          value={phoneNumber.phoneNumber}
          onChange={(value, country) => changeValue(value, country)}
          isValid={(value, country) => isValid(value, country)}
        />
        <Button valid={valid} />
      </form>
    </div>
  );
};
