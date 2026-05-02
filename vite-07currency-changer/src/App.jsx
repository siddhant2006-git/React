import './App.css'

function App() {
  async function currency() {
    const url =
      "https://fast-price-exchange-rates.p.rapidapi.com/api/v1/convert-rates/crypto/from?detailed=false&currency=BTC";

    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": "3b9ba73c5amshb36782d4fb8f2aep19f9d3jsnf7be6ebec27d",
        "x-rapidapi-host": "fast-price-exchange-rates.p.rapidapi.com",
        "Content-Type": "application/json",
      },
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div>
      <h1 className="text-3xl bg-yellow-400 text-black">
        Currency Changer
      </h1>

      <button onClick={currency}>
        Convert Currency
      </button>
    </div>
  );
}

export default App;