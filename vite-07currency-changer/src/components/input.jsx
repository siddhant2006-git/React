import { useState } from "react";

function InputBox({ onAddCrypto }) {
  const [cryptoName, setCryptoName] = useState("");
  const [cryptoPrice, setCryptoPrice] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (cryptoName === "" || cryptoPrice === "") {
      alert("Please enter crypto name and price");
      return;
    }

    const newCrypto = {
      id: Date.now(),
      name: cryptoName,
      price: cryptoPrice,
    };

    onAddCrypto(newCrypto);

    setCryptoName("");
    setCryptoPrice("");
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter crypto name e.g. Bitcoin"
        value={cryptoName}
        onChange={(e) => setCryptoName(e.target.value)}
      />

      <input
        type="number"
        placeholder="Enter price e.g. 65000"
        value={cryptoPrice}
        onChange={(e) => setCryptoPrice(e.target.value)}
      />

      <button type="submit">Add Crypto</button>
    </form>
  );
}

export default InputBox;