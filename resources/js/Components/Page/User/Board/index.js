import React from "react";
import ContextProvider from "./ContextProvider";
import Container from "./Container";

const Board = ({ data }) => {
  console.log(data);
  return (
    <ContextProvider>
      <Container data={data} />
    </ContextProvider>
  );
};

export default Board;
