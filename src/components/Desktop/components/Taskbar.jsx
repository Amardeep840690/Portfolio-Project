import React from 'react';

export default function Taskbar({ startOpen, onToggleStart, windows, onWindowClick }) {
  return (
    <div className="absolute bottom-0 left-0 w-full h-[42px] bg-gradient-to-t from-[#245edb] to-[#3a6edc] flex items-center px-2 select-none">
      <button
        onClick={onToggleStart}
        className="flex items-center gap-2 bg-gradient-to-r from-[#3aa655] to-[#1f7a36] text-white font-bold px-4 py-1 rounded-r-full shadow-inner select-none"
      >
        <img src="/images/favicon.png" className="w-5 pointer-events-none" draggable={false} alt="start" />
        start
      </button>

      <div className="flex gap-2 ml-3">
        {windows.map((win) => (
          <button
            key={win.id}
            onClick={() => onWindowClick(win)}
            className="bg-[#3b6fc4] text-white px-3 py-1 text-xs rounded select-none"
          >
            {win.type}
          </button>
        ))}
      </div>

      <div className="ml-auto text-white text-xs px-3 select-none">11:43 PM</div>
    </div>
  );
}
