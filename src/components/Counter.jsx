import React from 'react';
import useCounter from './useCounter';

function Counter() {
  const { count, increment, decrement, reset } = useCounter();

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={increment}>+ Add</button>
      <button onClick={decrement}>- Sub</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default Counter;
