import React, { useMemo, useState } from "react";

export default function ExpensiveComponent() {
  const [count, setCount] = useState(0);
  const [toggle, setToggle] = useState(false);

  const expensiveValue = useMemo(() => {
    console.log("💡Expensive calculation...");
    let total = 0;
    for (let i = 0; i < 100000000; i++) {
      total += 1;
    }
    return total;
  }, [count]);

  return (
    <div className="p-4 m-4 bg-gray-100">
      <p>Count: {count}</p>
      <button
        className="p-4 m-4 bg-blue-200"
        onClick={() => setCount((c) => c + 1)}
      >
        +1
      </button>
      <button
        className="p-4 m-4 bg-blue-200"
        onClick={() => setToggle((t) => !t)}
      >
        Toggle
      </button>
      <p>Expensive Value: {expensiveValue}</p>
    </div>
  );
}
