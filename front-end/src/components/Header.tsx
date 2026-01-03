import { Link } from "react-router";
import Button from "./Button";

const Header = () => {
  return (
    <div className="mx-auto flex w-full items-center justify-between lg:w-5xl">
      <img src="./logo.png" alt="logo" className="logo" />
      <Link to="/login">
        <Button title="Entrar" />
      </Link>
    </div>
  );
};

export default Header;
