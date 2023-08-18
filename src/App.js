import "./App.css";
import { useState } from "react";
import Header from "./components/Header/Header";
import Result from "./components/Result/Result";
import Form from "./components/Form/Form";

function App() {
  const [amountInput, setAmountInput] = useState(0);
  const [selectedCurrency, setSelectedCurrency] = useState("EUR");
  const [convertedResult, setConvertedResult] = useState("");

  const handleAmountInputChange = (value) => {
    setAmountInput(value);
  };

  const handleSelectCurrencyChange = (value) => {
    setSelectedCurrency(value);
  };

  const handleConvert = () => {
    if (amountInput <= 0) {
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
          const convertedAmount = amountInput * rate;
          setConvertedResult(convertedAmount.toFixed(2) + " PLN");
        } else {
          setConvertedResult(
            "Error occurred. Unable to retrieve exchange rate data"
          );
        }
      })
      .catch((error) => {
        console.error(error);
        setConvertedResult("Error occurred downloading data");
      });
  };

  return (
    <div className="container">
      <Header />
      <Form
        amountInput={amountInput}
        selectedCurrency={selectedCurrency}
        handleConvert={handleConvert}
        handleSelectCurrencyChange={handleSelectCurrencyChange}
        handleAmountInputChange={handleAmountInputChange}
      />
      <Result convertedResult={convertedResult} />
    </div>
  );
}

export default App;
