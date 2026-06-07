async function getPosts() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
      next: { revalidate: 3600 }, 
    });
    
    if (!res.ok) {
      throw new Error('Nie udało się pobrać postów');
    }
    
    return res.json();
  }
  
  export default async function PostsPage() {
    const posts = await getPosts();
  
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-6">
          <div className="mb-12 text-center">
            <h1 className="text-4xl font-bold mb-4">Lista Postów</h1>
            <p className="text-gray-600 text-lg">
              Pobrane za pomocą <strong>React Server Component</strong>
            </p>
            <p className="text-sm text-gray-500 mt-2">
              Liczba postów: {posts.length}
            </p>
          </div>
  
          <div className="space-y-8">
            {posts.slice(0, 10).map((post: any) => (
              <article 
                key={post.id}
                className="bg-white rounded-2xl shadow p-8 hover:shadow-xl transition"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-blue-100 text-blue-700 text-sm font-medium px-3 py-1 rounded-full">
                    Post #{post.id}
                  </span>
                </div>
                
                <h2 className="text-2xl font-semibold mb-4 leading-tight">
                  {post.title}
                </h2>
                
                <p className="text-gray-600 leading-relaxed">
                  {post.body}
                </p>
                
                <div className="mt-6 pt-6 border-t text-sm text-gray-500">
                  User ID: {post.userId}
                </div>
              </article>
            ))}
          </div>
  
          <div className="text-center mt-12 text-gray-500">
            Pokazano pierwsze 10 postów z 100
          </div>
        </div>
      </div>
    );
  }