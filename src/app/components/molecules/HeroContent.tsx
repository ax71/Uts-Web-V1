import HeroTitle from "../atoms/HeroTitle";
import HeroParagraph from "../atoms/HeroParagraph";
import Button from "../atoms/Button";

const HeroContent = () => (
  <div className="relative z-20 max-w-xl pl-10">
    <div className="mb-4">
      <HeroTitle />
    </div>
    <div className="mb-6">
      <HeroParagraph />
    </div>
    <Button>Get in now!</Button>
  </div>
);

export default HeroContent;
