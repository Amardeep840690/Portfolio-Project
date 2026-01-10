import React from 'react';

export default function DesktopIcon({ icon, label, onDoubleClick }) {
  return (
    <div
      onDoubleClick={(e) => {
        e.preventDefault();
        onDoubleClick();
      }}
      className="flex flex-col items-center cursor-pointer hover:bg-white/20 p-1 rounded select-none"
    >
      <img src={icon} className="w-12 h-12 pointer-events-none" draggable={false} alt={label} />
      <span className="drop-shadow pointer-events-none">{label}</span>
    </div>
  );
}
