import { useState } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import Button from "../Buttons";
import { useDispatch, useSelector } from "react-redux";
import {
  addSavedProducts,
  deleteSavedProducts,
} from "../../../features/savedSlice";
import { useEffect } from "react";
import { getUser } from "../../../features/helpers";
import { useNavigate } from "react-router-dom";

export default function Save(props) {
  const { product } = props;
  const dispatch = useDispatch();
  const savedProduct = useSelector((state) => state.saved.savedProducts);
  const [save, setSave] = useState(false);

  useEffect(() => {
    savedProduct.find((id) => id === product?.id) && setSave(true);
  }, [save]);

  const Saved = () => {
    if (save === false) {
      dispatch(addSavedProducts(product?.id));
      setSave(!save);
    } else if (save === true) {
      dispatch(deleteSavedProducts(product?.id));
      setSave(false);
    }
  };

  const navigate = useNavigate();

  return (
    <>
      <Button
        className="absolute top-0 right-0 p-3"
        onClick={
          getUser()
            ? Saved
            : () => {
                navigate("/login");
              }
        }
      >
        {save ? (
          <AiFillHeart size={30} className="text-red-600" />
        ) : (
          <AiOutlineHeart size={30} />
        )}
      </Button>
    </>
  );
}
