import React from "react";
import TestContext from "../TestingContext/TestContext";
import { useState } from "react";
import ContextValue from "./ContextValue";

const ContextTab = () => {
  const [name, setName] = useState(``);
  return (
    <TestContext.Provider value={(name, setName)}>
      <ContextValue />
    </TestContext.Provider>
  );
};

export default ContextTab;
