import Button from "../../atoms/Buttons";
import Quantity from "../../atoms/Quantity";

export default function Checkout(props) {
  const { price, stock } = props;

  return (
    <>
      <div className="w-full border p-5">
        <div>Checkout</div>
        <Quantity stock={stock} price={price} />
        <div className="mt-5">
          <Button className="w-full mt-5 bg-slate-500 p-2">+ Keranjang</Button>
        </div>
      </div>
    </>
  );
}
