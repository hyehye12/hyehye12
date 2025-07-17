import { ThemeContext } from "../contexts/ThemeContext";
import { useContext } from "react";

export default function Content() {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("ThemeConntext not found");

  const { theme } = context;
  return (
    <main
      style={{
        backgroundColor: theme === "light" ? "#f5f5f5" : "#222",
        color: theme === "light" ? "#333" : "#fff",
        padding: "1rem",
      }}
    >
      <p>현재 테마: {theme}</p>
    </main>
  );
}
