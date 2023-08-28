type HangmanWordProps = {
  guessedLetters: string[];
  wordToGuess: string;
  reveal?: boolean;
};

export function HangmanWord({ guessedLetters, wordToGuess, reveal = false }: HangmanWordProps) {
  return (
    <div
      style={{
        display: "flex",
        gap: ".25em",
        fontSize: "6em",
        fontWeight: "bold",
        textTransform: "uppercase",
        fontFamily: "monospace",
      }}>
      {wordToGuess.split("").map((letter, i) => (
        <span style={{ borderBottom: "0.1em solid black" }} key={i}>
          <span
            style={{
              visibility: guessedLetters.includes(letter) || reveal ? "visible" : "hidden",
              color: !guessedLetters.includes(letter) && reveal ? "#ec4498" : "black",
            }}>
            {letter}
          </span>
        </span>
      ))}
    </div>
  );
}
