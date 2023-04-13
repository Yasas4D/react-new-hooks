import { Route, BrowserRouter, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Home";
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
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="badForm" element={<BadForm />} />
          <Route path="goodFormWithUseId" element={<GoodForm />} />
          <Route path="badTransition" element={<List />} />
          <Route path="goodTransition" element={<NewList />} />
          <Route
            path="useDeferredValue"
            element={<Search list={generateProducts()} />}
          />
          <Route path="useSyncExternalStore1" element={<Subscriber />} />
          <Route path="useSyncExternalStore2" element={<WidthCalc />} />
          <Route path="useInsertionEffect" element={<StyleComponent />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

function BadForm() {
  return (
    <div>
      <h1>Form1</h1>
      <Form />
      <hr />
      <h1>Form2</h1>
      <Form />
    </div>
  );
}

function GoodForm() {
  return (
    <div>
      <h1>Form1</h1>
      <NewForm />
      <hr />
      <h1>Form2</h1>
      <NewForm />
    </div>
  );
}

export default App;
