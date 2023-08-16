import "./App.css";
import { useState } from "react";
import Header from "./components/Header";
import Result from "./components/Result";
import Values from "./components/Values";

function App() {
  const [amount, amountInput] = useState(0);
  const [selectedCurrency, setSelectedCurrency] = useState("EUR");
  const [convertedResult, setConvertedResult] = useState("");
  const [error, setError] = useState(null);

  const handleConvert = () => {
    if (amount <= 0) {
      setConvertedResult("Invalid amount. Minimum amount is 0.01");
      return;
    }

    fetch(
      `https://api.nbp.pl/api/exchangerates/rates/A/${selectedCurrency}/?format=json`
    )
      .then((response) => response.json())
      .then((data) => {
        const rate = data.rates?.[0]?.mid;

        if (rate) {
          const convertedAmount = amount * rate;
          setConvertedResult(convertedAmount.toFixed(2) + " PLN");
        } else {
          setConvertedResult(
            "Error occurred. Unable to retrieve exchange rate data"
          );
        }
      })
      .catch((error) => {
        console.error(error);
        setError("Error occurred downloading data");
      });
  };

  return (
    <div className="container">
      <Header />
      <Values
        amount={amount}
        amountInput={amountInput}
        selectedCurrency={selectedCurrency}
        setSelectedCurrency={setSelectedCurrency}
        handleConvert={handleConvert}
      />
      <Result error={error} convertedResult={convertedResult} />
    </div>
  );
}

export default App;
