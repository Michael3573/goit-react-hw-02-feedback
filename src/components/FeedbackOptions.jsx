const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <div className="sections">
    {options.map(option => (
      <button
        className="btn"
        key={option}
        onClick={() => onLeaveFeedback(option)}
      >
        {option}
      </button>
    ))}
  </div>
);

export default FeedbackOptions;
