"use client";

import { useEffect, useState } from "react";

export default function Carrinho() {
  const [carrinho, setCarrinho] = useState<any[]>([]);

  useEffect(() => {
    const dados = JSON.parse(localStorage.getItem("carrinho") || "[]");
    setCarrinho(dados);
  }, []);

  function removerItem(index: number) {
    const novoCarrinho = [...carrinho];
    novoCarrinho.splice(index, 1);

    setCarrinho(novoCarrinho);
    localStorage.setItem("carrinho", JSON.stringify(novoCarrinho));
  }

  const total = carrinho.reduce(
    (acc, item) => acc + (item.preco * item.quantidade),
     0
    );

  return (
    <main className="bg-black text-white min-h-screen p-8">

      <h1 className="text-3xl text-yellow-500 mb-6">
        Seu Carrinho 🛒
      </h1>

      {carrinho.length === 0 ? (
        <p>Carrinho vazio</p>
      ) : (
        <div className="space-y-4">
          {carrinho.map((item, index) => (
            <div
              key={index}
              className="bg-gray-900 p-4 rounded flex justify-between items-center"
            >
              <div>
                <h2>{item.nome}</h2>
                <p>R$ {item.preco} x {item.quantidade}</p>
              </div>

              <button
                onClick={() => removerItem(index)}
                className="bg-red-500 px-4 py-2 rounded"
              >
                Remover
              </button>
            </div>
          ))}
        </div>
      )}

      <h2 className="mt-6 text-xl">
        Total: R$ {total.toFixed(2)}
      </h2>

    </main>
  );
}