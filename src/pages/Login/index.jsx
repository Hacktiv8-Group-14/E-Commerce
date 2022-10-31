import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Buttton from "../../components/atoms/Buttons";
import Input from "../../components/atoms/Input";
import PageContainer from "../../components/container/PageContainer";
import { admin, User } from "../../features/helpers";
import axios from "axios";
export default function Login() {
  const [user, setUser] = useState({ name: "", password: "" });
  const navigate = useNavigate();

  const handleOnChange = (e) => {
    const name = e.target.name;
    if (name === "email") {
      setUser({ ...user, email: e.target.value });
    } else if (name === "password") {
      setUser({ ...user, password: e.target.value });
    }
  };

  const isAdmin = () => {
    admin("isAdmin");
    navigate("/admin");
  };

  const isUser = (username, password) => {
    axios
      .post("https://fakestoreapi.com/auth/login", {
        username: username,
        password: password,
      })
      .then((response) => {
        User(response.data.token);
        navigate("/");
      });
  };

  const login = (e) => {
    if (user.email === "admin@bukapedia.com" && user.password === "admin123") {
      isAdmin();
      e.preventDefault();
    } else {
      isUser(user.email, user.password);
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
              <div>Email</div>
              <Input
                name="email"
                type="text"
                placeholder="input here"
                className="border border-black w-full"
                onChange={handleOnChange}
                value={user.email}
              />

              <div>Password</div>
              <Input
                name="password"
                type="password"
                placeholder="input here"
                className="border border-black w-full"
                onChange={handleOnChange}
                value={user.password}
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
