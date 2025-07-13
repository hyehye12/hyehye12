import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Tailwindcss from "./pages/Tailwindcss";
import TextsTest from "./pages/TextsTest";
import Color from "./pages/Color";

export default function App() {
  return (
    <div>
      <Tailwindcss />
      <Color />
      <TextsTest />
    </div>
  );
}
