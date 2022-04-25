import React from "react";
import DisplayNote from "./DisplayNote";
import Note from "./Note";

const Main = () => {
  return (
    <>
      <div className="flex justify-center overflow-hidden">
        <Note />
      </div>
      <DisplayNote />
    </>
  );
};

export default Main;
