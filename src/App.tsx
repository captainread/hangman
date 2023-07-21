import { Alphabet } from "./components/Alphabet";
import { HangmanImage } from "./components/HangmanImage";
import { HangmanWord } from "./components/HangmanWord";
import { useState } from "react";
import words from "./wordbank.json";

function App() {
  const [wordToGuess, setWordToGuess] = useState(() => {
    return words[Math.floor(Math.random() * words.length)];
  });

  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);

  return (
    <div className="container">
      <div className="result-header">Win/Lose</div>
      <HangmanImage />
      <HangmanWord />
      <div style={{ alignSelf: "stretch" }}>
        <Alphabet />
      </div>
    </div>
  );
}

export default App;
