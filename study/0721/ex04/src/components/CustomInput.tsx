import React, { useRef, useImperativeHandle, forwardRef } from "react";

const CutomInput = forwardRef((props, ref) => {
  const inputRef = useRef<HTMLInputElement>(null);

  useImperativeHandle(ref, () => ({
    focus: () => {
      if (inputRef.current) {
        inputRef.current.focus();
      }
    },

    clear: () => {
      if (inputRef.current) {
        inputRef.current.value = "";
      }
    },
  }));
  return <input ref={inputRef} />;
});

export default CutomInput;
