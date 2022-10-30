import { AiFillStar } from "react-icons/ai";
import { Link } from "react-router-dom";

export default function ProductCard(props) {
  const { category, image, title, price, rating, id, productSold } = props;
  return (
    <>
      <div className=" border rounded-xl mb-3 md:mb-0 flex flex-col text-black">
        <Link to={`/Detail/${id}/${title}`}>
          {/* Product Image */}

          <img
            src={image}
            alt="Product"
            className="rounded-t-xl h-32 sm:h-48  2xl:h-64 w-full p-3"
          />

          {/* Product Detail */}
          <div className="mb-2">
            {/* Product Category */}
            <p className="bg-[#242582] p-1 mt-2 text-xs sm:text-sm md:text-base text-white rounded-br-2xl ">
              {category}
            </p>

            <div className="px-2">
              {/* Product Price */}
              <h2 className="sm:text-xl md:text-2xl font-semibold my-2">
                US$ {price}
              </h2>

              {/* Product Title */}
              <Link to={`/Detail/${title}`}>
                <h1 className="sm:text-lg md:text-xl font-semibold mb-2 hover:underline line-clamp-2">
                  {title}
                </h1>
              </Link>

              {/* Product Rating & Sold */}

              <p className="text-xs sm:text-sm md:text-base flex items-center">
                <AiFillStar className="text-amber-500" /> {rating} |{" "}
                {productSold} sold
              </p>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
}
