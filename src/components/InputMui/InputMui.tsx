import React, { useState } from "react";

import { Button } from "..";
import { Input, MenuItem, OutlinedInput, Paper, Select } from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import { useActions, useTypedSelector } from "../../hooks";
import { configSelectCountrys1 } from "../../helpers/config";

const defaultValues = {
  countryCode: 7,
  phoneNumber: "",
};

export const InputMui = (): JSX.Element => {
  const [valid, setValid] = useState<boolean>(false);
  const { phoneNumber } = useTypedSelector(
    (state) => state.PostPhoneNumbersReducer
  );
  const { setNumber } = useActions();

  const { handleSubmit, control, reset } = useForm({ defaultValues });

  const onSubmit = (data: any) => {
    if (data.phoneNumber.length > 3) {
      setValid(true);
    }

    setNumber({
      country: "12",
      countryCode: data.countryCode,
      phoneNumber: data.countryCode + data.phoneNumber,
    });
  };

  return (
    <div>
      Mui components
      <form onChange={handleSubmit(onSubmit)}>
        <Paper
          sx={{
            p: "10px 10px",
            display: "flex",
            alignItems: "center",
            width: 500,
          }}
        >
          <section>
            <Controller
              render={({ field }) => (
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="Age"
                  {...field}
                >
                  {configSelectCountrys1.map((country) => (
                    <MenuItem key={country.index} value={country.countryCode}>
                      {country.country} +{country.countryCode}
                    </MenuItem>
                  ))}
                </Select>
              )}
              name="countryCode"
              control={control}
            />
          </section>
          <section>
            <Controller
              render={({ field }) => (
                <OutlinedInput
                  id="outlined-basic"
                  label="Phone"
                  type="number"
                  inputProps={{
                    inputmode: "numeric",
                    pattern: "^+?[0-9]{3}-?[0-9](-[0-9]+)+$",
                  }}
                  {...field}
                />
              )}
              name="phoneNumber"
              control={control}
            />
          </section>

          <Button valid={valid} onClick={() => reset()} />
        </Paper>
      </form>
    </div>
  );
};
