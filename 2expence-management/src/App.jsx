import { useState } from "react";
import MyProductInput from "./myExpenceComponents/ProductInput";
import MyProductDelete from "./myExpenceComponents/ProductDelete";
import MyHeading from "./myExpenceComponents/ProjectHeading";
import ShowMyExpenceTable from "./myExpenceComponents/ShowTableButton";
import MyExpenceTable from "./myExpenceComponents/ExpenceTable";

import Container from "./myExpenceComponents/Container";
import "./App.css";

function App() {
  return (
    <>
      <Container >
        <MyHeading />
      </Container>

      <Container>
        <MyProductInput />

        <MyProductDelete />

        <ShowMyExpenceTable />

        <MyExpenceTable />
      </Container>

    </>
  );
}

export default App;
