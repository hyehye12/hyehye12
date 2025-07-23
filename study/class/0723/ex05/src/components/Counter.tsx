// import React from "react";
// import { useAppSelector } from "../hooks/useAppSelector";
// import { useAppDispatch } from "../hooks/useAppDispatch";
// import {
//   increment,
//   decrement,
//   incrementByAmount,
//   reset,
// } from "../store/slices/counterSlice.ts";

// const Counter: React.FC = () => {
//   const count = useAppSelector((state) => state.counter.value);
//   const dispatch = useAppDispatch();

//   return (
//     <div>
//       <h2>Counter: {count}</h2>
//       <button onClick={() => dispatch(increment())}>+1</button>
//       <button onClick={() => dispatch(decrement())}>-1</button>
//       <button onClick={() => dispatch(incrementByAmount(5))}>+5</button>
//       <button onClick={() => dispatch(reset())}>Reset</button>
//     </div>
//   );
// };

// export default Counter;

// src/components/Counter.tsx
import React from "react";
import { useCounterStore } from "../store/useCounterStore";

const Counter: React.FC = () => {
  const value = useCounterStore((state) => state.value);
  const increment = useCounterStore((state) => state.increment);
  const decrement = useCounterStore((state) => state.decrement);
  const incrementByAmount = useCounterStore((state) => state.incrementByAmount);
  const reset = useCounterStore((state) => state.reset);

  return (
    <div>
      <h2>Counter: {value}</h2>
      <button onClick={increment}>+1</button>
      <button onClick={decrement}>-1</button>
      <button onClick={() => incrementByAmount(5)}>+5</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default Counter;
