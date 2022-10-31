import { useParams } from "react-router-dom";
import PageContainer from "../../../components/container/PageContainer";
import { useSelector } from "react-redux";
import Save from "../../../components/atoms/Save";
import { AiFillStar } from "react-icons/ai";
import Recomendation from "../../../components/molecules/Recomendation";
import { useState } from "react";
import Button from "../../../components/atoms/Buttons";
import { useDispatch } from "react-redux";
import { addCart, minCart } from "../../../features/cartSlice";
import Quantity from "../../../components/atoms/Quantity";

export default function DetailPage() {
  const { id } = useParams();
  const dispatch = useDispatch();

  const products = useSelector((state) => state.products.products);
  const cartItem = useSelector((state) => state.cart.items).find(
    (item) => item.id === Number(id)
  );
  const product = products?.find((item) => item.id === Number(id));

  const [text, setText] = useState(false);

  const readMore = () => {
    setText(!text);
  };

  return (
    <>
      <PageContainer>
        <div className="mx-auto overflow-hidden">
          <div className="lg:grid grid-cols-2">
            <div className=" border relative">
              <Save product={product} />
              <img
                className="w-full  p-8"
                src={product?.image}
                alt="Modern building architecture"
              />
            </div>
            <div className="lg:ml-3 ">
              <div className="uppercase tracking-wide font-semibold sm:text-lg md:text-xl 2xl:text-3xl ">
                {product?.title}
              </div>
              <div className="flex mt-2">
                <div>{`Terjual ${product?.productSold}`}</div>
                <div className="ml-5 flex items-center">
                  <AiFillStar className="text-amber-500" />
                  <div className="mr-2">{product?.rating.rate}</div>
                  <div>{`(${product?.rating.count} ulasan)`}</div>
                </div>
              </div>
              <div className=" my-4 font-medium text-[#242582] text-3xl flex items-center">
                $ {product?.price}
                <div className="mx-2 text-lg text-[#a32929] bg-[#ff9999] rounded-lg px-2 ">
                  50%
                </div>
                <div className="line-through text-slate-400 text-xl ">
                  ${product?.price * 2}
                </div>
              </div>

              <div>
                <div className="w-full border-b pb-2">Detail</div>
                <div className="flex">
                  Category :
                  <div className="font-bold ml-3">{product?.category}</div>
                </div>
                <div>
                  <p
                    className={`mt-2 text-slate-500 ${
                      text === false ? "line-clamp-2" : ""
                    }`}
                  >
                    {product?.description}
                  </p>
                  {text === true ? (
                    <></>
                  ) : (
                    <Button
                      children="Read more..."
                      className="text-sky-600"
                      onClick={readMore}
                    />
                  )}
                </div>
              </div>
              <div className="my-3">
                {product.stock === 0 ? (
                  <Button
                    className="bg-[#e73737] text-white p-1.5 sm:p-2 w-full sm:w-52 rounded-lg"
                    disabled="true"
                  >
                    Sold Out
                  </Button>
                ) : (
                  <div>
                    {cartItem ? (
                      <Quantity
                        minClick={() => {
                          dispatch(minCart(Number(id)));
                        }}
                        plusClick={() => {
                          dispatch(addCart(Number(id)));
                        }}
                        quantity={cartItem?.total}
                        stock={product.stock}
                      />
                    ) : (
                      <Button
                        className="bg-[#242582] text-white p-1.5 sm:p-2 w-full sm:w-52 rounded-lg"
                        onClick={() => {
                          dispatch(addCart(Number(id)));
                        }}
                      >
                        Add Cart
                      </Button>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <Recomendation category={product.category} />
      </PageContainer>
    </>
  );
}
