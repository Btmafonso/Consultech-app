import React from "react";
import { Link } from "react-router-dom";

const App = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl mb-4">Consultech</h1>
      <nav>
        <ul className="flex gap-4">
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/consulta">Consulta</Link>
          </li>
          <li>
            <Link to="/orcamento">Orçamento</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default App;
