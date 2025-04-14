import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import WhyUs from "./components/WhyUs";
import Genre from "./components/Genre";
import BestSellerSection from "./components/BestSellerSection";
import PopularGameSection from "./components/PopularGameSection";
import UserReviewSection from "./components/UserReviewSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <WhyUs />
      <Genre />
      <BestSellerSection />
      <PopularGameSection />
      <UserReviewSection />
      <Footer />
    </div>
  );
}
