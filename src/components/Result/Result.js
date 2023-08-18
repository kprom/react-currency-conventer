import styles from "./Result.module.css";

const Result = ({ convertedResult }) => {
  return (
    <footer className={styles.footer}>
      <p>Converted amount:</p>
      <div className={styles.result}>{convertedResult}</div>
    </footer>
  );
};

export default Result;
