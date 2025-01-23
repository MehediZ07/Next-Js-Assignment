export default async function Home() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await response.json();

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-extrabold text-gray-900 mb-6 text-center">
          Latest Blog Posts
        </h1>

        {/* Blog Post List */}
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.slice(0, 10).map((post) => (
            <li
              key={post.id}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition duration-300"
            >
              <a
                href={`/blog/${post.id}`}
                className="text-xl font-semibold text-blue-600 hover:underline"
              >
                {post.title}
              </a>
              <p className="text-gray-600 mt-2 line-clamp-3">{post.body.substring(0,60)}...</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
