import React, { useEffect } from "react";
import confetti from "canvas-confetti";

const ConfettiAnimation = () => {
  useEffect(() => {
    const interval = setInterval(() => {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return <div></div>;
};

const ScintillatingText = () => {
  return (
    <div className="text-5xl font-bold text-white text-center animate-pulse absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
      🎉 Super !!! Nous sommes en 2025 🎉
    </div>
  );
};

const CelebrationAnimation = () => {
  return (
    <div className="relative h-screen w-full bg-gradient-to-b from-blue-500 to-purple-700">
      {/* Image de fond */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-50"
        style={{
          backgroundImage:
            "url('https://source.unsplash.com/1920x1080/?celebration,fireworks')",
        }}
      ></div>

      {/* Superposition */}
      <div className="absolute inset-0 bg-black opacity-40"></div>

      {/* Contenu */}
      <div className="relative h-full">
        <ConfettiAnimation />
        <ScintillatingText />
      </div>
    </div>
  );
};

export default CelebrationAnimation;
