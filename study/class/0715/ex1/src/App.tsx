import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Card from "./components/Card";
import Button from "./components/Button";
import CardGrid from "./components/CardGrid";
import Navbar from "./components/Navbar";
import LoginForm from "./components/Loginform";

const CardInfo = {
  imgUrl: "https://www.motoya.co.kr/news/photo/202403/39979_237158_1919.jpg",
  name: "홍길동",
  jobTitle: "Frontend Developer",
  info: "React와 Tailwind를 배우는 중입니다.",
};
export default function App() {
  return (
    <main>
      <Card card={CardInfo} />
      <Button />
      <CardGrid />
      <Navbar />
      <LoginForm />
    </main>
  );
}
