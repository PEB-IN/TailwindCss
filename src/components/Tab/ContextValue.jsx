import React from "react";
import TestContext from "../TestingContext/TestContext";
import { useContext } from "react";

const ContextValue = () => {
  const { name, setName } = useContext(TestContext);
  return (
    <>
      <div>
        <p>Our Student Name is :{name} </p>
      </div>
      <button
        className="border-2 p-3 mt-4 bg-blue-500 text-white"
        onClick={() => setName(`Jack`)}
      >
        Click ME
      </button>
    </>
  );
};

export default ContextValue;
