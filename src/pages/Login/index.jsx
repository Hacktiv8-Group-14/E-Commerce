import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Buttton from "../../components/atoms/Buttons";
import Input from "../../components/atoms/Input";
import PageContainer from "../../components/container/PageContainer";
import axios from "axios";
import { useDispatch } from "react-redux"
import { setUser, setUserName, setAdmin } from "../../features/loginSlice";
export default function Login() {
  const [userValue, setUserValue] = useState({ name: "", password: "" });

  const dispatch = useDispatch()
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
    dispatch(setAdmin())
    navigate("/admin");
  };

  const isUser = (username, password) => {
    axios
      .post("https://fakestoreapi.com/auth/login", {
        username: username,
        password: password,
      })
      .then((response) => {
        dispatch(setUser(response.data.token))
        dispatch(setUserName(username))
        navigate("/");
      });
  };

  const login = (e) => {
    if (userValue.email === "admin@bukapedia.com" && userValue.password === "admin123") {
      isAdmin();
      e.preventDefault();
    } else {
      isUser(userValue.email, userValue.password);
      e.preventDefault();
    }
  };

  return (
    <>
      <PageContainer>
        <div className="flex justify-center items-center py-12 px-4 sm:px-6 lg:px-8">
          <div className="w-full max-w-md border p-4">
            <div className="text-center">Login</div>
            <form>
              <div>Username</div>
              <Input
                name="username"
                type="text"
                placeholder="input here"
                className="border border-black w-full"
                onChange={handleOnChange}
                value={userValue.username}
              />

              <div>Password</div>
              <Input
                name="password"
                type="password"
                placeholder="input here"
                className="border border-black w-full"
                onChange={handleOnChange}
                value={userValue.password}
              />
              <Buttton
                className="bg-[#242582] w-full text-white p-2 mt-4"
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
