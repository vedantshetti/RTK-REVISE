// src/components/Counter.jsx
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { 
  increment, 
  decrement, 
  incrementByAmount, 
  reset,
  selectCount 
} from '../redux/counterSlice';

function Counter() {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState('2');

  return (
    <div className="counter-container">
      <h2>Redux Toolkit Counter</h2>
      
      <div className="counter-controls">
        <button 
          onClick={() => dispatch(decrement())}
          className="counter-button"
        >
          -
        </button>
        <span className="counter-value">{count}</span>
        <button 
          onClick={() => dispatch(increment())}
          className="counter-button"
        >
          +
        </button>
      </div>
      
      <div className="amount-controls">
        <input
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
          type="number"
          className="amount-input"
        />
        <button
          onClick={() => dispatch(incrementByAmount(Number(incrementAmount) || 0))}
          className="action-button"
        >
          Add Amount
        </button>
        <button 
          onClick={() => dispatch(reset())}
          className="action-button reset"
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default Counter;
