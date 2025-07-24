// // src/components/TodoList.tsx
// import React, { useState } from "react";
// import { useAppSelector } from "../hooks/useAppSelector";
// import { useAppDispatch } from "../hooks/useAppDispatch";
// import {
//   addTodo,
//   toggleTodo,
//   removeTodo,
//   clearTodos,
// } from "../store/slices/todoSlice";

// const TodoList: React.FC = () => {
//   const [input, setInput] = useState("");
//   const todos = useAppSelector((state) => state.todo.todos);
//   const dispatch = useAppDispatch();

//   const handleAdd = () => {
//     if (input.trim() !== "") {
//       dispatch(addTodo(input));
//       setInput("");
//     }
//   };

//   return (
//     <div>
//       <h2>Todo List</h2>
//       <div>
//         <input
//           value={input}
//           onChange={(e) => setInput(e.target.value)}
//           placeholder="할 일을 입력하세요"
//         />
//         <button onClick={handleAdd}>추가</button>
//         <button onClick={() => dispatch(clearTodos())}>전체 삭제</button>
//       </div>
//       <ul>
//         {todos.map((todo) => (
//           <li
//             key={todo.id}
//             style={{ textDecoration: todo.done ? "line-through" : "none" }}
//           >
//             <span
//               onClick={() => dispatch(toggleTodo(todo.id))}
//               style={{ cursor: "pointer" }}
//             >
//               {todo.text}
//             </span>
//             <button onClick={() => dispatch(removeTodo(todo.id))}>삭제</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default TodoList;

// src/components/TodoList.tsx
import React, { useState } from "react";
import { useTodoStore } from "../store/useTodoStore";

const TodoList: React.FC = () => {
  const [input, setInput] = useState("");
  const todos = useTodoStore((state) => state.todos);
  const addTodo = useTodoStore((state) => state.addTodo);
  const toggleTodo = useTodoStore((state) => state.toggleTodo);
  const removeTodo = useTodoStore((state) => state.removeTodo);
  const clearTodos = useTodoStore((state) => state.clearTodos);

  const handleAdd = () => {
    if (input.trim() !== "") {
      addTodo(input);
      setInput("");
    }
  };

  return (
    <div>
      <h2>Todo List</h2>
      <div>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="할 일을 입력하세요"
        />
        <button onClick={handleAdd}>추가</button>
        <button onClick={clearTodos}>전체 삭제</button>
      </div>
      <ul>
        {todos.map((todo) => (
          <li
            key={todo.id}
            style={{ textDecoration: todo.done ? "line-through" : "none" }}
          >
            <span
              onClick={() => toggleTodo(todo.id)}
              style={{ cursor: "pointer" }}
            >
              {todo.text}
            </span>
            <button onClick={() => removeTodo(todo.id)}>삭제</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
