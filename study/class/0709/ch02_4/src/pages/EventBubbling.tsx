import { SyntheticEvent } from "react";

export default function EventBubbling() {
  const onDivClick = (e: SyntheticEvent) => {
    const { isTrusted, target, bubbles, currentTarget } = e;
    console.log(
      "click event bubbles on <div>",
      isTrusted,
      target,
      bubbles,
      currentTarget
    );
    e.stopPropagation();
  };

  const onButtonClick = (e: SyntheticEvent) => {
    const { isTrusted, target, bubbles } = e;
    console.log("click event starts at <button>", isTrusted, target, bubbles);
    e.stopPropagation();
  };

  return (
    <div onClick={onDivClick}>
      <p>EventBubbling</p>
      <button onClick={onButtonClick}>Click ME</button>
    </div>
  );
}
