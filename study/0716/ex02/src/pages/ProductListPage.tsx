import { products } from "../data/products";
import ProductItem from "../components/ProductItem";

export default function ProdcutListPage() {
  return (
    <main className="grid gap-4 p-6 grid-col sm:grid-cols-2 lg:grid-cols-3">
      {products.map((item) => (
        <ProductItem key={item.id} name={item.name} price={item.price} />
      ))}
    </main>
  );
}
