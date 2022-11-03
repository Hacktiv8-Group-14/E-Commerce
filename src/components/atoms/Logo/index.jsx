import { Link } from "react-router-dom";
import logo from "../../../Asset/img/Logo.png";

export default function Logo({ className }) {
  return (
    <>
      <Link to="/" className={className}>
        <img src={logo} className="w-44" />
      </Link>
    </>
  );
}
