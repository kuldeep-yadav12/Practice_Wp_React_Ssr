import Link from 'next/link';
import axios from 'axios';

async function getPosts() {
  const apiUrl = process.env.NEXT_PUBLIC_WP_API_URL;
  console.log('Fetching posts from:', `${apiUrl}/posts?_embed`);
  if (!apiUrl) {
    console.error('NEXT_PUBLIC_WP_API_URL is not defined');
    return [];
  }
  try {
    const res = await axios.get(`${apiUrl}/posts?_embed`);
    console.log('Posts Response:', res.data);
    return res.data;
  } catch (error) {
    // console.error('API Error:', error.message);
    return [];
  }
}

export default async function Blog() {
  const posts = await getPosts();

  return (
    <div className="container mx-auto p-4">
      {posts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {posts.map((post) => (
            <div key={post.id} className="border p-4 rounded shadow">
              {post._embedded?.['wp:featuredmedia']?.[0]?.source_url && (
                <img
                  src={post._embedded['wp:featuredmedia'][0].source_url}
                  alt={post.title.rendered}
                  className="w-full h-48 object-cover mb-2"
                />
              )}
              <h2 className="text-xl font-semibold uppercase" dangerouslySetInnerHTML={{ __html: post.title.rendered || '' }} />
              <div className="text-black" dangerouslySetInnerHTML={{ __html: post.excerpt.rendered || '' }} />
              <Link href={`/post/${post.slug}`} className="text-red-500 hover:text-red-900 mt-2 inline-block font-extrabold">
                READ MORE »
              </Link>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center">Not post found</p>
      )}
    </div>
  );
}