export default function Contact() {
  return (
    <div className="max-w-6xl mx-auto px-4 my-12 text-center">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Contact Us</h1>
      <p className="text-lg text-gray-600 mb-8">
        Have questions or need help? Feel free to reach out to us anytime.
      </p>

      <div className="space-y-3 mb-8">
        <p className="text-gray-700 text-lg">
          📧 Email: <span className="font-medium">feshloofficial@gmail.com</span>
        </p>
        <p className="text-gray-700 text-lg">
          📞 Phone: <span className="font-medium">+92 322 9199459</span>
        </p>
      </div>

      <a
        href="mailto:feshloofficial@gmail.com?subject=Support%20Request&body=Hello%20Team,"
        className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition"
      >
        Send Us a Message
      </a>
    </div>
  );
}
