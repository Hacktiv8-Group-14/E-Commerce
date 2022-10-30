import { useState } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import Button from "../Buttons";
import { useDispatch, useSelector } from "react-redux";
import {
  addSavedProducts,
  deleteSavedProducts,
} from "../../../features/savedSlice";
import { useEffect } from "react";

export default function Save(props) {
  const { product, title } = props;
  const dispatch = useDispatch();
  const savedProduct = useSelector((state) => state.saved.savedProducts);
  const [save, setSave] = useState(false);

  useEffect(() => {
    savedProduct.some((e) => e.title === title) && setSave(true);
  }, [save]);

  const Saved = () => {
    if (save === false) {
      dispatch(addSavedProducts(product));
      setSave(!save);
    } else if (save === true) {
      dispatch(deleteSavedProducts(product));
      setSave(false);
    }
  };

  return (
    <>
      <Button className="absolute top-0 right-0 p-3" onClick={Saved}>
        {save ? (
          <AiFillHeart size={30} className="text-red-600" />
        ) : (
          <AiOutlineHeart size={30} />
        )}
      </Button>
    </>
  );
}
