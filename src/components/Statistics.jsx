const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <div className="statistic">
    <p>Good: {good}</p>
    <p>Neutral: {neutral}</p>
    <p>Bad: {bad}</p>
    <p>Total feedback count: {total}</p>
    <p>Percentage of positive feedback: {positivePercentage}%</p>
  </div>
);

export default Statistics;
