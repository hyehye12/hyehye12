export default function Basic() {
  return (
    <section className="mt-4">
      <div className="flex justify-center mt-10 space-x-2">
        <button className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600">
          홈
        </button>
        <button className="px-4 py-2 text-white bg-green-500 rounded hover:bg-green-600">
          소개
        </button>
        <button className="px-4 py-2 text-white bg-purple-500 rounded hover:bg-purple-600">
          연락
        </button>
      </div>
    </section>
  );
}
