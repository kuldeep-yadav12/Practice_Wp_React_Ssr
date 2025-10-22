'use client';

import axios from 'axios';
import { useState, useEffect } from 'react';

export default function Gallery() {
  const [galleryContent, setGalleryContent] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null); 

  useEffect(() => {
    (async () => {
      try {
        const apiUrl = process.env.NEXT_PUBLIC_WP_API_URL || 'http://localhost/practice_wp_react_ssr/server/wp-json/wp/v2';
        console.log('API URL:', apiUrl);
        const response = await axios.get(`${apiUrl}/pages?slug=gallery`, {
          timeout: 15000,
          withCredentials: false,
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
          },
        });
        if (response.data.length > 0) {
          setGalleryContent(response.data[0].content.rendered);
        } else {
          setGalleryContent('No gallery content found.');
        }
      } catch (err) {
        const errorMsg = err.response ? err.response.data : err.message;
        console.error('Error fetching gallery:', {
          message: err.message,
          status: err.response?.status,
          data: err.response?.data,
          config: err.config?.url,
        });
        setError(`Failed to load gallery. Check server or try again. Error: ${errorMsg}`);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  if (loading) {
    return <p className="text-gray-600">Loading gallery...</p>;
  }

  if (error) {
    return <p className="text-red-500">{error}</p>;
  }

  return (
    <div className="container mx-auto p-6 max-w-6xl">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">Gallery</h1>
      <div className="prose" dangerouslySetInnerHTML={{ __html: galleryContent || '' }} />
    </div>
  );
}