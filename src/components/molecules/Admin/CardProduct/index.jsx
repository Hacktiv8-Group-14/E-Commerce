export default function CardProduct({
  index,
  image,
  title,
  price,
  productSold,
}) {
  return (
    <>
      <div
        key={index}
        className="flex justify-between items-center border-2 rounded-lg p-4 mb-2"
      >
        <div className="flex items-center p-2 gap-4 sm:gap-8">
          <img
            src={image}
            alt="product"
            className="h-12 sm:h-24 w-12 sm:w-24"
          />
          <div className="flex flex-col sm:w-96">
            <div className="text-sm sm:text-xl line-clamp-1">{title}</div>
            <div className="font-medium text-sm sm:text-xl">US$ {price}</div>
          </div>
        </div>
        <div className="flex p-2 gap-2 md:gap-20">
          <div className="text-sm sm:text-xl font-medium">
            {productSold} sold
          </div>
          <div className="text-sm sm:text-xl">
            Total: <b>US$ {price * productSold}</b>
          </div>
        </div>
      </div>
    </>
  );
}
