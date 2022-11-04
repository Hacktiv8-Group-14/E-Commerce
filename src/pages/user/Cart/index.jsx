import PageContainer from "../../../components/container/PageContainer";
import { RowContainer } from "../../../components/container/RowContainer";
import ProductRow from "../../../components/molecules/ProductRow";
import { useState, useEffect } from "react";
import { useNavigate, Navigate, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Button from "../../../components/atoms/Buttons";
import { deleteItem } from "../../../features/cartSlice";
import { soldProduct } from "../../../features/productSlice";
import BottomBarContainer from "../../../components/container/BottomBarContainer";
import Swal from "sweetalert2";
import Breadcrumb from "../../../components/molecules/Breadcrumb";

export default function Cart() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const userName = useSelector((state) => state.login.userName);
  const products = useSelector((state) => state.products.products);
  const user = useSelector((state) => state.login.user);
  const cart = useSelector((state) => state.cart.items).find(
    (item) => item.username === userName
  )?.cartItems;

  const [totalPrice, setTotalPrice] = useState(0);
  const [checkedItems, setCheckedItems] = useState([]);

  const onClickCheckout = () => {
    Swal.fire({
      icon: "success",
      title: "Done Checkout!",
      timer: 3000,
      confirmButtonColor: "#242582",
    });
    checkedItems.forEach((item) => {
      dispatch(soldProduct({ id: item.id, total: item.total }));
      dispatch(deleteItem({ id: item.id, username: userName }));
    });
    navigate("/");
  };

  useEffect(() => {
    setCheckedItems(cart?.filter((item) => item.isChecked));
  }, [cart]);

  useEffect(() => {
    const setTotal = () => {
      let temp = 0;
      checkedItems?.forEach((item) => {
        let productPrice = products.find(
          (product) => product.id === item.id
        ).price;
        temp += item.total * productPrice;
      });
      setTotalPrice(temp);
    };
    setTotal();
  }, [checkedItems]);

  let product = {};

  if (user) {
    return (
      <PageContainer>
        <Breadcrumb
          list={[
            { url: "/", name: "Home" },
            { url: "/cart", name: "Shoping Cart" },
          ]}
        />
        {cart?.length ? (
          <>
            <RowContainer>
              {cart?.map((item) => {
                product = products?.find((product) => product.id === item.id);
                return (
                  <ProductRow
                    key={item?.id}
                    id={item?.id}
                    img={product?.image}
                    title={product?.title}
                    price={product?.price}
                    stock={product?.stock}
                    isChecked={item?.isChecked}
                    totalItem={item?.total}
                    userName={userName}
                  />
                );
              })}
            </RowContainer>
            {/* buat nampilin total harga yang dicheck sm tombol checkout */}
            <BottomBarContainer>
              <div className="flex bg-[#242582] w-4/5 justify-between p-2 sm:p-4 rounded-t-lg items-center">
                <div className="text-base sm:text-xl">
                  Total: <b>US$ {totalPrice}</b>
                </div>
                <Button
                  disabled={checkedItems.length === 0 ? true : false}
                  className="font-bold text-sm sm:text-lg border-2 border-white hover:border-white disabled:border-white/50 p-2 rounded-lg text-white hover:text-white disabled:text-white/50 transition"
                  onClick={onClickCheckout}
                >
                  Checkout
                </Button>
              </div>
            </BottomBarContainer>
          </>
        ) : (
          <div className="text-lg text-center py-20 ">
            Oooops... Cart is empty{" "}
            <Link to="/" className="font-bold underline">
              Shop Now
            </Link>
          </div>
        )}
      </PageContainer>
    );
  } else {
    return <Navigate to="/Login" />;
  }
}
