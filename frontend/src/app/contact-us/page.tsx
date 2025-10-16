export default function ContactUs() {
  return (
    <div className="container mx-auto p-6 max-w-6xl">
  <h1 className="text-4xl font-bold text-gray-900 mb-6">Contact Us</h1>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    <div className="space-y-4">
      <p className="text-lg text-gray-700">Email: support@madbrainstech.com</p>
      <p className="text-lg text-gray-700">Phone: +91-123-456-7890</p>
      <p className="text-lg text-gray-700">Address: 123 Tech Street, Mumbai, India</p>
    </div>
    <div className="bg-gray-50 p-4 rounded shadow">
      <h2 className="text-xl font-semibold mb-2">Send Us a Message</h2>
      {/* Simple form (placeholder) */}
      <input className="w-full p-2 mb-2 border rounded" placeholder="Your Name" />
      <input className="w-full p-2 mb-2 border rounded" placeholder="Your Email" />
      <textarea className="w-full p-2 border rounded" placeholder="Your Message" rows={4}></textarea>
      <button className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600">Submit</button>
    </div>
  </div>
</div>
  );
}