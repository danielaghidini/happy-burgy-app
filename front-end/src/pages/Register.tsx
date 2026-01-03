import { useState } from "react";
import { Link } from "react-router";
import Input from "../components/Input";
import Button from "../components/Button";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [cep, setCep] = useState("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log({ name, email, password, confirmPassword, cep });
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
      <div className="flex w-full max-w-[500px] flex-col items-center justify-center pt-5">
        <Input
          type="text"
          placeholder="Nome"
          onChange={(e) => setName(e.target.value)}
        />
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
        <Input
          type="password"
          placeholder="Confirmar Senha"
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <Input
          type="text"
          placeholder="CEP"
          onChange={(e) => setCep(e.target.value)}
        />
        <Button title="Cadastrar" className="w-full" />
        <Link className="link-text mt-2 w-full text-center" to="/login">
          Já tenho uma conta
        </Link>
      </div>
    </form>
  );
};

export default Register;
