import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import GreetingPage from "./pages/GreetingPage";
import ProdcutListPage from "./pages/ProductListPage";
import ApplyScrapPage from "./pages/ApplyScrapPage";
import QuotationPage from "./pages/QuotationPage";
import ScrapCompletePage from "./pages/ScrapCompletePage";

function App() {
  const [stage, setStage] = useState(1);

  const prevStage = () => {
    setStage(stage - 1);
  };

  const nextStage = () => {
    setStage(stage + 1);
  };

  const [count, setCount] = useState(0);

  const countUp = () => {
    setCount(count + 1);
  };

  const countDown = () => {
    setCount(count - 1);
  };

  const countReset = () => {
    setCount(0);
  };

  const [tab, setTab] = useState<"home" | "about" | "contact">("home");

  const [user, setUser] = useState({ name: "", age: 0 });

  const setUserName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, name: e.target.value });
  };
  const setUserAge = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, age: +e.target.value });
  };

  return (
    <div>
      <button className="p-4 m-4 bg-blue-200 rounded" onClick={prevStage}>
        이전
      </button>
      <span>{stage}</span>
      <button className="p-4 m-4 bg-blue-200 rounded" onClick={nextStage}>
        다음
      </button>
      <br />
      <button className="p-4 m-4 bg-blue-200 rounded" onClick={countUp}>
        카운트 증가{count}
      </button>
      <button className="p-4 m-4 bg-blue-200 rounded" onClick={countReset}>
        카운트 초기화
      </button>
      <button className="p-4 m-4 bg-blue-200 rounded" onClick={countDown}>
        카운트 감소{count}
      </button>
      <br />
      <button
        className="p-4 m-4 bg-green-200 rounded-full"
        onClick={() => setTab("home")}
      >
        홈
      </button>
      <button
        className="p-4 m-4 bg-yellow-200 rounded-full"
        onClick={() => setTab("about")}
      >
        소개
      </button>
      <button
        className="p-4 m-4 bg-red-200 rounded-full"
        onClick={() => setTab("contact")}
      >
        연락처
      </button>
      <div>현재 탭: {tab} </div>

      <div>
        <input
          className="p-4 m-4 border"
          placeholder="이름"
          onChange={setUserName}
        />
        <input
          className="p-4 m-4 border"
          placeholder="나이"
          onChange={setUserAge}
        />
        <p>
          {user.name} ({user.age}세){" "}
        </p>
      </div>

      {stage === 1 && <GreetingPage />}
      {stage === 2 && <ApplyScrapPage />}
      {stage === 3 && <QuotationPage />}
      {stage === 4 && <ScrapCompletePage />}
    </div>
  );
}

export default App;
