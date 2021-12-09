import React from "react";
import { Route, Routes } from "react-router-dom";

import PhoneNumbers from "./pages/PhoneNumbers";

const App = function (): JSX.Element {
  return (
    <>
      <Routes>
        <Route path="/" element={<PhoneNumbers />} />
      </Routes>
    </>
  );
};

export default App;
