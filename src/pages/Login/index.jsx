import { useState } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Buttton from "../../components/atoms/Buttons";
import Input from "../../components/atoms/Input";
import PageContainer from "../../components/container/PageContainer";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setUser, setUserName, setAdmin } from "../../features/loginSlice";
export default function Login() {
  const admin = useSelector((state) => state.login.admin);
  const user = useSelector((state) => state.login.user);
  const [userValue, setUserValue] = useState({ name: "", password: "" });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleOnChange = (e) => {
    const name = e.target.name;
    if (name === "username") {
      setUserValue({ ...userValue, email: e.target.value });
    } else if (name === "password") {
      setUserValue({ ...userValue, password: e.target.value });
    }
  };

  const isAdmin = () => {
    dispatch(setAdmin());
    navigate("/Dashboard");
  };

  const isUser = (username, password) => {
    axios
      .post("https://fakestoreapi.com/auth/login", {
        username: username,
        password: password,
      })
      .then((response) => {
        dispatch(setUser(response.data.token));
        dispatch(setUserName(username));
        navigate("/");
      });
  };

  const login = (e) => {
    if (
      userValue.email === "admin@bukapedia.com" &&
      userValue.password === "admin123"
    ) {
      isAdmin();
      e.preventDefault();
    } else {
      isUser(userValue.email, userValue.password);
      e.preventDefault();
    }
  };

  if (admin || user) {
    return <Navigate to="/" />;
  } else {
    return (
      <>
        <PageContainer>
          <div className="flex justify-center items-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-md border rounded-xl p-6 ">
              <div className="text-center">Login</div>
              <form className="py-5">
                <Input
                  name="username"
                  type="text"
                  placeholder="Email / Username"
                  className="block w-full px-3 py-1.5 text-base font-normal   text-gray-700 bg-white  border border-solid border-gray-300 rounded"
                  onChange={handleOnChange}
                  value={userValue.username}
                />

                <Input
                  name="password"
                  type="password"
                  placeholder="Password"
                  className="block w-full px-3 py-1.5 text-base font-normal  mt-4 text-gray-700 bg-white  border border-solid border-gray-300 rounded"
                  onChange={handleOnChange}
                  value={userValue.password}
                />
                <Buttton
                  className="bg-[#242582] w-full text-white p-2 mt-4 rounded"
                  onClick={login}
                >
                  Login
                </Buttton>
              </form>
            </div>
          </div>
        </PageContainer>
      </>
    );
  }
}
