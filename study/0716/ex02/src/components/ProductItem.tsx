type Prodcut = { name: string; price: number };

export default function ProductItem({ name, price }: Prodcut) {
  return (
    <div className="p-4 bg-white border rounded shadow">
      <h2 className="font-semibold">{name}</h2>
      <p className="text-gray-600">{price.toLocaleString()}원</p>
    </div>
  );
}
