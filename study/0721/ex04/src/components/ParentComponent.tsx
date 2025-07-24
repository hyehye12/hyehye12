import React, { useRef } from "react";
import CutomInput from "./CustomInput";

export interface CustomInputHandle {
  focus: () => void;
  clear: () => void;
}

export default function ParentComponent() {
  const inputRef = useRef<CustomInputHandle>(null);

  return (
    <div>
      <CutomInput ref={inputRef} />
      <button onClick={() => inputRef.current?.focus()}>포커스</button>
      <button onClick={() => inputRef.current?.clear()}>초기화</button>
    </div>
  );
}
