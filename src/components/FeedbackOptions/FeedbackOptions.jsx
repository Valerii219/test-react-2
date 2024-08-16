const FeedbackOptions = ({options, onLeaveFeedback}) => {
  return (
    <>
      <button onClick={onLeaveFeedback.good}>{options.good}</button>
      <button onClick={onLeaveFeedback.neutral}>{options.neutral}</button>
      <button onClick={onLeaveFeedback.bad}>{options.bad}</button>
    </>
  );
};

export default FeedbackOptions;
