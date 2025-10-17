'use client';

export default function Home() {
  return (
    <div className="container mx-auto p-6 max-w-6xl">
      {/* Hero Section */}
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