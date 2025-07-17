import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

export function Header() {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("ThemeContext not found");

  const { theme, toggleTheme } = context;

  return (
    <header
      style={{
        backgroundColor: theme === "light" ? "#fff" : "#333",
        color: theme === "light" ? "#333" : "#fff",
        padding: "1rem",
      }}
    >
      <h1>내 웹사이트</h1>
      <button onClick={toggleTheme}>
        {theme === "light" ? "다크 모드" : "라이트 모드"}
      </button>
    </header>
  );
}
