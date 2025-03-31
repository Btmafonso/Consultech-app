import React, { useState } from "react";

const Orcamento = () => {
  const [produto, setProduto] = useState("");
  const [quantidade, setQuantidade] = useState(1);

  const handleOrcamento = () => {
    alert(`Orçamento: ${quantidade}x ${produto}`);
  };

  return (
    <div className="p-4">
      <h2>Gerar Orçamento</h2>
      <input
        type="text"
        placeholder="Nome do Produto"
        value={produto}
        onChange={(e) => setProduto(e.target.value)}
        className="border p-2 mb-2"
      />
      <input
        type="number"
        placeholder="Quantidade"
        value={quantidade}
        onChange={(e) => setQuantidade(e.target.value)}
        className="border p-2 mb-2"
      />
      <button onClick={handleOrcamento} className="bg-green-500 text-white p-2">
        Gerar Orçamento
      </button>
    </div>
  );
};

export default Orcamento;
