export default function AboutUs() {
  return (
    <div className="container mx-auto p-6 max-w-6xl">
  <div className="bg-blue-100 p-8 rounded-lg mb-6">
    <h1 className="text-4xl font-bold text-gray-900 mb-4">About Us</h1>
    <p className="text-lg text-gray-700">
      We are a passionate team dedicated to building amazing web experiences...
    </p>
  </div>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    <div className="bg-gray-50 p-4 rounded shadow">
      <h2 className="text-xl font-semibold">Our Mission</h2>
      <p className="text-gray-600">To innovate with technology...</p>
    </div>
    <div className="bg-gray-50 p-4 rounded shadow">
      <h2 className="text-xl font-semibold">Our Vision</h2>
      <p className="text-gray-600">To lead the digital future...</p>
    </div>
  </div>
</div>
  );
}