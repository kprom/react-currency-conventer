const Result = ({ error, convertedResult }) => {
  return (
    <footer>
      <p className="paragraph">Converted amount:</p>
      <div className="result">
        {error ? <span className="error">{error}</span> : convertedResult}
      </div>
    </footer>
  );
};

export default Result;
