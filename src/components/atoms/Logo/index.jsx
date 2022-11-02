import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <>
      <Link to="/">
        <div className="text-2xl sm:text-3xl flex items-center ">
          <span>Bukapedia</span>
        </div>
      </Link>
    </>
  );
}
