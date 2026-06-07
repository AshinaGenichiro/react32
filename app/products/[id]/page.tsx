async function getProduct(id: string) {
    try {
      const res = await fetch(`https://fakestoreapi.com/products/${id}`, {
        next: { revalidate: 3600 },
      });
  
      if (!res.ok) {
        throw new Error(`Produkt o ID ${id} nie istnieje (status: ${res.status})`);
      }
  
      return res.json();
    } catch (error) {
      console.error(error);
      throw new Error('Nie udało się pobrać produktu. Spróbuj inny ID.');
    }
  }
  
  export default async function ProductPage({ params }: { params: { id: string } }) {
    let product;
    
    try {
      product = await getProduct(params.id);
    } catch (error: any) {
      return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center">
          <div className="text-center max-w-md mx-auto px-6">
            <h1 className="text-6xl mb-6">😕</h1>
            <h2 className="text-3xl font-bold mb-4">Błąd</h2>
            <p className="text-xl text-red-600 mb-8">{error.message}</p>
            <a
              href="/"
              className="inline-block bg-blue-600 text-white px-8 py-4 rounded-xl font-medium hover:bg-blue-700"
            >
              ← Wróć na stronę główną
            </a>
          </div>
        </div>
      );
    }
  
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-5xl mx-auto px-6">
          <a
            href="/"
            className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8 font-medium"
          >
            ← Powrót do strony głównej
          </a>
  
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="grid md:grid-cols-2 gap-10">
              <div className="bg-gray-100 p-12 flex items-center justify-center border-r">
                <img
                  src={product.image}
                  alt={product.title}
                  className="max-h-[460px] object-contain"
                />
              </div>
  
              <div className="p-12 flex flex-col">
                <div className="uppercase text-xs tracking-widest text-gray-500 mb-2">
                  {product.category}
                </div>
  
                <h1 className="text-3xl font-bold leading-tight mb-6">
                  {product.title}
                </h1>
  
                <div className="text-5xl font-bold text-green-600 mb-8">
                  ${product.price}
                </div>
  
                <div className="prose text-gray-600 leading-relaxed mb-10">
                  {product.description}
                </div>
  
                <div className="mt-auto pt-8 border-t flex items-center justify-between">
                  <div>
                    <div className="text-sm text-gray-500">Ocena</div>
                    <div className="text-2xl font-semibold">
                      {product.rating.rate} ★ ({product.rating.count})
                    </div>
                  </div>
                  <div className="bg-green-100 text-green-700 px-6 py-3 rounded-2xl text-sm font-medium">
                    ✓ Dostępny
                  </div>
                </div>
              </div>
            </div>
          </div>
  
          <div className="text-center mt-8 text-sm text-gray-500">
            Produkt ID: {params.id} • Server Component
          </div>
        </div>
      </div>
    );
  }