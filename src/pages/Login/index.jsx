import { useState } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Buttton from "../../components/atoms/Buttons";
import Input from "../../components/atoms/Input";
import PageContainer from "../../components/container/PageContainer";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setUser, setUserName, setAdmin } from "../../features/loginSlice";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { useEffect } from "react";
export default function Login() {
  const admin = useSelector((state) => state.login.admin);
  const user = useSelector((state) => state.login.user);

  const [userValue, setUserValue] = useState({ username: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [typePassword, setTypePassword] = useState("password");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const showPW = () => {
    if (typePassword === "password") {
      setTypePassword("text");
    } else {
      setTypePassword("password");
    }
  };

  const handleOnChange = (e) => {
    const name = e.target.name;
    if (name === "username") {
      setUserValue({ ...userValue, username: e.target.value });
    } else if (name === "password") {
      setUserValue({ ...userValue, password: e.target.value });
    }
  };

  useEffect(() => {
    console.log(userValue);
  }, [userValue]);

  const isAdmin = () => {
    setTimeout(() => {
      dispatch(setAdmin());
      navigate("/Dashboard");
      setLoading(false);
    }, 500);
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
        setLoading(false);
        setErrorMessage("");
      })
      .catch((e) => {
        setLoading(false);
        setErrorMessage(e.response.data);
      });
  };

  const login = (e) => {
    setErrorMessage("");
    setLoading(true);
    if (
      userValue.username === "admin@bukapedia.com" &&
      userValue.password === "admin123"
    ) {
      isAdmin();
      e.preventDefault();
    } else {
      isUser(userValue.username, userValue.password);
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
              <div className="text-center text-2xl font-medium">
                Login with Bukapedia Account
              </div>
              <form className="py-5">
                <div className=" text-red-500 ml-1 mb-2 text-sm font-medium">
                  {errorMessage}
                </div>
                <Input
                  name="username"
                  type="text"
                  placeholder="Username"
                  className="block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white  border border-solid border-gray-300 rounded"
                  onChange={handleOnChange}
                  value={userValue.username}
                />

                <div className="relative">
                  <Input
                    name="password"
                    type={typePassword}
                    placeholder="Password"
                    className="block w-full px-3 py-1.5 text-base font-normal  mt-4 text-gray-700 bg-white  border border-solid border-gray-300 rounded"
                    onChange={handleOnChange}
                    value={userValue.password}
                  />

                  {userValue.password === "" ? (
                    <></>
                  ) : (
                    <div className="absolute top-3 right-5 cursor-pointer">
                      {typePassword === "password" ? (
                        <AiOutlineEyeInvisible onClick={showPW} />
                      ) : (
                        <AiOutlineEye onClick={showPW} />
                      )}
                    </div>
                  )}
                </div>
                <Buttton
                  className="bg-bluedark disabled:bg-bluedark/50 w-full text-white p-2 mt-4 rounded"
                  onClick={login}
                  disabled={
                    loading || !userValue.username || !userValue.password
                  }
                >
                  {loading ? "Logging in..." : "Login"}
                </Buttton>
              </form>
            </div>
          </div>
        </PageContainer>
      </>
    );
  }
}
