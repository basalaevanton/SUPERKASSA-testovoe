import React from "react";
import { Route, Routes } from "react-router-dom";
import { useClearBase } from "./hooks";

import PhoneNumbers from "./pages/PhoneNumbers";

const App = function (): JSX.Element {
  const clearBase = useClearBase();

  return (
    <>
      <Routes>
        <Route path="/" element={<PhoneNumbers />} />
      </Routes>
    </>
  );
};

export default App;
