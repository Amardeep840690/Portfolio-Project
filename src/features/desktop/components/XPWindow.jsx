import React, { useEffect, useRef } from 'react';

export default function XPWindow({ win, onClose, onMinimize, onUpdate, bringFront, children }) {
  const dragOffset = useRef({ x: 0, y: 0 });
  const resizeStart = useRef({ x: 0, y: 0, w: 0, h: 0 });
  const isDragging = useRef(false);
  const isResizing = useRef(false);
  const prevRect = useRef(null);

  useEffect(() => {
    const onMove = (e) => {
      if (isDragging.current && !win.maximized) {
        onUpdate({
          x: e.clientX - dragOffset.current.x,
          y: e.clientY - dragOffset.current.y,
        });
      }

      if (isResizing.current && !win.maximized) {
        onUpdate({
          w: Math.max(300, resizeStart.current.w + (e.clientX - resizeStart.current.x)),
          h: Math.max(200, resizeStart.current.h + (e.clientY - resizeStart.current.y)),
        });
      }
    };

    const stop = () => {
      isDragging.current = false;
      isResizing.current = false;
      document.body.style.userSelect = "auto";
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", stop);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseup", stop);
    };
  }, [win, onUpdate]);

  const startDrag = (e) => {
    if (win.maximized) return;
    e.preventDefault();
    document.body.style.userSelect = "none";
    isDragging.current = true;
    dragOffset.current = { x: e.clientX - win.x, y: e.clientY - win.y };
    bringFront();
  };

  const startResize = (e) => {
    if (win.maximized) return;
    e.preventDefault();
    document.body.style.userSelect = "none";
    isResizing.current = true;
    resizeStart.current = {
      x: e.clientX,
      y: e.clientY,
      w: win.w,
      h: win.h,
    };
  };

  const toggleMaximize = () => {
    if (!win.maximized) {
      prevRect.current = { x: win.x, y: win.y, w: win.w, h: win.h };
      onUpdate({
        x: 0,
        y: 0,
        w: window.innerWidth,
        h: window.innerHeight - 42,
        maximized: true,
      });
    } else {
      onUpdate({ ...prevRect.current, maximized: false });
    }
  };

  return (
    <div
      onMouseDown={bringFront}
      className="absolute bg-[#ECE9D8] border border-gray-600 shadow-2xl select-none"
      style={{
        left: win.x,
        top: win.y,
        width: win.w,
        height: win.h,
        zIndex: win.z,
      }}
    >
      {/* TITLE BAR */}
      <div
        onMouseDown={startDrag}
        className="h-8 bg-gradient-to-r from-[#245edb] to-[#5a8dee] flex items-center justify-between px-2 text-white cursor-move select-none"
      >
        <span className="pointer-events-none">{win.type}</span>
        <div className="flex gap-1">
          <button onClick={onMinimize} className="w-6 h-6 bg-yellow-400 text-xs select-none">_</button>
          <button onClick={toggleMaximize} className="w-6 h-6 bg-green-500 text-xs select-none">□</button>
          <button onClick={onClose} className="w-6 h-6 bg-red-500 text-xs select-none">✕</button>
        </div>
      </div>

      {/* CONTENT */}
      <div className="p-3 text-sm h-[calc(100%-32px)] overflow-auto select-none">
        {children || (
          <>
            <b>{win.type}</b> window content goes here
          </>
        )}
      </div>

      {/* RESIZE HANDLE */}
      {!win.maximized && (
        <div
          onMouseDown={startResize}
          className="absolute bottom-0 right-0 w-4 h-4 cursor-se-resize select-none"
        />
      )}
    </div>
  );
}
