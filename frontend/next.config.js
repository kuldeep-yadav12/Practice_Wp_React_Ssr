/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXT_PUBLIC_WP_API_URL: 'http://localhost/practice_wp_react_ssr/server/wp-json/wp/v2',
  },
  async rewrites() {
    return [
      {
        source: '/api/wp/:path*',
        destination: 'http://localhost/practice_wp_react_ssr/server/wp-json/wp/:path*',
      },
    ];
  },
};

module.exports = nextConfig;