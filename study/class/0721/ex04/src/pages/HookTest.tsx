import LayoutEffectExample from "../components/LayoutEffectExample";
import ParentComponent from "../components/ParentComponent";
import TransitionExample from "../components/TransitionExample";
import UseIdExample from "../components/useIdExample";

export default function HookTest() {
  return (
    <div>
      <h2>LayoutEffect 테스트</h2>
      <LayoutEffectExample />
      <h2>Id 테스트</h2>
      <UseIdExample />
      <h2>Transition 테스트</h2>
      <TransitionExample />
      <h2>커스텀 인풋 테스트</h2>
      <ParentComponent />
    </div>
  );
}
