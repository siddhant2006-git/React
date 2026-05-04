import { useState } from "react";
import "./App.css";
import useCryptocurrency from "./hooks/currency_convert";

function App() {
  const [currency, setCurrency] = useState("BTC");

  const data = useCryptocurrency(currency);

  return (
    <div>
      <h1>Crypto Dashboard</h1>

      <input
        type="text"
        value={currency}
        onChange={(e) => setCurrency(e.target.value)}
        placeholder="Enter crypto e.g. BTC"
      />

      <h2>{currency}</h2>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export default App;