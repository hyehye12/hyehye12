import React, { useId, useState } from "react";

export default function UseIdExample() {
  const id = useId();
  const [name, setName] = useState("");

  return (
    <div>
      <label htmlFor={id}>
        id: {id} 이름: {name}
      </label>
      <input
        id={id}
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      ></input>
    </div>
  );
}
