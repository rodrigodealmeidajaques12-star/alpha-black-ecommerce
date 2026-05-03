"use client";

import { useEffect, useState } from "react";

export default function Pedidos() {
  const [pedidos, setPedidos] = useState<any[]>([]);

  useEffect(() => {
    const dados = JSON.parse(localStorage.getItem("pedidos") || "[]");
    setPedidos(dados);
  }, []);

  return (
    <main className="bg-black text-white min-h-screen p-8">
      <h1 className="text-3xl text-yellow-500 mb-6">
        Meus Pedidos 📦
      </h1>

      {pedidos.length === 0 ? (
        <p>Você ainda não fez nenhum pedido</p>
      ) : (
        <div className="space-y-6">
          {pedidos.map((pedido, index) => (
            <div key={index} className="bg-gray-900 p-4 rounded">

              <p className="text-gray-400">
                Data: {new Date(pedido.data).toLocaleString()}
              </p>

              <p className="text-yellow-500 font-bold">
                Total: R$ {pedido.total.toFixed(2)}
              </p>

              <div className="mt-3">
                {pedido.itens.map((item: any, i: number) => (
                  <div key={i} className="flex justify-between text-sm">
                    <span>{item.nome}</span>
                    <span>
                      {item.quantidade}x - R$ {item.preco}
                    </span>
                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>
      )}
    </main>
  );
}