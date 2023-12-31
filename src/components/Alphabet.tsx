const keys = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

import styles from "./keyboard.module.css";

type AlphabetProps = {
  activeLetters: string[];
  inactiveLetters: string[];
  addGuessedLetter: (letter: string) => void;
};

export function Alphabet({ activeLetters, inactiveLetters, addGuessedLetter }: AlphabetProps) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(75px, 1fr))",
        gap: ".5rem",
      }}>
      {keys.map((key) => {
        const isActive = activeLetters.includes(key);
        const isInactive = inactiveLetters.includes(key);
        return (
          <button
            onClick={() => addGuessedLetter(key)}
            className={`
              ${styles.btn} 
              ${isActive ? styles.active : ""} 
              ${isInactive ? styles.inactive : ""}
              `}
            disabled={isInactive || isActive}
            key={key}>
            {key}
          </button>
        );
      })}
    </div>
  );
}
