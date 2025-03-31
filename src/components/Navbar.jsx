import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => (
  <nav className="bg-blue-500 p-4 text-white">
    <Link to="/home" className="mr-4">
      Home
    </Link>
    <Link to="/orcamento" className="mr-4">
      Orçamento
    </Link>
    <Link to="/" className="mr-4">
      Sair
    </Link>
  </nav>
);

export default Navbar;
