import { useState } from "react";
import "./App.css";
import { generateProducts } from "./useDeferredValue-hook/generateProducts";
import Search from "./useDeferredValue-hook/Search";
import Form from "./useId-hook/bad-way/Form";
import NewForm from "./useId-hook/correct-way/NewForm";
import StyleComponent from "./useInsertionEffect-hook/StyleComponent";
import Subscriber from "./useSyncExternalStore-hook/Subscriber";
import WidthCalc from "./useSyncExternalStore-hook/WidthCalc";
import List from "./useTransition-hook/bad-way/List";
import NewList from "./useTransition-hook/correct-way/NewList";

function App() {
  return (
    <div className="App">
      {/* ----Uncomment each one to see the example-------- */}
      {/* useId Example */}
      {/* <h1>Form1</h1>
      <Form />
      <hr />
      <h1>Form2</h1>
      <Form />
      <h1>Form1</h1>
      <NewForm />
      <hr />
      <h1>Form2</h1>
      <NewForm /> */}
      {/* /////////////////////////// */}

      {/* useTransition Example */}
      {/* <List /> */}
      {/* <NewList /> */}
      {/* /////////////////////////// */}

      {/* useDeferredValue Example */}
      {/* <Search list={generateProducts()} /> */}
      {/* /////////////////////////// */}

      {/* useSyncExternalStore-hook Example */}
      {/* <WidthCalc /> */}
      {/* <Subscriber /> */}
      {/* /////////////////////////// */}

      {/* useInsertionEffect-hook Example */}

      {/* /////////////////////////// */}
      <StyleComponent />
    </div>
  );
}

export default App;
