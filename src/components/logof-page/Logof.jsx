import React from "react";
import { useNavigate, Link } from "react-router-dom";
import useLockNavigation from "../hooks/useLockNavigation";

function Logof() {
  const navigate = useNavigate();
  const [showPowerBox, setShowPowerBox] = React.useState(false);

  useLockNavigation();

  return (
    <div className="flex flex-col h-screen w-full font-sans overflow-hidden">
      {/* Header */}
      <header className="h-[15vh] max-h-25 bg-[#EFEDCC] border-b-4 border-[#D6D3A6] shadow-sm relative z-10" />

      {/* Main Content */}
      <main
        className="flex-1 bg-[#242322] relative flex items-center justify-center 
       before:content-['']
       before:absolute
       before:inset-0
       before:bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)]
       before:bg-size-[10px_10px]
       before:z-2"
      >
        <div className="flex w-full max-w-5xl items-center justify-center gap-4 md:gap-16 px-4 flex-col md:flex-row font-serif">
          {/* Left Side - System Info */}
          <div className="flex flex-col items-center md:items-end md:pr-20 md:border-r-2 md:border-[#555] py-4 md:py-10">
            {/* Logo */}
            <div className="mb-0">
              {/* Using the window logo from public folder */}
              <img
                src="/images/window_logo.jpg"
                alt="Windows Logo"
                className="w-24 md:w-70 object-contain "
              />
            </div>

            <h1 className="text-white text-3xl md:text-3xl font-bold mb-1 text-center md:text-right">
              SatyaPrakash{" "}
              <span className="text-red-500 text-xl md:text-2xl align-top">
                Xp
              </span>
            </h1>
            <p className="text-gray-400 text-base md:text-lg mb-6 md:mb-3">
              Software-Developer
            </p>
            <p className="text-gray-300 text-lg md:text-xl font-serif hidden md:block">
              To begin, click on Avatar to log in
            </p>
          </div>

          {/* Right Side - Avatar Login */}
          <div className="flex flex-col items-center md:items-start md:pl-6 z-10">
            <Link
              to="/welcome"
              className="group mt-10 md:mt-0 flex items-center gap-4 w-full max-w-65 p-3 rounded-md 
                         bg-linear-to-r from-[#337193] to-transparent 
                         text-white hover:from-[#f8953d] transition"
            >
              {/* Avatar */}
              <img
                src="/images/userlogin.gif"
                alt="Avatar"
                className="h-16.25 w-16.25 rounded border-2 border-white object-cover 
                           group-hover:shadow-[0_0_10px_white]"
              />

              {/* User Info */}
              <div>
                <div className="text-xl font-serif">SatyaPrakash</div>
                <div className="text-[#3774bb] group-hover:text-black transition">
                  Software Developer
                </div>
              </div>
            </Link>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="h-[15vh] max-h-25 bg-[#EFEDCC] border-t-4 border-[#D6D3A6] flex items-center justify-between px-6 sm:px-16">
        <div
          className="flex items-center gap-3 cursor-pointer hover:opacity-80 transition-opacity"
          
        >
          <div className="bg-[#59A35D] p-1 rounded hover:bg-[#6BCF70] transition-colors shadow-sm"  onClick={() => setShowPowerBox(true)}>
            <img
              src="/images/restart.webp"
              alt="Restart"
              className="w-6 h-6 md:w-7 md:h-7 rounded-sm"
            />
          </div>
          <span className="text-[#333] font-semibold text-base md:text-lg" >
            
            Restart SatyaPrakash XP
          </span>
        </div>

        <div className="hidden md:block text-[#555] text-xs md:text-[1rem] max-w-md text-right font-serif leading-tight">
          After you log on, the system's yours to explore.
          <br />
          Every detail has been designed with a purpose.
        </div>
      </footer>
      {/* ================= XP POWER BOX ================= */}
      {showPowerBox && (
        <div className="fixed inset-0 z-100 flex items-center justify-center">
          {/* Overlay */}
          <div
            className="absolute inset-0 bg-black/60"
            onClick={() => setShowPowerBox(false)}
          />

          {/* Dialog */}
          <div className="relative w-87.5 border-2 border-[#0A4DB8] shadow-2xl">
            {/* Title Bar */}
            <div className="flex justify-between items-center px-3 py-2 bg-linear-to-r from-[#0A4DB8] to-[#3A6EA5] text-white font-semibold">
              <span>Turn off SatyaPrakash XP</span>
              <img src="/images/favicon.png" className="w-5" />
            </div>

            {/* Body */}
            <div className="bg-[#5A8FD8] py-8 flex justify-around text-center">
              {/* Restart */}
              <button className="flex flex-col items-center gap-2 active:scale-90 transition" 
              onClick={() => navigate("/")}>
                <img src="/images/restart.webp" className="w-9" />
                <span className="text-white">Restart</span>
              </button>

              {/* Shut Down */}
              <button className="flex flex-col items-center gap-2 ">
                <div className="w-9 h-9 bg-red-600 rounded flex items-center justify-center text-white text-xl">
                  ⏻
                </div>
                <span className="text-white">Shut Down</span>
              </button>
            </div>

            {/* Footer */}
            <div className="bg-[#0A4DB8] px-4 py-2 flex justify-end">
              <button
                onClick={() => setShowPowerBox(false)}
                className="bg-[#E6E6E6] px-3 py-1 rounded border border-gray-400 hover:bg-white text-sm"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
      {/* ================= END ================= */}
    </div>
  );
}

export default Logof;
