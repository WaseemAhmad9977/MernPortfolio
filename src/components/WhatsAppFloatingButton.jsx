import React, { useEffect, useRef } from "react";
import { FaWhatsapp } from "react-icons/fa";

export const WhatsAppFloatingButton = () => {
  const phoneNumber = "917900814581";
  const audioRef = useRef(new Audio("/sound/notification.mp3"));

  useEffect(() => {
    const audio = audioRef.current;
    audio.volume = 1;
    audio.preload = "auto";

    const playSound = () => {
      audio.play().catch(() => {
        // If autoplay is blocked, wait for user interaction
        const interactionListener = () => {
          audio.play();
          // Remove all listeners once sound is played
          document.removeEventListener("click", interactionListener);
          document.removeEventListener("keydown", interactionListener);
          document.removeEventListener("wheel", interactionListener);
          document.removeEventListener("touchstart", interactionListener);
          document.removeEventListener("scroll", interactionListener);
        };

        // Add listeners only once to trigger sound after user interaction
        document.addEventListener("click", interactionListener, { once: true });
        document.addEventListener("keydown", interactionListener, { once: true });
        document.addEventListener("wheel", interactionListener, { once: true });
        document.addEventListener("touchstart", interactionListener, { once: true });
        document.addEventListener("scroll", interactionListener, { once: true });
      });
    };

    setTimeout(playSound, 2000); // Try playing after 2 seconds

    return () => {
      // Cleanup event listeners on unmount
      document.removeEventListener("click", playSound);
      document.removeEventListener("keydown", playSound);
      document.removeEventListener("wheel", playSound);
      document.removeEventListener("touchstart", playSound);
      document.removeEventListener("scroll", playSound);
    };
  }, []);

  const openWhatsApp = () => {
    window.open(`https://wa.me/${phoneNumber}`, "_blank");
  };

  return (
    <div
      className="z-10 fixed bottom-5 right-5 flex items-center justify-center w-16 h-16 bg-green-500 text-white rounded-full shadow-lg cursor-pointer hover:bg-green-600 transition-all animate-bounce"
      onClick={openWhatsApp}
      aria-label="Chat with us on WhatsApp"
    >
      <div className="absolute top-1 right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-white"></div> {/* Red dot */}
      {/* Smooth Pulsing Animation */}
      <FaWhatsapp size={32} className="animate-pulse" />
    </div>
  );
};
