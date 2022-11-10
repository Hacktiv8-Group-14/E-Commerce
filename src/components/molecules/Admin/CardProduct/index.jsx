import Button from "../../../atoms/Buttons";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { changeStock } from "../../../../features/productSlice";

export default function CardProduct({
  id,
  index,
  image,
  title,
  price,
  productSold,
  stock,
  updButton
}) {

  const dispatch = useDispatch()

  const [stockValue, setStockValue] = useState(stock)

  const onUpdate = () => {
    dispatch(changeStock({id: id, stock: Number(stockValue)}))
  }

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
            {typeof stock !== "undefined" && (
              <div className="text-red-700  text-xs sm:text-lg ">
                Remaining stock: {stock}
              </div>
            )}
          </div>
        </div>
        <div className="flex p-2 gap-2 md:gap-20">
          {typeof stock !== "undefined" && (
            <input
              type="number"
              className="border-2 text-center sm:text-lg w-10 sm:w-20 rounded-lg"
              value={stockValue}
              onChange={(event) => setStockValue(Number(event.target.value))}
            />
          )}
          {updButton && (
            <Button disabled={stockValue === stock || stockValue === '' ? true : false} className="bg-[#242582] disabled:bg-[#242582]/50 text-white p-1 sm:p-2 rounded-lg" onClick={onUpdate}>
              Update
            </Button>
          )}
          {typeof productSold !== "undefined" && (
            <>
            <div className="text-sm sm:text-xl font-medium">
              {productSold} sold
            </div>
            <div className="text-sm sm:text-xl">
              Total: <b>US$ {price * productSold}</b>
            </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
