import Link from 'next/link';
import './globals.css';

export const metadata = {
  title: 'WP SSR with Next.js',
  description: 'Server-side rendered WordPress site with enhanced design',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased bg-gray-50 text-gray-800 min-h-screen flex flex-col">
        {/* Navbar */}
        <nav className="bg-gray-900 p-4 shadow-md">
          <ul className="flex justify-center space-x-6 max-w-6xl mx-auto">
            <li>
              <Link href="/" className="text-white hover:text-gray-300 transition-colors duration-200">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about-us" className="text-white hover:text-gray-300 transition-colors duration-200">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/blog" className="text-white hover:text-gray-300 transition-colors duration-200">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/contact-us" className="text-white hover:text-gray-300 transition-colors duration-200">
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>

        {/* Main Content */}
        <main className="flex-grow container mx-auto p-6 max-w-6xl">
          
          {children}
        </main>

        {/* Footer */}
        <footer className="bg-gray-900 text-white p-4 mt-6">
          <div className="container mx-auto text-center max-w-6xl">
            <p className="text-sm">&copy; 2025 Mad Brains Tech. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}