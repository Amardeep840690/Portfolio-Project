import { useNavigate } from 'react-router-dom';

export default function Projects() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center">
      <h1 className="text-4xl mb-4">Projects</h1>
      <p className="text-xl text-gray-400">Coming Soon...</p>
      <button 
        onClick={() => navigate('/desktop')}
        className="mt-8 px-4 py-2 bg-blue-600 rounded hover:bg-blue-700 transition-colors"
      >
        Back to Desktop
      </button>
    </div>
  );
}
