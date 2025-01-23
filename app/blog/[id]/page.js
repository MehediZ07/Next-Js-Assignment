

export default async function BlogDetails({ params }) {

  const { id } = params;
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );
  const post = await response.json();

  if (!response.ok || !post) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <p className="text-lg text-gray-600">Blog not found.</p>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto my-8 bg-white shadow-md rounded-lg p-6">
      <h1 className="text-3xl font-extrabold text-gray-800 mb-4">
        {post.title}
      </h1>
      <p className="text-gray-600 mb-6">{post.body}</p>
      <div className="flex justify-between items-center">
        <a href="/" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300">
          Go Back
        </a>
    
      </div>
    </div>
  );
}
