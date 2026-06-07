export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-5xl font-bold text-center mb-4">React Server Components</h1>
        <p className="text-xl text-center text-gray-600 mb-12">
          Dział 32 — Nauka Server Components
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <a href="/posts" 
             className="block p-8 bg-white rounded-2xl shadow hover:shadow-xl transition text-center">
            <h2 className="text-2xl font-semibold mb-3">→ Lista Postów</h2>
            <p className="text-gray-600">Server Component + JSONPlaceholder</p>
          </a>

          <a href="/products/1" 
             className="block p-8 bg-white rounded-2xl shadow hover:shadow-xl transition text-center">
            <h2 className="text-2xl font-semibold mb-3">→ Przykładowy Produkt</h2>
            <p className="text-gray-600">Dynamiczna strona produktu (ID: 1)</p>
          </a>
        </div>

        <div className="text-center mt-10">
          <p className="text-gray-600">Testuj inne produkty:</p>
          <div className="flex justify-center gap-4 mt-4">
            {[1, 3, 5, 7, 10, 15].map(id => (
              <a key={id} href={`/products/${id}`} className="text-blue-600 hover:underline">
                Produkt {id}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}