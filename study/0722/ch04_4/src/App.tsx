import React from "react";
import logo from "./logo.svg";
import "./App.css";
import ButtonTest from "./pages/ButtonTest";
import InputTest from "./pages/InputTest";
import ModalTest from "./pages/ModalTest";

export default function App() {
  return (
    <main>
      {/* <DirectionTest />
      <WrapTest />
      <JustifyCenterTest /> */}
      <ButtonTest />
      <InputTest />
      <ModalTest />
    </main>
  );
}
