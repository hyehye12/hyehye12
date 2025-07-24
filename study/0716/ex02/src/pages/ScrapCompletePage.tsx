import { completedData } from "../data/completedData";
import SummaryTable from "../components/SummaryTable";

export default function ScrapCompletePage() {
  return (
    <main>
      {completedData.map((info) => (
        <SummaryTable user={info.user} car={info.car} date={info.date} />
      ))}
    </main>
  );
}
