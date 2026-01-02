import { useState } from "react";
import Input from "../components/Input";
import { Link } from "react-router";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log(email, password);
  }

  return (
    <form
      className="flex h-screen flex-col items-center justify-center px-4"
      onSubmit={handleSubmit}
    >
      <div className="items-center justify-center">
        <img src="./logo.png" alt="" />
      </div>
      <div className="flex w-full max-w-[500px] flex-col items-center justify-center pt-5">
        <Input
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Senha"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="btn-fill mt-2 w-full" type="submit">
          Entrar
        </button>
        <Link className="link-text mt-2 w-full text-center" to="/Register">
          Não tenho uma conta
        </Link>
      </div>
    </form>
  );
};

export default Login;
