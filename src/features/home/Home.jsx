import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useLockNavigation from "../../hooks/useLockNavigation";
import client from "../../services/api";

function Home() {
  const navigate = useNavigate();

  useLockNavigation();
  
  useEffect(() => {
    // Increment view count
    client.post('/view').catch(err => console.error('Failed to increment view count:', err));

    const timer = setTimeout(() => {
      navigate("/logoff");
    }, 5000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="relative min-h-screen bg-[#242322] text-white font-serif flex flex-col items-center justify-center px-4">
      
      {/* Logo */}
      <img
        src="/images/window_logo.jpg"
        alt="Window Logo"
        className="w-full max-w-100 mb-5 md:mb-3"
      />

      {/* Name */}
      <h1 className="text-center text-[clamp(1.4rem,6vw,3rem)] mt-0 mb-2 md:mb-1">
        SatyaPrakash
      </h1>

      {/* Role */}
      <p className="text-center text-[clamp(1rem,4vw,1.5rem)] mb-6 md:mb-4">
        full-stack web developer
      </p>

      {/* Loader */}
      <div className="w-full flex justify-center mb-8 md:mb-9">
        <div className="flex w-[80%] max-w-75 h-4 md:h-4.5 gap-0.5 p-0.5 bg-black border-2 border-[#3b6ea6] rounded">
          <span className="loader-block"></span>
          <span className="loader-block delay-100"></span>
          <span className="loader-block delay-200"></span>
          <span className="loader-block delay-300"></span>
          <span className="loader-block delay-400"></span>
        </div>
      </div>

      {/* Portfolio */}
      <h2 className="absolute bottom-4 right-3 text-[clamp(1rem,3vw,1.5rem)] font-sans">
        <i>
          Portfolio<sup>©</sup>
        </i>
      </h2>

      {/* Fullscreen Tip */}
      <h5 className="hidden sm:block absolute bottom-8 left-8 text-[1.05rem]">
        For the best experience
        <br />
        Enter Full Screen (F11)
      </h5>
    </div>
  );
}

export default Home;
