import Button from "../../atoms/Buttons"
import { BsFillTrashFill } from "react-icons/bs"
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'
import { useDispatch } from "react-redux"
import { Link } from "react-router-dom";
import { addCart, minCart, changeIsChecked, deleteItem } from "../../../features/cartSlice"

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
            <div className="flex justify-end p-2 gap-8 sm:gap-10">
                {/* tombol hapus item dari cart */}
                <Button 
                    className="text-sm sm:text-xl hover:bg-[#242582] hover:text-white rounded-full p-2 transition"
                    onClick={() => dispatch(deleteItem(id))}
                >
                    <BsFillTrashFill />
                </Button>
                <div className="w-24 sm:w-32 flex justify-between rounded-lg border-2">
                    {/* tombol ngurangi 1 jumlah item */}
                    <Button 
                        className="text-sm sm:text-xl hover:bg-[#242582] p-2 rounded-l-lg bg-[#242582] disabled:bg-[#242582]/50 text-white"
                        onClick={() => {
                            dispatch(minCart(id))
                        }}
                        disabled={totalItem === 1 ? true : false}
                    > 
                        <AiOutlineMinus /> 
                    </Button>
                    <span className="text-sm sm:text-xl flex justify-center items-center w-10 sm:w-14 h-8 sm:h-10 px-2 sm:px-4">
                        {totalItem}
                    </span>
                    {/* tombol nambah 1 jumlah item */}
                    <Button 
                        className="text-sm sm:text-xl hover:bg-[#242582] p-2 rounded-r-lg bg-[#242582] disabled:bg-[#242582]/50 text-white"
                        onClick={() => {
                            dispatch(addCart(id))
                            
                        }}
                        disabled={totalItem === stock ? true : false}
                    > 
                        <AiOutlinePlus /> 
                    </Button>
                </div>
            </div>
        </div>
    )
}