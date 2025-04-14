import React from "react";
import Image from "next/image";

const HeroSection: React.FC = () => {
  return (
    <section className="relative w-full h-screen flex items-center justify-start bg-black text-white overflow-hidden">
      <Image
        src="/images/hero-image.png"
        alt="MultiVersus Background"
        layout="fill"
        objectFit="cover"
        className="opacity-80"
        priority
      />

      <div className="relative z-20 max-w-xl pl-10 space-y-4">
        <h1 className="text-5xl md:text-6xl font-bold">MultiVersus</h1>
        <p className="text-lg md:text-xl">
          Now officially free to play for all Xbox users.
        </p>
        <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-3 rounded-lg transition">
          Get in now!
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
