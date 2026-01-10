import { useState, useRef } from "react";
import useLockNavigation from "../../hooks/useLockNavigation";
import DesktopIcon from "./components/DesktopIcon";
import XPWindow from "./components/XPWindow";
import Taskbar from "./components/Taskbar";

export default function Desktop() {
  useLockNavigation();

  const [windows, setWindows] = useState([]);
  const [startOpen, setStartOpen] = useState(false);
  const zIndex = useRef(1);

  const openWindow = (type) => {
    setWindows((prev) => {
      // check if window already exists
      const existing = prev.find((w) => w.type === type);

      if (existing) {
        // bring existing window to front
        return prev.map((w) =>
          w.id === existing.id
            ? { ...w, minimized: false, z: ++zIndex.current }
            : w
        );
      }

      // else create new window with cascade offset
      const offset = 30;
      const index = prev.length;

      let x = 180 + index * offset;
      let y = 100 + index * offset;

      if (x > window.innerWidth - 400) x = 180;
      if (y > window.innerHeight - 300) y = 100;

      return [
        ...prev,
        {
          id: Date.now(),
          type,
          x,
          y,
          w: 520,
          h: 420,
          minimized: false,
          maximized: false,
          z: ++zIndex.current,
        },
      ];
    });
  };

  const updateWindow = (id, updates) => {
    setWindows((prev) =>
      prev.map((w) => (w.id === id ? { ...w, ...updates } : w))
    );
  };

  const closeWindow = (id) => {
    setWindows((prev) => prev.filter((w) => w.id !== id));
  };

  const bringToFront = (id) => {
    updateWindow(id, { z: ++zIndex.current });
  };

  const handleTaskbarClick = (win) => {
    updateWindow(win.id, {
      minimized: false,
      z: ++zIndex.current,
    });
  };

  return (
    <div
      className="relative w-screen h-screen overflow-hidden font-sans select-none"
      style={{
        backgroundImage: "url('/images/main_background.png')",
        backgroundSize: "cover",
      }}
    >
      {/* DESKTOP ICONS */}
      <div className="absolute top-6 left-6 flex flex-col gap-6 text-white text-sm">
        <DesktopIcon icon="/images/about.webp" label="About Me" onDoubleClick={() => openWindow("About Me")} />
        <DesktopIcon icon="/images/resume.webp" label="My Resume" onDoubleClick={() => openWindow("My Resume")} />
        <DesktopIcon icon="/images/projects.webp" label="My Projects" onDoubleClick={() => openWindow("My Projects")} />
        <DesktopIcon icon="/images/contact.webp" label="Contact Me" onDoubleClick={() => openWindow("Contact Me")} />
      </div>

      {/* WINDOWS */}
      {windows.map(
        (win) =>
          !win.minimized && (
            <XPWindow
              key={win.id}
              win={win}
              bringFront={() => bringToFront(win.id)}
              onClose={() => closeWindow(win.id)}
              onMinimize={() => updateWindow(win.id, { minimized: true })}
              onUpdate={(updates) => updateWindow(win.id, updates)}
            />
          )
      )}

      {/* TASKBAR */}
      <Taskbar
        startOpen={startOpen}
        onToggleStart={() => setStartOpen(!startOpen)}
        windows={windows}
        onWindowClick={handleTaskbarClick}
      />
    </div>
  );
}
