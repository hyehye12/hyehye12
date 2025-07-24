import GreetingList from "../components/GreetingList";

export default function GreetingPage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-6">
      <h1 className="mb-4 text-3xl font-bold">👋 인사 메시지</h1>
      <GreetingList />
    </main>
  );
}
