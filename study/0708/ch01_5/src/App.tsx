import React from "react";
import logo from "./logo.svg";
import "./App.css";
import * as D from "./data";
import { Component } from "react";
import ClassComponent from "./ClassComponet";
import ArrowComponent from "./ArrowComponent";
import OnClick from "./pages/OnClick";

// export default class extends Component {
//   render() {
//     return (
//       <ul>
//         <ClassComponent href="https:/www.google.com" text="go to google" />
//         <ClassComponent href="https:/www.twitter.com" text="go to Twiter" />
//       </ul>
//     );
//   }
// }

export default function App() {
  return (
    <ul>
      <ClassComponent href="https:/www.google.com" text="go to google" />
      <ArrowComponent href="https:/www.twitter.com" text="go to Twiter" />
      <OnClick />
    </ul>
  );
}
