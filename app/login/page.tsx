export default function login(){
    return(
        <main className="bg-black text-white min-h-screen flex items-center justify-center">
            <div className="bg-gray-900 p-8 rounded-lg w-full max-w-md shadow-lg">
                <h1 className="text-3xl font-bold text-center text-yellow-500 mb-6">
                    Alpha Black
                </h1>
                
                <h2 className="text-xl text-center mb-6">Entrar na sua conta</h2>

                <form className="space-y-4">
                    <input
                    type="email"
                    placeholder="Email"
                    className="w-full p-3 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:border-yellow-500"
                    />

                    <input
                    type="password"
                    placeholder="Senha"
                    className="w-full p-3 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:border-yellow-500"
                    />
                    <button
                    className="w-full bg-yellow-500 text-black py-3 rounded font-semibold hover:bg-yellow-400"
                >
                    Entrar
                </button>

                </form>

                <p className="text-gray-400 text-sm text-center mt-4">
                    Não tem conta? <span className="text-yellow-500 cursor-pointer">Cadastre-se</span>
                </p>
            </div>


        </main>
    );
}