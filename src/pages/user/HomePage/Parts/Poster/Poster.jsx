import { useState } from "react";
import Button from "../../../../../components/atoms/Buttons";
import { dataPoster } from "./dataPoster";
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";

export default function Poster() {
  const [index, setIndex] = useState(0);

  const rightClick = () => {
    if (index === dataPoster.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };
  const leftClick = () => {
    if (index === 0) {
      setIndex(dataPoster.length - 1);
    } else {
      setIndex(index - 1);
    }
  };

  console.log(index);

  return (
    <>
      <div className="flex relative">
        <Button onClick={rightClick} className="absolute inset-y-0 right-0 m-2">
          <AiOutlineRight className="bg-white rounded-full text-3xl hover:transition" />
        </Button>
        <Button onClick={leftClick} className="absolute inset-y-0 left-0 m-2 ">
          <AiOutlineLeft className="bg-white rounded-full text-3xl hover:transition" />
        </Button>
        <img
          className="w-full rounded-xl"
          src={dataPoster[index]}
          alt="data-poster"
        />
      </div>
    </>
  );
}
