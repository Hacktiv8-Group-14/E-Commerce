import { Link } from "react-router-dom";

export default function Logo({username}) {
  return (
    <>
      <Link to="/">
        <div className="text-2xl sm:text-3xl flex items-center ">
          <span>Bukapedia</span>
          {username && (<span className="ml-2 md:ml-6 text-base md:text-xl">Hello, {username}!</span>)}
        </div>
      </Link>
    </>
  );
}
