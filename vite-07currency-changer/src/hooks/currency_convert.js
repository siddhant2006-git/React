import { useEffect, useState } from "react";

function useCryptocurrency(currency = "USD") {
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchCurrencyData = async () => {
      const url = `https://currency-converter-pro1.p.rapidapi.com/latest-rates?base=${currency}`;

      const options = {
        method: "GET",
        headers: {
          "x-rapidapi-key":
            "3b9ba73c5amshb36782d4fb8f2aep19f9d3jsnf7be6ebec27d",
          "x-rapidapi-host": "currency-converter-pro1.p.rapidapi.com",
          "Content-Type": "application/json",
        },
      };

      try {
        const response = await fetch(url, options);

        if (!response.ok) {
          throw new Error("Failed to fetch currency data");
        }

        const result = await response.json();
        setData(result.result || {});
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchCurrencyData();
  }, [currency]);

  return data;
}

export default useCryptocurrency;
