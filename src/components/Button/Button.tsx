import React from "react";
import { ButtonProps } from "./Button.props";

import { useActions, useTypedSelector } from "../../hooks";

import LoadingButton from "@mui/lab/LoadingButton";
import SendIcon from "@mui/icons-material/Send";

export const Button = ({ valid, ...props }: ButtonProps): JSX.Element => {
  const { phoneNumber } = useTypedSelector(
    (state) => state.PostPhoneNumbersReducer
  );
  const { loading } = useTypedSelector(
    (state) => state.PostPhoneNumbersReducer
  );
  const { postPhoneNumber } = useActions();

  if (valid)
    return (
      <>
        <LoadingButton
          onClick={() => postPhoneNumber(phoneNumber)}
          endIcon={<SendIcon />}
          loading={loading}
          loadingPosition="end"
          variant="contained"
          type="submit"
        >
          Send
        </LoadingButton>
      </>
    );
  else {
    return (
      <>
        <LoadingButton
          onClick={() => postPhoneNumber(phoneNumber)}
          endIcon={<SendIcon />}
          loading={loading}
          loadingPosition="end"
          variant="contained"
          disabled
        >
          Send
        </LoadingButton>
      </>
    );
  }
};
