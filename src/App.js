import "./App.css";
import { useState } from "react";
import logo from "./images/panda.jpg";

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
    <>
      <div className="container">
        <header className="title">
          <img className="logo" src={logo} alt="app-logo" />
          <h1 className="heading">CURRENCY CONVERTER</h1>
        </header>
        <main>
          <div className="values">
            <input
              type="number"
              min="0"
              onChange={(e) => amountInput(parseFloat(e.target.value))}
            />
            <select
              value={selectedCurrency}
              onChange={(e) => setSelectedCurrency(e.target.value)}
            >
              <option value="EUR">EUR</option>
              <option value="USD">USD</option>
              <option value="CHF">CHF</option>
            </select>
          </div>
          <div className="buttonPosition">
            <button className="convertButton" onClick={handleConvert}>
              CONVERT
            </button>
          </div>
        </main>
        <footer>
          <p className="paragraph">Converted amount:</p>
          <div className="result">
            {error ? <span className="error">{error}</span> : convertedResult}
          </div>
        </footer>
      </div>
    </>
  );
}

export default App;
