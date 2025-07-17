import { ThemeContext } from "../contexts/ThemeContext";
import { useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContext";

export default function Content() {
  const themecontext = useContext(ThemeContext);
  if (!themecontext) throw new Error("ThemeConntext not found");

  const { theme } = themecontext;

  const languagecontext = useContext(LanguageContext);
  if (!languagecontext) throw new Error("languageContext not found");

  const { language } = languagecontext;

  return (
    <main
      style={{
        backgroundColor: theme === "light" ? "#f5f5f5" : "#222",
        color: theme === "light" ? "#333" : "#fff",
        padding: "1rem",
      }}
    >
      <p>현재 테마: {theme}</p>
      <p>현재 언어: {language}</p>
    </main>
  );
}
