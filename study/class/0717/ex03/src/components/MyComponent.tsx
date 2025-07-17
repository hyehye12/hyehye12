import { useRef } from "react";

export default function MyComponent() {
  const inputRef = useRef<HTMLInputElement>(null);
  const focusInput = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div className="p-4 m-4 border border-red-300">
      <input ref={inputRef} type="text" className="border border-blue-200" />
      <button onClick={focusInput} className="m-4 bg-blue-300">
        포커스 주기
      </button>
    </div>
  );
}
