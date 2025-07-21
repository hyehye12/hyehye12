import ExpensiveComponent from "../components/ExpensiveComponents";

export default function MemoTest() {
  return (
    <div>
      <h2>useMemo Test</h2>
      <ExpensiveComponent />
    </div>
  );
}
