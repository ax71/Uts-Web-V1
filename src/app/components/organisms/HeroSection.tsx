import Image from "next/image";
import HeroContent from "../molecules/HeroContent";

const HeroSection = () => {
  return (
    <section className="pt-24 relative w-full h-screen flex items-center justify-start bg-black text-white">
      <Image
        src="/images/hero-image.png"
        alt="MultiVersus Background"
        layout="fill"
        objectFit="cover"
        className="opacity-80"
        priority
      />
      <HeroContent />
    </section>
  );
};

export default HeroSection;
