import Navbar from "../organisms/Navbar";
import HeroSection from "../organisms/HeroSection";
import WhyUs from "../organisms/WhyUs";
import Genre from "../organisms/Genre";
import BestSeller from "../organisms/BestSeller";
import PopularGame from "../organisms/PopularGame";
import ComingSoon from "../organisms/ComingSoon";
import UserReview from "../organisms/UserReview";
import Footer from "../organisms/Footer";

export default function page() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <WhyUs />
      <Genre />
      <BestSeller />
      <PopularGame />
      <ComingSoon />
      <UserReview />
      <Footer />
    </div>
  );
}
