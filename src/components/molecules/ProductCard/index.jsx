import { BsCartPlusFill } from 'react-icons/bs'
import { AiFillStar } from 'react-icons/ai'
import { Link } from "react-router-dom"

export default function ProductCard({category, image, name, price, rating, id, productSold}) {
    return(
        <>
            <div className="bg-[#242582] border-[#5152e0] border-4 rounded-xl mb-3 md:mb-0 flex flex-col">
                {/* Product Image */}
                <img src={image} alt="Product" className="rounded-xl h-32 sm:h-40 md:h-52 w-full" />

                {/* Product Detail */}
                <div className="px-2 mb-2">

                    {/* Product Category */}
                    <p className="mt-2 text-xs sm:text-sm md:text-base">{category}</p>

                    {/* Product Price */}
                    <h2 className="sm:text-xl md:text-2xl font-semibold my-2">US$ {price}</h2>

                    {/* Product Title */}
                    <Link to={`/`}>
                        <h1 className="sm:text-lg md:text-xl font-semibold mb-2 hover:underline line-clamp-2">{name}</h1>
                    </Link>

                    {/* Product Rating & Sold */}
                    <p className="text-xs sm:text-sm md:text-base flex items-center"><AiFillStar /> {rating} | {productSold} sold</p>
                </div>

                <div className="flex flex-1 items-end p-2">

                    {/* Button for Adding Item to Cart */}
                    <button className=" w-full rounded-lg p-1 md:p-2 border-[#F64C72] hover:border-white border-2 text-[#F64C72] hover:text-white transition flex justify-center">
                        <BsCartPlusFill className="text-xl sm:text-2xl" /> 
                    </button>
                </div>
            </div>
        </>
    )
}