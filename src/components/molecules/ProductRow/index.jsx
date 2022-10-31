import Button from "../../atoms/Buttons"
import { BsFillTrashFill } from "react-icons/bs"
import { useDispatch } from "react-redux"
import { Link } from "react-router-dom";
import { addCart, minCart, changeIsChecked, deleteItem, changeItemTotalBy } from "../../../features/cartSlice"
import MinAddValue from "../../atoms/MinAddValue";

export default function ProductRow({id, title, img, price, totalItem, stock, isChecked}) {

    const dispatch = useDispatch()

    return(
        <div className="w-11/12 sm:w-4/5 flex flex-col border-2 rounded-lg p-4">
            <div className="flex p-2 gap-4 sm:gap-8">
                {/* checkbox */}
                <input 
                    type="checkbox" 
                    className=" scale-150 sm:scale-[2]" 
                    checked={isChecked}
                    onChange={() => {
                        dispatch(changeIsChecked(id))
                    }}
                />
                {/* gambar produk */}
                <Link to={`/Detail/${id}`} className="flex gap-4 sm:gap-8">
                    <img 
                        src={img} 
                        alt="product" 
                        className="h-12 sm:h-24 w-12 sm:w-24" 
                    />
                    <div className="flex flex-col">
                        {/* nama produk */}
                        <div className="text-sm sm:text-xl line-clamp-1">
                            {title}
                        </div>
                        {/* harga produk */}
                        <div className="font-medium text-sm sm:text-xl">
                            US$ {price}
                        </div>
                    </div>
                </Link>
            </div>
            <div className="flex justify-end items-start p-2 gap-8 sm:gap-10 ">
                {/* tombol hapus item dari cart */}
                <Button 
                    className="text-base sm:text-xl hover:bg-[#242582] hover:text-white rounded-full py-2 sm:py-3 transition"
                    onClick={() => dispatch(deleteItem(id))}
                >
                    <BsFillTrashFill />
                </Button>
                <MinAddValue
                    width="128px"
                    widthSm="96px"
                    minValue={1}
                    maxValue={stock}
                    onClickMin={() => dispatch(minCart(id))}
                    onClickPlus={() => dispatch(addCart(id))}
                    value={totalItem}
                    onChangeValue={(event) => dispatch(changeItemTotalBy({id: id, total: Number(event.target.value)}))}
                    onBlur={() => {
                        if(totalItem < 1){
                            dispatch(changeItemTotalBy({id: id, total: 1}))
                        } else if(totalItem > stock){
                            dispatch(changeItemTotalBy({id: id, total: stock}))
                        }
                    }}
                />
            </div>
        </div>
    )
}