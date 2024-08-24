const Controls = ({ onDecrement, onIncrement }) => (
  <>
    <button type="button" onClick={onIncrement}>
      Increment by 1
    </button>
    <button type="button" onClick={onDecrement}>
      Decrement by 1
    </button>
  </>
);

export default Controls;
