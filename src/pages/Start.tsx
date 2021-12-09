import React, { useEffect } from "react";
import { withLayout } from "../layout/Layout";

import { Typography } from "@mui/material";
import { useTypedSelector, useActions } from "../hooks";

const Start = () => {
  const { start } = useTypedSelector((state) => state.startStore);
  const { setStart } = useActions();

  console.log(start);

  useEffect(() => {
    setStart("hello");
  }, []);

  return (
    <>
      <h1>Start React KIT</h1>
      <div>{start} from Redux</div>
      <Typography variant="h1" component="div">
        Start page with Mui
      </Typography>
    </>
  );
};

export default withLayout(Start);
