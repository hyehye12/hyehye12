import ExpensiveComponent from "../components/ExpensiveComponents";
import Parent from "../components/Parent";
import UseMemoExample from "../components/UseMemoExample";
import UseCallbackExample from "../components/UseCallbackExample";

export default function MemoTest() {
  return (
    <div>
      <h2>useMemo Test</h2>
      {/* <ExpensiveComponent /> */}
      {/* <UseMemoExample /> */}
      <h2>useCallback Test</h2>
      {/* <Parent /> */}
      <UseCallbackExample />
    </div>
  );
}
