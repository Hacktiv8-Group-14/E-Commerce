import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import Button from "../Buttons";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

export default function Quantity(props) {
  const { minClick, plusClick, quantity, stock, className } = props;
  const userName = useSelector((state) => state.login.userName);
  const cart = useSelector((state) => state.cart.items).find(
    (item) => item.username === userName
  )?.cartItems;

  const [disable, setDisable] = useState(false);
  const [plusDisable, setPlusDisable] = useState(false);

  useEffect(() => {
    if (stock === 0) {
      setDisable(true);
      setPlusDisable(true);
    } else if (quantity >= stock) {
      setPlusDisable(true);
    } else {
      setDisable(false);
      setPlusDisable(false);
    }
  }, [cart]);

  return (
    <div className={className}>
      <div className="w-full flex justify-between rounded-lg border-2">
        {/* tombol ngurangi 1 jumlah item */}
        <Button
          className="text-sm sm:text-xl hover:bg-[#242582] p-2 rounded-l-lg bg-[#242582] disabled:bg-[#242582]/50 text-white"
          onClick={minClick}
          disabled={disable}
        >
          <AiOutlineMinus />
        </Button>
        <span className="text-sm sm:text-xl flex justify-center items-center w-10 sm:w-14 h-8 sm:h-10 px-2 sm:px-4">
          {stock === 0 ? "0" : `${quantity}`}
        </span>
        {/* tombol nambah 1 jumlah item */}
        <Button
          className="text-sm sm:text-xl hover:bg-[#242582] p-2 rounded-r-lg bg-[#242582] disabled:bg-[#242582]/50 text-white"
          onClick={plusClick}
          disabled={plusDisable}
        >
          <AiOutlinePlus />
        </Button>
      </div>
      <div className=" text-red-500 text-xs">
            {/* {value < minValue && `*Minimum item is ${minValue}`} */}
            
            {stock === 0 ? `*Item's sold out`
              : quantity > stock ? `*Maximum item is ${stock}`
              : null
            }
      </div>
    </div>
  );
}
