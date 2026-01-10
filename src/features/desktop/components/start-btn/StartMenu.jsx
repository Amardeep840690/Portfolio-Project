import React from "react";
import { useNavigate } from "react-router-dom";
import { apps } from "../../registry";

export default function StartMenu({ onOpenApp, onClose }) {
  const navigate = useNavigate();

  const handleLogoff = () => {
    navigate("/");
  };

  return (
    <div
      className="absolute bottom-[42px] left-0 w-[360px] h-[420px]
                 bg-[#ece9d8] border border-[#0831d9]
                 shadow-2xl flex z-[9999]"
    >
      {/* LEFT PANEL */}
      <div
        className="w-[120px] bg-gradient-to-b from-[#245edb] to-[#3a6edc]
                      text-white flex items-end p-3 font-bold"
      >
        SatyaPrakash
      </div>

      {/* RIGHT PANEL */}
      <div className="flex-1 p-2 text-sm relative bg-white">
        {apps.map((app) => (
          <button
            key={app.id}
            onClick={() => {
              onOpenApp(app.id);
              onClose();
            }}
            className="flex items-center gap-3 w-full text-left px-2 py-2 hover:bg-[#316ac5] hover:text-white group"
          >
            <img src={app.icon} alt={app.title} className="w-8 h-8" />
            <div className="flex flex-col">
              <span className="font-bold">{app.title}</span>
              <span className="text-gray-500 text-xs group-hover:text-white">
                Start Application
              </span>
            </div>
          </button>
        ))}

        <div className="absolute bottom-0 left-0 w-full p-2 bg-[#ece9d8] border-t border-[#d3d3d3] flex justify-end">
          <button
            onClick={handleLogoff}
            className="flex items-center gap-1 bg-[#e48f22] hover:bg-[#cf801d] text-white px-3 py-1 rounded shadow-sm text-xs font-bold border border-white"
          >
            <span className="bg-white/20 rounded-sm px-1 text-[10px]">key</span>
            Log Off
          </button>
        </div>
      </div>
    </div>
  );
}
