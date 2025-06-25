import { useEffect } from "react";

export function Timer() {
  useEffect(() => {
    // --- Setup (runs on mount) ---
    console.log("Phase 1 (Mounting): Timer started!");
    const timerId = setInterval(() => {
      console.log("Tick!");
    }, 1000);

    // --- Cleanup (runs on unmount) ---
    return () => {
      console.log(
        "Phase 3 (Unmounting): Cleaning up the timer!"
      );
      clearInterval(timerId);
    };
  }, []); // <-- Run setup and cleanup only once.

  return <p>I have a ticking timer in the console!</p>;
}
