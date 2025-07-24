import React, { useState, useCallback } from "react";

const Button = React.memo(
  ({ onClick, label }: { onClick: () => void; label: string }) => {
    console.log(`Rendering: ${label}`);
    return <button onClick={onClick}>{label}</button>;
  }
);

export default function Parent() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
      <Button onClick={handleClick} label="Increment"></Button>
    </div>
  );
}
