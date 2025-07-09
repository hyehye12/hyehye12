import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Bootstrap from "./pages/Bootstrap";
import Icon from "./pages/Icon";
import Style from "./pages/Style";
import UsingIcon from "./pages/UsingIcon";
import UsingIconWithCSSSClass from "./pages/UsingIconWithCSSClass";

export default function App() {
  return (
    <div>
      <UsingIconWithCSSSClass />
      <UsingIcon />
      <Style />
      <Icon />
      <Bootstrap />
    </div>
  );
}
