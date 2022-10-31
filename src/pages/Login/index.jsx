import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useResolvedPath } from "react-router-dom";
import Buttton from "../../components/atoms/Buttons";
import Input from "../../components/atoms/Input";
import PageContainer from "../../components/container/PageContainer";
import { admin, getUser, User } from "../../features/helpers";
export default function Login() {
  const [user, setUser] = useState({ name: "", password: "" });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleOnChange = (e) => {
    const name = e.target.name;
    if (name === "email") {
      setUser({ ...user, email: e.target.value });
    } else if (name === "password") {
      setUser({ ...user, password: e.target.value });
    }
  };

  const userLogin = async (userEmail, userPassword) => {
    try {
      const response = await fetch("https://fakestoreapi.com/auth/login", {
        method: "POST",
        headers: {
          "access-control-allow-origin": "*",
          "Content-type": "application/json; charset=UTF-8",
        },
        body: JSON.stringify({
          email: userEmail,
          password: userPassword,
        }),
      });
      User(response.json.token);
    } catch (err) {
      throw err;
    }
  };

  const login = () => {
    if (user.email === "admin@bukapedia.com" && user.password === "admin123") {
      admin("isAdmin");
      navigate("/admin");
    } else if (userLogin(user.email, user.password)) {
      navigate("/");
    } else {
      alert("login tidak berhasil");
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
                type="email"
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
