import { useState } from "react";

function App() {
  const [matrix, _] = useState([...Array(16).keys()]);
  const [redArray, setRedArray] = useState([-1, -1]);

  const handleClick = (n) => {
    setRedArray((prev) => [prev[1], n]);
  };
  return (
    <div className="App">
      <div className="board">
        {matrix.map((n) => (
          <div
            className={`box ${redArray.includes(n) ? "red" : ""}`}
            onClick={() => handleClick(n)}
            keys={n}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default App;
