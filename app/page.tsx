export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen">
      
      {/* NAVBAR */}
      <nav className="flex justify-between items-center p-6 border-b border-gray-800">
        <h1 className="text-2xl font-bold text-yellow-500">Alpha Black</h1>
        <div className="space-x-6">
          <a href="#" className="hover:text-yellow-500">Início</a>
          <a href="#" className="hover:text-yellow-500">Produtos</a>
          <a href="#" className="hover:text-yellow-500">Login</a>
        </div>
      </nav>

      {/* HERO */}
      <section className="text-center py-16">
        <h2 className="text-4xl font-bold mb-4">Coleção Exclusiva</h2>
        <p className="text-gray-400">Estilo premium para quem se destaca</p>
      </section>

      {/* PRODUTOS */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 p-8">

        {/* CARD */}
        <div className="bg-gray-900 p-4 rounded-lg">
          <img src="https://via.placeholder.com/300" className="rounded mb-4" />
          <h3 className="text-lg font-semibold">Camiseta Black</h3>
          <p className="text-gray-400">R$ 99,90</p>
          <button className="mt-3 bg-yellow-500 text-black px-4 py-2 rounded hover:bg-yellow-400">
            Comprar
          </button>
        </div>

        <div className="bg-gray-900 p-4 rounded-lg">
          <img src="https://via.placeholder.com/300" className="rounded mb-4" />
          <h3 className="text-lg font-semibold">Moletom Premium</h3>
          <p className="text-gray-400">R$ 199,90</p>
          <button className="mt-3 bg-yellow-500 text-black px-4 py-2 rounded hover:bg-yellow-400">
            Comprar
          </button>
        </div>

        <div className="bg-gray-900 p-4 rounded-lg">
          <img src="https://via.placeholder.com/300" className="rounded mb-4" />
          <h3 className="text-lg font-semibold">Boné Alpha</h3>
          <p className="text-gray-400">R$ 79,90</p>
          <button className="mt-3 bg-yellow-500 text-black px-4 py-2 rounded hover:bg-yellow-400">
            Comprar
          </button>
        </div>

      </section>

    </main>
  );
}