import axios from 'axios';

async function getPage(slug: string) {
  const apiUrl = process.env.NEXT_PUBLIC_WP_API_URL;
  if (!apiUrl) return null;
  if (slug === 'about-us' || slug === 'contact-us') return null; // WP se nahi lega
  const res = await axios.get(`${apiUrl}/pages?slug=${slug}&_embed`);
  return res.data[0] || null;
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = await getPage(slug);

  if (slug === 'about-us') {
    return (
      <div className="container mx-auto p-6 max-w-6xl">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">About Us</h1>
        <p className="text-lg text-gray-700 mb-4">
          We are a passionate team dedicated to building amazing web experiences...
        </p>
        {/* More content */}
      </div>
    );
  }

  if (slug === 'contact-us') {
    return (
      <div className="container mx-auto p-6 max-w-6xl">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Contact Us</h1>
        <p className="text-lg text-gray-700 mb-4">Get in touch with us...</p>
        {/* Contact details */}
      </div>
    );
  }

  if (!page) return <p className="text-center">Page not found</p>;

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold mb-4" dangerouslySetInnerHTML={{ __html: page.title.rendered || '' }} />
      <div className="prose" dangerouslySetInnerHTML={{ __html: page.content.rendered || '' }} />
    </div>
  );
}