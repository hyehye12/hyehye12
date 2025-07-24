//itcr (import, type, class(function) , return)
//임타클반 (임포트, 타입, 클래스(함수), 반환)

type Quotation = {
  carName: string;
  year: number;
  price: number;
};

export default function QuotationCard({ carName, year, price }: Quotation) {
  //   return <> </>; 기본꼴 //구조잡기

  return (
    <div className="w-1/4 p-4 m-4 bg-gray-200 border rounded-md shadow-lg h-1/4 ">
      <h2 className="fond-bold">{carName}</h2>
      <p>{year}</p>
      <p>{price}</p>
    </div>
  );
}
