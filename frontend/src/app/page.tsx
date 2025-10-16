'use client';

import axios from 'axios';
import { Suspense, useState, useEffect } from 'react';

// Define Post interface (optional but recommended for TypeScript)
interface Post {
  id: number;
  slug: string;
  title: { rendered: string };
  excerpt: { rendered: string };
  _embedded?: {
    'wp:featuredmedia'?: Array<{ source_url: string }>;
  };
}

function FeaturedPosts() {
  const [featuredPosts, setFeaturedPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const apiUrl = process.env.NEXT_PUBLIC_WP_API_URL;
        if (!apiUrl) {
          setLoading(false);
          return;
        }
        const res = await axios.get(`${apiUrl}/posts?_embed&per_page=3`);
        setFeaturedPosts(res.data);
      } catch (error) {
        // console.error('Error fetching featured posts:', error.message);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  if (loading) {
    return <p className="text-gray-600">Loading featured posts...</p>;
  }

  return (
    <div className="mb-6">
      <h2 className="text-3xl font-bold text-gray-900 mb-4 animate-fade-in">Featured Posts</h2>
      {featuredPosts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredPosts.map((post) => (
            <div key={post.id} className="bg-gray-50 p-4 rounded-lg shadow hover:shadow-lg transition duration-200">
              {post._embedded?.['wp:featuredmedia']?.[0]?.source_url && (
                <img
                  src={post._embedded['wp:featuredmedia'][0].source_url}
                  alt={post.title.rendered}
                  className="w-full h-48 object-cover rounded-t-lg mb-2"
                />
              )}
              <h3 className="text-xl font-semibold text-gray-900 mb-2" dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
              <p className="text-gray-700 line-clamp-3" dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />
              <a href={`/post/${post.slug}`} className="text-blue-500 hover:text-blue-700 mt-2 inline-block">
                Read More
              </a>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-600">No featured posts available.</p>
      )}
    </div>
  );
}

export default function Home() {
  return (
    <div className="container mx-auto p-6 max-w-6xl">
      {/* Hero Section with Animation */}
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-8 rounded-lg mb-6 shadow-lg relative overflow-hidden">
        <div className="relative z-10">
          <h1 className="text-5xl font-extrabold mb-4 animate-fade-in-down">
            Welcome to Mad Brains Tech
          </h1>
          <p className="text-xl mb-6 animate-fade-in-up">
            Discover innovative web solutions with Next.js and WordPress integration.
          </p>
          <button className="bg-white text-blue-600 px-6 py-3 rounded-full hover:bg-gray-100 transition duration-200 animate-fade-in">
            Learn More
          </button>
        </div>
      </div>

      {/* Featured Posts Section with Suspense */}
      <Suspense fallback={<p className="text-gray-600">Loading featured posts...</p>}>
        <FeaturedPosts />
      </Suspense>

      {/* About Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="bg-gray-50 p-6 rounded-lg shadow">
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">Who We Are</h2>
          <p className="text-gray-700">
            We are a team of developers passionate about creating fast and scalable websites using the latest technologies.
          </p>
        </div>
        <div className="bg-gray-50 p-6 rounded-lg shadow">
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">Our Mission</h2>
          <p className="text-gray-700">
            To deliver top-notch digital experiences that empower businesses and individuals.
          </p>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center bg-gray-100 p-6 rounded-lg shadow">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Get Started?</h2>
        <p className="text-gray-700 mb-4">
          Contact us today to build your next project with us!
        </p>
        <a href="/contact-us" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition duration-200">
          Contact Us
        </a>
      </div>
    </div>
  );
}