// redux 사용
// export interface CounterState {
//   value: number;
// }

//zustand 사용
export interface CounterState {
  value: number;
  increment: () => void;
  decrement: () => void;
  incrementByAmount: (amount: number) => void;
  reset: () => void;
}
