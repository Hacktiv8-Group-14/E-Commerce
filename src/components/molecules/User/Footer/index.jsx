import { Link } from "react-router-dom";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillTwitterCircle,
} from "react-icons/ai";
import Logo from "../../../atoms/Logo";

export default function Footer() {
  return (
    <footer className="p-4 border-t bg-white  dark:bg-gray-900">
      <div className="flex flex-wrap sm:justify-between sm:px-24 flex-col sm:flex-row ">
        <div className="w-44 pb-8">
          <img src={Logo} alt="logo" />
        </div>
        <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              Bukapedia
            </h2>
            <ul className="text-gray-600 dark:text-gray-400">
              <li className="mb-4">About Bukapedia</li>
              <li className="mb-4">Intellectual Property</li>
              <li className="mb-4">Blog</li>
            </ul>
          </div>

          <div className="lg:ml-6">
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              Categories
            </h2>
            <ul className="text-gray-600 dark:text-gray-400">
              <li className="mb-4">
                <Link to="/">All Category</Link>
              </li>
              <li className="mb-4">
                <Link to="/">Electronics</Link>
              </li>
              <li className="mb-4">
                <Link to="/">Jewelery</Link>
              </li>
              <li className="mb-4">
                <Link to="/">Men's Clothing</Link>
              </li>
              <li className="mb-4">
                <Link to="/">Women's Clothing</Link>
              </li>
            </ul>
          </div>

          <div className="lg:ml-6">
            <h2 className="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white">
              Help
            </h2>
            <ul className="text-gray-600 dark:text-gray-400">
              <li className="mb-4">Bukapedia Care</li>
              <li className="mb-4">Terms and Conditions</li>
              <li className="mb-4">Partner</li>
            </ul>
          </div>
        </div>
      </div>
      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-7" />
      <div className="sm:flex sm:items-center sm:justify-between">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2022 Bukapedia Final Project II - Group 14.
        </span>
        <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
          <Link to="/">
            <AiFillInstagram
              size={20}
              className="text-gray-500 hover:text-orange"
            />
          </Link>
          <Link to="/">
            <AiFillGithub
              size={20}
              className="text-gray-500 hover:text-orange"
            />
          </Link>
          <Link to="/">
            <AiFillTwitterCircle
              size={20}
              className="text-gray-500 hover:text-orange"
            />
          </Link>
        </div>
      </div>
    </footer>
  );
}
