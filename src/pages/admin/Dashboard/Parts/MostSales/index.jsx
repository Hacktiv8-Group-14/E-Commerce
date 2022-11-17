import { useSelector } from "react-redux";

export default function MostSales({ productSold }) {
  const products = useSelector((state) => state.products.products);

  return (
    <div className="w-full md:w-1/4 px-2 border rounded-lg">
      <div className="text-center py-4">Most sales</div>
      {productSold ? (
        <>
          {products
            ?.filter((item) => item.productSold >= 1)
            .sort((a, b) => b.productSold - a.productSold)
            .slice(0, 7)
            .map((product) => (
              <div className="flex justify-between border rounded-lg p-2 my-2">
                <div className="truncate w-1/2">{product.title}</div>
                <div>{`${product.productSold} item sold`}</div>
              </div>
            ))}
        </>
      ) : (
        <div className="text-center text-red-600">"No sales yet"</div>
      )}
    </div>
  );
}
