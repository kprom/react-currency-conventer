const Values = ({
  amount,
  amountInput,
  selectedCurrency,
  setSelectedCurrency,
  handleConvert,
}) => {
  return (
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
  );
};

export default Values;
