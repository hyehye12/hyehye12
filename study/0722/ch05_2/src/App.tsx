import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { useStore } from "./store";
import { Provider as ReduxProvider } from "react-redux";
import ClockTest from "./pages/ClockTest";
import CounterTest from "./pages/CounterTest";
import RemoteUserTest from "./pages/RemoteUser";

export default function App() {
  const store = useStore();
  return (
    <ReduxProvider store={store}>
      <div>
        <ClockTest />
        <CounterTest />
      </div>
    </ReduxProvider>
  );
}
