import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import Button from "../Buttons";

export default function Quantity(props) {
  const { minClick, plusClick, quantity, stock, className } = props;

  return (
    <div className={className}>
      <div className="w-full flex justify-between rounded-lg border-2">
        {/* tombol ngurangi 1 jumlah item */}
        <Button
          className="text-sm sm:text-xl hover:bg-[#242582] p-2 rounded-l-lg bg-[#242582] disabled:bg-[#242582]/50 text-white"
          onClick={minClick}
        >
          <AiOutlineMinus />
        </Button>
        <span className="text-sm sm:text-xl flex justify-center items-center w-10 sm:w-14 h-8 sm:h-10 px-2 sm:px-4">
          {quantity}
        </span>
        {/* tombol nambah 1 jumlah item */}
        <Button
          className="text-sm sm:text-xl hover:bg-[#242582] p-2 rounded-r-lg bg-[#242582] disabled:bg-[#242582]/50 text-white"
          onClick={plusClick}
          disabled={quantity === stock ? true : false}
        >
          <AiOutlinePlus />
        </Button>
      </div>
    </div>
  );
}
