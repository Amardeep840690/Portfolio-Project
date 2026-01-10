import { useNavigate } from 'react-router-dom';

export default function Contact() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl mb-6">Contact Me</h1>
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg max-w-md w-full">
        <p className="mb-4">This is a protected route. You can only see this if you are logged in.</p>
        <form className="flex flex-col gap-4">
          <input type="text" placeholder="Name" className="p-2 rounded bg-gray-700 text-white" />
          <input type="email" placeholder="Email" className="p-2 rounded bg-gray-700 text-white" />
          <textarea placeholder="Message" className="p-2 rounded bg-gray-700 text-white h-32"></textarea>
          <button type="submit" className="bg-blue-600 hover:bg-blue-700 p-2 rounded text-white font-bold">Send Message</button>
        </form>
        <button 
          onClick={() => navigate('/desktop')}
          className="mt-4 text-sm text-gray-400 hover:text-white"
        >
          Back to Desktop
        </button>
      </div>
    </div>
  );
}
