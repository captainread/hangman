export function HangmanWord() {
  const word = "test";
  const guessedLetters = ["t"];

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
      {word.split("").map((letter, i) => (
        <span style={{ borderBottom: "0.1em solid black" }} key={i}>
          <span style={{ visibility: guessedLetters.includes(letter) ? "visible" : "hidden" }}>{letter}</span>
        </span>
      ))}
    </div>
  );
}
