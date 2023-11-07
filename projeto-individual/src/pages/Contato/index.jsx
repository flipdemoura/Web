import { Link } from "react-router-dom";
import "./style.css";

const Contato = () => {
  return (
    <>
      <h1>Contato</h1>
      <div className="contato">
        <Link
          className="contato"
          to="https://github.com/sh9bba"
          target="_blank"
        >
          GitHub: Felipe de Moura
        </Link>
      </div>
    </>
  );
};

export default Contato;
