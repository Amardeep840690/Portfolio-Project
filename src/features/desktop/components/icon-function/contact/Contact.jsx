export default function Contact() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-400 px-4">
      <div className="w-full max-w-lg bg-white p-8 rounded-lg shadow-md">
        
        <h1 className="text-3xl font-semibold text-gray-900 mb-2">
          Contact Us
        </h1>
        
        <p className="text-gray-600 mb-6">
          Have a question or proposal? Send us a message.
        </p>

        <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Name
            </label>
            <input
              type="text"
              required
              placeholder="Your name"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              required
              placeholder="you@example.com"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Message
            </label>
            <textarea
              required
              placeholder="Write your message..."
              rows="5"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black resize-none"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-black text-white py-2 rounded-md font-medium hover:bg-gray-800 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
