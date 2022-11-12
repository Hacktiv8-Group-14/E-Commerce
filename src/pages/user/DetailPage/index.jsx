import { useParams, useNavigate, Navigate } from "react-router-dom";
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
import Breadcrumb from "../../../components/molecules/Breadcrumb";

export default function DetailPage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector((state) => state.login.user);
  const admin = useSelector((state) => state.login.admin);
  const userName = useSelector((state) => state.login.userName);
  const products = useSelector((state) => state.products.products);
  const userCartItem = useSelector((state) => state.cart.items[userName]);
  const cartItem = userCartItem?.find((item) => item.id === Number(id));
  const product = products?.find((item) => item.id === Number(id));

  const [text, setText] = useState(false);

  const readMore = () => {
    setText(!text);
  };

  if (admin) {
    return <Navigate to="/" />;
  } else {
    return (
      <>
        <PageContainer>
          <Breadcrumb
            list={[
              { url: "/", name: "Home" },
              { url: `/Detail/${id}`, name: `Details` },
            ]}
          />
          <div className="mx-auto overflow-hidden mb-10">
            <div className="lg:grid grid-cols-2">
              <div className=" border relative">
                <Save product={product} />
                <img
                  className="w-full h-96 md:h-[620px] p-8"
                  src={product?.image}
                  alt="Modern building architecture"
                />
              </div>
              <div className="lg:ml-3 ">
                <div className="uppercase tracking-wide font-semibold sm:text-lg md:text-xl 2xl:text-3xl ">
                  {product?.title}
                </div>
                <div className="flex mt-2">
                  <div>{`${product?.productSold} sold`}</div>
                  <div className="ml-5 flex items-center">
                    <AiFillStar className="text-amber-500" />
                    <div className="mr-2">{product?.rating.rate}</div>
                    <div>{`(${product?.rating.count} review)`}</div>
                  </div>
                </div>
                <div className=" my-4 font-medium text-bluedark text-3xl flex items-center">
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
                  {product?.stock === 0 ? (
                    <Button
                      className="bg-[#e73737] text-white p-1.5 sm:p-2 w-full sm:w-52 rounded-lg"
                      disabled={true}
                    >
                      Sold Out
                    </Button>
                  ) : (
                    <div>
                      {cartItem && user ? (
                        <Quantity
                          className="w-full md:w-52"
                          minClick={() => {
                            dispatch(
                              minCart({ id: Number(id), username: userName })
                            );
                          }}
                          plusClick={() => {
                            dispatch(
                              addCart({ id: Number(id), username: userName })
                            );
                          }}
                          quantity={cartItem?.total}
                          stock={product?.stock}
                        />
                      ) : (
                        <Button
                          className="bg-bluedark text-white p-1.5 sm:p-2 w-full sm:w-52 rounded-lg"
                          onClick={() => {
                            if (user) {
                              dispatch(
                                addCart({ id: Number(id), username: userName })
                              );
                            } else {
                              navigate("/Login");
                            }
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
          <Recomendation category={product?.category} />
        </PageContainer>
      </>
    );
  }
}
