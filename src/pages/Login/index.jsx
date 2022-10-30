import { useState } from "react";
import Buttton from "../../components/atoms/Buttons";
import Input from "../../components/atoms/Input";
import PageContainer from "../../components/container/PageContainer";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onEmail = (e) => {
    setEmail(e.target.value);
  };

  const onPassword = (e) => {
    setPassword(e.target.value);
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
                type="email"
                placeholder="input here"
                className="border border-black w-full"
                onChange={onEmail}
                value={email}
              />

              <div>Password</div>
              <Input
                type="password"
                placeholder="input here"
                className="border border-black w-full"
                onChange={onPassword}
                value={password}
              />
              <Buttton className="bg-[#242582] w-full text-white p-2 mt-4">
                Login
              </Buttton>
            </form>
          </div>
        </div>
      </PageContainer>
    </>
  );
}
