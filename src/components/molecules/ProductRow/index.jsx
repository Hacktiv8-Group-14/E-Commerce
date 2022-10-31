import Button from "../../atoms/Buttons";
import { BsFillTrashFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  addCart,
  minCart,
  changeIsChecked,
  deleteItem,
  changeItemTotalBy,
} from "../../../features/cartSlice";
import Swal from "sweetalert2";
import Quantity from "../../atoms/Quantity";
import MinAddValue from "../../atoms/MinAddValue";

export default function ProductRow({
  id,
  title,
  img,
  price,
  totalItem,
  stock,
  isChecked,
}) {
  const dispatch = useDispatch();

  //tombol minCart jika total item <= 1  menghapus produk di cart
  const minClick = () => {
    if (totalItem <= 1) {
      Swal.fire({
        title: "Are you sure deleted?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          dispatch(minCart(id));
          Swal.fire("Deleted!", "Your file has been deleted.", "success");
        }
      });
    } else if (totalItem > 1) {
      dispatch(minCart(id));
    }
  };

  return (
    <div className="w-11/12 sm:w-4/5 flex justify-between items-center border-2 rounded-lg p-4">
      <div className="flex items-center p-2 gap-4 sm:gap-8">
        {/* checkbox */}
        <input
          type="checkbox"
          className=" scale-150 md:scale-[2] "
          checked={isChecked}
          onChange={() => {
            dispatch(changeIsChecked(id));
          }}
        />
        {/* gambar produk */}
        <Link to={`/Detail/${id}`} className="flex gap-4 sm:gap-8">
          <img src={img} alt="product" className="h-12 sm:h-24 w-12 sm:w-24" />
          <div className="flex flex-col">
            {/* nama produk */}
            <div className="text-sm sm:text-xl line-clamp-1">{title}</div>
            {/* harga produk */}
            <div className="font-medium text-sm sm:text-xl">US$ {price}</div>
            <div className="text-red-700  text-xs sm:text-lg ">
              Stock tersisa : {stock}
            </div>
          </div>
        </Link>
      </div>

      <div className="flex p-2 gap-2 md:gap-10">
        {/* tombol hapus item dari cart */}
        <Button
          className="text-sm sm:text-xl hover:bg-[#242582] hover:text-white rounded-full px-3 transition"
          onClick={() => dispatch(deleteItem(id))}
        >
          <BsFillTrashFill />
        </Button>
        <Quantity
          className="w-24 sm:w-32"
          minClick={minClick}
          plusClick={() => {
            dispatch(addCart(id));
          }}
          quantity={totalItem}
          stock={stock}
        />
      </div>
    </div>
  );
}
