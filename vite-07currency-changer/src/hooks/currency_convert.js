import { useEffect, useState } from "react";

function useCryptocurrency(currency) {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(
      `https://fast-price-exchange-rates.p.rapidapi.com/api/v1/convert-rates/crypto/from?detailed=false&currency=BTC`,
      {
        method: "GET",
        headers: {
          "x-rapidapi-key":
            "3b9ba73c5amshb36782d4fb8f2aep19f9d3jsnf7be6ebec27d",
          "x-rapidapi-host": "fast-price-exchange-rates.p.rapidapi.com",
          "Content-Type": "application/json",
        },
      },
    )
      .then((res) => res.json())
      .then((res) => {
        setData(res[currency]);
      })
      .catch((error) => {
        console.log("Error:", error);
      });
  }, [currency]);

  return data;
}

export default useCryptocurrency;
