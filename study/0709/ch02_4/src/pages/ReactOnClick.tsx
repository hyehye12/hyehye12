import { SyntheticEvent } from "react";

export default function ReactOnClick() {
  const onClick = (e: SyntheticEvent) => {
    const { isTrusted, target, bubbles } = e;
    console.log("mouse click occurs in <button>", isTrusted, target, bubbles);
  };
  return (
    <div>
      <p>ReactOnClick</p>
      <button onClick={onClick}>Click Me</button>
    </div>
  );
}
