import PageContainer from "../../../components/container/PageContainer";
import Header from "../../../components/molecules/Header/index.";
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

  const userName = useSelector(state => state.login.userName)
  const products = useSelector((state) => state.products.products);
  // const cart = useSelector((state) => state.cart.items);
  const user = useSelector((state) => state.login.user);
  const cart = useSelector((state) => state.cart.items).find((item) => item.username === userName)?.cartItems;

  // const [cart, setCart] = useState(null)

  // useEffect(() => {
  //   setCart(userCartItem?.cartItems.find(item => item.id === Number(id)))
  // }, [userCartItem]);

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
      dispatch(deleteItem({id: item.id, username: userName}));
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
        <Header>Cart</Header>
        <Breadcrumb
          list={[
            { url: "/", name: "Home" },
            { url: "/cart", name: "Shoping Cart" },
          ]}
        />
        {cart?.length ? (
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
                  userName = {userName}
                />
              );
            })}
            {/* buat nampilin total harga yang dicheck sm tombol checkout */}
            <BottomBarContainer>
              <div className="flex justify-between sm:justify-between sm:gap-10 items-center">
                <div className="text-base sm:text-xl">
                  Total: <b>US$ {totalPrice}</b>
                </div>
                <Button
                  disabled={checkedItems.length === 0 ? true : false}
                  className="font-bold text-sm sm:text-lg border-2 border-[#F64C72] hover:border-white disabled:border-[#F64C72]/50 p-2 rounded-lg text-[#F64C72] hover:text-white disabled:text-[#F64C72]/50 transition"
                  onClick={onClickCheckout}
                >
                  Checkout
                </Button>
              </div>
            </BottomBarContainer>
          </RowContainer>
        ) : (
          <div className="text-lg text-center py-20">
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
