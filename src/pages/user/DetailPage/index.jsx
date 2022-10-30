import { useParams } from "react-router-dom";
import PageContainer from "../../../components/container/PageContainer";
import { useSelector } from "react-redux";
import Save from "../../../components/atoms/Save";
import { AiFillStar } from "react-icons/ai";
import Checkout from "../../../components/molecules/CheckoutCard";
import Recomendation from "../../../components/molecules/Recomendation";
import { useState } from "react";
import Button from "../../../components/atoms/Buttons";

export default function DetailPage() {
  const { title } = useParams();

  const products = useSelector((state) => state.products.products);
  const product = products.filter((item) => item.title === title);
  const [text, setText] = useState(false);

  const readMore = () => {
    setText(!text);
  };

  return (
    <>
      <PageContainer>
        {product.map((item) => (
          <>
            <div className="mx-auto overflow-hidden">
              <div className="lg:grid grid-cols-2">
                <div className=" border relative">
                  <Save product={item} title={item.title} />
                  <img
                    className="w-full  p-8"
                    src={item.image}
                    alt="Modern building architecture"
                  />
                </div>
                <div className="lg:ml-3 ">
                  <div className="uppercase tracking-wide font-semibold sm:text-lg md:text-xl 2xl:text-3xl ">
                    {item.title}
                  </div>
                  <div className="flex mt-2">
                    <div>{`Terjual ${item.productSold}`}</div>
                    <div className="ml-5 flex items-center">
                      <AiFillStar className="text-amber-500" />
                      <div className="mr-2">{item.rating.rate}</div>
                      <div>{`(${item.rating.count} ulasan)`}</div>
                    </div>
                  </div>
                  <div className="block my-4 font-medium text-black  text-3xl">
                    $ {item.price}
                  </div>

                  <div>
                    <div className="w-full border-b pb-2">Detail</div>
                    <div className="flex">
                      Category :
                      <div className="font-bold ml-3">{item.category}</div>
                    </div>
                    <div>
                      <p
                        className={`mt-2 text-slate-500 ${
                          text === false ? "line-clamp-2" : ""
                        }`}
                      >
                        {item.description}
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
                  <div className="w-full lg:mt-3">
                    <Checkout price={item.price} stock={item.stock} />
                  </div>
                </div>
              </div>
            </div>
          </>
        ))}
        <Recomendation />
      </PageContainer>
    </>
  );
}
