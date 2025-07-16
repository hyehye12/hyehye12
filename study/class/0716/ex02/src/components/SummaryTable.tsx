type Complete = { user: string; car: string; date: string };

export default function SummaryTable({ user, car, date }: Complete) {
  return (
    <table className="p-4 m-4 border">
      <tr className="p-4 m-4 border">
        <th>성함</th>
        <th>차량명</th>
        <th>날짜</th>
      </tr>
      <tr className="p-4 m-4 border">
        <td>{user}</td>
        <td>{car}</td>
        <td>{date}</td>
      </tr>
    </table>
  );
}
