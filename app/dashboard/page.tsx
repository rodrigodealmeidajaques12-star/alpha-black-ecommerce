"use client"
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Dashboard(){
    const router = useRouter();
    const [usuario, setUsuario] = useState ("");

    useEffect(() => {
        const logado = localStorage.getItem("logado");
        const user = localStorage.getItem("usuarioLogado");

        if(!logado) {
            router.push("/login");//BLOQUEAR O ACESSO 
        } else {
            setUsuario(user || "");
        }
    }, [])

    function handlelogout(){
        localStorage.removeItem("logado"); // remover login
        router.push("/login"); // volta para o login
    }

    return(
        <main className="bg-black text-white min-h-screen flex flex-col items-center justify-center gap-6">

            <h1 className="text-3x1 text-yellow-500">
                Bem vindo, {usuario}
            </h1>
            <button
            onClick={handlelogout}
            className="bg-red-500 px-6 py-2 rounded font-semibold hover:bg-red-400"
            >
                Sair
            </button>
        </main>
    )
}