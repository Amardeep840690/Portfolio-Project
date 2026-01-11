import { useState } from "react";
import client from "../../../../../services/api"; // path apne project ke hisaab se

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // 👇 YAHAN endpoint diya
      const res = await client.post("/users", formData);
      console.log("Success:", res);

      alert("Message sent successfully!");

      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      console.error(err);
      alert("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-400 px-4">
      <div className="w-full max-w-lg bg-white p-8 rounded-lg shadow-md">

        <h1 className="text-3xl font-semibold text-gray-900 mb-2">
          Contact Us
        </h1>

        <p className="text-gray-600 mb-6">
          Have a question or proposal? Send us a message.
        </p>

        {/* 👇 onSubmit yahin */}
        <form className="space-y-5" onSubmit={handleSubmit}>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Name
            </label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="Your name"
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="you@example.com"
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Message
            </label>
            <textarea
              name="message"
              required
              value={formData.message}
              onChange={handleChange}
              placeholder="Write your message..."
              rows="5"
              className="w-full px-4 py-2 border border-gray-300 rounded-md resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-black text-white py-2 rounded-md font-medium hover:bg-gray-800 transition"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </div>
  );
}
