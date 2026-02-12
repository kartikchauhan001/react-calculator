import Display from "./components/Display";
import ButtonsContainer from "./components/ButtonsContainer";
import styles from "./App.module.css";
import { useState, useEffect } from "react";

function App() {
  const [calVal, setCalVal] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  const operators = ["+", "-", "*", "/"];

  const calculate = (expression) => {
    try {
      const tokens = expression.match(/(\d+\.?\d*|\+|\-|\*|\/)/g);

      if (!tokens) return "Error";

      let result = parseFloat(tokens[0]);

      for (let i = 1; i < tokens.length; i += 2) {
        const operator = tokens[i];
        const nextNumber = parseFloat(tokens[i + 1]);

        if (operator === "+") result += nextNumber;
        if (operator === "-") result -= nextNumber;
        if (operator === "*") result *= nextNumber;
        if (operator === "/") result /= nextNumber;
      }

      return result.toString();
    } catch {
      return "Error";
    }
  };

  const onButtonClick = (buttonText) => {
    if (buttonText === "C") {
      setCalVal("");
      return;
    }

    if (buttonText === "⌫") {
      setCalVal((prev) => prev.slice(0, -1));
      return;
    }

    if (buttonText === "=") {
      setCalVal(calculate(calVal));
      return;
    }

    const lastChar = calVal.slice(-1);

    if (operators.includes(buttonText) && operators.includes(lastChar)) {
      return;
    }

    if (buttonText === ".") {
      const parts = calVal.split(/[\+\-\*\/]/);
      const lastNumber = parts[parts.length - 1];
      if (lastNumber.includes(".")) return;
    }

    setCalVal((prev) => prev + buttonText);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      const allowedKeys = [
        "0",
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "+",
        "-",
        "*",
        "/",
        "Enter",
        "Backspace",
        ".",
      ];

      if (!allowedKeys.includes(e.key)) return;

      if (e.key === "Enter") {
        setCalVal((prev) => calculate(prev));
      } else if (e.key === "Backspace") {
        setCalVal((prev) => prev.slice(0, -1));
      } else {
        onButtonClick(e.key);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [calVal]);

  return (
    <div className={`${styles.calculator} ${darkMode ? styles.dark : ""}`}>
      <button className={styles.toggle} onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? "☀ Light" : "🌙 Dark"}
      </button>

      <Display displayValue={calVal} />
      <ButtonsContainer onButtonClick={onButtonClick} />
    </div>
  );
}

export default App;
