import { useState } from "react";
import { Link } from "react-router";
import Button from "../components/Button";
import Input from "../components/Input";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");

    try {
      if (!email || !password) {
        setError("Usuário e senha são obrigatórios");
        return;
      }
      const response = await fetch("http://localhost:3000/login", {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({ email, password }),
      });

      if (response.status === 200) {
        const data = await response.json();
        console.log(data);
        return;
      }

      if (response.status === 400) {
        setError("Usuário e senha são obrigatórios");
      } else if (response.status === 404) {
        setError("Usuário ou senha inválidos");
      } else if (response.status === 500) {
        setError("Erro interno do servidor");
      } else {
        setError("Ocorreu um erro inesperado");
      }
    } catch (error) {
      console.error("Login Error:", error);
      setError("Erro ao conectar com o servidor");
    }
  }

  return (
    <form
      className="flex h-screen flex-col items-center justify-center px-4"
      onSubmit={handleSubmit}
    >
      <div className="items-center justify-center">
        <Link to="/">
          <img src="./logo.png" alt="" />
        </Link>
      </div>
      <div className="flex w-full max-w-[500px] flex-col justify-center pt-5">
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
        {error && <p className="text-left text-sm text-red-500">{error}</p>}
        <Button title="Entrar" className="w-full" type="submit" />
        <Link className="link-text mt-2 w-full text-center" to="/register">
          Não tenho uma conta
        </Link>
      </div>
    </form>
  );
};

export default Login;
