import { useParams } from "react-router-dom";
import PageContainer from "../../../components/container/PageContainer";
import { useSelector } from "react-redux";
import Save from "../../../components/atoms/Save";
import { AiFillStar } from "react-icons/ai";
import { BsFillTrashFill } from "react-icons/bs"
import Checkout from "../../../components/molecules/CheckoutCard";
import Recomendation from "../../../components/molecules/Recomendation";
import { useState } from "react";
import Button from "../../../components/atoms/Buttons";
import { useDispatch } from "react-redux";
import { addCart, minCart, changeItemTotalBy, deleteItem } from "../../../features/cartSlice"
import MinAddValue from "../../../components/atoms/MinAddValue";

export default function DetailPage() {
  const { id } = useParams();
  const dispatch = useDispatch()

  const products = useSelector((state) => state.products.products);
  const cartItem = useSelector((state) => state.cart.items).find((item) => item.id === Number(id))
  const product = products?.find(item => item.id === Number(id))

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
                  <div className="block my-4 font-medium text-black  text-3xl">
                    $ {product?.price}
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
                  <div className="w-full sm:w-52 my-3">
                    {cartItem ? (
                      <div className="flex justify-start sm:justify-between w-full">
                        <Button 
                          className="text-base sm:text-xl hover:bg-[#242582] hover:text-white h-full rounded-full p-3 transition"
                          onClick={() => dispatch(deleteItem(Number(id)))}
                        >
                          <BsFillTrashFill />
                        </Button>
                        <MinAddValue
                          widthSm="185px"
                          value={cartItem?.total}
                          onChangeValue={(event) => dispatch(changeItemTotalBy({id: Number(id), total: Number(event.target.value)}))}
                          minValue={1}
                          maxValue={product?.stock}
                          onClickMin={() => dispatch(minCart(Number(id)))}
                          onClickPlus={() => dispatch(addCart(Number(id)))}
                          onBlur={() => {
                            if(cartItem?.total > product?.stock){
                                dispatch(changeItemTotalBy({id: Number(id), total: product?.stock}))
                            } else if(cartItem?.total < 1){
                              dispatch(changeItemTotalBy({id: Number(id), total: 1}))
                            }
                          }}
                        />
                      </div>
                    ) : (
                      // jika tidak ada item di cart
                      <Button
                        disabled={product?.stock === 0 ? true : false}
                        className="bg-[#242582] disabled:bg-[#242582]/50 w-40 sm:w-52 text-white p-1.5 sm:p-2 rounded-lg "
                        onClick={() => {
                          dispatch(addCart(Number(id)))
                        }}
                      >
                        {product?.stock === 0 ? 'Sold Out' : 'Add to Cart'}
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </div>
        <Recomendation />
      </PageContainer>
    </>
  );
}
