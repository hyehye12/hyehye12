import React from "react";
import logo from "./logo.svg";
import "./App.css";
import DirectionTest from "./pages/DirectionTest";
import WrapTest from "./pages/WrapTest";
import JustifyCenterTest from "./pages/JustifyCenterTest";
import UserContainer from "./pages/UserContainer";
import CardContainer from "./pages/CardContainer";

export default function App() {
  return (
    <main>
      {/* <DirectionTest />
      <WrapTest />
      <JustifyCenterTest /> */}
      <UserContainer />
      <CardContainer />
    </main>
  );
}
