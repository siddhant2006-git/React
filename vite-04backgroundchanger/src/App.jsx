import { useState } from "react";

function App() {
  const [color, setColor] = useState("olive");

  return (
    <div
      className="flex items-center justify-center h-screen"
      style={{
        backgroundColor: color,
        minHeight: "100vh",
        width: "100%",
       }}
    >
      <div
        className="flex gap-4 mt-4 justify-center bottom-12 inset-x-0
      px-2 "
      >
        test
      </div>

      <button
        className="outline-none px-2"
        onClick={() => setColor("red")}
        style={{ background: "red" }}
      >
        red
      </button>

      <button
        className="outline-none px-2"
        onClick={() => setColor("green")}
        style={{ background: "green" }}
      >
        green
      </button>

      <button
        className="outline-none px-2"
        onClick={() => setColor("blue")}
        style={{ background: "blue" }}
      >
        blue
      </button>

      <button
        className="outline-none px-2"
        onClick={() => setColor("yellow")}
        style={{ background: "yellow" }}
      >
        yellow
      </button>
    </div>
  );
}

export default App;
