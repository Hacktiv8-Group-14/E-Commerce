import { useState } from "react";
import Button from "../../../../../components/atoms/Buttons";
import { dataPoster } from "./dataPoster";
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";

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

  return (
    <>
      <div className="flex relative">
        <Button className="absolute inset-y-0 right-0 m-2 cursor-default">
          <IoIosArrowDroprightCircle
            onClick={rightClick}
            className="text-white/50 hover:text-white hover:text-5xl text-4xl cursor-pointer"
          />
        </Button>
        <Button className="absolute inset-y-0 left-0 m-2 cursor-default">
          <IoIosArrowDropleftCircle
            onClick={leftClick}
            className="text-white/50 hover:text-white hover:text-5xl text-4xl cursor-pointer"
          />
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
