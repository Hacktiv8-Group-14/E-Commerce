import { AiFillStar } from "react-icons/ai";
import { Link } from "react-router-dom";

export default function ProductCard(props) {
  const { product } = props;

  return (
    <>
      <div className=" border rounded-xl mb-3 md:mb-0 flex flex-col text-black">
        {/* product soldout */}
        {product.stock === 0 ? (
          <div className="relative">
            <div className="absolute left-0 top-0 bg-red-600 px-3 text-white rounded-br-lg rounded-tl-lg">
              Sold Out
            </div>
          </div>
        ) : (
          <></>
        )}
        <Link to={`/Detail/${product?.id}`}>
          {/* Product Image */}
          <img
            src={product?.image}
            alt="Product"
            className="rounded-t-xl h-32 sm:h-48  2xl:h-64 w-full p-3"
          />

          {/* Product Detail */}
          <div className="mb-2">
            {/* Product Category */}
            <p className="bg-[#242582] p-1 mt-2 text-xs sm:text-sm md:text-base text-white rounded-br-2xl ">
              {product?.category}
            </p>

            <div className="px-2">
              {/* Product Price */}
              <div className="sm:text-lg  font-semibold my-2 text-[#242582] flex items-center">
                <div>US$ {product?.price}</div>
                <div className="mx-2 text-base text-[#a32929] bg-[#ff9999] rounded-lg px-2">
                  50%
                </div>
                <div className="line-through text-slate-400 text-base">
                  ${product?.price * 2}
                </div>
              </div>

              {/* Product Title */}
              <h1 className="sm:text-base font-semibold mb-2 hover:underline  line-clamp-2">
                {product?.title}
              </h1>

              {/* Product Rating & Sold */}
              <p className="text-xs sm:text-sm md:text-base flex items-center">
                <AiFillStar className="text-amber-500" /> {product?.rating.rate}{" "}
                | {product?.productSold} sold
              </p>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
}
