import { useEffect } from "react";

export default function useLockNavigation() {
  useEffect(() => {
    // save original values
    const originalOverflow = document.body.style.overflow;
    const originalOverscrollX =
      document.documentElement.style.overscrollBehaviorX;

    // lock scroll + swipe navigation
    document.body.style.overflow = "hidden";
    document.documentElement.style.overscrollBehaviorX = "none";

    return () => {
      // restore everything
      document.body.style.overflow = originalOverflow;
      document.documentElement.style.overscrollBehaviorX =
        originalOverscrollX;
    };
  }, []);
}
