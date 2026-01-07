import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useLockNavigation from "../../hooks/useLockNavigation";

export default function Welcome() {
  const navigate = useNavigate();

  useLockNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/desktop");
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="relative w-screen h-screen bg-blue-800 flex flex-col
      before:content-[''] before:absolute before:inset-0
      before:bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)]
      before:bg-size-[7px_7px]
      before:drop-shadow-[0_0_4px_rgba(255,255,255,0.15)]
      before:z-0
    ">
      {/* Top dark gradient bar */}
      <div className="h-30 bg-linear-to-b from-blue-900 to-blue-800" />

      {/* Thin divider */}
      <div className="h-0.75 bg-[linear-gradient(90deg,transparent,#bad7f8,transparent,transparent)]
" />

      {/* Main content area */}
      <div className="flex-1 bg-blue-500 flex items-center justify-center relative z-10 ">
        <span className="text-white text-5xl italic font-bold tracking-wide text-shadow-lg">
          welcome
        </span>
      </div>

      {/* Bottom orange accent line */}
      <div className="h-0.75 bg-[linear-gradient(90deg,transparent,#f8953d,transparent,transparent)]
" />

      {/* Bottom dark bar */}
      <div className="h-30 bg-linear-to-t from-blue-900 to-blue-800" />
    </div>
  );
}
