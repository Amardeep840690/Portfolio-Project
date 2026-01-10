import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { apps } from "../../registry";

export default function StartMenu({ onOpenApp, onClose }) {
  const navigate = useNavigate();

  // null | "logoff" | "shutdown"
  const [powerMode, setPowerMode] = useState(null);

  const closeAll = () => {
    setPowerMode(null);
    onClose();
  };

  return (
    <>
      {/* ================= START MENU ================= */}
      <div
        className="
          absolute bottom-10 left-0
          w-80 h-105
          sm:w-97.5 sm:h-108.75
          bg-[#ece9d8] border border-[#0831d9]
          shadow-2xl flex font-[Tahoma] text-[13px]
          z-50
        "
      >
        {/* LEFT BLUE USER PANEL */}
        <div
          className="
            w-27.5 sm:w-35
            bg-linear-to-b from-[#245edb] to-[#3a6edc]
            flex flex-col items-center pt-4 text-white font-bold
          "
        >
          <div className="w-16 h-16 rounded overflow-hidden border border-white shadow-md bg-[#dcdcdc]">
            <img
              src="/images/userlogin.gif"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="mt-3 text-[15px] sm:text-[16px]">
            SatyaPrakash
          </div>

          <div
            className="mt-6 sm:mt-20 text-white text-[12px] sm:text-[15px]"
            style={{
              fontFamily: "'Great Vibes', cursive",
              writingMode: "vertical-rl",
              textOrientation: "mixed",
              transform: "rotate(300deg)"
            }}
          >
            <img src="images/typeSignature.png" alt="signature" className="h-25" />
          </div>
        </div>

        {/* RIGHT PANEL */}
        <div className="flex-1 bg-[#fdfdfd] relative">
          <div className="p-2 space-y-1 overflow-y-auto h-[calc(100%-45px)]">
            {apps.map((app) => (
              <button
                key={app.id}
                onClick={() => {
                  onOpenApp(app.id);
                  onClose();
                }}
                className="
                  flex items-center gap-3 w-full px-2 py-2
                  hover:bg-[#316ac5] hover:text-white
                  rounded-sm group
                "
              >
                <img src={app.icon} alt={app.title} className="w-8 h-8" />
                <div className="text-left">
                  <div className="font-bold leading-tight">
                    {app.title}
                  </div>
                  <div className="text-[11px] text-gray-500 group-hover:text-white">
                    Start Application
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* BOTTOM BAR */}
          <div
            className="
              absolute bottom-0 left-0 w-full h-11.25
              bg-[#ece9d8] border-t border-[#cfcfcf]
              flex items-center justify-end px-3 gap-2
            "
          >
            {/* LOG OFF */}
            <button
              onClick={() => setPowerMode("logoff")}
              className="
                flex items-center gap-2 bg-[#e48f22]
                hover:bg-[#cf801d] text-white text-xs font-bold
                px-3 py-1 rounded shadow border border-white
              "
            >
              <span className="bg-white/20 px-1 rounded text-[10px]">🔑</span>
              Log Off
            </button>

            {/* SHUT DOWN */}
            <button
              onClick={() => setPowerMode("shutdown")}
              className="
                flex items-center gap-2 bg-[#d9534f]
                hover:bg-[#c64541] text-white text-xs font-bold
                px-3 py-1 rounded shadow border border-white
              "
            >
              ⏻ Shut Down
            </button>
          </div>
        </div>
      </div>

      {/* ================= XP POWER BOX ================= */}
      {powerMode && (
        <div className="fixed inset-0 z-100 flex items-center justify-center">
          {/* Overlay */}
          <div
            className="absolute inset-0 bg-black/60"
            onClick={() => setPowerMode(null)}
          />

          {/* Dialog */}
          <div className="relative w-87.5 border-2 border-[#0A4DB8] shadow-2xl">

            {/* Title Bar */}
            <div className="flex justify-between items-center px-3 py-2 bg-linear-to-r from-[#0A4DB8] to-[#3A6EA5] text-white font-semibold">
              <span>
                {powerMode === "logoff"
                  ? "Log off SatyaPrakash XP"
                  : "Turn off SatyaPrakash XP"}
              </span>
              <img src="/images/favicon.png" className="w-5" />
            </div>

            {/* Body */}
            <div className="bg-[#5A8FD8] py-8 flex justify-around text-center">

              {/* Restart */}
              <button
                className="flex flex-col items-center gap-2 active:scale-90 transition"
                onClick={() => {
                  closeAll();
                  navigate("/");
                }}
              >
                <img src="/images/restart.webp" className="w-9" alt="Restart" />
                <span className="text-white">Restart</span>
              </button>

              {/* Logoff or Shutdown */}
              {powerMode === "logoff" ? (
                <button
                  className="flex flex-col items-center gap-2"
                  onClick={() => {
                    closeAll();
                    navigate("/logoff");
                  }}
                >
                  <img src="/images/logoff.webp" className="w-9 h-9" alt="Log Off" />
                  <span className="text-white">Log Off</span>
                </button>
              ) : (
                <button
                  className="flex flex-col items-center gap-2"
                  onClick={() => {
                    closeAll();
                    // navigate("/shutdown");
                  }}
                >
                  <div className="w-9 h-9 bg-red-600 rounded flex items-center justify-center text-white text-xl">
                    ⏻
                  </div>
                  <span className="text-white">Shut Down</span>
                </button>
              )}
            </div>

            {/* Footer */}
            <div className="bg-[#0A4DB8] px-4 py-2 flex justify-end">
              <button
                onClick={() => setPowerMode(null)}
                className="bg-[#E6E6E6] px-3 py-1 rounded border border-gray-400 hover:bg-white text-sm"
              >
                Cancel
              </button>
            </div>

          </div>
        </div>
      )}
      {/* ================= END ================= */}
    </>
  );
}
