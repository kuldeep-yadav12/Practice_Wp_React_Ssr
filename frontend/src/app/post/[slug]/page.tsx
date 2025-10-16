import axios from 'axios';

async function getPost(slug: string) {
  const res = await axios.get(`${process.env.NEXT_PUBLIC_WP_API_URL}/posts?slug=${slug}&_embed`);
  return res.data[0] || null;
}

export default async function SinglePost({ params }: { params: { slug: string } }) {
  const post = await getPost(params.slug);

  if (!post) return <p className="text-center">Post not found</p>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4" dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
      {post._embedded?.['wp:featuredmedia']?.[0]?.source_url && (
        <img
          src={post._embedded['wp:featuredmedia'][0].source_url}
          alt={post.title.rendered}
          className="w-full h-64 object-cover mb-4"
        />
      )}
      <div className="prose" dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
    </div>
  );
}