import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { useStore } from "./store";
import { Provider as ReduxProvider } from "react-redux";
import UseReducerClock from "./pages/UseReducerClock";
import ReduxClock from "./pages/ReduxClock";

export default function App() {
  const store = useStore();
  return (
    <ReduxProvider store={store}>
      <main className="p-8">
        <UseReducerClock />
        <ReduxClock />
      </main>
    </ReduxProvider>
  );
}
