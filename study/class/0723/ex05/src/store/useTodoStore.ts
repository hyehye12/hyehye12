// src/store/useTodoStore.ts
import { create } from "zustand";
import type { TodoState } from "../types/todo";

export const useTodoStore = create<TodoState>((set) => ({
  todos: [],
  nextId: 1,
  addTodo: (text) =>
    set((state) => ({
      todos: [...state.todos, { id: state.nextId, text, done: false }],
      nextId: state.nextId + 1,
    })),
  toggleTodo: (id) =>
    set((state) => ({
      todos: state.todos.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      ),
    })),
  removeTodo: (id) =>
    set((state) => ({
      todos: state.todos.filter((todo) => todo.id !== id),
    })),
  clearTodos: () => set({ todos: [], nextId: 1 }),
}));
