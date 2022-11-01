import { Link } from "react-router-dom";
import "./style.css";

export default function Breadcrumb({ list }) {
  return (
    <section className="py-4">
      <div className="mx-auto">
        <ul className="breadcrumb">
          {list?.map((item) => {
            return (
              <li key={item.url}>
                <Link to={item.url}>{item.name}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
