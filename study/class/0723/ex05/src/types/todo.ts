// // src/types/todo.ts
// export interface Todo {
//   id: number;
//   text: string;
//   done: boolean;
// }

// export interface TodoState {
//   todos: Todo[];
//   nextId: number;
// }
// src/types/todo.ts
export interface Todo {
  id: number;
  text: string;
  done: boolean;
}

export interface TodoState {
  todos: Todo[];
  nextId: number;
  addTodo: (text: string) => void;
  toggleTodo: (id: number) => void;
  removeTodo: (id: number) => void;
  clearTodos: () => void;
}
