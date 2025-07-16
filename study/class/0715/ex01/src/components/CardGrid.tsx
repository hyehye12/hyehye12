function CardGrid() {
  const cards = [
    {
      id: 1,
      icon: "🌱",
      title: "식물 가꾸기",
      description: "매일 물을 주세요.",
    },
    {
      id: 2,
      icon: "📅",
      title: "캘린더",
      description: "일정을 기록해요.",
    },
    {
      id: 3,
      icon: "💬",
      title: "커뮤니티",
      description: "자유롭게 이야기 나눠요.",
    },
  ];

  return (
    <div className="grid gap-4 p-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {cards.map((card) => (
        <div key={card.id} className="p-4 bg-white border rounded shadow">
          <div className="text-3xl">{card.icon}</div>
          <h3 className="mt-2 text-lg font-bold">{card.title}</h3>
          <p className="text-sm text-gray-600">{card.description}</p>
        </div>
      ))}
    </div>
  );
}

export default CardGrid;
