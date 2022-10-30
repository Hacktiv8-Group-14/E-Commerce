import { useEffect, useState } from "react";
import Button from "../Buttons";
import Input from "../Input";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import "./style.css";

export default function Quantity(props) {
  const { stock, price } = props;

  const [quantity, setQuantity] = useState(stock);
  const [value, setValue] = useState(0);
  const [disable, setDisable] = useState(false);
  const [totalPrice, setTotalPrice] = useState(price);

  const minClick = () => {
    setValue(value - 1);
  };

  const plusClick = () => {
    setValue(value + 1);
  };

  useEffect(() => {
    setTotalPrice(value * price);
  });

  useEffect(() => {
    if (value === 0) {
      setDisable(true);
    } else if (value > 0) {
      setDisable(false);
    }
  });

  return (
    <>
      <div className="flex items-center my-4">
        <div className="border rounded-lg">
          <Button onClick={minClick} disabled={disable} className="  p-3">
            <AiOutlineMinus size={15} />
          </Button>
          <Input type="number" value={value} className=" w-12 h-10 px-3" />
          <Button
            children="Plus"
            onClick={plusClick}
            className="p-3"
            disabled={value === stock ? true : false}
          >
            <AiOutlinePlus size={15} />
          </Button>
        </div>

        {quantity <= value ? (
          <div className="text-red-500 ml-3">{`stock hanya tersedia ${quantity}`}</div>
        ) : (
          <></>
        )}
      </div>
      <div className="flex justify-between">
        <div>Subtotal:</div>
        <div>$ {totalPrice}</div>
      </div>
    </>
  );
}
