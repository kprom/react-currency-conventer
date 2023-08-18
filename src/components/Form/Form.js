import styles from "./Form.module.css";

const Form = ({
  amountInput,
  selectedCurrency,
  handleConvert,
  handleAmountInputChange,
  handleSelectCurrencyChange,
}) => {
  return (
    <main className={styles.main}>
      <form className={styles.values}>
        <input
          type="number"
          min="0"
          value={amountInput}
          onChange={(e) => handleAmountInputChange(parseFloat(e.target.value))}
        />
        <select
          value={selectedCurrency}
          onChange={(e) => handleSelectCurrencyChange(e.target.value)}
        >
          <option value="EUR">EUR</option>
          <option value="USD">USD</option>
          <option value="CHF">CHF</option>
        </select>
      </form>
      <div className={styles.buttonPosition}>
        <button className={styles.convertButton} onClick={handleConvert}>
          CONVERT
        </button>
      </div>
    </main>
  );
};

export default Form;
