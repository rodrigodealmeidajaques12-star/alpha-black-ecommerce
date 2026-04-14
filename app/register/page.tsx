"use client"
import { useState } from "react";

export default function Register() {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [confirmar, setConfirmar] = useState("");
    const [mensagem, setMensagem] = useState("");

    function handleRegister(e: any) {
        e.preventDefault();

            if (!email || !senha || !confirmar ) {
                setMensagem("Preencha todos os campos!");
                return;
            }
            if (senha !== confirmar) {
      setMensagem("As senhas não coincidem!");
      return;
    }
    const users = JSON.parse(localStorage.getItem("users") || "[]");

    users.push({ email, senha });
    localStorage.setItem("user", JSON.stringify(users));
    setMensagem("Conta criada com sucesso!")
  }

  return (
    <main className="bg-black text-white min-h-screen flex items-center justify-center">
      <div className="bg-gray-900 p-8 rounded-lg w-full max-w-md shadow-lg">

        <h1 className="text-3xl font-bold text-center text-yellow-500 mb-6">
          Alpha Black
        </h1>

        <h2 className="text-xl text-center mb-6">Criar conta</h2>

        <form onSubmit={handleRegister} className="space-y-4">

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 rounded bg-gray-800 border border-gray-700"
          />

          <input
            type="password"
            placeholder="Senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            className="w-full p-3 rounded bg-gray-800 border border-gray-700"
          />

          <input
            type="password"
            placeholder="Confirmar senha"
            value={confirmar}
            onChange={(e) => setConfirmar(e.target.value)}
            className="w-full p-3 rounded bg-gray-800 border border-gray-700"
          />

          <button
            type="submit"
            className="w-full bg-yellow-500 text-black py-3 rounded font-semibold"
          >
            Criar conta
          </button>

        </form>

        {mensagem && (
          <p className="text-center mt-4 text-yellow-400">
            {mensagem}
          </p>
        )}

      </div>
    </main>
  );
}


