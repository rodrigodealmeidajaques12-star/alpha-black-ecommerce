"use client"
import {useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Dashboard(){
    const router = useRouter();

    useEffect(() => {
        const logado = localStorage.getItem("logado");

        if(!logado) {
            router.push("/login");//BLOQUEAR O ACESSO 

        }
    }, [])

    function handlelogout(){
        localStorage.removeItem("logado"); // remover login
        router.push("/login"); // volta para o login
    }

    return(
        <main className="bg-black text-white min-h-screen flex flex-col items-center justify-center gap-6">

            <h1 className="text-3x1 text-yellow-500">
                Bem vindo ao painel
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